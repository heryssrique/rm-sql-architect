/* ==========================================================================
   RM SQL ARCHITECT - CORE JAVASCRIPT ENGINE
   ========================================================================== */

// 1. DATA SCHEMA FOR TOTVS RM LABORE
const rmSchema = {
    PFUNC: {
        code: "PFUNC",
        desc: "Funcionários (Contratos)",
        priority: 10,
        fields: {
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: true },
            CHAPA: { desc: "Chapa / Matrícula", type: "varchar", selected: true },
            CODPESSOA: { desc: "Código da Pessoa", type: "int", selected: true },
            CODSECAO: { desc: "Código da Seção", type: "varchar", selected: true },
            CODFUNCAO: { desc: "Código da Função", type: "varchar", selected: true },
            CODSITUACAO: { desc: "Situação (A=Ativo, D=Demitido...)", type: "char", selected: true },
            SALARIO: { desc: "Salário Base Atual", type: "numeric", selected: true },
            DATAADMISSAO: { desc: "Data de Admissão", type: "datetime", selected: true },
            DATADEMISSAO: { desc: "Data de Demissão", type: "datetime", selected: false },
            CODTIPO: { desc: "Tipo de Funcionário", type: "char", selected: false },
            CODRECEBIMENTO: { desc: "Forma de Recebimento", type: "char", selected: false },
            JORNADA: { desc: "Jornada Mensal (Horas)", type: "numeric", selected: false },
            PIS: { desc: "PIS/PASEP", type: "varchar", selected: false },
            APOSENTADO: { desc: "Indicador Aposentado (0/1)", type: "smallint", selected: false }
        }
    },
    PPESSOA: {
        code: "PPESSOA",
        desc: "Dados Pessoais (Cadastro Geral)",
        priority: 8,
        fields: {
            CODIGO: { desc: "Código da Pessoa", type: "int", selected: true },
            NOME: { desc: "Nome Completo", type: "varchar", selected: true },
            CPF: { desc: "CPF", type: "varchar", selected: true },
            DTNASCIMENTO: { desc: "Data de Nascimento", type: "datetime", selected: false },
            SEXO: { desc: "Sexo (M/F)", type: "char", selected: false },
            ESTADOCIVIL: { desc: "Estado Civil", type: "char", selected: false },
            TELEFONE1: { desc: "Telefone Principal", type: "varchar", selected: false },
            EMAIL: { desc: "E-mail Principal", type: "varchar", selected: false },
            RUA: { desc: "Rua / Logradouro", type: "varchar", selected: false },
            NUMERO: { desc: "Número", type: "varchar", selected: false },
            BAIRRO: { desc: "Bairro", type: "varchar", selected: false },
            CIDADE: { desc: "Cidade", type: "varchar", selected: false },
            ESTADO: { desc: "Estado / UF", type: "char", selected: false }
        }
    },
    PSECAO: {
        code: "PSECAO",
        desc: "Seções (Departamentos / Filiais)",
        priority: 7,
        fields: {
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: false },
            CODSECAO: { desc: "Código da Seção", type: "varchar", selected: true },
            DESCRICAO: { desc: "Nome da Seção / Filial", type: "varchar", selected: true },
            CGC: { desc: "CNPJ da Filial/Seção", type: "varchar", selected: false },
            ATIVO: { desc: "Seção Ativa (0/1)", type: "smallint", selected: false }
        }
    },
    PFUNCAO: {
        code: "PFUNCAO",
        desc: "Funções e Cargos",
        priority: 6,
        fields: {
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: false },
            CODIGO: { desc: "Código da Função", type: "varchar", selected: true },
            NOME: { desc: "Nome da Função", type: "varchar", selected: true },
            CBO: { desc: "Código CBO", type: "varchar", selected: false },
            INATIVA: { desc: "Função Inativa (0/1)", type: "smallint", selected: false }
        }
    },
    PFPERFF: {
        code: "PFPERFF",
        desc: "Ficha Financeira (Cabeçalho Período)",
        priority: 9,
        fields: {
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: false },
            CHAPA: { desc: "Chapa / Matrícula", type: "varchar", selected: false },
            ANOCOMP: { desc: "Ano de Competência", type: "smallint", selected: true },
            MESCOMP: { desc: "Mês de Competência", type: "smallint", selected: true },
            NROPEDIDO: { desc: "Número do Pedido/Período", type: "smallint", selected: true },
            SITUACAOFOLHA: { desc: "Situação da Folha", type: "smallint", selected: false }
        }
    },
    PVALORES: {
        code: "PVALORES",
        desc: "Ficha Financeira (Valores do Mês)",
        priority: 5,
        fields: {
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: false },
            CHAPA: { desc: "Chapa / Matrícula", type: "varchar", selected: false },
            ANOCOMP: { desc: "Ano de Competência", type: "smallint", selected: false },
            MESCOMP: { desc: "Mês de Competência", type: "smallint", selected: false },
            NROPEDIDO: { desc: "Número do Pedido/Período", type: "smallint", selected: false },
            CODEVENTO: { desc: "Código do Evento", type: "varchar", selected: true },
            VALOR: { desc: "Valor Calculado (R$)", type: "numeric", selected: true },
            REF: { desc: "Referência (Horas/Dias)", type: "numeric", selected: true }
        }
    },
    PEVENTOS: {
        code: "PEVENTOS",
        desc: "Eventos (Cadastro de Rubricas)",
        priority: 4,
        fields: {
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: false },
            CODIGO: { desc: "Código do Evento", type: "varchar", selected: true },
            DESCRICAO: { desc: "Nome do Evento", type: "varchar", selected: true },
            PROVENTODESCONTO: { desc: "Natureza (P/D/B/I)", type: "char", selected: true },
            VALORPADRAO: { desc: "Valor Padrão", type: "numeric", selected: false }
        }
    },
    PFDEPEND: {
        code: "PFDEPEND",
        desc: "Dependentes dos Funcionários",
        priority: 3,
        fields: {
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: false },
            CHAPA: { desc: "Chapa do Funcionário", type: "varchar", selected: false },
            NRODEPEND: { desc: "Nº Dependente", type: "smallint", selected: true },
            NOME: { desc: "Nome do Dependente", type: "varchar", selected: true },
            DTNASCIMENTO: { desc: "Data de Nascimento", type: "datetime", selected: false },
            GRAUPARENTESCO: { desc: "Parentesco (Filho, Cônjuge...)", type: "char", selected: true },
            COMPRGBENEFICIO: { desc: "Dep. IRRF (0/1)", type: "smallint", selected: false },
            COMPRGFINANCEIRO: { desc: "Dep. Salário Família (0/1)", type: "smallint", selected: false },
            CPF: { desc: "CPF do Dependente", type: "varchar", selected: false }
        }
    },
    PFHSTSAL: {
        code: "PFHSTSAL",
        desc: "Histórico de Alterações Salariais",
        priority: 2,
        fields: {
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: false },
            CHAPA: { desc: "Chapa / Matrícula", type: "varchar", selected: false },
            DTMUDANCA: { desc: "Data da Mudança Salarial", type: "datetime", selected: true },
            SALARIO: { desc: "Salário Anterior/Novo", type: "numeric", selected: true },
            MOTIVO: { desc: "Motivo da Alteração", type: "varchar", selected: true },
            CODFUNCAO: { desc: "Código da Função", type: "varchar", selected: false }
        }
    },
    PFHSTAFDT: {
        code: "PFHSTAFDT",
        desc: "Histórico de Afastamentos Temporários",
        priority: 2,
        fields: {
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: false },
            CHAPA: { desc: "Chapa / Matrícula", type: "varchar", selected: false },
            DTINICIO: { desc: "Data de Início do Afastamento", type: "datetime", selected: true },
            DTFIM: { desc: "Data de Término do Afastamento", type: "datetime", selected: true },
            TIPO: { desc: "Tipo do Afastamento", type: "char", selected: true },
            MOTIVO: { desc: "Motivo do Afastamento", type: "varchar", selected: true }
        }
    },
    PFERIAS: {
        code: "PFERIAS",
        desc: "Histórico de Férias e Gozos",
        priority: 2,
        fields: {
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: false },
            CHAPA: { desc: "Chapa / Matrícula", type: "varchar", selected: false },
            FIMPERAQUIS: { desc: "Fim do Período Aquisitivo", type: "datetime", selected: true },
            INICIOGOZO: { desc: "Data de Início do Gozo", type: "datetime", selected: true },
            FIMGOZO: { desc: "Data de Término do Gozo", type: "datetime", selected: true },
            DIASGOZO: { desc: "Dias de Férias Gozados", type: "smallint", selected: true }
        }
    }
};

