const express = require('express');
const cors = require('cors');
const path = require('path');
const sql = require('mssql');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// State management for database connection
let dbPool = null;
let activeConnectionConfig = null;

// Helper to close pool
async function closePool() {
    if (dbPool) {
        try {
            await dbPool.close();
        } catch (err) {
            console.error('Error closing database pool:', err);
        }
        dbPool = null;
    }
}

// 1. API: Connect and test
app.post('/api/connect', async (req, res) => {
    const { server, port, database, user, password, domain, authType } = req.body;
    
    if (!server || !database) {
        return res.status(400).json({ success: false, message: 'Servidor e Banco de Dados são obrigatórios.' });
    }

    try {
        await closePool();

        // Setup SQL Server Config
        const config = {
            server,
            port: parseInt(port) || 1433,
            database,
            options: {
                encrypt: false,
                trustServerCertificate: true,
                enableArithAbort: true
            },
            connectionTimeout: 15000,
            requestTimeout: 30000
        };

        if (authType === 'windows') {
            // Windows Domain Authentication (SQL Server Authentication with Domain)
            if (domain) config.domain = domain;
            config.user = user;
            config.password = password;
        } else {
            // Standard SQL Server Authentication
            config.user = user;
            config.password = password;
        }

        console.log(`Connecting to SQL Server: ${server}:${port || 1433}, Database: ${database}...`);
        
        dbPool = new sql.ConnectionPool(config);
        await dbPool.connect();
        
        activeConnectionConfig = { server, port, database, user, authType };
        console.log('Successfully connected to database!');
        
        res.json({ 
            success: true, 
            message: 'Conectado com sucesso ao SQL Server!',
            connection: activeConnectionConfig 
        });
    } catch (err) {
        console.error('Database connection failed:', err.message);
        await closePool();
        res.status(500).json({ 
            success: false, 
            message: `Falha na conexão: ${err.message}` 
        });
    }
});