// 2. PRE-BUILT TEMPLATES LIBRARY
const sqlTemplates = [
    {
        id: "ativos-salario",
        title: "Relação de Funcionários Ativos",
        desc: "Lista de funcionários contratados ativos com salário, seção e cargo. Inclui dados pessoais integrados da tabela PPESSOA.",
        tables: ["PFUNC", "PPESSOA", "PSECAO", "PFUNCAO"],
        selectedFields: {
            PFUNC: ["CODCOLIGADA", "CHAPA", "CODSITUACAO", "SALARIO", "DATAADMISSAO"],
            PPESSOA: ["NOME", "CPF", "EMAIL"],
            PSECAO: ["CODSECAO", "DESCRICAO"],
            PFUNCAO: ["NOME", "CBO"]
        },
        filters: [
            { table: "PFUNC", field: "CODSITUACAO", op: "<>", value: "'D'", type: "static" },
            { table: "PFUNC", field: "CODCOLIGADA", op: "=", value: ":PLN_CODCOLIGADA", type: "static" }
        ],
        activeFilters: { active: true, coligada: true, chapa: false }
    },
    {
        id: "folha-calculada",
        title: "Folha Calculada (Ficha Financeira)",
        desc: "Retorna os proventos e descontos gerados na folha de pagamento por funcionário para um período/competência específico.",
        tables: ["PFUNC", "PPESSOA", "PFPERFF", "PVALORES", "PEVENTOS"],
        selectedFields: {
            PFUNC: ["CODCOLIGADA", "CHAPA"],
            PPESSOA: ["NOME"],
            PFPERFF: ["ANOCOMP", "MESCOMP"],
            PVALORES: ["VALOR", "REF"],
            PEVENTOS: ["CODIGO", "DESCRICAO", "PROVENTODESCONTO"]
        },
        filters: [
            { table: "PFPERFF", field: "ANOCOMP", op: "=", value: "2026", type: "custom" },
            { table: "PFPERFF", field: "MESCOMP", op: "=", value: "5", type: "custom" },
            { table: "PEVENTOS", field: "PROVENTODESCONTO", op: "IN", value: "('P', 'D')", type: "custom" }
        ],
        activeFilters: { active: true, coligada: true, chapa: false }
    },
    {
        id: "admissoes-periodo",
        title: "Admissões no Período",
        desc: "Filtra novos contratados admitidos em um intervalo de datas. Excelente para relatórios de onboarding e auditoria.",
        tables: ["PFUNC", "PPESSOA", "PSECAO", "PFUNCAO"],
        selectedFields: {
            PFUNC: ["CHAPA", "DATAADMISSAO", "SALARIO"],
            PPESSOA: ["NOME", "CPF"],
            PSECAO: ["DESCRICAO"],
            PFUNCAO: ["NOME"]
        },
        filters: [
            { table: "PFUNC", field: "DATAADMISSAO", op: ">=", value: "'2026-01-01'", type: "custom" },
            { table: "PFUNC", field: "DATAADMISSAO", op: "<=", value: "'2026-12-31'", type: "custom" }
        ],
        activeFilters: { active: false, coligada: true, chapa: false }
    },
    {
        id: "demitidos-periodo",
        title: "Rescisões / Demitidos",
        desc: "Lista funcionários desligados em um intervalo específico, contendo data de demissão e salário final.",
        tables: ["PFUNC", "PPESSOA", "PSECAO"],
        selectedFields: {
            PFUNC: ["CHAPA", "DATAADMISSAO", "DATADEMISSAO", "CODSITUACAO"],
            PPESSOA: ["NOME", "CPF"],
            PSECAO: ["DESCRICAO"]
        },
        filters: [
            { table: "PFUNC", field: "CODSITUACAO", op: "=", value: "'D'", type: "static" },
            { table: "PFUNC", field: "DATADEMISSAO", op: ">=", value: "'2026-05-01'", type: "custom" }
        ],
        activeFilters: { active: false, coligada: true, chapa: false }
    },
    {
        id: "dependentes-ativos",
        title: "Dependentes para IRRF / Sal. Família",
        desc: "Lista todos os dependentes cadastrados por funcionário, mapeando parentesco e elegibilidade de imposto.",
        tables: ["PFUNC", "PPESSOA", "PFDEPEND"],
        selectedFields: {
            PFUNC: ["CHAPA"],
            PPESSOA: ["NOME"],
            PFDEPEND: ["NOME", "GRAUPARENTESCO", "COMPRGBENEFICIO", "COMPRGFINANCEIRO"]
        },
        filters: [],
        activeFilters: { active: true, coligada: true, chapa: false }
    },
    {
        id: "historico-salarial",
        title: "Histórico de Alterações Salariais",
        desc: "Histórico completo de reajustes e aumentos salariais por funcionário, ordenado cronologicamente.",
        tables: ["PFUNC", "PPESSOA", "PFHSTSAL"],
        selectedFields: {
            PFUNC: ["CHAPA"],
            PPESSOA: ["NOME"],
            PFHSTSAL: ["DTMUDANCA", "SALARIO", "MOTIVO"]
        },
        filters: [],
        activeFilters: { active: true, coligada: true, chapa: false }
    },
    {
        id: "estagiarios-aprendizes",
        title: "Estagiários e Aprendizes Ativos",
        desc: "Filtra colaboradores ativos contratados sob os regimes de Estágio ou Aprendizagem, contendo informações básicas e salário.",
        tables: ["PFUNC", "PPESSOA", "PSECAO", "PFUNCAO"],
        selectedFields: {
            PFUNC: ["CODCOLIGADA", "CHAPA", "CODTIPO", "SALARIO", "DATAADMISSAO"],
            PPESSOA: ["NOME", "CPF"],
            PSECAO: ["DESCRICAO"],
            PFUNCAO: ["NOME"]
        },
        filters: [
            { table: "PFUNC", field: "CODSITUACAO", op: "<>", value: "'D'", type: "static" },
            { table: "PFUNC", field: "CODTIPO", op: "IN", value: "('E', 'A')", type: "custom" }
        ],
        activeFilters: { active: true, coligada: true, chapa: false }
    },
    {
        id: "auditoria-bases",
        title: "Bases de FGTS / INSS (Ficha Financeira)",
        desc: "Relatório para auditar as verbas de natureza Base de Cálculo ('B') geradas no período para os funcionários.",
        tables: ["PFUNC", "PPESSOA", "PFPERFF", "PVALORES", "PEVENTOS"],
        selectedFields: {
            PFUNC: ["CODCOLIGADA", "CHAPA"],
            PPESSOA: ["NOME"],
            PFPERFF: ["ANOCOMP", "MESCOMP"],
            PVALORES: ["VALOR"],
            PEVENTOS: ["CODIGO", "DESCRICAO", "PROVENTODESCONTO"]
        },
        filters: [
            { table: "PFPERFF", field: "ANOCOMP", op: "=", value: "2026", type: "custom" },
            { table: "PFPERFF", field: "MESCOMP", op: "=", value: "5", type: "custom" },
            { table: "PEVENTOS", field: "PROVENTODESCONTO", op: "=", value: "'B'", type: "custom" }
        ],
        activeFilters: { active: true, coligada: true, chapa: false }
    },
    {
        id: "historico-afastamentos",
        title: "Histórico de Afastamentos Ativos",
        desc: "Relação de todos os afastamentos ativos (sem data de término cadastrada) contendo chapa, nome e motivo do afastamento.",
        tables: ["PFUNC", "PPESSOA", "PFHSTAFDT"],
        selectedFields: {
            PFUNC: ["CHAPA"],
            PPESSOA: ["NOME"],
            PFHSTAFDT: ["DTINICIO", "DTFIM", "TIPO", "MOTIVO"]
        },
        filters: [
            { table: "PFHSTAFDT", field: "DTFIM", op: "IS NULL", value: "", type: "custom" }
        ],
        activeFilters: { active: true, coligada: true, chapa: false }
    },
    {
        id: "historico-ferias",
        title: "Períodos de Férias Gozados",
        desc: "Histórico completo de gozo de férias por colaborador contendo início, fim e quantidade de dias gozados.",
        tables: ["PFUNC", "PPESSOA", "PFERIAS"],
        selectedFields: {
            PFUNC: ["CHAPA"],
            PPESSOA: ["NOME"],
            PFERIAS: ["FIMPERAQUIS", "INICIOGOZO", "FIMGOZO", "DIASGOZO"]
        },
        filters: [
            { table: "PFERIAS", field: "INICIOGOZO", op: ">=", value: "'2026-01-01'", type: "custom" }
        ],
        activeFilters: { active: true, coligada: true, chapa: false }
    }
];

// State variables
let activeTables = new Set();
let activeDialect = "sqlserver";
let customFilters = [];
let queryXmlCode = "LABORE.SQL001";
let queryXmlTitle = "Consulta Customizada RM Labore";

// DOM Elements
const tablesListContainer = document.getElementById("tables-list");
const templatesContainer = document.getElementById("templates-container");
const joinsVisualizer = document.getElementById("joins-visualizer");
const tableCountBadge = document.getElementById("table-count");
const customFiltersList = document.getElementById("custom-filters-list");
const noFiltersText = document.getElementById("no-filters-text");
const btnAddFilter = document.getElementById("btn-add-filter");
const sqlHighlighted = document.getElementById("sql-code-highlighted");
const sqlRawTextarea = document.getElementById("sql-raw-textarea");
const btnCopy = document.getElementById("btn-copy");
const btnDownloadSql = document.getElementById("btn-download-sql");
const btnExportXml = document.getElementById("btn-export-xml");
const btnClear = document.getElementById("btn-clear");
const btnFormatSql = document.getElementById("btn-format-sql");
const tableSearchInput = document.getElementById("table-search");
const xmlQueryCodeInput = document.getElementById("xml-query-code");
const xmlQueryTitleInput = document.getElementById("xml-query-title");

// RM Checkboxes
const cbFilterActive = document.getElementById("filter-active-employees");
const cbFilterColigada = document.getElementById("filter-coligada-context");
const cbFilterChapa = document.getElementById("filter-chapa-param");
const cbAutoJoin = document.getElementById("auto-join");

// Planilha .NET DOM Elements
const modePlanilhaNet = document.getElementById("mode-planilha-net");
const lblFilterColigada = document.getElementById("lbl-filter-coligada");
const lblFilterChapa = document.getElementById("lbl-filter-chapa");
const planilhaNetHelper = document.getElementById("planilha-net-helper");

// Toast Notification
function showToast(message, type = "success") {
    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toast-message");
    
    toastMessage.textContent = message;
    
    // Icon adjustment
    const icon = toast.querySelector("i");
    if (type === "success") {
        toast.style.background = "var(--gradient-success)";
        icon.className = "fa-solid fa-circle-check";
    } else {
        toast.style.background = "var(--gradient-accent)";
        icon.className = "fa-solid fa-circle-info";
    }
    
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

// Dialect selector listener
document.querySelectorAll(".dialect-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        document.querySelectorAll(".dialect-btn").forEach(b => b.classList.remove("active"));
        const selectedBtn = e.currentTarget;
        selectedBtn.classList.add("active");
        activeDialect = selectedBtn.dataset.dialect;
        
        showToast(`Dialeto alterado para ${activeDialect === "sqlserver" ? "SQL Server (T-SQL)" : "Oracle PL/SQL"}`, "info");
        generateSQL();
    });
});

// Tab Switcher
document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
        
        btn.classList.add("active");
        const tabId = `tab-${btn.dataset.tab}`;
        document.getElementById(tabId).classList.add("active");
    });
});

// XML Form input triggers
xmlQueryCodeInput.addEventListener("input", (e) => {
    queryXmlCode = e.target.value.trim() || "LABORE.SQL001";
});
xmlQueryTitleInput.addEventListener("input", (e) => {
    queryXmlTitle = e.target.value.trim() || "Consulta Customizada RM Labore";
});

// Setup modal help tips
const modal = document.getElementById("filter-modal");
const closeBtn = document.querySelector(".close-btn");
const logoIcon = document.querySelector(".logo-icon");

logoIcon.style.cursor = "pointer";
logoIcon.addEventListener("click", () => {
    modal.classList.add("show");
});
closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
});
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});

// Synchronize TextArea Scroll with Code Panel Scroll
sqlRawTextarea.addEventListener("scroll", () => {
    const codeView = document.getElementById("sql-highlighted-container");
    codeView.scrollTop = sqlRawTextarea.scrollTop;
    codeView.scrollLeft = sqlRawTextarea.scrollLeft;
});

// 3. INITIALIZE TABLE SCHEMA RENDERER
function initTablesAccordion() {
    tablesListContainer.innerHTML = "";
    
    Object.keys(rmSchema).forEach(tableKey => {
        const table = rmSchema[tableKey];
        const accordionItem = document.createElement("div");
        accordionItem.className = "accordion-item";
        accordionItem.dataset.table = tableKey;
        
        // Header
        const header = document.createElement("div");
        header.className = "accordion-header";
        
        const headerLeft = document.createElement("div");
        headerLeft.className = "accordion-header-left";
        
        // Checkbox wrapper for table activation
        const checkboxWrapper = document.createElement("label");
        checkboxWrapper.className = "table-checkbox-wrapper";
        checkboxWrapper.addEventListener("click", (e) => e.stopPropagation()); // prevent expanding
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `table-cb-${tableKey}`;
        checkbox.checked = activeTables.has(tableKey);
        checkbox.addEventListener("change", (e) => {
            toggleTableSelection(tableKey, e.target.checked);
        });
        
        const checkmark = document.createElement("span");
        checkmark.className = "checkmark-square";
        
        checkboxWrapper.appendChild(checkbox);
        checkboxWrapper.appendChild(checkmark);
        
        const titleContainer = document.createElement("div");
        titleContainer.className = "table-title";
        
        const tableCodeSpan = document.createElement("span");
        tableCodeSpan.className = "table-code";
        tableCodeSpan.textContent = tableKey;
        
        const tableDescSpan = document.createElement("span");
        tableDescSpan.className = "table-desc";
        tableDescSpan.textContent = table.desc;
        
        titleContainer.appendChild(tableCodeSpan);
        titleContainer.appendChild(tableDescSpan);
        
        headerLeft.appendChild(checkboxWrapper);
        headerLeft.appendChild(titleContainer);
        
        const chevron = document.createElement("i");
        chevron.className = "fa-solid fa-chevron-down accordion-chevron";
        
        header.appendChild(headerLeft);
        header.appendChild(chevron);
        
        // Header click triggers accordion expansion
        header.addEventListener("click", () => {
            const isExpanded = accordionItem.classList.contains("expanded");
            // Collapse others
            document.querySelectorAll(".accordion-item").forEach(item => {
                item.classList.remove("expanded");
            });
            if (!isExpanded) {
                accordionItem.classList.add("expanded");
            }
        });
        
        // Content list of fields
        const content = document.createElement("div");
        content.className = "accordion-content";
        
        const fieldsList = document.createElement("div");
        fieldsList.className = "fields-list";
        
        Object.keys(table.fields).forEach(fieldKey => {
            const field = table.fields[fieldKey];
            const fieldItem = document.createElement("label");
            fieldItem.className = "field-item";
            
            const fieldLeft = document.createElement("div");
            fieldLeft.style.display = "flex";
            fieldLeft.style.alignItems = "center";
            
            const fieldCheckbox = document.createElement("input");
            fieldCheckbox.type = "checkbox";
            fieldCheckbox.className = "field-checkbox";
            fieldCheckbox.dataset.table = tableKey;
            fieldCheckbox.dataset.field = fieldKey;
            fieldCheckbox.checked = field.selected;
            fieldCheckbox.addEventListener("change", (e) => {
                field.selected = e.target.checked;
                // If checking field, auto-check parent table
                if (e.target.checked && !activeTables.has(tableKey)) {
                    document.getElementById(`table-cb-${tableKey}`).checked = true;
                    activeTables.add(tableKey);
                    updateActiveTablesUI();
                }
                generateSQL();
            });
            
            const fieldInfo = document.createElement("div");
            fieldInfo.className = "field-info";
            
            const fieldNameSpan = document.createElement("span");
            fieldNameSpan.className = "field-name";
            fieldNameSpan.textContent = fieldKey;
            
            const fieldDescSpan = document.createElement("span");
            fieldDescSpan.className = "field-desc";
            fieldDescSpan.textContent = field.desc;
            
            fieldInfo.appendChild(fieldNameSpan);
            fieldInfo.appendChild(fieldDescSpan);
            
            fieldLeft.appendChild(fieldCheckbox);
            fieldLeft.appendChild(fieldInfo);
            
            const fieldTypeSpan = document.createElement("span");
            fieldTypeSpan.className = "field-type";
            fieldTypeSpan.textContent = field.type;
            
            fieldItem.appendChild(fieldLeft);
            fieldItem.appendChild(fieldTypeSpan);
            
            fieldsList.appendChild(fieldItem);
        });
        
        content.appendChild(fieldsList);
        accordionItem.appendChild(header);
        accordionItem.appendChild(content);
        
        tablesListContainer.appendChild(accordionItem);
    });
}