// 2. API: Execute generated query
app.post('/api/execute', async (req, res) => {
    if (!dbPool) {
        return res.status(401).json({ success: false, message: 'Nenhuma conexão ativa com o banco de dados.' });
    }

    const { query } = req.body;
    if (!query) {
        return res.status(400).json({ success: false, message: 'Nenhuma consulta SQL fornecida.' });
    }

    try {
        // Enforce safety limits — limit to TOP 200 rows to protect memory and performance.
        let safeQuery = query.trim();
        
        // Strip trailing semicolons before wrapping
        if (safeQuery.endsWith(';')) {
            safeQuery = safeQuery.slice(0, -1);
        }

        // Determine wrapping strategy:
        // - CTEs (WITH ...) cannot be placed inside a subquery directly because
        //   ORDER BY inside a subquery without TOP is invalid in SQL Server.
        //   For CTEs we append an outer SELECT TOP 200 after the CTE body.
        // - Plain SELECT queries are wrapped normally.
        let wrappedQuery;
        const upperQuery = safeQuery.replace(/\/\*[\s\S]*?\*\//g, '').replace(/--[^\n]*/g, '').trimStart().toUpperCase();

        if (upperQuery.startsWith('WITH ') || upperQuery.startsWith('WITH\n') || upperQuery.startsWith('WITH\r')) {
            // CTE query: inject TOP into the final SELECT or wrap as an outer CTE reference
            // Strategy: wrap the entire CTE in another CTE alias, then SELECT TOP 200 from it.
            // SQL Server allows: WITH original AS (...), __limit AS (SELECT * FROM last_cte)
            // Simpler: just replace the final SELECT * FROM <cte_name> with SELECT TOP 200 * FROM <cte_name>
            // Most reliable: wrap the whole thing as a named CTE
            wrappedQuery = `
                WITH __user_cte AS (
                    ${safeQuery}
                )
                SELECT TOP 200 * FROM __user_cte
            `;
        } else {
            // Plain SELECT: safe to wrap in a subquery
            wrappedQuery = `
                SELECT TOP 200 * FROM (
                    ${safeQuery}
                ) AS UserQuery
            `;
        }

        console.log('Executing safe user query...');
        const result = await dbPool.request().query(wrappedQuery);
        
        res.json({
            success: true,
            rowsCount: result.recordset.length,
            columns: result.recordset.length > 0 ? Object.keys(result.recordset[0]) : [],
            data: result.recordset
        });
    } catch (err) {
        console.error('Query execution failed:', err.message);
        res.status(500).json({ 
            success: false, 
            message: `Erro na execução da consulta: ${err.message}` 
        });
    }
});

// 3. API: Fetch Database Catalog Schema
app.post('/api/schema', async (req, res) => {
    if (!dbPool) {
        return res.status(401).json({ success: false, message: 'Nenhuma conexão ativa com o banco de dados.' });
    }

    try {
        console.log('Fetching database catalog schema...');
        
        // Query to get tables starting with P (standard Labore) or A (standard Ponto) or custom tables
        // with their columns, data types and description if available.
        const schemaQuery = `
            SELECT 
                t.name AS tableName,
                c.name AS columnName,
                ty.name AS dataType,
                c.max_length AS maxLength,
                c.is_nullable AS isNullable
            FROM sys.tables t
            INNER JOIN sys.columns c ON t.object_id = c.object_id
            INNER JOIN sys.types ty ON c.user_type_id = ty.user_type_id
            WHERE t.name LIKE 'PF%' OR t.name LIKE 'PP%' OR t.name LIKE 'PS%' OR t.name LIKE 'AB%' OR t.name LIKE 'AM%' OR t.name LIKE 'AA%'
            ORDER BY t.name, c.column_id;
        `;

        const result = await dbPool.request().query(schemaQuery);
        
        // Structure the data to group columns inside their respective tables
        const catalog = {};
        result.recordset.forEach(row => {
            const tbl = row.tableName;
            if (!catalog[tbl]) {
                catalog[tbl] = {
                    code: tbl,
                    desc: getTableFriendlyDescription(tbl),
                    priority: getTablePriority(tbl),
                    fields: {}
                };
            }
            
            catalog[tbl].fields[row.columnName] = {
                desc: getFieldFriendlyDescription(row.columnName),
                type: mapSqlServerType(row.dataType, row.maxLength),
                selected: isFieldSelectedByDefault(row.columnName)
            };
        });

        res.json({
            success: true,
            tablesCount: Object.keys(catalog).length,
            schema: catalog
        });
    } catch (err) {
        console.error('Schema fetch failed:', err.message);
        res.status(500).json({ 
            success: false, 
            message: `Erro ao obter dicionário de dados: ${err.message}` 
        });
    }
});

// 4. API: Check status of current connection
app.get('/api/status', (req, res) => {
    res.json({
        connected: !!dbPool,
        connection: activeConnectionConfig
    });
});

// Helpers to enhance the database schema metadata
function getTableFriendlyDescription(tableName) {
    const descriptions = {
        PFUNC: "Funcionários (Contratos)",
        PPESSOA: "Dados Pessoais (Cadastro Geral)",
        PSECAO: "Seções (Departamentos / Filiais)",
        PFUNCAO: "Funções e Cargos",
        PFPERFF: "Ficha Financeira (Período)",
        PFDEPEND: "Dependentes dos Funcionários",
        PFHSTSAL: "Histórico de Reajustes Salariais",
        PFUFERIAS: "Períodos Aquisitivos de Férias",
        PFHSTHOR: "Histórico de Horários (Ponto)",
        AHORARIO: "Cadastro de Horários (Escalas)",
        ABATFUN: "Batidas Realizadas (Marcações)",
        AMOVFUN: "Movimento Apurado do Ponto",
        AAFHTFUN: "Ficha de Ponto Diária Calculada",
        AAVISOCALCULADO: "Avisos e Críticas do Ponto",
        ABANCOHORFUN: "Movimento Banco de Horas (Detalhado)",
        AMOVFUNDIA: "Movimento Apurado Diário",
        AJORNADAFUN: "Histórico de Jornadas de Horários",
        AHORARIOJORNADA: "Cadastro de Jornadas de Escala",
        AJORHOR: "Cadastro de Batidas Previstas",
        AOCORRENCIACALCULADA: "Ocorrências Diárias Calculadas",
        PSUBSTSUP: "Substitutos de Supervisão",
        PSUBSTCHEFE: "Substitutos de Chefia",
        FCFO: "Clientes e Fornecedores (Cadastro Geral)",
        TMOV: "Movimentos (Vendas / Compras / Estoque)",
        FLAN: "Lançamentos Financeiros (Contas a Pagar/Receber)",
        GCOLIGADA: "Coligadas (Cadastro de Empresas)",
        TITMMOV: "Itens dos Movimentos (Produtos/Serviços)",
        GCCUSTO: "Centros de Custo (Estrutura Organizacional)",
        TPRD: "Produtos / Serviços (Cadastro Geral)",
        FBOLETO: "Boletos Bancários (Cobrança)",
        TTMV: "Parâmetros / Tipos de Movimentos",
        TTRBMOV: "Tributos e Impostos dos Movimentos",
        PFHSTFER: "Histórico de Férias Tiradas",
        PFUFERIASRECIBO: "Recibos de Pagamento de Férias",
        PFFINANC: "Ficha Financeira Acumulada (Histórico)"
    };
    return descriptions[tableName] || `Tabela Customizada (${tableName})`;
}

function getTablePriority(tableName) {
    const priorities = {
        PFUNC: 10, PPERFF: 9, PPESSOA: 8, PSECAO: 7, PFUNCAO: 6,PFHSTHOR: 4, AJORNADAFUN: 4,
        PFDEPEND: 3, AHORARIO: 3, ABATFUN: 3, AMOVFUN: 3,AAFHTFUN: 3, ABANCOHORFUN: 3, AMOVFUNDIA: 3, AHORARIOJORNADA: 3,
        PFHSTSAL: 2,PFUFERIAS: 2, AAVISOCALCULADO: 2, AJORHOR: 2, AOCORRENCIACALCULADA: 2,
        PSUBSTSUP: 1, PSUBSTCHEFE: 1,
        GCOLIGADA: 9, FCFO: 8, TMOV: 7, FLAN: 7, GCCUSTO: 6, TPRD: 6, PFHSTFER: 3, PFUFERIASRECIBO: 3, PFFINANC: 5, TITMMOV: 5
    };
    return priorities[tableName] || 1;
}

function mapSqlServerType(dataType, maxLength) {
    const typeLower = dataType.toLowerCase();
    if (typeLower.includes('int')) return 'int';
    if (typeLower.includes('char') || typeLower.includes('text')) {
        return `varchar`;
    }
    if (typeLower.includes('date') || typeLower.includes('time')) return 'datetime';
    if (typeLower.includes('decimal') || typeLower.includes('numeric') || typeLower.includes('float') || typeLower.includes('real')) return 'numeric';
    return dataType;
}

function getFieldFriendlyDescription(columnName) {
    const fieldDescs = {
        CODCOLIGADA: "Código da Coligada",
        CHAPA: "Chapa / Matrícula",
        CODPESSOA: "Código da Pessoa",
        CODSECAO: "Código da Seção",
        CODFUNCAO: "Código da Função",
        CODSITUACAO: "Situação (A=Ativo, D=Demitido...)",
        SALARIO: "Salário Base Atual",
        DATAADMISSAO: "Data de Admissão",
        DATADEMISSAO: "Data de Demissão",
        CODTIPO: "Tipo de Funcionário",
        CODRECEBIMENTO: "Forma de Recebimento",
        JORNADA: "Jornada Mensal (Horas)",
        PIS: "PIS/PASEP",
        APOSENTADO: "Indicador Aposentado (0/1)",
        CODIGO: "Código Geral / Identificador",
        NOME: "Nome Completo / Descrição",
        CPF: "CPF",
        DTNASCIMENTO: "Data de Nascimento",
        SEXO: "Sexo (M/F)",
        ESTADOCIVIL: "Estado Civil",
        TELEFONE1: "Telefone Principal",
        EMAIL: "E-mail Principal",
        RUA: "Rua / Logradouro",
        NUMERO: "Número Residencial",
        BAIRRO: "Bairro",
        CIDADE: "Cidade",
        ESTADO: "Estado / UF",
        DESCRICAO: "Descrição / Nome da Seção",
        CGC: "CNPJ / CGC",
        ATIVO: "Ativo (0/1)",
        CBO: "CBO Cargo",
        INATIVA: "Inativa (0/1)",
        ANOCOMP: "Ano de Competência",
        MESCOMP: "Mês de Competência",
        NROPEDIDO: "Número do Pedido",
        SITUACAOFOLHA: "Situação da Folha",
        CODEVENTO: "Código do Evento",
        VALOR: "Valor Calculado (R$)",
        REF: "Referência",
        PROVENTODESCONTO: "Natureza (P/D/B/I)",
        VALORPADRAO: "Valor Padrão",
        NRODEPEND: "Nº Dependente",
        GRAUPARENTESCO: "Parentesco",
        COMPRGBENEFICIO: "Dep. IRRF (0/1)",
        COMPRGFINANCEIRO: "Dep. Sal. Família (0/1)",
        DTMUDANCA: "Data de Alteração",
        MOTIVO: "Motivo",
        DTINICIO: "Data de Início",
        DTFIM: "Data de Término",
        TIPO: "Tipo",
        FIMPERAQUIS: "Fim Período Aquisitivo",
        INICIOGOZO: "Início do Gozo",
        FIMGOZO: "Fim do Gozo",
        DIASGOZO: "Dias de Férias Gozados",
        INICIOAQUIS: "Início Período Aquisitivo",
        LIMITEGOZO: "Data Limite Gozo",
        STATUS: "Status",
        NRODIASDIREITO: "Dias de Direito",
        SALDODIAS: "Saldo de Dias",
        CODHORARIO: "Código do Horário",
        MINUTOSJORNADA: "Minutos de Jornada",
        DATA: "Data de Referência",
        BATIDA: "Hora da Batida (Min)",
        NATUREZA: "Natureza (E/S)",
        FALTA: "Minutos Faltas",
        ATRASO: "Minutos Atraso",
        EXTRA: "Minutos Extras",
        ADICIONAL: "Minutos Adicional Noturno",
        SALDO: "Saldo de Banco (Min)",
        SALDOANTERIOR: "Saldo Anterior (Min)",
        BASE: "Minutos Jornada Base",
        HTRAB: "Minutos Trabalhados",
        EXTRAAUTORIZADO: "Minutos Extras Autorizados",
        FERIADO: "Feriado (0/1)",
        COMPENSADO: "Compensado (0/1)",
        DESCANSO: "Descanso/DSR (0/1)",
        CODAVISO: "Código de Aviso",
        EXTRAFAIXA1: "Extras Faixa 1 (Min)",
        EXTRAFAIXA2: "Extras Faixa 2 (Min)",
        EXTRAFAIXA3: "Extras Faixa 3 (Min)",
        EXTRAFAIXA4: "Extras Faixa 4 (Min)",
        EXTRAFAIXA5: "Extras Faixa 5 (Min)",
        CODEVE: "Código do Evento Apurado",
        NUMHORAS: "Quantidade de Horas (Min)",
        DATAMUDANCA: "Data de Mudança",
        BATINICIO: "Minutos da Batida Prevista",
        INDINICIO: "Índice Seq.",
        TIPOOCORRENCIA: "Tipo de Ocorrência",
        CHAPASUBST: "Chapa do Substituto",
        DATAINICIO: "Data Início Subst.",
        DATAFIM: "Data Fim Subst.",
        CODCOLSUBST: "Coligada do Substituto",
        CODCFO: "Código do Cliente/Fornecedor",
        NOMEFANTASIA: "Nome Fantasia / Descrição",
        CGCCFO: "CNPJ / CPF",
        PAGAMENTOPREVIO: "Pagamento Prévio (0/1)",
        PAGTOESTRANGEIRO: "Estrangeiro (0/1)",
        IDMOV: "Identificador do Movimento",
        NUMEROMOV: "Número do Movimento / Nota",
        CODTMV: "Tipo de Movimento",
        CODFO: "Código do Fornecedor",
        VALORLIQUIDO: "Valor Líquido do Movimento",
        VALORBRUTO: "Valor Bruto do Movimento",
        IDLAN: "Identificador do Lançamento",
        NUMERODOCUMENTO: "Número do Documento",
        VALORORIGINAL: "Valor Original",
        VALORBAIXADO: "Valor Baixado",
        DATAVENCIMENTO: "Data de Vencimento",
        DATABAIXA: "Data de Baixa",
        STATUSLAN: "Status Lançamento",
        CODCCUSTO: "Código do Centro de Custo",
        IDPRD: "Identificador do Produto",
        CODIGOPRD: "Código do Produto",
        CODIGOBARRA: "Código de Barras",
        INATIVO: "Inativo (0/1)",
        NSEQITMMOV: "Sequência do Item",
        QUANTIDADE: "Quantidade do Item",
        PRECOUNITARIO: "Preço Unitário",
        VALORTOTAL: "Valor Total do Item",
        IDBOLETO: "Identificador do Boleto",
        NOSSONUMERO: "Nosso Número",
        CODTRB: "Código do Tributo",
        ALIQUOTA: "Alíquota Aplicada (%)",
        DTFIMPERAQUIS: "Fim Período Aquisitivo",
        DTINIGOZO: "Início do Gozo",
        DTFIMGOZO: "Fim do Gozo",
        IRRF: "Imposto Retido (R$)",
        DATAPAGTO: "Data de Pagamento",
        LIQUIDO: "Valor Líquido Recebido (R$)"
    };
    return fieldDescs[columnName] || columnName;
}

function isFieldSelectedByDefault(columnName) {
    const selectedFields = [
        "CODCOLIGADA", "CHAPA", "CODPESSOA", "CODSECAO", "CODFUNCAO", "CODSITUACAO", "SALARIO", "DATAADMISSAO",
        "CODIGO", "NOME", "CPF",
        "DESCRICAO",
        "ANOCOMP", "MESCOMP", "NROPEDIDO",
        "CODEVENTO", "VALOR", "REF",
        "PROVENTODESCONTO",
        "NRODEPEND", "GRAUPARENTESCO",
        "DTMUDANCA", "MOTIVO",
        "DTINICIO", "DTFIM",
        "FIMPERAQUIS", "INICIOGOZO", "FIMGOZO", "DIASGOZO",
        "INICIOAQUIS", "LIMITEGOZO", "STATUS", "SALDODIAS",
        "CODHORARIO", "DATA", "BATIDA",
        "FALTA", "ATRASO", "EXTRA", "SALDO",
        "BASE", "HTRAB", "EXTRAAUTORIZADO",
        "CODAVISO",
        "CODEVE", "NUMHORAS",
        "BATINICIO", "TIPOOCORRENCIA", "CHAPASUBST",
        "CODCFO", "NOMEFANTASIA", "CGCCFO", "IDMOV", "NUMEROMOV", "VALORLIQUIDO", "IDLAN", "NUMERODOCUMENTO", "VALORORIGINAL", "DATAVENCIMENTO", "CODCCUSTO", "IDPRD", "CODIGOPRD", "NSEQITMMOV", "QUANTIDADE", "PRECOUNITARIO", "VALORTOTAL", "IDBOLETO", "NOSSONUMERO", "CODTRB", "DTFIMPERAQUIS", "DTINIGOZO", "DTFIMGOZO", "IRRF", "DATAPAGTO", "LIQUIDO"
    ];
    return selectedFields.includes(columnName);
}

// 5. Default route to serve application index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Express Server
app.listen(PORT, () => {
    console.log(`================================================================`);
    console.log(`  RM SQL ARCHITECT - SERVER STARTED`);
    console.log(`  Access the app at: http://localhost:${PORT}`);
    console.log(`================================================================`);
});