// Toggle table activation
function toggleTableSelection(tableKey, isSelected) {
    if (isSelected) {
        activeTables.add(tableKey);
    } else {
        activeTables.delete(tableKey);
    }
    updateActiveTablesUI();
    generateSQL();
}

// Sync UI states of table lists
function updateActiveTablesUI() {
    // 1. Update Accordion borders
    document.querySelectorAll(".accordion-item").forEach(item => {
        const tKey = item.dataset.table;
        if (activeTables.has(tKey)) {
            item.classList.add("active");
            document.getElementById(`table-cb-${tKey}`).checked = true;
        } else {
            item.classList.remove("active");
            document.getElementById(`table-cb-${tKey}`).checked = false;
        }
    });
    
    // 2. Badge Count
    tableCountBadge.textContent = `${activeTables.size} tabela${activeTables.size === 1 ? '' : 's'} selecionada${activeTables.size === 1 ? '' : 's'}`;
    
    // 3. Render automatic joins diagram
    renderJoinsVisualizer();
}

// Render the JOIN relations in the project panel
function renderJoinsVisualizer() {
    joinsVisualizer.innerHTML = "";
    
    if (activeTables.size === 0) {
        joinsVisualizer.innerHTML = `<p class="empty-state-text">Nenhuma tabela selecionada. Selecione tabelas na barra lateral para iniciar a montagem da consulta.</p>`;
        return;
    }
    
    // Find base table
    const baseTable = findBaseTable();
    
    const baseBubble = document.createElement("div");
    baseBubble.className = "join-bubble";
    baseBubble.style.borderColor = "var(--accent-blue)";
    baseBubble.innerHTML = `<span class="badge" style="background:rgba(59,130,246,0.2);color:var(--accent-blue)">BASE</span> <span class="join-bubble-t">${baseTable}</span> <span class="join-bubble-rel">(${rmSchema[baseTable].desc})</span>`;
    joinsVisualizer.appendChild(baseBubble);
    
    // Joins
    const joins = calculateJoins(baseTable, activeTables);
    if (joins.length > 0) {
        joins.forEach(join => {
            const joinBubble = document.createElement("div");
            joinBubble.className = "join-bubble";
            joinBubble.innerHTML = `
                <i class="fa-solid fa-link" style="color:var(--accent-teal)"></i> 
                <span class="join-bubble-t">${join.table}</span> 
                <span class="join-bubble-rel">JOIN via</span> 
                <span class="join-bubble-on">${join.condition}</span>
            `;
            joinsVisualizer.appendChild(joinBubble);
        });
    } else if (activeTables.size > 1) {
        joinsVisualizer.innerHTML += `
            <div class="join-bubble" style="border-color:var(--accent-red);background:rgba(239,68,68,0.05)">
                <i class="fa-solid fa-triangle-exclamation" style="color:var(--accent-red)"></i>
                <span class="join-bubble-rel" style="color:var(--text-main);font-weight:600">Alerta de produto cartesiano!</span>
                <span class="join-bubble-rel">Não foi possível mapear o relacionamento automático entre as tabelas selecionadas.</span>
            </div>
        `;
    }
}

// 4. SMART RELATIONSHIP RESOLUTION (JOINS)
function findBaseTable() {
    let base = null;
    let highestPriority = -1;
    
    activeTables.forEach(tKey => {
        const priority = rmSchema[tKey].priority;
        if (priority > highestPriority) {
            highestPriority = priority;
            base = tKey;
        }
    });
    
    return base || "PFUNC";
}

function calculateJoins(baseTable, selectedTables) {
    const joinsList = [];
    
    selectedTables.forEach(table => {
        if (table === baseTable) return;
        
        let condition = "";
        
        if (rmSchema[table] && rmSchema[table].joinCondition) {
            condition = rmSchema[table].joinCondition;
        }
        else if (table === "PPESSOA") {
            if (selectedTables.has("PFUNC")) {
                condition = "PFUNC.CODPESSOA = PPESSOA.CODIGO";
            } else {
                condition = "/* Sem chave PFUNC */ PPESSOA.CODIGO";
            }
        }
        else if (table === "PSECAO") {
            if (selectedTables.has("PFUNC")) {
                condition = "PFUNC.CODCOLIGADA = PSECAO.CODCOLIGADA AND PFUNC.CODSECAO = PSECAO.CODSECAO";
            } else if (selectedTables.has("PFPERFF")) {
                condition = "/* Via PFUNC pendente */";
            } else {
                condition = "PSECAO.CODCOLIGADA = 1";
            }
        }
        else if (table === "PFUNCAO") {
            if (selectedTables.has("PFUNC")) {
                condition = "PFUNC.CODCOLIGADA = PFUNCAO.CODCOLIGADA AND PFUNC.CODFUNCAO = PFUNCAO.CODIGO";
            }
        }
        else if (table === "PFPERFF") {
            if (selectedTables.has("PFUNC")) {
                condition = "PFUNC.CODCOLIGADA = PFPERFF.CODCOLIGADA AND PFUNC.CHAPA = PFPERFF.CHAPA";
            }
        }
        else if (table === "PVALORES") {
            if (selectedTables.has("PFPERFF")) {
                condition = "PFPERFF.CODCOLIGADA = PVALORES.CODCOLIGADA AND PFPERFF.CHAPA = PVALORES.CHAPA AND PFPERFF.ANOCOMP = PVALORES.ANOCOMP AND PFPERFF.MESCOMP = PVALORES.MESCOMP AND PFPERFF.NROPEDIDO = PVALORES.NROPEDIDO";
            } else if (selectedTables.has("PFUNC")) {
                condition = "PFUNC.CODCOLIGADA = PVALORES.CODCOLIGADA AND PFUNC.CHAPA = PVALORES.CHAPA";
            }
        }
        else if (table === "PEVENTOS") {
            if (selectedTables.has("PVALORES")) {
                condition = "PVALORES.CODCOLIGADA = PEVENTOS.CODCOLIGADA AND PVALORES.CODEVENTO = PEVENTOS.CODIGO";
            } else if (selectedTables.has("PFUNC")) {
                condition = "PFUNC.CODCOLIGADA = PEVENTOS.CODCOLIGADA";
            }
        }
        else if (table === "PFDEPEND") {
            if (selectedTables.has("PFUNC")) {
                condition = "PFUNC.CODCOLIGADA = PFDEPEND.CODCOLIGADA AND PFUNC.CHAPA = PFDEPEND.CHAPA";
            }
        }
        else if (table === "PFHSTSAL") {
            if (selectedTables.has("PFUNC")) {
                condition = "PFUNC.CODCOLIGADA = PFHSTSAL.CODCOLIGADA AND PFUNC.CHAPA = PFHSTSAL.CHAPA";
            }
        }
        else if (table === "PFHSTAFDT") {
            if (selectedTables.has("PFUNC")) {
                condition = "PFUNC.CODCOLIGADA = PFHSTAFDT.CODCOLIGADA AND PFUNC.CHAPA = PFHSTAFDT.CHAPA";
            }
        }
        else if (table === "PFERIAS") {
            if (selectedTables.has("PFUNC")) {
                condition = "PFUNC.CODCOLIGADA = PFERIAS.CODCOLIGADA AND PFUNC.CHAPA = PFERIAS.CHAPA";
            }
        }
        
        if (condition) {
            joinsList.push({
                table: table,
                condition: condition
            });
        }
    });
    
    // Sort joins so dependencies build up sequentially (e.g. join PVALORES, then join PEVENTOS)
    joinsList.sort((a, b) => {
        const priorityA = rmSchema[a.table].priority;
        const priorityB = rmSchema[b.table].priority;
        return priorityB - priorityA; // Descending priority
    });
    
    return joinsList;
}

// 5. TEMPLATES LOADER RENDERER
function initTemplates() {
    templatesContainer.innerHTML = "";
    
    sqlTemplates.forEach(tpl => {
        const card = document.createElement("div");
        card.className = "template-card";
        card.addEventListener("click", () => loadTemplate(tpl));
        
        const title = document.createElement("h3");
        title.innerHTML = `<i class="fa-solid fa-file-invoice-dollar"></i> ${tpl.title}`;
        
        const desc = document.createElement("p");
        desc.textContent = tpl.desc;
        
        const tagsContainer = document.createElement("div");
        tagsContainer.className = "template-tags";
        
        const primaryTag = document.createElement("span");
        primaryTag.className = "template-tag category";
        primaryTag.textContent = tpl.tables.join(" + ");
        tagsContainer.appendChild(primaryTag);
        
        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(tagsContainer);
        
        templatesContainer.appendChild(card);
    });
}

function loadTemplate(tpl) {
    // 1. Reset selection states
    activeTables.clear();
    Object.keys(rmSchema).forEach(tKey => {
        Object.keys(rmSchema[tKey].fields).forEach(fKey => {
            rmSchema[tKey].fields[fKey].selected = false;
        });
    });
    
    // 2. Select Template fields
    tpl.tables.forEach(tKey => {
        activeTables.add(tKey);
        const selFields = tpl.selectedFields[tKey] || [];
        selFields.forEach(fKey => {
            if (rmSchema[tKey].fields[fKey]) {
                rmSchema[tKey].fields[fKey].selected = true;
            }
        });
    });
    
    // 3. Set standard checkboxes
    cbFilterActive.checked = tpl.activeFilters.active;
    cbFilterColigada.checked = tpl.activeFilters.coligada;
    cbFilterChapa.checked = tpl.activeFilters.chapa;
    
    // 4. Fill custom WHERE filters
    customFilters = [];
    tpl.filters.forEach(f => {
        customFilters.push({
            table: f.table,
            field: f.field,
            op: f.op,
            value: f.value
        });
    });
    
    // 5. Update XML form text
    xmlQueryCodeInput.value = `LABORE.${tpl.id.toUpperCase().replace("-", "_")}`;
    xmlQueryTitleInput.value = tpl.title;
    queryXmlCode = xmlQueryCodeInput.value;
    queryXmlTitle = xmlQueryTitleInput.value;
    
    // 6. Refresh UIs
    initTablesAccordion();
    updateActiveTablesUI();
    renderCustomFiltersList();
    generateSQL();
    
    showToast(`Modelo "${tpl.title}" carregado!`, "success");
    
    // Expand first table card
    const firstTableAccordion = document.querySelector(`.accordion-item[data-table="${tpl.tables[0]}"]`);
    if (firstTableAccordion) {
        document.querySelectorAll(".accordion-item").forEach(item => item.classList.remove("expanded"));
        firstTableAccordion.classList.add("expanded");
    }
}

// 6. CUSTOM FILTER BUILDER (WHERE CLAUSES)
btnAddFilter.addEventListener("click", () => {
    if (activeTables.size === 0) {
        showToast("Selecione pelo menos uma tabela na barra lateral antes de criar filtros!", "info");
        return;
    }
    
    const tablesArr = Array.from(activeTables);
    const defaultTable = tablesArr[0];
    const defaultField = Object.keys(rmSchema[defaultTable].fields)[0];
    
    customFilters.push({
        table: defaultTable,
        field: defaultField,
        op: "=",
        value: "''"
    });
    
    renderCustomFiltersList();
    generateSQL();
});

function renderCustomFiltersList() {
    customFiltersList.innerHTML = "";
    
    if (customFilters.length === 0) {
        noFiltersText.style.display = "block";
        return;
    }
    
    noFiltersText.style.display = "none";
    
    customFilters.forEach((filter, index) => {
        const row = document.createElement("div");
        row.className = "filter-row";
        
        // 1. Table Selector
        const tableSelect = document.createElement("select");
        tableSelect.className = "filter-table-select";
        activeTables.forEach(tKey => {
            const opt = document.createElement("option");
            opt.value = tKey;
            opt.textContent = tKey;
            if (tKey === filter.table) opt.selected = true;
            tableSelect.appendChild(opt);
        });
        tableSelect.addEventListener("change", (e) => {
            filter.table = e.target.value;
            // Update fields list automatically for this row
            filter.field = Object.keys(rmSchema[filter.table].fields)[0];
            renderCustomFiltersList();
            generateSQL();
        });
        
        // 2. Field Selector
        const fieldSelect = document.createElement("select");
        fieldSelect.className = "filter-field-select";
        Object.keys(rmSchema[filter.table].fields).forEach(fKey => {
            const opt = document.createElement("option");
            opt.value = fKey;
            opt.textContent = `${fKey} (${rmSchema[filter.table].fields[fKey].desc})`;
            if (fKey === filter.field) opt.selected = true;
            fieldSelect.appendChild(opt);
        });
        fieldSelect.addEventListener("change", (e) => {
            filter.field = e.target.value;
            generateSQL();
        });
        
        // 3. Operator
        const opSelect = document.createElement("select");
        opSelect.className = "filter-op-select";
        const operators = ["=", "<>", ">", "<", ">=", "<=", "LIKE", "IN", "IS NULL", "IS NOT NULL"];
        operators.forEach(op => {
            const opt = document.createElement("option");
            opt.value = op;
            opt.textContent = op;
            if (op === filter.op) opt.selected = true;
            opSelect.appendChild(opt);
        });
        opSelect.addEventListener("change", (e) => {
            filter.op = e.target.value;
            // Hide value input if operator is IS NULL or IS NOT NULL
            if (filter.op.includes("NULL")) {
                valueInput.style.display = "none";
            } else {
                valueInput.style.display = "inline-block";
            }
            generateSQL();
        });
        
        // 4. Value Input
        const valueInput = document.createElement("input");
        valueInput.type = "text";
        valueInput.className = "filter-value-input";
        valueInput.value = filter.value;
        valueInput.placeholder = "Ex: 'A' ou 1000";
        if (filter.op.includes("NULL")) {
            valueInput.style.display = "none";
        }
        valueInput.addEventListener("input", (e) => {
            filter.value = e.target.value;
            generateSQL();
        });
        
        // 5. Delete Button
        const delBtn = document.createElement("button");
        delBtn.className = "btn-remove-filter";
        delBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        delBtn.title = "Excluir Condição";
        delBtn.addEventListener("click", () => {
            customFilters.splice(index, 1);
            renderCustomFiltersList();
            generateSQL();
        });
        
        row.appendChild(tableSelect);
        row.appendChild(fieldSelect);
        row.appendChild(opSelect);
        row.appendChild(valueInput);
        row.appendChild(delBtn);
        
        customFiltersList.appendChild(row);
    });
}

function updatePlanilhaNetMapping() {
    const mappingContainer = document.getElementById("planilha-net-param-mapping");
    if (!mappingContainer) return;
    
    mappingContainer.innerHTML = "";
    
    const params = [];
    
    if (cbFilterColigada.checked) {
        params.push({
            name: ":CODCOLIGADA_N",
            type: "Numérico (Coligada)",
            desc: "Identifica a Coligada ativa (ex: associar à célula A1 da Planilha .NET)."
        });
    }
    
    if (cbFilterChapa.checked && activeTables.has("PFUNC")) {
        params.push({
            name: ":CHAPA_S",
            type: "Alfanumérico (Matrícula)",
            desc: "Identifica a Chapa do Funcionário (ex: associar à célula B1 da Planilha .NET)."
        });
    }
    
    // Check if custom filters contain any parameter
    customFilters.forEach(f => {
        if (f.value.startsWith(":")) {
            const paramName = f.value;
            let typeName = "Alfanumérico (Texto)";
            if (paramName.endsWith("_N")) typeName = "Numérico (Inteiro)";
            else if (paramName.endsWith("_V")) typeName = "Numérico (Decimal)";
            else if (paramName.endsWith("_D")) typeName = "Data/Hora";
            
            if (!params.some(p => p.name === paramName)) {
                params.push({
                    name: paramName,
                    type: typeName,
                    desc: `Filtro customizado para o campo ${f.table}.${f.field} (associar à célula correspondente).`
                });
            }
        }
    });
    
    if (params.length === 0) {
        mappingContainer.innerHTML = `
            <div style="background: rgba(255, 255, 255, 0.02); border: 1px dashed var(--border-color); border-radius: 6px; padding: 12px; text-align: center; color: var(--text-muted); font-size: 0.75rem;">
                Nenhum parâmetro dinâmico mapeado. Ative "Parâmetro de Coligada" ou "Parâmetro de Chapa" acima para ver o mapeamento.
            </div>
        `;
        return;
    }
    
    params.forEach(p => {
        const item = document.createElement("div");
        item.style.display = "flex";
        item.style.flexDirection = "column";
        item.style.gap = "4px";
        item.style.background = "rgba(255, 255, 255, 0.02)";
        item.style.border = "1px solid var(--border-color)";
        item.style.borderRadius = "6px";
        item.style.padding = "8px 12px";
        
        const header = document.createElement("div");
        header.style.display = "flex";
        header.style.justifyContent = "space-between";
        header.style.alignItems = "center";
        
        const nameSpan = document.createElement("span");
        nameSpan.style.fontFamily = "var(--font-mono)";
        nameSpan.style.fontSize = "0.75rem";
        nameSpan.style.fontWeight = "700";
        nameSpan.style.color = "var(--accent-green)";
        nameSpan.textContent = p.name;
        
        const typeBadge = document.createElement("span");
        typeBadge.style.fontSize = "0.65rem";
        typeBadge.style.fontWeight = "600";
        typeBadge.style.textTransform = "uppercase";
        typeBadge.style.color = "var(--text-muted)";
        typeBadge.textContent = p.type;
        
        header.appendChild(nameSpan);
        header.appendChild(typeBadge);
        
        const descP = document.createElement("p");
        descP.style.fontSize = "0.72rem";
        descP.style.color = "var(--text-main)";
        descP.style.margin = "0";
        descP.textContent = p.desc;
        
        item.appendChild(header);
        item.appendChild(descP);
        mappingContainer.appendChild(item);
    });
}

// 7. SQL QUERY GENERATOR ENGINE
function generateSQL() {
    if (activeTables.size === 0) {
        sqlHighlighted.innerHTML = `<span class="sql-comment">-- Selecione tabelas e campos na barra lateral para gerar a consulta...</span>`;
        sqlRawTextarea.value = "-- Selecione tabelas e campos na barra lateral para gerar a consulta...";
        return;
    }
    
    const baseTable = findBaseTable();
    const isSqlServer = activeDialect === "sqlserver";
    const nolock = isSqlServer ? " (NOLOCK)" : "";
    
    // A. Columns selections list
    const columnsList = [];
    activeTables.forEach(tKey => {
        const table = rmSchema[tKey];
        Object.keys(table.fields).forEach(fKey => {
            if (table.fields[fKey].selected) {
                columnsList.push(`  ${tKey}.${fKey} AS [${tKey}_${fKey}]`);
            }
        });
    });
    
    let selectClause = "SELECT\n";
    if (columnsList.length > 0) {
        selectClause += columnsList.join(",\n");
    } else {
        selectClause += `  ${baseTable}.*`;
    }
    
    // B. FROM & JOIN clauses
    let fromClause = `\nFROM ${baseTable}${nolock}`;
    
    if (cbAutoJoin.checked) {
        const joins = calculateJoins(baseTable, activeTables);
        joins.forEach(join => {
            fromClause += `\nINNER JOIN ${join.table}${nolock} ON ${join.condition}`;
        });
    } else if (activeTables.size > 1) {
        activeTables.forEach(tKey => {
            if (tKey !== baseTable) {
                fromClause += `,\n     ${tKey}${nolock}`;
            }
        });
    }
    
    // C. WHERE clauses
    const whereClauses = [];
    
    // Active filters checked
    if (cbFilterActive.checked && activeTables.has("PFUNC")) {
        whereClauses.push("PFUNC.CODSITUACAO <> 'D'");
    }
    
    // Coligada Context Parameter
    if (cbFilterColigada.checked) {
        const colParam = modePlanilhaNet.checked ? ":CODCOLIGADA_N" : ":PLN_CODCOLIGADA";
        if (activeTables.has("PFUNC")) {
            whereClauses.push(`PFUNC.CODCOLIGADA = ${colParam}`);
        } else if (activeTables.has("PFPERFF")) {
            whereClauses.push(`PFPERFF.CODCOLIGADA = ${colParam}`);
        } else if (activeTables.has("PSECAO")) {
            whereClauses.push(`PSECAO.CODCOLIGADA = ${colParam}`);
        } else if (activeTables.has("PFUNCAO")) {
            whereClauses.push(`PFUNCAO.CODCOLIGADA = ${colParam}`);
        }
    }
    
    // Chapa parameter
    if (cbFilterChapa.checked && activeTables.has("PFUNC")) {
        const chapaParam = modePlanilhaNet.checked ? ":CHAPA_S" : ":PLN_CHAPA";
        whereClauses.push(`PFUNC.CHAPA = ${chapaParam}`);
    }
    
    // Custom filters
    customFilters.forEach(f => {
        if (f.op.includes("NULL")) {
            whereClauses.push(`${f.table}.${f.field} ${f.op}`);
        } else {
            whereClauses.push(`${f.table}.${f.field} ${f.op} ${f.value}`);
        }
    });
    
    let whereClause = "";
    if (whereClauses.length > 0) {
        whereClause = `\nWHERE\n  ` + whereClauses.join(" \n  AND ");
    }
    
    // Build full SQL
    const fullSQL = selectClause + fromClause + whereClause;
    
    // Set raw text
    sqlRawTextarea.value = fullSQL;
    
    // Render highlighted HTML
    sqlHighlighted.innerHTML = highlightSQL(fullSQL);
    
    // Planilha .NET mapping update
    updatePlanilhaNetMapping();
}

// SQL syntax highlighter matching token regex
function highlightSQL(sql) {
    // Escape HTML first
    let escaped = sql
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
        
    // Define patterns and replacement CSS styles
    const keywords = /\b(SELECT|FROM|INNER JOIN|LEFT JOIN|OUTER JOIN|RIGHT JOIN|ON|WHERE|AND|OR|AS|IN|NOLOCK|LIKE|IS NULL|IS NOT NULL|ORDER BY|GROUP BY)\b/gi;
    const tableKeys = Object.keys(rmSchema).join("|");
    const tables = new RegExp(`\\b(${tableKeys})\\b`, "g");
    const parameters = /(:PLN_[A-Z0-9_]+|:[A-Z0-9_]+)/g;
    const comments = /(--.*$)/gm;
    const strings = /('[^']*')/g;
    const numbers = /\b(\d+)\b/g;
    const columnAlias = /(\[[A-Z0-9_]+\])/g;
    
    // Replace with token class wrappers
    escaped = escaped.replace(comments, '<span class="sql-comment">$1</span>');
    escaped = escaped.replace(strings, '<span class="sql-string">$1</span>');
    escaped = escaped.replace(keywords, '<span class="sql-keyword">$1</span>');
    escaped = escaped.replace(tables, '<span class="sql-table">$1</span>');
    escaped = escaped.replace(parameters, '<span class="sql-param">$1</span>');
    escaped = escaped.replace(columnAlias, '<span class="sql-column">$1</span>');
    
    return escaped;
}

// Format SQL spacing beautifier
btnFormatSql.addEventListener("click", () => {
    let sql = sqlRawTextarea.value;
    
    // Very simple beauty format
    sql = sql.replace(/\s+/g, " ");
    sql = sql.replace(/\bSELECT\b/g, "SELECT\n ");
    sql = sql.replace(/\bFROM\b/g, "\nFROM");
    sql = sql.replace(/\bINNER JOIN\b/g, "\nINNER JOIN");
    sql = sql.replace(/\bLEFT JOIN\b/g, "\nLEFT JOIN");
    sql = sql.replace(/\bWHERE\b/g, "\nWHERE\n ");
    sql = sql.replace(/\bAND\b/g, "\n  AND");
    sql = sql.replace(/,\s*/g, ",\n ");
    
    sqlRawTextarea.value = sql;
    sqlHighlighted.innerHTML = highlightSQL(sql);
    showToast("Consulta SQL formatada com sucesso!", "success");
});

// Clear everything
btnClear.addEventListener("click", () => {
    activeTables.clear();
    customFilters = [];
    
    Object.keys(rmSchema).forEach(tKey => {
        Object.keys(rmSchema[tKey].fields).forEach(fKey => {
            rmSchema[tKey].fields[fKey].selected = false;
        });
    });
    
    cbFilterActive.checked = true;
    cbFilterColigada.checked = false;
    cbFilterChapa.checked = false;
    
    initTablesAccordion();
    updateActiveTablesUI();
    renderCustomFiltersList();
    generateSQL();
    
    showToast("Limpado com sucesso!", "success");
});

// 8. ACTIONS: COPY, DOWNLOAD SQL, EXPORT TOTVS RM XML
btnCopy.addEventListener("click", () => {
    sqlRawTextarea.select();
    sqlRawTextarea.setSelectionRange(0, 99999);
    
    navigator.clipboard.writeText(sqlRawTextarea.value)
        .then(() => {
            showToast("Código SQL copiado para a área de transferência!", "success");
        })
        .catch(() => {
            showToast("Erro ao copiar. Selecione e copie manualmente.", "info");
        });
});

btnDownloadSql.addEventListener("click", () => {
    const sqlText = sqlRawTextarea.value;
    const blob = new Blob([sqlText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = `${queryXmlCode.toLowerCase().replace(/\./g, "_")}.sql`;
    document.body.appendChild(a);
    a.click();
    
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("Arquivo SQL salvo com sucesso!", "success");
});

btnExportXml.addEventListener("click", () => {
    const sqlText = sqlRawTextarea.value;
    
    // Generate TOTVS RM GlbConsultaSQLData XML structure
    const xmlContent = `<?xml version="1.0" encoding="utf-8"?>
<DataServer Name="GlbConsultaSQLData">
  <GCONSSQL>
    <CODCOLIGADA>1</CODCOLIGADA>
    <CODIGO>${queryXmlCode}</CODIGO>
    <DESCRICAO>${queryXmlTitle}</DESCRICAO>
    <SISTEMA>P</SISTEMA>
    <TEXTO><![CDATA[${sqlText}]]></TEXTO>
  </GCONSSQL>
</DataServer>`;

    const blob = new Blob([xmlContent], { type: "text/xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = `${queryXmlCode.toLowerCase().replace(/\./g, "_")}.xml`;
    document.body.appendChild(a);
    a.click();
    
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("XML gerado! Importe-o no painel 'Consultas SQL' do TOTVS RM.", "success");
});

// Search bar filter table & columns
tableSearchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    document.querySelectorAll(".accordion-item").forEach(item => {
        const tableKey = item.dataset.table;
        const table = rmSchema[tableKey];
        
        let hasMatch = false;
        
        if (tableKey.toLowerCase().includes(query) || table.desc.toLowerCase().includes(query)) {
            hasMatch = true;
        }
        
        // Check fields inside table
        const fields = item.querySelectorAll(".field-item");
        fields.forEach(fieldItem => {
            const fieldName = fieldItem.querySelector(".field-name").textContent.toLowerCase();
            const fieldDesc = fieldItem.querySelector(".field-desc").textContent.toLowerCase();
            
            if (fieldName.includes(query) || fieldDesc.includes(query)) {
                fieldItem.style.display = "flex";
                hasMatch = true;
            } else if (query !== "") {
                fieldItem.style.display = "none";
            } else {
                fieldItem.style.display = "flex";
            }
        });
        
        if (hasMatch) {
            item.style.display = "block";
            // Auto expand items if searching
            if (query !== "") {
                item.classList.add("expanded");
                // Reveal all field items under match
            } else {
                item.classList.remove("expanded");
            }
        } else {
            item.style.display = "none";
        }
    });
});

// Common checkboxes triggers
cbFilterActive.addEventListener("change", generateSQL);
cbFilterColigada.addEventListener("change", generateSQL);
cbFilterChapa.addEventListener("change", generateSQL);
cbAutoJoin.addEventListener("change", (e) => {
    updateActiveTablesUI();
    generateSQL();
});

modePlanilhaNet.addEventListener("change", (e) => {
    const active = e.target.checked;
    if (active) {
        lblFilterColigada.textContent = "Parâmetro :CODCOLIGADA_N";
        lblFilterColigada.title = "Formata o parâmetro para Planilha .NET como numérico (:CODCOLIGADA_N)";
        lblFilterChapa.textContent = "Parâmetro :CHAPA_S";
        lblFilterChapa.title = "Formata o parâmetro para Planilha .NET como alfanumérico (:CHAPA_S)";
        planilhaNetHelper.style.display = "block";
    } else {
        lblFilterColigada.textContent = "Parâmetro de Coligada (:PLN_CODCOLIGADA)";
        lblFilterColigada.title = "Utiliza o parâmetro de coligada do contexto do RM (:PLN_CODCOLIGADA)";
        lblFilterChapa.textContent = "Parâmetro de Chapa (:PLN_CHAPA)";
        lblFilterChapa.title = "Adiciona filtro pela chapa em execução (:PLN_CHAPA)";
        planilhaNetHelper.style.display = "none";
    }
    generateSQL();
});

// 9. NEW TABLE MODAL & REGISTRATION LOGIC
const newTableModal = document.getElementById("new-table-modal");
const btnNewTable = document.getElementById("btn-new-table");
const closeNewTableBtns = document.querySelectorAll(".close-new-table-btn");
const btnAddModalField = document.getElementById("btn-add-modal-field");
const modalFieldsList = document.getElementById("modal-fields-list");
const btnSaveTable = document.getElementById("btn-save-table");
const newTableForm = document.getElementById("new-table-form");

btnNewTable.addEventListener("click", () => {
    newTableForm.reset();
    modalFieldsList.innerHTML = "";
    
    // Default standard fields for RM Labore tables
    addModalFieldRow("CODCOLIGADA", "Código da Coligada", "smallint");
    addModalFieldRow("CHAPA", "Chapa do Funcionário", "varchar");
    
    const codeInput = document.getElementById("new-table-code");
    const joinInput = document.getElementById("new-table-join");
    
    codeInput.oninput = (e) => {
        const val = e.target.value.toUpperCase().replace(/\s/g, "");
        joinInput.value = `PFUNC.CODCOLIGADA = ${val}.CODCOLIGADA AND PFUNC.CHAPA = ${val}.CHAPA`;
    };
    
    newTableModal.classList.add("show");
});

closeNewTableBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        newTableModal.classList.remove("show");
    });
});

function addModalFieldRow(name = "", desc = "", type = "varchar") {
    const row = document.createElement("div");
    row.className = "modal-field-row";
    row.style.display = "grid";
    row.style.gridTemplateColumns = "1.5fr 2fr 1fr auto";
    row.style.gap = "8px";
    row.style.alignItems = "center";
    row.style.background = "rgba(255, 255, 255, 0.02)";
    row.style.border = "1px solid var(--border-color)";
    row.style.padding = "8px";
    row.style.borderRadius = "6px";
    row.style.marginBottom = "6px";
    
    // Name input
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Ex: CODTIPO";
    nameInput.value = name;
    nameInput.required = true;
    nameInput.className = "m-field-name";
    nameInput.style.background = "var(--bg-input)";
    nameInput.style.border = "1px solid var(--border-color)";
    nameInput.style.color = "var(--text-main)";
    nameInput.style.fontFamily = "var(--font-mono)";
    nameInput.style.fontSize = "0.75rem";
    nameInput.style.padding = "5px 8px";
    nameInput.style.borderRadius = "4px";
    nameInput.style.outline = "none";
    nameInput.style.textTransform = "uppercase";
    
    // Desc input
    const descInput = document.createElement("input");
    descInput.type = "text";
    descInput.placeholder = "Ex: Tipo de Contrato";
    descInput.value = desc;
    descInput.required = true;
    descInput.className = "m-field-desc";
    descInput.style.background = "var(--bg-input)";
    descInput.style.border = "1px solid var(--border-color)";
    descInput.style.color = "var(--text-main)";
    descInput.style.fontFamily = "var(--font-sans)";
    descInput.style.fontSize = "0.75rem";
    descInput.style.padding = "5px 8px";
    descInput.style.borderRadius = "4px";
    descInput.style.outline = "none";
    
    // Type selector
    const typeSelect = document.createElement("select");
    typeSelect.className = "m-field-type";
    typeSelect.style.background = "var(--bg-input)";
    typeSelect.style.border = "1px solid var(--border-color)";
    typeSelect.style.color = "var(--text-main)";
    typeSelect.style.fontSize = "0.75rem";
    typeSelect.style.padding = "5px 8px";
    typeSelect.style.borderRadius = "4px";
    typeSelect.style.outline = "none";
    typeSelect.style.cursor = "pointer";
    
    const types = ["varchar", "int", "numeric", "datetime", "char", "smallint"];
    types.forEach(t => {
        const opt = document.createElement("option");
        opt.value = t;
        opt.textContent = t.toUpperCase();
        if (t === type) opt.selected = true;
        typeSelect.appendChild(opt);
    });
    
    // Remove button
    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.style.background = "transparent";
    delBtn.style.border = "none";
    delBtn.style.color = "var(--accent-red)";
    delBtn.style.cursor = "pointer";
    delBtn.style.padding = "5px";
    delBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    delBtn.addEventListener("click", () => {
        row.remove();
    });
    
    row.appendChild(nameInput);
    row.appendChild(descInput);
    row.appendChild(typeSelect);
    row.appendChild(delBtn);
    
    modalFieldsList.appendChild(row);
}

btnAddModalField.addEventListener("click", () => {
    addModalFieldRow();
});

btnSaveTable.addEventListener("click", () => {
    const tableCode = document.getElementById("new-table-code").value.trim().toUpperCase().replace(/\s/g, "");
    const tableDesc = document.getElementById("new-table-desc").value.trim();
    const tablePriority = parseInt(document.getElementById("new-table-priority").value, 10);
    const tableJoin = document.getElementById("new-table-join").value.trim();
    
    if (!tableCode || !tableDesc || !tableJoin) {
        showToast("Por favor, preencha todos os campos da tabela!", "info");
        return;
    }
    
    if (rmSchema[tableCode]) {
        showToast(`A tabela ${tableCode} já existe no sistema!`, "info");
        return;
    }
    
    const fieldRows = modalFieldsList.querySelectorAll(".modal-field-row");
    if (fieldRows.length === 0) {
        showToast("Adicione pelo menos 1 campo na tabela!", "info");
        return;
    }
    
    const fieldsObj = {};
    let hasError = false;
    
    fieldRows.forEach(row => {
        const fName = row.querySelector(".m-field-name").value.trim().toUpperCase().replace(/\s/g, "");
        const fDesc = row.querySelector(".m-field-desc").value.trim();
        const fType = row.querySelector(".m-field-type").value;
        
        if (!fName || !fDesc) {
            hasError = true;
            return;
        }
        
        fieldsObj[fName] = {
            desc: fDesc,
            type: fType,
            selected: true // By default, newly registered table fields are marked checked
        };
    });
    
    if (hasError) {
        showToast("Preencha todos os nomes e descrições dos campos!", "info");
        return;
    }
    
    // Register in memory
    rmSchema[tableCode] = {
        code: tableCode,
        desc: tableDesc,
        priority: tablePriority,
        joinCondition: tableJoin,
        fields: fieldsObj
    };
    
    // Sync to localStorage
    const stored = localStorage.getItem("rm_custom_schemas");
    const custom = stored ? JSON.parse(stored) : {};
    custom[tableCode] = rmSchema[tableCode];
    localStorage.setItem("rm_custom_schemas", JSON.stringify(custom));
    
    // Auto select table
    activeTables.add(tableCode);
    
    // Close modal
    newTableModal.classList.remove("show");
    
    // Refresh UI and SQL
    initTablesAccordion();
    updateActiveTablesUI();
    generateSQL();
    
    showToast(`Tabela ${tableCode} cadastrada e selecionada!`, "success");
});

// 10. CUSTOM TEMPLATES LOGIC
const btnSaveAsTemplate = document.getElementById("btn-save-as-template");
const saveTemplateModal = document.getElementById("save-template-modal");
const closeSaveTemplateBtns = document.querySelectorAll(".close-save-template-btn");
const btnSubmitSaveTemplate = document.getElementById("btn-submit-save-template");
const saveTemplateForm = document.getElementById("save-template-form");

btnSaveAsTemplate.addEventListener("click", () => {
    if (activeTables.size === 0) {
        showToast("Selecione pelo menos 1 tabela e alguns campos para poder salvar como modelo!", "info");
        return;
    }
    
    // Auto populate defaults
    saveTemplateForm.reset();
    document.getElementById("new-template-title").value = queryXmlTitle !== "Consulta Customizada RM Labore" ? queryXmlTitle : "";
    
    saveTemplateModal.classList.add("show");
});

closeSaveTemplateBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        saveTemplateModal.classList.remove("show");
    });
});

btnSubmitSaveTemplate.addEventListener("click", () => {
    const title = document.getElementById("new-template-title").value.trim();
    const desc = document.getElementById("new-template-desc").value.trim();
    
    if (!title || !desc) {
        showToast("Preencha o título e a descrição do modelo!", "info");
        return;
    }
    
    const id = title.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // remove accents
        .replace(/[^a-z0-9\s-]/g, "") // remove special chars
        .replace(/\s+/g, "-") // replace spaces with dash
        .replace(/-+/g, "-"); // merge multiple dashes
        
    // Extract currently selected fields from memory
    const selectedFields = {};
    activeTables.forEach(tKey => {
        const fields = [];
        Object.keys(rmSchema[tKey].fields).forEach(fKey => {
            if (rmSchema[tKey].fields[fKey].selected) {
                fields.push(fKey);
            }
        });
        selectedFields[tKey] = fields;
    });
    
    // Extract filters
    const filters = [];
    customFilters.forEach(f => {
        filters.push({
            table: f.table,
            field: f.field,
            op: f.op,
            value: f.value,
            type: "custom"
        });
    });
    
    const newTemplate = {
        id: id,
        title: title,
        desc: desc,
        tables: Array.from(activeTables),
        selectedFields: selectedFields,
        filters: filters,
        activeFilters: {
            active: cbFilterActive.checked,
            coligada: cbFilterColigada.checked,
            chapa: cbFilterChapa.checked
        }
    };
    
    // Add to sqlTemplates
    sqlTemplates.push(newTemplate);
    
    // Save to localStorage
    const stored = localStorage.getItem("rm_custom_templates");
    const customList = stored ? JSON.parse(stored) : [];
    // Prevent duplicate ids in localStorage
    const filtered = customList.filter(t => t.id !== id);
    filtered.push(newTemplate);
    localStorage.setItem("rm_custom_templates", JSON.stringify(filtered));
    
    // Close modal
    saveTemplateModal.classList.remove("show");
    
    // Re-render templates list
    initTemplates();
    
    showToast(`Modelo "${title}" salvo com sucesso!`, "success");
});

function loadCustomTemplates() {
    const stored = localStorage.getItem("rm_custom_templates");
    if (stored) {
        try {
            const custom = JSON.parse(stored);
            if (Array.isArray(custom)) {
                custom.forEach(tpl => {
                    if (!sqlTemplates.some(t => t.id === tpl.id)) {
                        sqlTemplates.push(tpl);
                    }
                });
            }
        } catch(e) {
            console.error("Erro ao carregar modelos customizados:", e);
        }
    }
}

function loadCustomSchemas() {
    const stored = localStorage.getItem("rm_custom_schemas");
    if (stored) {
        try {
            const custom = JSON.parse(stored);
            Object.keys(custom).forEach(tKey => {
                rmSchema[tKey] = custom[tKey];
            });
        } catch(e) {
            console.error("Erro ao carregar esquemas customizados:", e);
        }
    }
}

// Main Initializer
function init() {
    loadCustomSchemas();
    loadCustomTemplates();
    
    // Set base active tables to PFUNC and PPESSOA by default
    activeTables.add("PFUNC");
    activeTables.add("PPESSOA");
    
    initTablesAccordion();
    updateActiveTablesUI();
    initTemplates();
    generateSQL();
}

// Launch app
init();
