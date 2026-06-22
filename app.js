/* ==========================================================================
   RM SQL ARCHITECT - CORE JAVASCRIPT ENGINE
   ========================================================================== */

// 1. DATA SCHEMA FOR TOTVS RM LABORE
const rmSchema = {
    PFVALORFORCADO: {
        code: "PFVALORFORCADO",
        desc: "Valores Forcados do Movimento",
        priority: 4,
        joinCondition: "PFUNC.CODCOLIGADA = PFVALORFORCADO.CODCOLIGADA AND PFUNC.CHAPA = PFVALORFORCADO.CHAPA",
        fields: {
            CODCOLIGADA: { desc: "Coligada", type: "smallint", selected: false },
            CHAPA: { desc: "Chapa", type: "varchar", selected: false },
            CODEVENTO: { desc: "Codigo Evento", type: "varchar", selected: true },
            VALOR: { desc: "Valor", type: "numeric", selected: true },
            NROPERIODO: { desc: "Periodo", type: "smallint", selected: false },
            MESCOMP: { desc: "Mes", type: "smallint", selected: false },
            ANOCOMP: { desc: "Ano", type: "smallint", selected: false }
        }
    },
    PEVENTO: {
        code: "PEVENTO",
        desc: "Cadastro de Eventos",
        priority: 2,
        joinCondition: "PFUNC.CODCOLIGADA = PEVENTO.CODCOLIGADA AND PFVALORFORCADO.CODEVENTO = PEVENTO.CODIGO",
        fields: {
            CODCOLIGADA: { desc: "Coligada", type: "smallint", selected: false },
            CODIGO: { desc: "Codigo Evento", type: "varchar", selected: false },
            DESCRICAO: { desc: "Descricao", type: "varchar", selected: true }
        }
    },
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
            ALIQRATISENTO: { desc: "Alíquota RAT Isento", type: "numeric", selected: false },
            ALTERACAOCAGED: { desc: "Código de Alteração CAGED", type: "smallint", selected: false },
            ATIVECONOMICA: { desc: "Atividade Econômica (0/1)", type: "smallint", selected: false },
            BAIRRO: { desc: "Bairro", type: "varchar", selected: false },
            BENEFPONTOS: { desc: "Benefício por Pontos", type: "smallint", selected: false },
            CAEPF: { desc: "CAEPF (Cadastro de Atividade Econômica)", type: "varchar", selected: false },
            CAPITALSOCEMP: { desc: "Capital Social da Empresa", type: "numeric", selected: false },
            CAPITALSOCESTAB: { desc: "Capital Social do Estabelecimento", type: "numeric", selected: false },
            CATEGORIA: { desc: "Categoria da Seção", type: "varchar", selected: false },
            CAUSAMUDANCACGC: { desc: "Causa de Mudança do CNPJ", type: "varchar", selected: false },
            CEI: { desc: "CEI (Cadastro Específico do INSS)", type: "varchar", selected: false },
            CENTRANTES5DIA1: { desc: "Centralização Antes 5 Dia 1", type: "datetime", selected: false },
            CENTRANTES5DIA2: { desc: "Centralização Antes 5 Dia 2", type: "datetime", selected: false },
            CEP: { desc: "CEP", type: "varchar", selected: false },
            CGC: { desc: "CNPJ da Filial/Seção", type: "varchar", selected: false },
            CGCANTERIOR: { desc: "CNPJ / CGC Anterior", type: "varchar", selected: false },
            CHAPACHEFE: { desc: "Chapa do Chefe / Responsável", type: "varchar", selected: false },
            CIDADE: { desc: "Cidade", type: "varchar", selected: false },
            CNAEPREPONDERANTE: { desc: "CNAE Preponderante", type: "varchar", selected: false },
            CNAERAIS: { desc: "CNAE RAIS", type: "varchar", selected: false },
            CNAESEFIP: { desc: "CNAE SEFIP", type: "varchar", selected: false },
            CNO: { desc: "CNO (Cadastro Nacional de Obras)", type: "varchar", selected: false },
            CODAREAATUACAO: { desc: "Código da Área de Atuação", type: "varchar", selected: false },
            CODCALENDARIO: { desc: "Código do Calendário", type: "varchar", selected: false },
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: false },
            CODDEPTO: { desc: "Código do Departamento", type: "varchar", selected: false },
            CODDEPTOCONT: { desc: "Código do Departamento Contábil", type: "varchar", selected: false },
            CODFILIAL: { desc: "Código da Filial", type: "smallint", selected: false },
            CODIGO: { desc: "Código da Seção", type: "varchar", selected: true },
            CODIGOCEF: { desc: "Código CEF", type: "varchar", selected: false },
            CODIGOPAI: { desc: "Código da Seção Mãe / Pai", type: "varchar", selected: false },
            CODMUNICIPIO: { desc: "Código do Município (IBGE)", type: "varchar", selected: false },
            CODPAGTOGPS: { desc: "Código de Pagamento da GPS", type: "varchar", selected: false },
            CODPAGTOGPSTERCEIROS: { desc: "Código de Pagamento GPS Terceiros", type: "varchar", selected: false },
            CODPLANO: { desc: "Código do Plano", type: "varchar", selected: false },
            CODSUSPPROCJUDAPR: { desc: "Cód. Suspensão Proc. Judicial APR", type: "varchar", selected: false },
            CODSUSPPROCJUDFAP: { desc: "Cód. Suspensão Proc. Judicial FAP", type: "varchar", selected: false },
            CODSUSPPROCJUDPCD: { desc: "Cód. Suspensão Proc. Judicial PCD", type: "varchar", selected: false },
            CODSUSPPROCJUDRAT: { desc: "Cód. Suspensão Proc. Judicial RAT", type: "varchar", selected: false },
            CODTABELA: { desc: "Código da Tabela", type: "varchar", selected: false },
            CODTERCEIROSINSS: { desc: "Código de Terceiros INSS", type: "varchar", selected: false },
            CODTERCSSUSP: { desc: "Código de Terceiros Suspenso", type: "varchar", selected: false },
            CODTIPORUA: { desc: "Código do Tipo de Rua", type: "varchar", selected: false },
            CODUNIDENTREGA: { desc: "Código da Unidade de Entrega", type: "varchar", selected: false },
            COMPLEMENTO: { desc: "Complemento do Endereço", type: "varchar", selected: false },
            COMPLEMENTOGRPS1: { desc: "Complemento GRPS 1", type: "varchar", selected: false },
            COMPLEMENTOGRPS2: { desc: "Complemento GRPS 2", type: "varchar", selected: false },
            COMPLEMENTOGRPS3: { desc: "Complemento GRPS 3", type: "varchar", selected: false },
            CONTAPR: { desc: "Contribuição APR", type: "smallint", selected: false },
            CONTATO: { desc: "Nome do Contato", type: "varchar", selected: false },
            CONTENTEDAPR: { desc: "Contratante Aprendiz (0/1)", type: "smallint", selected: false },
            CONTPCD: { desc: "Contratante PCD (0/1)", type: "smallint", selected: false },
            CONTRIBSESIESENAI: { desc: "Contribuição SESI/SENAI (0/1)", type: "smallint", selected: false },
            DDD: { desc: "DDD do Telefone", type: "varchar", selected: false },
            DESCRICAO: { desc: "Nome da Seção / Filial", type: "varchar", selected: true },
            DESCRICAOPPP: { desc: "Descrição PPP (Perfil Profissiográfico Previdenciário)", type: "varchar", selected: false },
            DISTRIBPETROLEO: { desc: "Distribuidora de Petróleo (0/1)", type: "smallint", selected: false },
            DTENCERRATIV: { desc: "Data de Encerramento de Atividades", type: "datetime", selected: false },
            EMAIL: { desc: "E-mail Principal", type: "varchar", selected: false },
            ENCERRAMENTO: { desc: "Data de Encerramento", type: "datetime", selected: false },
            ENDERECOALTEROU: { desc: "Endereço Alterou (0/1)", type: "smallint", selected: false },
            ENDERECOPAGTO: { desc: "Endereço de Pagamento", type: "varchar", selected: false },
            ESTADO: { desc: "Estado / UF", type: "varchar", selected: false },
            FATURAMENTOBRUTO: { desc: "Faturamento Bruto", type: "numeric", selected: false },
            FIMPERRECCENTR1: { desc: "Fim do Período Recibo Centralizado 1", type: "datetime", selected: false },
            FIMPERRECCENTR2: { desc: "Fim do Período Recibo Centralizado 2", type: "datetime", selected: false },
            FIMPERRECPROPR1: { desc: "Fim do Período Recibo Próprio 1", type: "datetime", selected: false },
            FIMPERRECPROPR2: { desc: "Fim do Período Recibo Próprio 2", type: "datetime", selected: false },
            FPAS: { desc: "Código FPAS (Previdência Social)", type: "varchar", selected: false },
            ID: { desc: "Identificador Único (ID)", type: "int", selected: false },
            IDCLASSEVALOR: { desc: "Classe de Valor (Contabilidade)", type: "int", selected: false },
            IDENTIFICACAOCGC: { desc: "Identificação do CNPJ", type: "varchar", selected: false },
            IDITEMCONTABIL: { desc: "Identificador do Item Contábil", type: "varchar", selected: false },
            IDMEMOAMBTRAB: { desc: "Memorial de Ambiente de Trabalho", type: "int", selected: false },
            INIPERRECCENTR1: { desc: "Início do Período Recibo Centralizado 1", type: "datetime", selected: false },
            INIPERRECCENTR2: { desc: "Início do Período Recibo Centralizado 2", type: "datetime", selected: false },
            INIPERRECPROPR1: { desc: "Início do Período Recibo Próprio 1", type: "datetime", selected: false },
            INIPERRECPROPR2: { desc: "Início do Período Recibo Próprio 2", type: "datetime", selected: false },
            INSCRESTADUAL: { desc: "Inscrição Estadual", type: "varchar", selected: false },
            INSCRMUNICIPAL: { desc: "Inscrição Municipal", type: "varchar", selected: false },
            INTEGRCONTABIL: { desc: "Integração Contábil (0/1)", type: "smallint", selected: false },
            INTEGRGERENCIAL: { desc: "Integração Gerencial (0/1)", type: "smallint", selected: false },
            ISENTOCONTRIBSOCIAL: { desc: "Isento de Contribuição Social (0/1)", type: "smallint", selected: false },
            LIMITEFUNC: { desc: "Limite de Funcionários", type: "int", selected: false },
            LOCALIDADE: { desc: "Localidade", type: "varchar", selected: false },
            MESDATABASE: { desc: "Mês da Data-Base", type: "smallint", selected: false },
            MUDOUCNAE: { desc: "Mudou CNAE (0/1)", type: "smallint", selected: false },
            NAOEMPREGPROPR: { desc: "Não Empregado Próprio (0/1)", type: "smallint", selected: false },
            NATUREZAJURIDICA: { desc: "Código da Natureza Jurídica", type: "varchar", selected: false },
            NROCENCUSTOCONT: { desc: "Número do Centro de Custo Contábil", type: "varchar", selected: false },
            NROFILIALCONT: { desc: "Número da Filial Contábil", type: "varchar", selected: false },
            NRPROCESSOFAP: { desc: "Processo Administrativo/Judicial FAP", type: "varchar", selected: false },
            NRPROCESSORAT: { desc: "Processo Administrativo/Judicial RAT", type: "varchar", selected: false },
            NRPROCJUDAPR: { desc: "Processo Judicial APR", type: "varchar", selected: false },
            NRPROCJUDPCD: { desc: "Processo Judicial PCD", type: "varchar", selected: false },
            NUMERO: { desc: "Número", type: "varchar", selected: false },
            OPTASIMPLES: { desc: "Optante pelo Simples (0/1)", type: "smallint", selected: false },
            PAIS: { desc: "País", type: "varchar", selected: false },
            PARTICIPAPAT: { desc: "Participa do PAT (0/1)", type: "smallint", selected: false },
            PERCENT15ANOSGRPS: { desc: "Percentual 15 Anos GRPS", type: "numeric", selected: false },
            PERCENT20ANOSGRPS: { desc: "Percentual 20 Anos GRPS", type: "numeric", selected: false },
            PERCENT25ANOSGRPS: { desc: "Percentual 25 Anos GRPS", type: "numeric", selected: false },
            PERCENTACIDTRAB: { desc: "Percentual de Acidente de Trabalho", type: "numeric", selected: false },
            PERCENTEMPRESA: { desc: "Percentual INSS Empresa", type: "numeric", selected: false },
            PERCENTTERCEIROS: { desc: "Percentual INSS Terceiros", type: "numeric", selected: false },
            PERCISENCAOFILANTROPIA: { desc: "Percentual Isenção Filantropia", type: "numeric", selected: false },
            PERCQUADROVAGAS: { desc: "Percentual Quadro de Vagas", type: "numeric", selected: false },
            PESSOAFISICA: { desc: "Pessoa Física (0/1)", type: "smallint", selected: false },
            PORCADMCOZINHA: { desc: "Percentual Administração Cozinha", type: "numeric", selected: false },
            PORCALIMCONVENIO: { desc: "Percentual Alimentação Convênio", type: "numeric", selected: false },
            PORCCESTAALIMENTO: { desc: "Percentual Cesta Alimento", type: "numeric", selected: false },
            PORCREFEICAOCONV: { desc: "Percentual Refeição Convênio", type: "numeric", selected: false },
            PORCREFEICAOTRANSP: { desc: "Percentual Refeição Transporte", type: "numeric", selected: false },
            PORCSERVPROP: { desc: "Percentual Serviço Próprio", type: "numeric", selected: false },
            PORTEEMPRESA: { desc: "Porte da Empresa", type: "varchar", selected: false },
            PREFIXOINSCRFGTS: { desc: "Prefixo de Inscrição FGTS", type: "varchar", selected: false },
            PREFIXORAIS: { desc: "Prefixo RAIS", type: "varchar", selected: false },
            PRIMEIRADECLCAGED: { desc: "Primeira Declaração CAGED (0/1)", type: "smallint", selected: false },
            PROPRANTES5DIA1: { desc: "Próprio Antes 5 Dia 1", type: "datetime", selected: false },
            PROPRANTES5DIA2: { desc: "Próprio Antes 5 Dia 2", type: "datetime", selected: false },
            RAMAL: { desc: "Ramal do Telefone", type: "varchar", selected: false },
            RECCREATEDBY: { desc: "Usuário de Criação", type: "varchar", selected: false },
            RECCREATEDON: { desc: "Data de Criação", type: "datetime", selected: false },
            RECMODIFIEDBY: { desc: "Usuário de Alteração", type: "varchar", selected: false },
            RECMODIFIEDON: { desc: "Data de Alteração", type: "datetime", selected: false },
            RUA: { desc: "Rua / Logradouro", type: "varchar", selected: false },
            SAT: { desc: "Alíquota SAT", type: "numeric", selected: false },
            SECAOAUTONOMOS: { desc: "Seção de Autônomos (0/1)", type: "smallint", selected: false },
            SECAOCENTRALIZ: { desc: "Seção Centralizadora (0/1)", type: "smallint", selected: false },
            SECAODESATIVADA: { desc: "Seção Desativada (0/1)", type: "smallint", selected: false },
            SIMILARIDADEINTEGRACAOGUPY: { desc: "Similaridade Integração Gupy", type: "smallint", selected: false },
            TELEFONE: { desc: "Telefone de Contato", type: "varchar", selected: false },
            TIPOCAEPF: { desc: "Tipo de CAEPF", type: "smallint", selected: false },
            TIPOCONTROLEPONTO: { desc: "Tipo de Controle de Ponto", type: "smallint", selected: false },
            TIPOTAREFA: { desc: "Tipo de Tarefa", type: "smallint", selected: false },
            TPLOTACAO: { desc: "Tipo de Lotação eSocial", type: "varchar", selected: false },
            TPPROCESSOFAP: { desc: "Tipo de Processo FAP", type: "smallint", selected: false },
            TPPROCESSORAT: { desc: "Tipo de Processo RAT", type: "smallint", selected: false },
            TPPROCJUDAPR: { desc: "Tipo de Processo APR", type: "smallint", selected: false },
            TPPROCJUDPCD: { desc: "Tipo de Processo PCD", type: "smallint", selected: false },
            VALORENTIDADESACUMULADO: { desc: "Valor Entidades Acumulado", type: "numeric", selected: false },
            VALORFRETE: { desc: "Valor do Frete", type: "numeric", selected: false },
            VALORINSSACUMULADO: { desc: "Valor INSS Acumulado", type: "numeric", selected: false },
            VERBAQUADROVAGAS: { desc: "Verba Quadro de Vagas", type: "numeric", selected: false },
            VINCPAT5SAL: { desc: "Vínculo PAT Até 5 Salários (0/1)", type: "smallint", selected: false },
            VINCPATMAIOR5SAL: { desc: "Vínculo PAT Maior 5 Salários (0/1)", type: "smallint", selected: false },
            VISIVELORGANOGRAMA: { desc: "Visível no Organograma (0/1)", type: "smallint", selected: false },
            VTCODCENTROCUSTO: { desc: "VT Código do Centro de Custo", type: "varchar", selected: false },
            VTCODCLIENTE: { desc: "VT Código do Cliente", type: "varchar", selected: false },
            VTCODDEPTO: { desc: "VT Código do Departamento", type: "varchar", selected: false },
            VTCODLOCAL: { desc: "VT Código do Local", type: "varchar", selected: false },
            VTCODSECCOBRANCA: { desc: "VT Código da Seção Cobrança", type: "varchar", selected: false },
            VTCODSECENTREGA: { desc: "VT Código da Seção Entrega", type: "varchar", selected: false },
            VTCODSECFATURAM: { desc: "VT Código da Seção Faturamento", type: "varchar", selected: false },
            VTCODSECPEDIDO: { desc: "VT Código da Seção Pedido", type: "varchar", selected: false },
            VTIDENTPEDIDO: { desc: "VT Identificador do Pedido", type: "varchar", selected: false },
            VTIDENTPERSONAL: { desc: "VT Identificador Personalizado", type: "varchar", selected: false }
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
        PFUFERIAS: {
        code: "PFUFERIAS",
        desc: "Períodos Aquisitivos de Férias",
        priority: 2,
        fields: {
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: false },
            CHAPA: { desc: "Chapa do Funcionário", type: "varchar", selected: false },
            INICIOPERAQUIS: { desc: "Início do Período Aquisitivo", type: "datetime", selected: true },
            FIMPERAQUIS: { desc: "Fim do Período Aquisitivo", type: "datetime", selected: true },
            SALDO: { desc: "Saldo de Dias de Férias", type: "smallint", selected: true },
            PERIODOABERTO: { desc: "Período em Aberto (0/1)", type: "smallint", selected: true }
        }
    },
    PFUFERIASPER: {
        code: "PFUFERIASPER",
        desc: "Períodos de Gozo de Férias",
        priority: 2,
        fields: {
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: false },
            CHAPA: { desc: "Chapa do Funcionário", type: "varchar", selected: false },
            FIMPERAQUIS: { desc: "Fim do Período Aquisitivo", type: "datetime", selected: true },
            DATAINICIO: { desc: "Início do Gozo", type: "datetime", selected: true },
            DATAFIM: { desc: "Fim do Gozo", type: "datetime", selected: true },
            NRODIASFERIAS: { desc: "Dias de Férias Gozados", type: "numeric", selected: true },
            NRODIASABONO: { desc: "Dias de Abono Pecuniário", type: "numeric", selected: true },
            DATAPAGTO: { desc: "Data de Pagamento", type: "datetime", selected: false },
            DATAAVISO: { desc: "Data de Aviso", type: "datetime", selected: false },
            SITUACAOFERIAS: { desc: "Situação (M=Marcadas, G=Gozadas...)", type: "varchar", selected: false },
            FALTAS: { desc: "Faltas no Período", type: "numeric", selected: false },
            OBSERVACAO: { desc: "Observações", type: "varchar", selected: false }
        }
    },
    PFHSTHOR: {
        code: "PFHSTHOR",
        desc: "Histórico de Horários (Ponto)",
        priority: 4,
        fields: {
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: false },
            CHAPA: { desc: "Chapa do Funcionário", type: "varchar", selected: false },
            DTMUDANCA: { desc: "Data de Mudança", type: "datetime", selected: true },
            CODHORARIO: { desc: "Código do Horário", type: "varchar", selected: true }
        }
    },
    AHORARIO: {
        code: "AHORARIO",
        desc: "Cadastro de Horários (Escalas)",
        priority: 3,
        fields: {
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: false },
            CODIGO: { desc: "Código do Horário", type: "varchar", selected: true },
            DESCRICAO: { desc: "Descrição do Horário", type: "varchar", selected: true },
            MINUTOSJORNADA: { desc: "Minutos de Jornada Diária", type: "int", selected: false }
        }
    },
    ABATFUN: {
        code: "ABATFUN",
        desc: "Batidas Realizadas (Marcações)",
        priority: 3,
        fields: {
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: false },
            CHAPA: { desc: "Chapa / Matrícula", type: "varchar", selected: false },
            DATA: { desc: "Data da Batida", type: "datetime", selected: true },
            BATIDA: { desc: "Hora da Batida (Minutos)", type: "int", selected: true },
            NATUREZA: { desc: "Natureza (E/S)", type: "char", selected: false }
        }
    },
    AMOVFUN: {
        code: "AMOVFUN",
        desc: "Movimento Apurado do Ponto",
        priority: 3,
        fields: {
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: false },
            CHAPA: { desc: "Chapa / Matrícula", type: "varchar", selected: false },
            DATA: { desc: "Data da Apuração", type: "datetime", selected: true },
            FALTA: { desc: "Minutos de Faltas", type: "int", selected: true },
            ATRASO: { desc: "Minutos de Atraso", type: "int", selected: true },
            EXTRA: { desc: "Minutos de Horas Extras", type: "int", selected: true },
            ADICIONAL: { desc: "Minutos de Adicional Noturno", type: "int", selected: false }
        }
    },
    AAFHTFUN: {
        code: "AAFHTFUN",
        desc: "Ficha de Ponto Calculada (Diário)",
        priority: 3,
        fields: {
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: false },
            CHAPA: { desc: "Chapa / Matrícula", type: "varchar", selected: false },
            DATA: { desc: "Data de Referência", type: "datetime", selected: true },
            BASE: { desc: "Minutos de Jornada Base", type: "int", selected: false },
            HTRAB: { desc: "Minutos Trabalhados", type: "int", selected: false },
            EXTRAAUTORIZADO: { desc: "Minutos Extras Autorizados", type: "int", selected: false },
            ATRASO: { desc: "Minutos de Atraso", type: "int", selected: false },
            FALTA: { desc: "Minutos de Falta", type: "int", selected: false },
            ADICIONAL: { desc: "Minutos de Adicional Noturno", type: "int", selected: false },
            FERIADO: { desc: "Feriado (0/1)", type: "smallint", selected: false },
            COMPENSADO: { desc: "Compensado (0/1)", type: "smallint", selected: false },
            DESCANSO: { desc: "Descanso/DSR (0/1)", type: "smallint", selected: false }
        }
    },
    AAVISOCALCULADO: {
        code: "AAVISOCALCULADO",
        desc: "Avisos e Críticas do Ponto",
        priority: 2,
        fields: {
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: false },
            CHAPA: { desc: "Chapa do Funcionário", type: "varchar", selected: false },
            DATAREFERENCIA: { desc: "Data de Referência", type: "datetime", selected: true },
            CODAVISO: { desc: "Código do Aviso (1=Interjornada, 2=Mais 10h...)", type: "smallint", selected: true }
        }
    },
    ABANCOHORFUN: {
        code: "ABANCOHORFUN",
        desc: "Movimento Banco de Horas (Detalhado)",
        priority: 3,
        fields: {
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: false },
            CHAPA: { desc: "Chapa do Funcionário", type: "varchar", selected: false },
            DATA: { desc: "Data do Movimento", type: "datetime", selected: true },
            EXTRAFAIXA1: { desc: "Minutos Extras Faixa 1", type: "int", selected: false },
            EXTRAFAIXA2: { desc: "Minutos Extras Faixa 2", type: "int", selected: false },
            EXTRAFAIXA3: { desc: "Minutos Extras Faixa 3", type: "int", selected: false },
            EXTRAFAIXA4: { desc: "Minutos Extras Faixa 4", type: "int", selected: false },
            EXTRAFAIXA5: { desc: "Minutos Extras Faixa 5", type: "int", selected: false },
            FALTA: { desc: "Minutos Faltas", type: "int", selected: false },
            ATRASO: { desc: "Minutos Atraso", type: "int", selected: false }
        }
    },
    AMOVFUNDIA: {
        code: "AMOVFUNDIA",
        desc: "Movimento Apurado Diário",
        priority: 3,
        fields: {
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: false },
            CHAPA: { desc: "Chapa do Funcionário", type: "varchar", selected: false },
            DATA: { desc: "Data da Apuração", type: "datetime", selected: true },
            CODEVE: { desc: "Código do Evento/Rubrica", type: "varchar", selected: true },
            NUMHORAS: { desc: "Quantidade de Horas (Minutos)", type: "int", selected: true }
        }
    },
    AJORNADAFUN: {
        code: "AJORNADAFUN",
        desc: "Histórico de Jornadas de Horários",
        priority: 4,
        fields: {
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: false },
            CHAPA: { desc: "Chapa do Funcionário", type: "varchar", selected: false },
            DATAMUDANCA: { desc: "Data de Mudança", type: "datetime", selected: true },
            CODHORARIO: { desc: "Código do Horário", type: "varchar", selected: true }
        }
    },
    AHORARIOJORNADA: {
        code: "AHORARIOJORNADA",
        desc: "Cadastro de Jornadas de Escala",
        priority: 3,
        fields: {
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: false },
            CODHORARIO: { desc: "Código do Horário", type: "varchar", selected: true },
            DESCRICAO: { desc: "Descrição da Jornada", type: "varchar", selected: true }
        }
    },
    AJORHOR: {
        code: "AJORHOR",
        desc: "Cadastro de Batidas Previstas",
        priority: 2,
        fields: {
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: false },
            CODHORARIO: { desc: "Código do Horário", type: "varchar", selected: false },
            BATINICIO: { desc: "Hora da Batida (Minutos)", type: "int", selected: true },
            INDINICIO: { desc: "Índice de Início/Sequência", type: "smallint", selected: false }
        }
    },
    AOCORRENCIACALCULADA: {
        code: "AOCORRENCIACALCULADA",
        desc: "Ocorrências Diárias Calculadas",
        priority: 2,
        fields: {
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: false },
            CHAPA: { desc: "Chapa do Funcionário", type: "varchar", selected: false },
            DATAREFERENCIA: { desc: "Data de Referência", type: "datetime", selected: true },
            INICIO: { desc: "Hora Início", type: "datetime", selected: false },
            FIM: { desc: "Hora Fim", type: "datetime", selected: false },
            TIPOOCORRENCIA: { desc: "Tipo de Ocorrência (T, AREF...)", type: "char", selected: true }
        }
    },
    PSUBSTSUP: {
        code: "PSUBSTSUP",
        desc: "Substitutos de Supervisão",
        priority: 1,
        fields: {
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: false },
            CODSECAO: { desc: "Código da Seção", type: "varchar", selected: false },
            CODEQUIPE: { desc: "Código da Equipe", type: "varchar", selected: false },
            CHAPASUBST: { desc: "Chapa do Substituto", type: "varchar", selected: true },
            DATAINICIO: { desc: "Data Início", type: "datetime", selected: false },
            DATAFIM: { desc: "Data Fim", type: "datetime", selected: false }
        }
    },
    PSUBSTCHEFE: {
        code: "PSUBSTCHEFE",
        desc: "Substitutos de Chefia",
        priority: 1,
        fields: {
            CODCOLIGADA: { desc: "Código da Coligada", type: "smallint", selected: false },
            CODCOLSUBST: { desc: "Código Coligada Substituto", type: "smallint", selected: false },
            CODSECAO: { desc: "Código da Seção", type: "varchar", selected: false },
            CHAPASUBST: { desc: "Chapa do Substituto", type: "varchar", selected: true },
            DATAINICIO: { desc: "Data Início", type: "datetime", selected: false },
            DATAFIM: { desc: "Data Fim", type: "datetime", selected: false }
        }
    },
    FCFO: {
        "code": "FCFO",
        "desc": "Clientes e Fornecedores (Cadastro Geral)",
        "priority": 8,
        "joinCondition": "PFUNC.CODCOLIGADA = FCFO.CODCOLIGADA AND PPESSOA.CPF = FCFO.CGCCFO",
        "fields": {
            "CODCOLIGADA": {
                "desc": "Código da Coligada",
                "type": "smallint",
                "selected": false
            },
            "CODCFO": {
                "desc": "Código do Cliente/Fornecedor",
                "type": "varchar",
                "selected": true
            },
            "NOME": {
                "desc": "Razão Social / Nome",
                "type": "varchar",
                "selected": true
            },
            "NOMEFANTASIA": {
                "desc": "Nome Fantasia",
                "type": "varchar",
                "selected": true
            },
            "CGCCFO": {
                "desc": "CNPJ / CPF",
                "type": "varchar",
                "selected": true
            },
            "PAGAMENTOPREVIO": {
                "desc": "Pagamento Prévio (0/1)",
                "type": "smallint",
                "selected": false
            },
            "PAGTOESTRANGEIRO": {
                "desc": "Estrangeiro (0/1)",
                "type": "smallint",
                "selected": false
            },
            "NUMERO": {
                "desc": "NUMERO",
                "type": "varchar",
                "selected": false
            },
            "RUA": {
                "desc": "RUA",
                "type": "varchar",
                "selected": false
            },
            "AGENCIA / CODIGO CEDENTE": {
                "desc": "AGENCIA / CODIGO CEDENTE",
                "type": "varchar",
                "selected": false
            },
            "CEP CIDADE ESTADO PGTO": {
                "desc": "CEP CIDADE ESTADO PGTO",
                "type": "varchar",
                "selected": false
            },
            "EMAIL_COLIGADA": {
                "desc": "EMAIL_COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "ENDERECO_COLIGADA": {
                "desc": "ENDERECO_COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "IDBOLETO": {
                "desc": "IDBOLETO",
                "type": "varchar",
                "selected": false
            },
            "JUROS": {
                "desc": "JUROS",
                "type": "varchar",
                "selected": false
            },
            "MULTA": {
                "desc": "MULTA",
                "type": "varchar",
                "selected": false
            },
            "NOME_COLIGADA": {
                "desc": "NOME_COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "NOSSONUMEROBRADESCO": {
                "desc": "NOSSONUMEROBRADESCO",
                "type": "varchar",
                "selected": false
            },
            "RUA BAIRRO PGTO": {
                "desc": "RUA BAIRRO PGTO",
                "type": "varchar",
                "selected": false
            },
            "TELEFONE_COLIGADA": {
                "desc": "TELEFONE_COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "CLIENTE": {
                "desc": "CLIENTE",
                "type": "varchar",
                "selected": false
            },
            "VENCIMENTO": {
                "desc": "VENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "DATAVENCIMENTO": {
                "desc": "DATAVENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "IDLAN": {
                "desc": "IDLAN",
                "type": "int",
                "selected": false
            },
            "ANO": {
                "desc": "ANO",
                "type": "varchar",
                "selected": false
            },
            "CELULAR": {
                "desc": "CELULAR",
                "type": "varchar",
                "selected": false
            },
            "CODAPLICACAO": {
                "desc": "CODAPLICACAO",
                "type": "varchar",
                "selected": false
            },
            "CODIGOCOLIGADA": {
                "desc": "CODIGOCOLIGADA",
                "type": "varchar",
                "selected": false
            },
            "COLUMN1": {
                "desc": "Column1",
                "type": "varchar",
                "selected": false
            },
            "CONTADOR": {
                "desc": "CONTADOR",
                "type": "varchar",
                "selected": false
            },
            "DIA": {
                "desc": "DIA",
                "type": "varchar",
                "selected": false
            },
            "DIFERENÇA": {
                "desc": "DIFERENÇA",
                "type": "varchar",
                "selected": false
            },
            "EMAIL": {
                "desc": "EMAIL",
                "type": "varchar",
                "selected": false
            },
            "EMPREENDIMENTO": {
                "desc": "EMPREENDIMENTO",
                "type": "varchar",
                "selected": false
            },
            "HISTORICO": {
                "desc": "HISTORICO",
                "type": "varchar",
                "selected": false
            },
            "JUROS DE MORA": {
                "desc": "JUROS DE MORA",
                "type": "varchar",
                "selected": false
            },
            "LOTE": {
                "desc": "LOTE",
                "type": "varchar",
                "selected": false
            },
            "MES": {
                "desc": "MES",
                "type": "varchar",
                "selected": false
            },
            "METRAGEM": {
                "desc": "METRAGEM",
                "type": "varchar",
                "selected": false
            },
            "MULTA POR MORA": {
                "desc": "MULTA POR MORA",
                "type": "varchar",
                "selected": false
            },
            "NUM_VENDA": {
                "desc": "NUM_VENDA",
                "type": "varchar",
                "selected": false
            },
            "PARCELA": {
                "desc": "PARCELA",
                "type": "varchar",
                "selected": false
            },
            "QUADRA": {
                "desc": "QUADRA",
                "type": "varchar",
                "selected": false
            },
            "SITUAÇÃO DA VENDA": {
                "desc": "SITUAÇÃO DA VENDA",
                "type": "varchar",
                "selected": false
            },
            "SUPERIOR A 180 DIAS": {
                "desc": "SUPERIOR A 180 DIAS",
                "type": "varchar",
                "selected": false
            },
            "TELEFONE": {
                "desc": "TELEFONE",
                "type": "varchar",
                "selected": false
            },
            "TOTAL": {
                "desc": "TOTAL",
                "type": "varchar",
                "selected": false
            },
            "ANO VENDA": {
                "desc": "ANO VENDA",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_CLIENTE": {
                "desc": "CODIGO_CLIENTE",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_COLIGADA": {
                "desc": "CODIGO_COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "COLIGADA_CLIENTE": {
                "desc": "COLIGADA_CLIENTE",
                "type": "varchar",
                "selected": false
            },
            "COMPRADORATUAL": {
                "desc": "COMPRADORATUAL",
                "type": "varchar",
                "selected": false
            },
            "CPFCNPJCOMPRADORATUAL": {
                "desc": "CPFCNPJCOMPRADORATUAL",
                "type": "varchar",
                "selected": false
            },
            "DATA VENDA": {
                "desc": "DATA VENDA",
                "type": "varchar",
                "selected": false
            },
            "MES VENDA": {
                "desc": "MES VENDA",
                "type": "varchar",
                "selected": false
            },
            "OCORREU_CESSAO_TRANSF.": {
                "desc": "OCORREU_CESSAO_TRANSF.",
                "type": "varchar",
                "selected": false
            },
            "PRECO_LOTE": {
                "desc": "PRECO_LOTE",
                "type": "varchar",
                "selected": false
            },
            "QTDPARCELASATRASADAS": {
                "desc": "QTDPARCELASATRASADAS",
                "type": "varchar",
                "selected": false
            },
            "QTDPARCELASEMABERTO": {
                "desc": "QTDPARCELASEMABERTO",
                "type": "varchar",
                "selected": false
            },
            "QTDPARCELASPAGAS": {
                "desc": "QTDPARCELASPAGAS",
                "type": "varchar",
                "selected": false
            },
            "SALDODEVEDORCOMPARCIAL": {
                "desc": "SALDODEVEDORCOMPARCIAL",
                "type": "varchar",
                "selected": false
            },
            "TABELA_PRECO": {
                "desc": "TABELA_PRECO",
                "type": "varchar",
                "selected": false
            },
            "TOTALPAGO": {
                "desc": "TOTALPAGO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_DISTRATO": {
                "desc": "VALOR_DISTRATO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_LIQUIDO_DISTRATO": {
                "desc": "VALOR_LIQUIDO_DISTRATO",
                "type": "varchar",
                "selected": false
            },
            "VALORVENDA": {
                "desc": "VALORVENDA",
                "type": "varchar",
                "selected": false
            },
            "ANOCOMPENSACAO": {
                "desc": "ANOCOMPENSACAO",
                "type": "varchar",
                "selected": false
            },
            "ANODIGITACAO": {
                "desc": "ANODIGITACAO",
                "type": "varchar",
                "selected": false
            },
            "ANOEMISSAO": {
                "desc": "ANOEMISSAO",
                "type": "varchar",
                "selected": false
            },
            "CC_NV1": {
                "desc": "CC_NV1",
                "type": "varchar",
                "selected": false
            },
            "CC_NV2": {
                "desc": "CC_NV2",
                "type": "varchar",
                "selected": false
            },
            "CC_NV3": {
                "desc": "CC_NV3",
                "type": "varchar",
                "selected": false
            },
            "CLIENTE/FORNECEDOR": {
                "desc": "CLIENTE/FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "COD. COLIGADA": {
                "desc": "COD. COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "COLIGADA": {
                "desc": "COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "CONTA-CAIXA PGTO": {
                "desc": "CONTA-CAIXA PGTO",
                "type": "varchar",
                "selected": false
            },
            "DATACOMPENSACAO": {
                "desc": "DATACOMPENSACAO",
                "type": "varchar",
                "selected": false
            },
            "DATADIGITACAO": {
                "desc": "DATADIGITACAO",
                "type": "varchar",
                "selected": false
            },
            "DATAEMISSAO": {
                "desc": "DATAEMISSAO",
                "type": "varchar",
                "selected": false
            },
            "DIACOMPENSACAO": {
                "desc": "DIACOMPENSACAO",
                "type": "varchar",
                "selected": false
            },
            "DIADIGITACAO": {
                "desc": "DIADIGITACAO",
                "type": "varchar",
                "selected": false
            },
            "DIAEMISSAO": {
                "desc": "DIAEMISSAO",
                "type": "varchar",
                "selected": false
            },
            "FORMAPGTO": {
                "desc": "FORMAPGTO",
                "type": "varchar",
                "selected": false
            },
            "MESCOMPENSACAO": {
                "desc": "MESCOMPENSACAO",
                "type": "varchar",
                "selected": false
            },
            "MESDIGITACAO": {
                "desc": "MESDIGITACAO",
                "type": "varchar",
                "selected": false
            },
            "MESEMISSAO": {
                "desc": "MESEMISSAO",
                "type": "varchar",
                "selected": false
            },
            "NT_NV1": {
                "desc": "NT_NV1",
                "type": "varchar",
                "selected": false
            },
            "NT_NV2": {
                "desc": "NT_NV2",
                "type": "varchar",
                "selected": false
            },
            "NUMERODOCUMENTO": {
                "desc": "NUMERODOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "ORIGEM": {
                "desc": "ORIGEM",
                "type": "varchar",
                "selected": false
            },
            "PAGAR OU RECEBER": {
                "desc": "PAGAR ou RECEBER",
                "type": "varchar",
                "selected": false
            },
            "PERCENTUALRATEIO": {
                "desc": "PERCENTUALRATEIO",
                "type": "varchar",
                "selected": false
            },
            "REFERENCIA_EXTRATO": {
                "desc": "REFERENCIA_EXTRATO",
                "type": "varchar",
                "selected": false
            },
            "REFERENCIA_LANCTO": {
                "desc": "REFERENCIA_LANCTO",
                "type": "varchar",
                "selected": false
            },
            "STATUS BAIXA DO LANÇAMENTO": {
                "desc": "STATUS BAIXA DO LANÇAMENTO",
                "type": "varchar",
                "selected": false
            },
            "STATUS LANÇAMENTO": {
                "desc": "STATUS LANÇAMENTO",
                "type": "varchar",
                "selected": false
            },
            "TIPO DE DOCUMENTO": {
                "desc": "TIPO DE DOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "VALOR": {
                "desc": "VALOR",
                "type": "varchar",
                "selected": false
            },
            "CODIGOPRJ": {
                "desc": "CODIGOPRJ",
                "type": "varchar",
                "selected": false
            },
            "CONTRATO": {
                "desc": "CONTRATO",
                "type": "varchar",
                "selected": false
            },
            "DTFINALCONTRATO": {
                "desc": "DTFINALCONTRATO",
                "type": "varchar",
                "selected": false
            },
            "DTINICIOCONTRATO": {
                "desc": "DTINICIOCONTRATO",
                "type": "varchar",
                "selected": false
            },
            "EMPREITEIRO": {
                "desc": "EMPREITEIRO",
                "type": "varchar",
                "selected": false
            },
            "EMPREITEIRO_CNPJ": {
                "desc": "EMPREITEIRO_CNPJ",
                "type": "varchar",
                "selected": false
            },
            "EMPREITEIRO_CODIGO": {
                "desc": "EMPREITEIRO_CODIGO",
                "type": "varchar",
                "selected": false
            },
            "EMPREITEIRO_DT_ENTRADA": {
                "desc": "EMPREITEIRO_DT_ENTRADA",
                "type": "varchar",
                "selected": false
            },
            "EMPREITEIRO_DT_SAIDA": {
                "desc": "EMPREITEIRO_DT_SAIDA",
                "type": "varchar",
                "selected": false
            },
            "EMPREITEIRO_DTASO": {
                "desc": "EMPREITEIRO_DTASO",
                "type": "varchar",
                "selected": false
            },
            "EMPREITEIRO_FUNCINARIO_CODIGO_": {
                "desc": "EMPREITEIRO_FUNCINARIO_CODIGO_ALOJAMENTO",
                "type": "varchar",
                "selected": false
            },
            "EMPREITEIRO_FUNCINARIO_FUNCAO": {
                "desc": "EMPREITEIRO_FUNCINARIO_FUNCAO",
                "type": "varchar",
                "selected": false
            },
            "EMPREITEIRO_FUNCIONARIO": {
                "desc": "EMPREITEIRO_FUNCIONARIO",
                "type": "varchar",
                "selected": false
            },
            "EMPREITEIRO_FUNCIONARIO_CODIGO": {
                "desc": "EMPREITEIRO_FUNCIONARIO_CODIGO_CONTRATO",
                "type": "varchar",
                "selected": false
            },
            "EMPREITEIRO_FUNCIONARIO_CPF": {
                "desc": "EMPREITEIRO_FUNCIONARIO_CPF",
                "type": "varchar",
                "selected": false
            },
            "EMPREITEIRO_FUNCIONARIO_OBSERV": {
                "desc": "EMPREITEIRO_FUNCIONARIO_OBSERVACAO",
                "type": "varchar",
                "selected": false
            },
            "EMPREITEIRO_FUNCIONARIO_RG": {
                "desc": "EMPREITEIRO_FUNCIONARIO_RG",
                "type": "varchar",
                "selected": false
            },
            "ID_PROJETO": {
                "desc": "ID_PROJETO",
                "type": "varchar",
                "selected": false
            },
            "NROPROJETO": {
                "desc": "NROPROJETO",
                "type": "varchar",
                "selected": false
            },
            "QUANTIDADE": {
                "desc": "QUANTIDADE",
                "type": "varchar",
                "selected": false
            },
            "CODCXA": {
                "desc": "CODCXA",
                "type": "varchar",
                "selected": false
            },
            "DATABAIXA": {
                "desc": "DATABAIXA",
                "type": "varchar",
                "selected": false
            },
            "VALORBAIXA": {
                "desc": "VALORBAIXA",
                "type": "varchar",
                "selected": false
            },
            "BAIXADO": {
                "desc": "BAIXADO",
                "type": "varchar",
                "selected": false
            },
            "CLIENTE_FORNECEDOR": {
                "desc": "CLIENTE_FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_TIPO_DOCUMENTO": {
                "desc": "CODIGO_TIPO_DOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "COLIGADA_NOME": {
                "desc": "COLIGADA_NOME",
                "type": "varchar",
                "selected": false
            },
            "DATA_BAIXA": {
                "desc": "DATA_BAIXA",
                "type": "varchar",
                "selected": false
            },
            "DATACRIACAO": {
                "desc": "DATACRIACAO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO_TIPO_DOCUMENTO": {
                "desc": "DESCRICAO_TIPO_DOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "EMISSAO": {
                "desc": "EMISSAO",
                "type": "varchar",
                "selected": false
            },
            "FILIAL": {
                "desc": "FILIAL",
                "type": "varchar",
                "selected": false
            },
            "FILIAL_NOME": {
                "desc": "FILIAL_NOME",
                "type": "varchar",
                "selected": false
            },
            "PAGAR_OU_RECEBER": {
                "desc": "PAGAR_OU_RECEBER",
                "type": "varchar",
                "selected": false
            },
            "REF_LANCAMENTO": {
                "desc": "REF_LANCAMENTO",
                "type": "varchar",
                "selected": false
            },
            "SALDO": {
                "desc": "SALDO",
                "type": "varchar",
                "selected": false
            },
            "VALORORIGINAL": {
                "desc": "VALORORIGINAL",
                "type": "varchar",
                "selected": false
            },
            "CCUSTO": {
                "desc": "CCUSTO",
                "type": "varchar",
                "selected": false
            },
            "CLASSFIN": {
                "desc": "CLASSFIN",
                "type": "varchar",
                "selected": false
            },
            "CODCCUSTO": {
                "desc": "CODCCUSTO",
                "type": "varchar",
                "selected": false
            },
            "CODCLASSFIN": {
                "desc": "CODCLASSFIN",
                "type": "varchar",
                "selected": false
            },
            "CONTACAIXA": {
                "desc": "CONTACAIXA",
                "type": "varchar",
                "selected": false
            },
            "NOMECLIFOR": {
                "desc": "NOMECLIFOR",
                "type": "varchar",
                "selected": false
            },
            "COD_NATORCAMENTARIA": {
                "desc": "COD_NATORCAMENTARIA",
                "type": "varchar",
                "selected": false
            },
            "NATORCAMENTARIA": {
                "desc": "NATORCAMENTARIA",
                "type": "varchar",
                "selected": false
            },
            "VALORRATEIO": {
                "desc": "VALORRATEIO",
                "type": "varchar",
                "selected": false
            },
            "CENTROCUSTO": {
                "desc": "CENTROCUSTO",
                "type": "varchar",
                "selected": false
            },
            "FORNECEDOR": {
                "desc": "FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "TIPODOCUMENTO": {
                "desc": "TIPODOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "USUARIO": {
                "desc": "USUARIO",
                "type": "varchar",
                "selected": false
            },
            "CLIENTEFORNECEDOR": {
                "desc": "CLIENTEFORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CODFILIAL": {
                "desc": "CODFILIAL",
                "type": "int",
                "selected": false
            },
            "MOVIMENTO": {
                "desc": "MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "STATUS_LANCAMENTO": {
                "desc": "STATUS_LANCAMENTO",
                "type": "varchar",
                "selected": false
            },
            "TIPO": {
                "desc": "TIPO",
                "type": "varchar",
                "selected": false
            },
            "TIPODOC": {
                "desc": "TIPODOC",
                "type": "varchar",
                "selected": false
            },
            "USUARIOCRIACAO": {
                "desc": "USUARIOCRIACAO",
                "type": "varchar",
                "selected": false
            },
            "USUARIOCRIACAOORIGEM": {
                "desc": "USUARIOCRIACAOORIGEM",
                "type": "varchar",
                "selected": false
            },
            "VALORORIGINAL1": {
                "desc": "VALORORIGINAL1",
                "type": "numeric",
                "selected": false
            },
            "TIPO_RECEITA_DESPESA": {
                "desc": "TIPO_RECEITA_DESPESA",
                "type": "varchar",
                "selected": false
            },
            "FORNECEDOR_BAIRRO_CIDADE_ESTAD": {
                "desc": "FORNECEDOR_BAIRRO_CIDADE_ESTADO_CNPJ",
                "type": "varchar",
                "selected": false
            },
            "FORNECEDOR_RUA_NUMERO": {
                "desc": "FORNECEDOR_RUA_NUMERO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO": {
                "desc": "DESCRICAO",
                "type": "varchar",
                "selected": false
            },
            "IDMOV": {
                "desc": "IDMOV",
                "type": "varchar",
                "selected": false
            },
            "NSEQITMMOV": {
                "desc": "NSEQITMMOV",
                "type": "varchar",
                "selected": false
            },
            "PRECOUNITARIO": {
                "desc": "PRECOUNITARIO",
                "type": "varchar",
                "selected": false
            },
            "VALORBRUTOITEM": {
                "desc": "VALORBRUTOITEM",
                "type": "varchar",
                "selected": false
            },
            "PARTICIPACAO": {
                "desc": "PARTICIPACAO",
                "type": "varchar",
                "selected": false
            },
            "VALORPAGO": {
                "desc": "VALORPAGO",
                "type": "varchar",
                "selected": false
            },
            "CNPJCPF": {
                "desc": "CNPJCPF",
                "type": "varchar",
                "selected": false
            },
            "CODLOTE": {
                "desc": "CODLOTE",
                "type": "int",
                "selected": false
            },
            "IDLANCAMENTO": {
                "desc": "IDLANCAMENTO",
                "type": "int",
                "selected": false
            },
            "IDPARTIDA": {
                "desc": "IDPARTIDA",
                "type": "int",
                "selected": false
            },
            "DIFERENCA_ORIGINAL_BAIXA": {
                "desc": "DIFERENCA_ORIGINAL_BAIXA",
                "type": "varchar",
                "selected": false
            },
            "BOLETODATAVENCIMENTO": {
                "desc": "BOLETODATAVENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "BOLETOLINHADIGITAVEL": {
                "desc": "BOLETOLINHADIGITAVEL",
                "type": "varchar",
                "selected": false
            },
            "BOLETONOSSONUMERO": {
                "desc": "BOLETONOSSONUMERO",
                "type": "varchar",
                "selected": false
            },
            "BOLETOVALOR": {
                "desc": "BOLETOVALOR",
                "type": "numeric",
                "selected": false
            },
            "CLIENTECELULAR": {
                "desc": "CLIENTECELULAR",
                "type": "varchar",
                "selected": false
            },
            "CLIENTECPFCNPJ": {
                "desc": "CLIENTECPFCNPJ",
                "type": "varchar",
                "selected": false
            },
            "CLIENTEEMAIL": {
                "desc": "CLIENTEEMAIL",
                "type": "varchar",
                "selected": false
            },
            "CLIENTENOME": {
                "desc": "CLIENTENOME",
                "type": "varchar",
                "selected": false
            },
            "EMPRESACNPJ": {
                "desc": "EMPRESACNPJ",
                "type": "varchar",
                "selected": false
            },
            "EMPRESANOME": {
                "desc": "EMPRESANOME",
                "type": "varchar",
                "selected": false
            },
            "NOMECLIFOR1": {
                "desc": "NOMECLIFOR1",
                "type": "varchar",
                "selected": false
            },
            "USUARIO_CRIACAO": {
                "desc": "USUARIO_CRIACAO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_ORIGINAL": {
                "desc": "VALOR_ORIGINAL",
                "type": "varchar",
                "selected": false
            },
            "CONVENIO": {
                "desc": "CONVENIO",
                "type": "varchar",
                "selected": false
            },
            "DATA_CRIACAO": {
                "desc": "DATA_CRIACAO",
                "type": "varchar",
                "selected": false
            },
            "DATAEMISSAO_BOLETO": {
                "desc": "DATAEMISSAO_BOLETO",
                "type": "varchar",
                "selected": false
            },
            "DATAVENCIMENTO_BOLETO": {
                "desc": "DATAVENCIMENTO_BOLETO",
                "type": "varchar",
                "selected": false
            },
            "HORARIO_CRIACAO": {
                "desc": "HORARIO_CRIACAO",
                "type": "varchar",
                "selected": false
            },
            "NOSSONUMERO": {
                "desc": "NOSSONUMERO",
                "type": "varchar",
                "selected": false
            },
            "STATUS_BOLETO": {
                "desc": "STATUS_BOLETO",
                "type": "varchar",
                "selected": false
            },
            "STATUS_REMESSA_BOLETO": {
                "desc": "STATUS_REMESSA_BOLETO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_BOLETO": {
                "desc": "VALOR_BOLETO",
                "type": "varchar",
                "selected": false
            },
            "CLASSIFICACAO": {
                "desc": "CLASSIFICACAO",
                "type": "varchar",
                "selected": false
            },
            "COD_PRODUTO": {
                "desc": "COD_PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "CODLOC": {
                "desc": "CODLOC",
                "type": "varchar",
                "selected": false
            },
            "CODTMV": {
                "desc": "CODTMV",
                "type": "varchar",
                "selected": false
            },
            "DATAMOVIMENTO": {
                "desc": "DATAMOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "NOME_CENTRO_CUSTO": {
                "desc": "NOME_CENTRO_CUSTO",
                "type": "varchar",
                "selected": false
            },
            "NOME_FANTASIA_PRODUTO": {
                "desc": "NOME_FANTASIA_PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "NOME_FCFO": {
                "desc": "NOME_FCFO",
                "type": "varchar",
                "selected": false
            },
            "NOME_FILIAL": {
                "desc": "NOME_FILIAL",
                "type": "varchar",
                "selected": false
            },
            "NOME_LOCAL": {
                "desc": "NOME_LOCAL",
                "type": "varchar",
                "selected": false
            },
            "NUMEROSEQUENCIAL": {
                "desc": "NUMEROSEQUENCIAL",
                "type": "varchar",
                "selected": false
            },
            "UN": {
                "desc": "UN",
                "type": "varchar",
                "selected": false
            },
            "VALORLIQUIDO": {
                "desc": "VALORLIQUIDO",
                "type": "varchar",
                "selected": false
            },
            "ANO_VENDA": {
                "desc": "ANO_VENDA",
                "type": "varchar",
                "selected": false
            },
            "COD_EMPR": {
                "desc": "COD_EMPR",
                "type": "varchar",
                "selected": false
            },
            "COMPRADOR": {
                "desc": "COMPRADOR",
                "type": "varchar",
                "selected": false
            },
            "DESC_SUB_UNIDADE": {
                "desc": "DESC_SUB_UNIDADE",
                "type": "varchar",
                "selected": false
            },
            "DIA_VENDA": {
                "desc": "DIA_VENDA",
                "type": "varchar",
                "selected": false
            },
            "DSC_LOCAL": {
                "desc": "DSC_LOCAL",
                "type": "varchar",
                "selected": false
            },
            "DSC_SIT_VENDA": {
                "desc": "DSC_SIT_VENDA",
                "type": "varchar",
                "selected": false
            },
            "DT_VENDA": {
                "desc": "DT_VENDA",
                "type": "varchar",
                "selected": false
            },
            "MES_VENDA": {
                "desc": "MES_VENDA",
                "type": "varchar",
                "selected": false
            },
            "NUM_SUB_UNID": {
                "desc": "NUM_SUB_UNID",
                "type": "varchar",
                "selected": false
            },
            "NUM_UNID": {
                "desc": "NUM_UNID",
                "type": "varchar",
                "selected": false
            },
            "SEMANA_VENDA": {
                "desc": "SEMANA_VENDA",
                "type": "varchar",
                "selected": false
            },
            "VALOR_FINANC": {
                "desc": "VALOR_FINANC",
                "type": "varchar",
                "selected": false
            },
            "VALOR_VENDA": {
                "desc": "VALOR_VENDA",
                "type": "varchar",
                "selected": false
            },
            "ANOVENCIMENTO": {
                "desc": "ANOVENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "DIAVENCIMENTO": {
                "desc": "DIAVENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "MESVENCIMENTO": {
                "desc": "MESVENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "ANOBAIXA": {
                "desc": "ANOBAIXA",
                "type": "varchar",
                "selected": false
            },
            "MESBAIXA": {
                "desc": "MESBAIXA",
                "type": "varchar",
                "selected": false
            },
            "COMPRADOR_PRINCIPAL": {
                "desc": "COMPRADOR_PRINCIPAL",
                "type": "varchar",
                "selected": false
            },
            "CPFCNPJ": {
                "desc": "CPFCNPJ",
                "type": "varchar",
                "selected": false
            },
            "JUROSPORMORA": {
                "desc": "JUROSPORMORA",
                "type": "varchar",
                "selected": false
            },
            "MULTAPORMORA": {
                "desc": "MULTAPORMORA",
                "type": "varchar",
                "selected": false
            },
            "QTDPARCELAVINCENDAS": {
                "desc": "QTDPARCELAVINCENDAS",
                "type": "varchar",
                "selected": false
            },
            "SALDODEVEDORPARCELASEMATRASO": {
                "desc": "SALDODEVEDORPARCELASEMATRASO",
                "type": "varchar",
                "selected": false
            },
            "SALDODEVEDORPARCELAVINCENDAS": {
                "desc": "SALDODEVEDORPARCELAVINCENDAS",
                "type": "varchar",
                "selected": false
            },
            "CODUSUARIO": {
                "desc": "CODUSUARIO",
                "type": "varchar",
                "selected": false
            },
            "ANOVCTO": {
                "desc": "ANOVCTO",
                "type": "int",
                "selected": false
            },
            "CÓDIGO MOVIMENTO": {
                "desc": "CÓDIGO MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "CÓDIGO PRODUTO": {
                "desc": "CÓDIGO PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "CODTRF": {
                "desc": "CODTRF",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO CENTRO DE CUSTO": {
                "desc": "DESCRICAO CENTRO DE CUSTO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO PRODUTO": {
                "desc": "DESCRICAO PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "DIABAIXA": {
                "desc": "DIABAIXA",
                "type": "int",
                "selected": false
            },
            "DIAVCTO": {
                "desc": "DIAVCTO",
                "type": "int",
                "selected": false
            },
            "IDPRJ": {
                "desc": "IDPRJ",
                "type": "int",
                "selected": false
            },
            "IDTRF": {
                "desc": "IDTRF",
                "type": "int",
                "selected": false
            },
            "MESVCTO": {
                "desc": "MESVCTO",
                "type": "int",
                "selected": false
            },
            "NOME MOVIMENTO": {
                "desc": "NOME MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "PROJETO": {
                "desc": "PROJETO",
                "type": "varchar",
                "selected": false
            },
            "STATUS DA FATURA": {
                "desc": "STATUS DA FATURA",
                "type": "varchar",
                "selected": false
            },
            "ATENDIMENTO": {
                "desc": "ATENDIMENTO",
                "type": "varchar",
                "selected": false
            },
            "CIDADECOLIGADA": {
                "desc": "CIDADECOLIGADA",
                "type": "varchar",
                "selected": false
            },
            "CODATENDIMENTO": {
                "desc": "CODATENDIMENTO",
                "type": "int",
                "selected": false
            },
            "CODLOCAL": {
                "desc": "CODLOCAL",
                "type": "int",
                "selected": false
            },
            "CONDPAGAMENTO": {
                "desc": "CONDPAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "HISTORICOCURTO": {
                "desc": "HISTORICOCURTO",
                "type": "varchar",
                "selected": false
            },
            "HISTORICOLONGO": {
                "desc": "HISTORICOLONGO",
                "type": "varchar",
                "selected": false
            },
            "IMAGEM": {
                "desc": "IMAGEM",
                "type": "varchar",
                "selected": false
            },
            "LOCALESTOQUE": {
                "desc": "LOCALESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "NUMEROMOV": {
                "desc": "NUMEROMOV",
                "type": "varchar",
                "selected": false
            },
            "RUACOLIGADA": {
                "desc": "RUACOLIGADA",
                "type": "varchar",
                "selected": false
            },
            "SERIE": {
                "desc": "SERIE",
                "type": "varchar",
                "selected": false
            },
            "TIPOMOVIMENTO": {
                "desc": "TIPOMOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "ABERTURA": {
                "desc": "ABERTURA",
                "type": "varchar",
                "selected": false
            },
            "CLIENTE_CELULAR": {
                "desc": "CLIENTE_CELULAR",
                "type": "varchar",
                "selected": false
            },
            "CLIENTE_CPF_CNPJ": {
                "desc": "CLIENTE_CPF_CNPJ",
                "type": "varchar",
                "selected": false
            },
            "CLIENTE_EMAIL": {
                "desc": "CLIENTE_EMAIL",
                "type": "varchar",
                "selected": false
            },
            "CLIENTE_ENDERECO": {
                "desc": "CLIENTE_ENDERECO",
                "type": "varchar",
                "selected": false
            },
            "CLIENTE_TELEFONE": {
                "desc": "CLIENTE_TELEFONE",
                "type": "varchar",
                "selected": false
            },
            "COLIGADA_CNPJ": {
                "desc": "COLIGADA_CNPJ",
                "type": "varchar",
                "selected": false
            },
            "COLIGADA_ENDERECO": {
                "desc": "COLIGADA_ENDERECO",
                "type": "varchar",
                "selected": false
            },
            "DAT_VENDA": {
                "desc": "DAT_VENDA",
                "type": "varchar",
                "selected": false
            },
            "DATAASSINATURA": {
                "desc": "DATAASSINATURA",
                "type": "varchar",
                "selected": false
            },
            "FECHAMENTO": {
                "desc": "FECHAMENTO",
                "type": "varchar",
                "selected": false
            },
            "MODALIDADE_VENDA": {
                "desc": "MODALIDADE_VENDA",
                "type": "varchar",
                "selected": false
            },
            "TIPOCOBERTURA": {
                "desc": "TIPOCOBERTURA",
                "type": "varchar",
                "selected": false
            },
            "BAIRRO_FORNECEDOR": {
                "desc": "BAIRRO_FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CEP_FORNECEDOR": {
                "desc": "CEP_FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CIDADE_FORNECEDOR": {
                "desc": "CIDADE_FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CNPJ_FORNECEDOR": {
                "desc": "CNPJ_FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "COD_FORNECEDOR": {
                "desc": "COD_FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CODETD": {
                "desc": "CODETD",
                "type": "varchar",
                "selected": false
            },
            "CONTATO": {
                "desc": "CONTATO",
                "type": "varchar",
                "selected": false
            },
            "CPF": {
                "desc": "CPF",
                "type": "varchar",
                "selected": false
            },
            "DATANASCIMENTO": {
                "desc": "DATANASCIMENTO",
                "type": "datetime",
                "selected": false
            },
            "DISTDATA": {
                "desc": "DISTDATA",
                "type": "datetime",
                "selected": false
            },
            "DISTRBONIFICACAO": {
                "desc": "DISTRBONIFICACAO",
                "type": "varchar",
                "selected": false
            },
            "DISTRDESCREMUN": {
                "desc": "DISTRDESCREMUN",
                "type": "numeric",
                "selected": false
            },
            "DISTRPERPROP": {
                "desc": "DISTRPERPROP",
                "type": "varchar",
                "selected": false
            },
            "DISTRPERVENC": {
                "desc": "DISTRPERVENC",
                "type": "varchar",
                "selected": false
            },
            "DISTRPROPANO": {
                "desc": "DISTRPROPANO",
                "type": "numeric",
                "selected": false
            },
            "DISTRPROPMES": {
                "desc": "DISTRPROPMES",
                "type": "numeric",
                "selected": false
            },
            "DISTRTOTAL": {
                "desc": "DISTRTOTAL",
                "type": "numeric",
                "selected": false
            },
            "DTNASCIMENTO": {
                "desc": "DTNASCIMENTO",
                "type": "datetime",
                "selected": false
            },
            "FOLHA": {
                "desc": "FOLHA",
                "type": "varchar",
                "selected": false
            },
            "MES_ANIVERSARIO": {
                "desc": "MES_ANIVERSARIO",
                "type": "varchar",
                "selected": false
            },
            "NO_FORNECEDOR": {
                "desc": "NO_FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "NOME_FORNECEDOR": {
                "desc": "NOME_FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "OBSERVACAO": {
                "desc": "OBSERVACAO",
                "type": "varchar",
                "selected": false
            },
            "PJDATAFERIASPAGAS": {
                "desc": "PJDATAFERIASPAGAS",
                "type": "varchar",
                "selected": false
            },
            "PJDATAINICIO": {
                "desc": "PJDATAINICIO",
                "type": "datetime",
                "selected": false
            },
            "PJDATAULTIMAALT": {
                "desc": "PJDATAULTIMAALT",
                "type": "datetime",
                "selected": false
            },
            "PJFERIASVENCIDAS": {
                "desc": "PJFERIASVENCIDAS",
                "type": "varchar",
                "selected": false
            },
            "PJVALORATUAL": {
                "desc": "PJVALORATUAL",
                "type": "numeric",
                "selected": false
            },
            "RUA_FORNECEDOR": {
                "desc": "RUA_FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "DATASAIDA": {
                "desc": "DATASAIDA",
                "type": "datetime",
                "selected": false
            },
            "HISTORICOFERIASPJ": {
                "desc": "HISTORICOFERIASPJ",
                "type": "varchar",
                "selected": false
            },
            "VALORBRUTO": {
                "desc": "VALORBRUTO",
                "type": "numeric",
                "selected": false
            },
            "DESCRICAO FANATASIA": {
                "desc": "DESCRICAO FANATASIA",
                "type": "varchar",
                "selected": false
            },
            "PREÇO UNIT": {
                "desc": "PREÇO UNIT",
                "type": "varchar",
                "selected": false
            },
            "QTDE": {
                "desc": "QTDE",
                "type": "varchar",
                "selected": false
            },
            "VALOR CALC": {
                "desc": "VALOR CALC",
                "type": "varchar",
                "selected": false
            },
            "BAIRRO": {
                "desc": "BAIRRO",
                "type": "varchar",
                "selected": false
            },
            "CEP": {
                "desc": "CEP",
                "type": "varchar",
                "selected": false
            },
            "CIDADE": {
                "desc": "CIDADE",
                "type": "varchar",
                "selected": false
            },
            "CNH": {
                "desc": "CNH",
                "type": "varchar",
                "selected": false
            },
            "CNHLETRA": {
                "desc": "CNHLETRA",
                "type": "varchar",
                "selected": false
            },
            "CODIGOCLIENTEFORNECEDOR": {
                "desc": "CODIGOCLIENTEFORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "DATAADMISSAO": {
                "desc": "DATAADMISSAO",
                "type": "datetime",
                "selected": false
            },
            "DATADEMISSAO": {
                "desc": "DATADEMISSAO",
                "type": "datetime",
                "selected": false
            },
            "DATAVENCIMENTOCNH": {
                "desc": "DATAVENCIMENTOCNH",
                "type": "datetime",
                "selected": false
            },
            "DTULTIMAALTERACAO": {
                "desc": "DTULTIMAALTERACAO",
                "type": "datetime",
                "selected": false
            },
            "ESTADO": {
                "desc": "ESTADO",
                "type": "varchar",
                "selected": false
            },
            "FUNCAO": {
                "desc": "FUNCAO",
                "type": "varchar",
                "selected": false
            },
            "LOGRADOURO": {
                "desc": "LOGRADOURO",
                "type": "varchar",
                "selected": false
            },
            "MATRICULA": {
                "desc": "MATRICULA",
                "type": "varchar",
                "selected": false
            },
            "RG": {
                "desc": "RG",
                "type": "varchar",
                "selected": false
            },
            "SEXO": {
                "desc": "SEXO",
                "type": "varchar",
                "selected": false
            },
            "CODIGOPRD": {
                "desc": "CODIGOPRD",
                "type": "varchar",
                "selected": false
            },
            "ORDEM": {
                "desc": "ORDEM",
                "type": "int",
                "selected": false
            },
            "PRODUTO": {
                "desc": "PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "RAZAOSOCIAL": {
                "desc": "RAZAOSOCIAL",
                "type": "varchar",
                "selected": false
            },
            "AGENCIA": {
                "desc": "AGENCIA",
                "type": "varchar",
                "selected": false
            },
            "ALUGUEL_DATA_FIM": {
                "desc": "ALUGUEL_DATA_FIM",
                "type": "varchar",
                "selected": false
            },
            "ALUGUEL_DATA_INICIO": {
                "desc": "ALUGUEL_DATA_INICIO",
                "type": "varchar",
                "selected": false
            },
            "ALUGUEL_DIA": {
                "desc": "ALUGUEL_DIA",
                "type": "varchar",
                "selected": false
            },
            "ALUGUEL_DIA_EXTENSO": {
                "desc": "ALUGUEL_DIA_EXTENSO",
                "type": "varchar",
                "selected": false
            },
            "ALUGUEL_PRAZO": {
                "desc": "ALUGUEL_PRAZO",
                "type": "varchar",
                "selected": false
            },
            "ALUGUEL_PRAZO_EXTENSO": {
                "desc": "ALUGUEL_PRAZO_EXTENSO",
                "type": "varchar",
                "selected": false
            },
            "ALUGUEL_VALOR": {
                "desc": "ALUGUEL_VALOR",
                "type": "varchar",
                "selected": false
            },
            "ALUGUEL_VALOR_EXTENSO": {
                "desc": "ALUGUEL_VALOR_EXTENSO",
                "type": "varchar",
                "selected": false
            },
            "COMARCA": {
                "desc": "COMARCA",
                "type": "varchar",
                "selected": false
            },
            "CONTA": {
                "desc": "CONTA",
                "type": "varchar",
                "selected": false
            },
            "CPFCNPJFAVORECIDO": {
                "desc": "CPFCNPJFAVORECIDO",
                "type": "varchar",
                "selected": false
            },
            "DTCONTRATOEXTENSO": {
                "desc": "DTCONTRATOEXTENSO",
                "type": "varchar",
                "selected": false
            },
            "ENDERECO_IMOVEL": {
                "desc": "ENDERECO_IMOVEL",
                "type": "varchar",
                "selected": false
            },
            "FAVORECIDO": {
                "desc": "FAVORECIDO",
                "type": "varchar",
                "selected": false
            },
            "IDCNT": {
                "desc": "IDCNT",
                "type": "varchar",
                "selected": false
            },
            "IDPRD": {
                "desc": "IDPRD",
                "type": "varchar",
                "selected": false
            },
            "LOCADOR_BAIRRO": {
                "desc": "LOCADOR_BAIRRO",
                "type": "varchar",
                "selected": false
            },
            "LOCADOR_CEP": {
                "desc": "LOCADOR_CEP",
                "type": "varchar",
                "selected": false
            },
            "LOCADOR_CIDADEUF": {
                "desc": "LOCADOR_CIDADEUF",
                "type": "varchar",
                "selected": false
            },
            "LOCADOR_CPF_CNPJ": {
                "desc": "LOCADOR_CPF_CNPJ",
                "type": "varchar",
                "selected": false
            },
            "LOCADOR_NOME": {
                "desc": "LOCADOR_NOME",
                "type": "varchar",
                "selected": false
            },
            "LOCADOR_NUMERO": {
                "desc": "LOCADOR_NUMERO",
                "type": "varchar",
                "selected": false
            },
            "LOCADOR_RG": {
                "desc": "LOCADOR_RG",
                "type": "varchar",
                "selected": false
            },
            "LOCADOR_RUA": {
                "desc": "LOCADOR_RUA",
                "type": "varchar",
                "selected": false
            },
            "NUMEROBANCO": {
                "desc": "NUMEROBANCO",
                "type": "varchar",
                "selected": false
            },
            "PARAGRAFO_MULTA": {
                "desc": "PARAGRAFO_MULTA",
                "type": "varchar",
                "selected": false
            },
            "TIPOALUGUEL": {
                "desc": "TIPOALUGUEL",
                "type": "varchar",
                "selected": false
            },
            "VALORCAUCAO": {
                "desc": "VALORCAUCAO",
                "type": "varchar",
                "selected": false
            },
            "COLIGADA_COLIGADA": {
                "desc": "COLIGADA_COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "COTACA_CODIGO": {
                "desc": "COTACA_CODIGO",
                "type": "varchar",
                "selected": false
            },
            "COTACAO_DATA": {
                "desc": "COTACAO_DATA",
                "type": "varchar",
                "selected": false
            },
            "FORNECEDOR_CNPJ": {
                "desc": "FORNECEDOR_CNPJ",
                "type": "varchar",
                "selected": false
            },
            "FORNECEDOR_CODIGO": {
                "desc": "FORNECEDOR_CODIGO",
                "type": "varchar",
                "selected": false
            },
            "PRODUTO_CODIGO": {
                "desc": "PRODUTO_CODIGO",
                "type": "varchar",
                "selected": false
            },
            "PRODUTO_MARGEM_NEGOCIADA": {
                "desc": "PRODUTO_MARGEM_NEGOCIADA",
                "type": "varchar",
                "selected": false
            },
            "PRODUTO_NOME": {
                "desc": "PRODUTO_NOME",
                "type": "varchar",
                "selected": false
            },
            "PRODUTO_QUANTIDADE": {
                "desc": "PRODUTO_QUANTIDADE",
                "type": "varchar",
                "selected": false
            },
            "PRODUTO_UNIDADE": {
                "desc": "PRODUTO_UNIDADE",
                "type": "varchar",
                "selected": false
            },
            "PRODUTO_VALOR_COTADO": {
                "desc": "PRODUTO_VALOR_COTADO",
                "type": "varchar",
                "selected": false
            },
            "PRODUTO_VALOR_NEGOCIADO": {
                "desc": "PRODUTO_VALOR_NEGOCIADO",
                "type": "varchar",
                "selected": false
            },
            "TOTAL_MARGEM_NEGOCIADA": {
                "desc": "TOTAL_MARGEM_NEGOCIADA",
                "type": "varchar",
                "selected": false
            },
            "TOTAL_PRODUTO_COTADO": {
                "desc": "TOTAL_PRODUTO_COTADO",
                "type": "varchar",
                "selected": false
            },
            "TOTAL_PRODUTO_NEGOCIADO": {
                "desc": "TOTAL_PRODUTO_NEGOCIADO",
                "type": "varchar",
                "selected": false
            },
            "FORNECEDOR_NOME_CNPJ": {
                "desc": "FORNECEDOR_NOME_CNPJ",
                "type": "varchar",
                "selected": false
            },
            "ANOEMI": {
                "desc": "ANOEMI",
                "type": "int",
                "selected": false
            },
            "ANOEMI1": {
                "desc": "ANOEMI1",
                "type": "int",
                "selected": false
            },
            "ATUAÇÃOFORNECEDOR": {
                "desc": "ATUAÇÃOFORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CENTRO_CUSTO": {
                "desc": "CENTRO_CUSTO",
                "type": "varchar",
                "selected": false
            },
            "DATAEMISSÃO": {
                "desc": "DATAEMISSÃO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO_CENTROCUSTO": {
                "desc": "DESCRICAO_CENTROCUSTO",
                "type": "varchar",
                "selected": false
            },
            "DIAEMI": {
                "desc": "DIAEMI",
                "type": "int",
                "selected": false
            },
            "DIAEMI1": {
                "desc": "DIAEMI1",
                "type": "int",
                "selected": false
            },
            "EMPREI": {
                "desc": "EMPREI",
                "type": "varchar",
                "selected": false
            },
            "FROTA": {
                "desc": "FROTA",
                "type": "varchar",
                "selected": false
            },
            "LOCEST": {
                "desc": "LOCEST",
                "type": "varchar",
                "selected": false
            },
            "MESEMI": {
                "desc": "MESEMI",
                "type": "int",
                "selected": false
            },
            "MESEMI1": {
                "desc": "MESEMI1",
                "type": "int",
                "selected": false
            },
            "NOMEMOV": {
                "desc": "NOMEMOV",
                "type": "varchar",
                "selected": false
            },
            "RECDESP": {
                "desc": "RECDESP",
                "type": "varchar",
                "selected": false
            },
            "STATUS": {
                "desc": "STATUS",
                "type": "varchar",
                "selected": false
            },
            "TIPO_MOVIMENTO": {
                "desc": "TIPO_MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "TOTALITEM": {
                "desc": "TOTALITEM",
                "type": "numeric",
                "selected": false
            },
            "UNIDADE": {
                "desc": "UNIDADE",
                "type": "varchar",
                "selected": false
            },
            "VALORBRUOTITEM": {
                "desc": "VALORBRUOTITEM",
                "type": "numeric",
                "selected": false
            },
            "VALORNF": {
                "desc": "VALORNF",
                "type": "numeric",
                "selected": false
            },
            "VALORUNITARIO": {
                "desc": "VALORUNITARIO",
                "type": "numeric",
                "selected": false
            },
            "VEICULOLEVE": {
                "desc": "VEICULOLEVE",
                "type": "varchar",
                "selected": false
            },
            "CODIGOCONTRATO": {
                "desc": "CODIGOCONTRATO",
                "type": "varchar",
                "selected": false
            },
            "CONFERENCIA": {
                "desc": "CONFERENCIA",
                "type": "varchar",
                "selected": false
            },
            "IDCONTRATO": {
                "desc": "IDCONTRATO",
                "type": "int",
                "selected": false
            },
            "NUMERO_MOVIMENTO_ORIGEM": {
                "desc": "NUMERO_MOVIMENTO_ORIGEM",
                "type": "varchar",
                "selected": false
            },
            "VALORNFLIQUIDO": {
                "desc": "VALORNFLIQUIDO",
                "type": "numeric",
                "selected": false
            },
            "GRUPOPRODUTO": {
                "desc": "GRUPOPRODUTO",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_FORNECEDOR": {
                "desc": "CODIGO_FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_LOCAL_ESTOQUE": {
                "desc": "CODIGO_LOCAL_ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_UNIDADE_MEDIDA": {
                "desc": "CODIGO_UNIDADE_MEDIDA",
                "type": "varchar",
                "selected": false
            },
            "DATA_ALTERACAO": {
                "desc": "DATA_ALTERACAO",
                "type": "varchar",
                "selected": false
            },
            "DATA_EMISSAO_NF": {
                "desc": "DATA_EMISSAO_NF",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO_LOCAL_ESTOQUE": {
                "desc": "DESCRICAO_LOCAL_ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO_PRODUTO": {
                "desc": "DESCRICAO_PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "NRO_SEQ_NF": {
                "desc": "NRO_SEQ_NF",
                "type": "varchar",
                "selected": false
            },
            "NUMERO_NF": {
                "desc": "NUMERO_NF",
                "type": "varchar",
                "selected": false
            },
            "SERIE_NF": {
                "desc": "SERIE_NF",
                "type": "varchar",
                "selected": false
            },
            "USUARIO_ALTERACAO": {
                "desc": "USUARIO_ALTERACAO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_BRUTO_NF": {
                "desc": "VALOR_BRUTO_NF",
                "type": "varchar",
                "selected": false
            },
            "VALOR_DESCONTO_NF": {
                "desc": "VALOR_DESCONTO_NF",
                "type": "varchar",
                "selected": false
            },
            "VALOR_DESPESA_NF": {
                "desc": "VALOR_DESPESA_NF",
                "type": "varchar",
                "selected": false
            },
            "VALOR_FRENTE_NF": {
                "desc": "VALOR_FRENTE_NF",
                "type": "varchar",
                "selected": false
            },
            "VALOR_LIQUIDO_NF": {
                "desc": "VALOR_LIQUIDO_NF",
                "type": "varchar",
                "selected": false
            },
            "VALORTOTALITEM": {
                "desc": "VALORTOTALITEM",
                "type": "varchar",
                "selected": false
            },
            "AGRUPCOB": {
                "desc": "AGRUPCOB",
                "type": "varchar",
                "selected": false
            },
            "APLICFORMULA": {
                "desc": "APLICFORMULA",
                "type": "varchar",
                "selected": false
            },
            "APOSENTADOOUPENSIONISTA": {
                "desc": "APOSENTADOOUPENSIONISTA",
                "type": "varchar",
                "selected": false
            },
            "ATIVO": {
                "desc": "ATIVO",
                "type": "varchar",
                "selected": false
            },
            "AUTORIZAENVIOEMAIL": {
                "desc": "AUTORIZAENVIOEMAIL",
                "type": "varchar",
                "selected": false
            },
            "AVALIACAO": {
                "desc": "AVALIACAO",
                "type": "varchar",
                "selected": false
            },
            "BAIRROENTREGA": {
                "desc": "BAIRROENTREGA",
                "type": "varchar",
                "selected": false
            },
            "BAIRROPGTO": {
                "desc": "BAIRROPGTO",
                "type": "varchar",
                "selected": false
            },
            "CAIXAPOSTAL": {
                "desc": "CAIXAPOSTAL",
                "type": "varchar",
                "selected": false
            },
            "CAIXAPOSTALENTREGA": {
                "desc": "CAIXAPOSTALENTREGA",
                "type": "varchar",
                "selected": false
            },
            "CAIXAPOSTALPAGAMENTO": {
                "desc": "CAIXAPOSTALPAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "CALCULAAVP": {
                "desc": "CALCULAAVP",
                "type": "varchar",
                "selected": false
            },
            "CAMPOALFAOP1": {
                "desc": "CAMPOALFAOP1",
                "type": "varchar",
                "selected": false
            },
            "CAMPOALFAOP2": {
                "desc": "CAMPOALFAOP2",
                "type": "varchar",
                "selected": false
            },
            "CAMPOALFAOP3": {
                "desc": "CAMPOALFAOP3",
                "type": "varchar",
                "selected": false
            },
            "CAMPOLIVRE": {
                "desc": "CAMPOLIVRE",
                "type": "varchar",
                "selected": false
            },
            "CATEGORIAAUTONOMO": {
                "desc": "CATEGORIAAUTONOMO",
                "type": "varchar",
                "selected": false
            },
            "CBOAUTONOMO": {
                "desc": "CBOAUTONOMO",
                "type": "varchar",
                "selected": false
            },
            "CEI": {
                "desc": "CEI",
                "type": "varchar",
                "selected": false
            },
            "CEPCAIXAPOSTAL": {
                "desc": "CEPCAIXAPOSTAL",
                "type": "varchar",
                "selected": false
            },
            "CEPENTREGA": {
                "desc": "CEPENTREGA",
                "type": "varchar",
                "selected": false
            },
            "CEPPGTO": {
                "desc": "CEPPGTO",
                "type": "varchar",
                "selected": false
            },
            "CERTIFICADO": {
                "desc": "CERTIFICADO",
                "type": "varchar",
                "selected": false
            },
            "CFOIMOB": {
                "desc": "CFOIMOB",
                "type": "varchar",
                "selected": false
            },
            "CHAPA": {
                "desc": "CHAPA",
                "type": "varchar",
                "selected": false
            },
            "CI_ORGAO": {
                "desc": "CI_ORGAO",
                "type": "varchar",
                "selected": false
            },
            "CI_UF": {
                "desc": "CI_UF",
                "type": "varchar",
                "selected": false
            },
            "CIAUTONOMO": {
                "desc": "CIAUTONOMO",
                "type": "varchar",
                "selected": false
            },
            "CIDADEENTREGA": {
                "desc": "CIDADEENTREGA",
                "type": "varchar",
                "selected": false
            },
            "CIDADEPGTO": {
                "desc": "CIDADEPGTO",
                "type": "varchar",
                "selected": false
            },
            "CIDENTIDADE": {
                "desc": "CIDENTIDADE",
                "type": "varchar",
                "selected": false
            },
            "CNAEPREP": {
                "desc": "CNAEPREP",
                "type": "varchar",
                "selected": false
            },
            "CNPJRURAL": {
                "desc": "CNPJRURAL",
                "type": "varchar",
                "selected": false
            },
            "CODCARGO": {
                "desc": "CODCARGO",
                "type": "varchar",
                "selected": false
            },
            "CODCATEGORIAESOCIAL": {
                "desc": "CODCATEGORIAESOCIAL",
                "type": "varchar",
                "selected": false
            },
            "CODCFO1": {
                "desc": "CODCFO1",
                "type": "varchar",
                "selected": false
            },
            "CODCFOCOLINTEGRACAO": {
                "desc": "CODCFOCOLINTEGRACAO",
                "type": "varchar",
                "selected": false
            },
            "CODCFOINTEGRACAO": {
                "desc": "CODCFOINTEGRACAO",
                "type": "varchar",
                "selected": false
            },
            "CODCOLCFOFISCAL": {
                "desc": "CODCOLCFOFISCAL",
                "type": "varchar",
                "selected": false
            },
            "CODCOLCHAVESESTRANG": {
                "desc": "CODCOLCHAVESESTRANG",
                "type": "varchar",
                "selected": false
            },
            "CODCOLCONTAGER": {
                "desc": "CODCOLCONTAGER",
                "type": "varchar",
                "selected": false
            },
            "CODCOLCXA": {
                "desc": "CODCOLCXA",
                "type": "varchar",
                "selected": false
            },
            "CODCOLFORMULA": {
                "desc": "CODCOLFORMULA",
                "type": "varchar",
                "selected": false
            },
            "CODCOLIGADA1": {
                "desc": "CODCOLIGADA1",
                "type": "varchar",
                "selected": false
            },
            "CODCOLIGADAFILIALOBRA": {
                "desc": "CODCOLIGADAFILIALOBRA",
                "type": "varchar",
                "selected": false
            },
            "CODCOLTCF": {
                "desc": "CODCOLTCF",
                "type": "varchar",
                "selected": false
            },
            "CODCONTAGER": {
                "desc": "CODCONTAGER",
                "type": "varchar",
                "selected": false
            },
            "CODETDENTREGA": {
                "desc": "CODETDENTREGA",
                "type": "varchar",
                "selected": false
            },
            "CODETDPGTO": {
                "desc": "CODETDPGTO",
                "type": "varchar",
                "selected": false
            },
            "CODEXTERNO": {
                "desc": "CODEXTERNO",
                "type": "varchar",
                "selected": false
            },
            "CODFILIALINTEGRACAO": {
                "desc": "CODFILIALINTEGRACAO",
                "type": "varchar",
                "selected": false
            },
            "CODFILIALOBRA": {
                "desc": "CODFILIALOBRA",
                "type": "varchar",
                "selected": false
            },
            "CODFINALIDADE": {
                "desc": "CODFINALIDADE",
                "type": "varchar",
                "selected": false
            },
            "CODIGOCAEPF": {
                "desc": "CODIGOCAEPF",
                "type": "varchar",
                "selected": false
            },
            "CODIGOINSS": {
                "desc": "CODIGOINSS",
                "type": "varchar",
                "selected": false
            },
            "CODLOJA": {
                "desc": "CODLOJA",
                "type": "varchar",
                "selected": false
            },
            "CODMUNICIPIO": {
                "desc": "CODMUNICIPIO",
                "type": "varchar",
                "selected": false
            },
            "CODMUNICIPIOENTREGA": {
                "desc": "CODMUNICIPIOENTREGA",
                "type": "varchar",
                "selected": false
            },
            "CODMUNICIPIOPGTO": {
                "desc": "CODMUNICIPIOPGTO",
                "type": "varchar",
                "selected": false
            },
            "CODPAGTOGPS": {
                "desc": "CODPAGTOGPS",
                "type": "varchar",
                "selected": false
            },
            "CODPROF": {
                "desc": "CODPROF",
                "type": "varchar",
                "selected": false
            },
            "CODRECEITA": {
                "desc": "CODRECEITA",
                "type": "varchar",
                "selected": false
            },
            "CODTCF": {
                "desc": "CODTCF",
                "type": "varchar",
                "selected": false
            },
            "CODTRA": {
                "desc": "CODTRA",
                "type": "varchar",
                "selected": false
            },
            "CODUSUARIOACESSO": {
                "desc": "CODUSUARIOACESSO",
                "type": "varchar",
                "selected": false
            },
            "CODVINCULO": {
                "desc": "CODVINCULO",
                "type": "varchar",
                "selected": false
            },
            "COMPLEMENTO": {
                "desc": "COMPLEMENTO",
                "type": "varchar",
                "selected": false
            },
            "COMPLEMENTOPGTO": {
                "desc": "COMPLEMENTOPGTO",
                "type": "varchar",
                "selected": false
            },
            "COMPLEMENTREGA": {
                "desc": "COMPLEMENTREGA",
                "type": "varchar",
                "selected": false
            },
            "CONSIDERAFILIALOBRA": {
                "desc": "CONSIDERAFILIALOBRA",
                "type": "varchar",
                "selected": false
            },
            "CONTATOENTREGA": {
                "desc": "CONTATOENTREGA",
                "type": "varchar",
                "selected": false
            },
            "CONTATOPGTO": {
                "desc": "CONTATOPGTO",
                "type": "varchar",
                "selected": false
            },
            "CONTEVENTOCONTAB": {
                "desc": "CONTEVENTOCONTAB",
                "type": "varchar",
                "selected": false
            },
            "CONTRIBUINTE": {
                "desc": "CONTRIBUINTE",
                "type": "varchar",
                "selected": false
            },
            "CONTRIBUINTEISS": {
                "desc": "CONTRIBUINTEISS",
                "type": "varchar",
                "selected": false
            },
            "CONTROLADO": {
                "desc": "CONTROLADO",
                "type": "varchar",
                "selected": false
            },
            "CRITERIOSELECAO": {
                "desc": "CRITERIOSELECAO",
                "type": "varchar",
                "selected": false
            },
            "CRITERIOSELECAO1": {
                "desc": "CRITERIOSELECAO1",
                "type": "varchar",
                "selected": false
            },
            "CRITERIOSELECAO2": {
                "desc": "CRITERIOSELECAO2",
                "type": "varchar",
                "selected": false
            },
            "DATAOP1": {
                "desc": "DATAOP1",
                "type": "varchar",
                "selected": false
            },
            "DATAOP2": {
                "desc": "DATAOP2",
                "type": "varchar",
                "selected": false
            },
            "DATAOP3": {
                "desc": "DATAOP3",
                "type": "varchar",
                "selected": false
            },
            "DATAULTALTERACAO": {
                "desc": "DATAULTALTERACAO",
                "type": "varchar",
                "selected": false
            },
            "DATAULTMOVIMENTO": {
                "desc": "DATAULTMOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "DIGVERIFICDEBAUTOMATICO": {
                "desc": "DIGVERIFICDEBAUTOMATICO",
                "type": "varchar",
                "selected": false
            },
            "DOCUMENTOESTRANGEIRO": {
                "desc": "DOCUMENTOESTRANGEIRO",
                "type": "varchar",
                "selected": false
            },
            "DTINICATIVIDADES": {
                "desc": "DTINICATIVIDADES",
                "type": "varchar",
                "selected": false
            },
            "EMAILENTREGA": {
                "desc": "EMAILENTREGA",
                "type": "varchar",
                "selected": false
            },
            "EMAILFISCAL": {
                "desc": "EMAILFISCAL",
                "type": "varchar",
                "selected": false
            },
            "EMAILPGTO": {
                "desc": "EMAILPGTO",
                "type": "varchar",
                "selected": false
            },
            "EMPRESA": {
                "desc": "EMPRESA",
                "type": "varchar",
                "selected": false
            },
            "ENDCOBC": {
                "desc": "ENDCOBC",
                "type": "varchar",
                "selected": false
            },
            "ENTIDADEEXECUTORAPAA": {
                "desc": "ENTIDADEEXECUTORAPAA",
                "type": "varchar",
                "selected": false
            },
            "ESTADOCIVIL": {
                "desc": "ESTADOCIVIL",
                "type": "varchar",
                "selected": false
            },
            "EXPERIENCIA": {
                "desc": "EXPERIENCIA",
                "type": "varchar",
                "selected": false
            },
            "FAP": {
                "desc": "FAP",
                "type": "varchar",
                "selected": false
            },
            "FAX": {
                "desc": "FAX",
                "type": "varchar",
                "selected": false
            },
            "FAXDEDICADO": {
                "desc": "FAXDEDICADO",
                "type": "varchar",
                "selected": false
            },
            "FAXENTREGA": {
                "desc": "FAXENTREGA",
                "type": "varchar",
                "selected": false
            },
            "FAXPGTO": {
                "desc": "FAXPGTO",
                "type": "varchar",
                "selected": false
            },
            "FILIALFINANCEIRA": {
                "desc": "FILIALFINANCEIRA",
                "type": "varchar",
                "selected": false
            },
            "FORMAPAGAMENTO": {
                "desc": "FORMAPAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "FORMATRIBUTACAO": {
                "desc": "FORMATRIBUTACAO",
                "type": "varchar",
                "selected": false
            },
            "FORMULAVALDEDUCAOVARIAVEL": {
                "desc": "FORMULAVALDEDUCAOVARIAVEL",
                "type": "varchar",
                "selected": false
            },
            "ID_MEMBERS_1": {
                "desc": "ID_MEMBERS_1",
                "type": "varchar",
                "selected": false
            },
            "ID_MEMBERS_4": {
                "desc": "ID_MEMBERS_4",
                "type": "varchar",
                "selected": false
            },
            "IDCFO": {
                "desc": "IDCFO",
                "type": "varchar",
                "selected": false
            },
            "IDCFOFISCAL": {
                "desc": "IDCFOFISCAL",
                "type": "varchar",
                "selected": false
            },
            "IDENTPORCNPJ": {
                "desc": "IDENTPORCNPJ",
                "type": "varchar",
                "selected": false
            },
            "IDINTEGRACAO": {
                "desc": "IDINTEGRACAO",
                "type": "varchar",
                "selected": false
            },
            "IDNATRENDIMENTO": {
                "desc": "IDNATRENDIMENTO",
                "type": "varchar",
                "selected": false
            },
            "IDPAIS": {
                "desc": "IDPAIS",
                "type": "varchar",
                "selected": false
            },
            "IDPAISENTREGA": {
                "desc": "IDPAISENTREGA",
                "type": "varchar",
                "selected": false
            },
            "IDPAISPGTO": {
                "desc": "IDPAISPGTO",
                "type": "varchar",
                "selected": false
            },
            "INDNATRET": {
                "desc": "INDNATRET",
                "type": "varchar",
                "selected": false
            },
            "INDNATRET1": {
                "desc": "INDNATRET1",
                "type": "varchar",
                "selected": false
            },
            "INOVAR_AUTO": {
                "desc": "INOVAR_AUTO",
                "type": "varchar",
                "selected": false
            },
            "INSCRESTADUAL": {
                "desc": "INSCRESTADUAL",
                "type": "varchar",
                "selected": false
            },
            "INSCRESTADUALST": {
                "desc": "INSCRESTADUALST",
                "type": "varchar",
                "selected": false
            },
            "INSCRMUNICIPAL": {
                "desc": "INSCRMUNICIPAL",
                "type": "varchar",
                "selected": false
            },
            "ISENTOTRIBUTOS": {
                "desc": "ISENTOTRIBUTOS",
                "type": "varchar",
                "selected": false
            },
            "LAUDOFINAL": {
                "desc": "LAUDOFINAL",
                "type": "varchar",
                "selected": false
            },
            "LIMITECREDITO": {
                "desc": "LIMITECREDITO",
                "type": "varchar",
                "selected": false
            },
            "LOCALIDADE": {
                "desc": "LOCALIDADE",
                "type": "varchar",
                "selected": false
            },
            "LOCALIDADEENTREGA": {
                "desc": "LOCALIDADEENTREGA",
                "type": "varchar",
                "selected": false
            },
            "LOCALIDADEPGTO": {
                "desc": "LOCALIDADEPGTO",
                "type": "varchar",
                "selected": false
            },
            "NACIONALIDADE": {
                "desc": "NACIONALIDADE",
                "type": "varchar",
                "selected": false
            },
            "NIF": {
                "desc": "NIF",
                "type": "varchar",
                "selected": false
            },
            "NIT": {
                "desc": "NIT",
                "type": "varchar",
                "selected": false
            },
            "NUMDEPENDENTES": {
                "desc": "NUMDEPENDENTES",
                "type": "varchar",
                "selected": false
            },
            "NUMDIASATRASO": {
                "desc": "NUMDIASATRASO",
                "type": "varchar",
                "selected": false
            },
            "NUMEROENTREGA": {
                "desc": "NUMEROENTREGA",
                "type": "varchar",
                "selected": false
            },
            "NUMEROPGTO": {
                "desc": "NUMEROPGTO",
                "type": "varchar",
                "selected": false
            },
            "NUMFUNCIONARIOS": {
                "desc": "NUMFUNCIONARIOS",
                "type": "varchar",
                "selected": false
            },
            "OBRAPROPRIA": {
                "desc": "OBRAPROPRIA",
                "type": "varchar",
                "selected": false
            },
            "OPTANTEPELOSIMPLES": {
                "desc": "OPTANTEPELOSIMPLES",
                "type": "varchar",
                "selected": false
            },
            "ORGAOPUBLICO": {
                "desc": "ORGAOPUBLICO",
                "type": "varchar",
                "selected": false
            },
            "PAGREC": {
                "desc": "PAGREC",
                "type": "varchar",
                "selected": false
            },
            "PAIS": {
                "desc": "PAIS",
                "type": "varchar",
                "selected": false
            },
            "PAISENTREGA": {
                "desc": "PAISENTREGA",
                "type": "varchar",
                "selected": false
            },
            "PAISPAGTO": {
                "desc": "PAISPAGTO",
                "type": "varchar",
                "selected": false
            },
            "PARECER": {
                "desc": "PARECER",
                "type": "varchar",
                "selected": false
            },
            "PATRIMONIO": {
                "desc": "PATRIMONIO",
                "type": "varchar",
                "selected": false
            },
            "PERCENTACIDTRAB": {
                "desc": "PERCENTACIDTRAB",
                "type": "varchar",
                "selected": false
            },
            "PESSOAFISOUJUR": {
                "desc": "PESSOAFISOUJUR",
                "type": "varchar",
                "selected": false
            },
            "PJVALORCONTRATADO": {
                "desc": "PJVALORCONTRATADO",
                "type": "varchar",
                "selected": false
            },
            "PJVALORCONTRATADO1": {
                "desc": "PJVALORCONTRATADO1",
                "type": "varchar",
                "selected": false
            },
            "PORTE": {
                "desc": "PORTE",
                "type": "varchar",
                "selected": false
            },
            "PRODUTORRURAL": {
                "desc": "PRODUTORRURAL",
                "type": "varchar",
                "selected": false
            },
            "QUALIFFORNECEDOR": {
                "desc": "QUALIFFORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "RAMOATIV": {
                "desc": "RAMOATIV",
                "type": "varchar",
                "selected": false
            },
            "RECCREATEDBY": {
                "desc": "RECCREATEDBY",
                "type": "varchar",
                "selected": false
            },
            "RECCREATEDBY1": {
                "desc": "RECCREATEDBY1",
                "type": "varchar",
                "selected": false
            },
            "RECCREATEDON": {
                "desc": "RECCREATEDON",
                "type": "varchar",
                "selected": false
            },
            "RECCREATEDON1": {
                "desc": "RECCREATEDON1",
                "type": "varchar",
                "selected": false
            },
            "RECMODIFIEDBY": {
                "desc": "RECMODIFIEDBY",
                "type": "varchar",
                "selected": false
            },
            "RECMODIFIEDBY1": {
                "desc": "RECMODIFIEDBY1",
                "type": "varchar",
                "selected": false
            },
            "RECMODIFIEDON": {
                "desc": "RECMODIFIEDON",
                "type": "varchar",
                "selected": false
            },
            "RECMODIFIEDON1": {
                "desc": "RECMODIFIEDON1",
                "type": "varchar",
                "selected": false
            },
            "REFERENCIA": {
                "desc": "REFERENCIA",
                "type": "varchar",
                "selected": false
            },
            "REFERENCIA1": {
                "desc": "REFERENCIA1",
                "type": "varchar",
                "selected": false
            },
            "REFERENCIA2": {
                "desc": "REFERENCIA2",
                "type": "varchar",
                "selected": false
            },
            "REGCLIFOR": {
                "desc": "REGCLIFOR",
                "type": "varchar",
                "selected": false
            },
            "REGIAOCLIFOR": {
                "desc": "REGIAOCLIFOR",
                "type": "varchar",
                "selected": false
            },
            "REGIMEISS": {
                "desc": "REGIMEISS",
                "type": "varchar",
                "selected": false
            },
            "RETENCAOISS": {
                "desc": "RETENCAOISS",
                "type": "varchar",
                "selected": false
            },
            "RUAENTREGA": {
                "desc": "RUAENTREGA",
                "type": "varchar",
                "selected": false
            },
            "RUAPGTO": {
                "desc": "RUAPGTO",
                "type": "varchar",
                "selected": false
            },
            "SATISFACAO": {
                "desc": "SATISFACAO",
                "type": "varchar",
                "selected": false
            },
            "SIMBMOEDAINDEX": {
                "desc": "SIMBMOEDAINDEX",
                "type": "varchar",
                "selected": false
            },
            "SITUACAONIF": {
                "desc": "SITUACAONIF",
                "type": "varchar",
                "selected": false
            },
            "SOCIOCOOPERADO": {
                "desc": "SOCIOCOOPERADO",
                "type": "varchar",
                "selected": false
            },
            "STATUSCOTACAO": {
                "desc": "STATUSCOTACAO",
                "type": "varchar",
                "selected": false
            },
            "SUFRAMA": {
                "desc": "SUFRAMA",
                "type": "varchar",
                "selected": false
            },
            "TELEFONECOMERCIAL": {
                "desc": "TELEFONECOMERCIAL",
                "type": "varchar",
                "selected": false
            },
            "TELEFONEENTREGA": {
                "desc": "TELEFONEENTREGA",
                "type": "varchar",
                "selected": false
            },
            "TELEFONEPGTO": {
                "desc": "TELEFONEPGTO",
                "type": "varchar",
                "selected": false
            },
            "TELEX": {
                "desc": "TELEX",
                "type": "varchar",
                "selected": false
            },
            "TIPOBAIRRO": {
                "desc": "TIPOBAIRRO",
                "type": "varchar",
                "selected": false
            },
            "TIPOBAIRROENTREGA": {
                "desc": "TIPOBAIRROENTREGA",
                "type": "varchar",
                "selected": false
            },
            "TIPOBAIRROPGTO": {
                "desc": "TIPOBAIRROPGTO",
                "type": "varchar",
                "selected": false
            },
            "TIPOCLIENTE": {
                "desc": "TIPOCLIENTE",
                "type": "varchar",
                "selected": false
            },
            "TIPOCONTRIBUINTEINSS": {
                "desc": "TIPOCONTRIBUINTEINSS",
                "type": "varchar",
                "selected": false
            },
            "TIPOCONTROLEPONTO": {
                "desc": "TIPOCONTROLEPONTO",
                "type": "varchar",
                "selected": false
            },
            "TIPOINSCRCNAB": {
                "desc": "TIPOINSCRCNAB",
                "type": "varchar",
                "selected": false
            },
            "TIPOOPCOMBUSTIVEL": {
                "desc": "TIPOOPCOMBUSTIVEL",
                "type": "varchar",
                "selected": false
            },
            "TIPORENDIMENTO": {
                "desc": "TIPORENDIMENTO",
                "type": "varchar",
                "selected": false
            },
            "TIPORUA": {
                "desc": "TIPORUA",
                "type": "varchar",
                "selected": false
            },
            "TIPORUAENTREGA": {
                "desc": "TIPORUAENTREGA",
                "type": "varchar",
                "selected": false
            },
            "TIPORUAPGTO": {
                "desc": "TIPORUAPGTO",
                "type": "varchar",
                "selected": false
            },
            "TOMADORFOLHA": {
                "desc": "TOMADORFOLHA",
                "type": "varchar",
                "selected": false
            },
            "TPLOTACAO_OLD": {
                "desc": "TPLOTACAO_OLD",
                "type": "varchar",
                "selected": false
            },
            "TPTOMADOR": {
                "desc": "TPTOMADOR",
                "type": "varchar",
                "selected": false
            },
            "TTB5_001": {
                "desc": "TTB5_001",
                "type": "varchar",
                "selected": false
            },
            "TTB5_002": {
                "desc": "TTB5_002",
                "type": "varchar",
                "selected": false
            },
            "TTB5_003": {
                "desc": "TTB5_003",
                "type": "varchar",
                "selected": false
            },
            "TTB5_004": {
                "desc": "TTB5_004",
                "type": "varchar",
                "selected": false
            },
            "TTB5_005": {
                "desc": "TTB5_005",
                "type": "varchar",
                "selected": false
            },
            "TTB5_006": {
                "desc": "TTB5_006",
                "type": "varchar",
                "selected": false
            },
            "ULTIMODOCUMENTO": {
                "desc": "ULTIMODOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "USARCUMULATRETENCAOPAGAR": {
                "desc": "USARCUMULATRETENCAOPAGAR",
                "type": "varchar",
                "selected": false
            },
            "USUARIOALTERACAO": {
                "desc": "USUARIOALTERACAO",
                "type": "varchar",
                "selected": false
            },
            "VALFRETE": {
                "desc": "VALFRETE",
                "type": "varchar",
                "selected": false
            },
            "VALOROP1": {
                "desc": "VALOROP1",
                "type": "varchar",
                "selected": false
            },
            "VALOROP2": {
                "desc": "VALOROP2",
                "type": "varchar",
                "selected": false
            },
            "VALOROP3": {
                "desc": "VALOROP3",
                "type": "varchar",
                "selected": false
            },
            "VALORULTIMOLAN": {
                "desc": "VALORULTIMOLAN",
                "type": "varchar",
                "selected": false
            },
            "VROUTRASDEDUCOESIRRF": {
                "desc": "VROUTRASDEDUCOESIRRF",
                "type": "varchar",
                "selected": false
            },
            "ACCOUNT": {
                "desc": "ACCOUNT",
                "type": "varchar",
                "selected": false
            },
            "ADTOVALOR": {
                "desc": "ADTOVALOR",
                "type": "varchar",
                "selected": false
            },
            "AGENCY": {
                "desc": "AGENCY",
                "type": "varchar",
                "selected": false
            },
            "ATIVO1": {
                "desc": "ATIVO1",
                "type": "int",
                "selected": false
            },
            "BANK": {
                "desc": "BANK",
                "type": "varchar",
                "selected": false
            },
            "CAMARACOMPENSACAO": {
                "desc": "CAMARACOMPENSACAO",
                "type": "int",
                "selected": false
            },
            "CEPAGENCIA": {
                "desc": "CEPAGENCIA",
                "type": "int",
                "selected": false
            },
            "CGCFAVORECIDO": {
                "desc": "CGCFAVORECIDO",
                "type": "varchar",
                "selected": false
            },
            "CHAVE": {
                "desc": "CHAVE",
                "type": "varchar",
                "selected": false
            },
            "CNABCODDEBAUTO": {
                "desc": "CNABCODDEBAUTO",
                "type": "varchar",
                "selected": false
            },
            "CODCFO2": {
                "desc": "CODCFO2",
                "type": "varchar",
                "selected": false
            },
            "CODCOLCFO": {
                "desc": "CODCOLCFO",
                "type": "int",
                "selected": false
            },
            "CODCOLIGADA2": {
                "desc": "CODCOLIGADA2",
                "type": "int",
                "selected": false
            },
            "CODFINALIDADE1": {
                "desc": "CODFINALIDADE1",
                "type": "int",
                "selected": false
            },
            "CODIGOAGENCIA": {
                "desc": "CODIGOAGENCIA",
                "type": "varchar",
                "selected": false
            },
            "CONTACORRENTE": {
                "desc": "CONTACORRENTE",
                "type": "varchar",
                "selected": false
            },
            "CONTRIBUINTE_IBS_CBS": {
                "desc": "CONTRIBUINTE_IBS_CBS",
                "type": "int",
                "selected": false
            },
            "DIGITOAGENCIA": {
                "desc": "DIGITOAGENCIA",
                "type": "varchar",
                "selected": false
            },
            "DIGITOCONTA": {
                "desc": "DIGITOCONTA",
                "type": "varchar",
                "selected": false
            },
            "DISTRCOMPREV": {
                "desc": "DISTRCOMPREV",
                "type": "numeric",
                "selected": false
            },
            "DISTRPERMESREF": {
                "desc": "DISTRPERMESREF",
                "type": "varchar",
                "selected": false
            },
            "DTNASCIEMNTO": {
                "desc": "DTNASCIEMNTO",
                "type": "varchar",
                "selected": false
            },
            "FORMAPAGAMENTO1": {
                "desc": "FORMAPAGAMENTO1",
                "type": "varchar",
                "selected": false
            },
            "IDPGTO": {
                "desc": "IDPGTO",
                "type": "int",
                "selected": false
            },
            "NAOUSARCALCSIMPIRPF": {
                "desc": "NAOUSARCALCSIMPIRPF",
                "type": "varchar",
                "selected": false
            },
            "NOMEAGENCIA": {
                "desc": "NOMEAGENCIA",
                "type": "varchar",
                "selected": false
            },
            "RECCREATEDBY2": {
                "desc": "RECCREATEDBY2",
                "type": "varchar",
                "selected": false
            },
            "RECCREATEDON2": {
                "desc": "RECCREATEDON2",
                "type": "datetime",
                "selected": false
            },
            "RECMODIFIEDBY2": {
                "desc": "RECMODIFIEDBY2",
                "type": "varchar",
                "selected": false
            },
            "RECMODIFIEDON2": {
                "desc": "RECMODIFIEDON2",
                "type": "datetime",
                "selected": false
            },
            "TIPOCONTA": {
                "desc": "TIPOCONTA",
                "type": "int",
                "selected": false
            },
            "TIPODOC1": {
                "desc": "TIPODOC1",
                "type": "varchar",
                "selected": false
            },
            "TIPOPIX": {
                "desc": "TIPOPIX",
                "type": "int",
                "selected": false
            },
            "FATURA": {
                "desc": "FATURA",
                "type": "varchar",
                "selected": false
            },
            "PRIMEIRO_VENCIMENTO_LANCTO": {
                "desc": "PRIMEIRO_VENCIMENTO_LANCTO",
                "type": "datetime",
                "selected": false
            },
            "VALORTOTAL": {
                "desc": "VALORTOTAL",
                "type": "numeric",
                "selected": false
            },
            "CONDICAO_PAGAMENTO": {
                "desc": "CONDICAO_PAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "DATA_DIGITACAO": {
                "desc": "DATA_DIGITACAO",
                "type": "datetime",
                "selected": false
            },
            "DIFERENCA_EMISSAO_DIGITACAO": {
                "desc": "DIFERENCA_EMISSAO_DIGITACAO",
                "type": "int",
                "selected": false
            },
            "DIFERENCA_SAIDA_VENCIMENTO": {
                "desc": "DIFERENCA_SAIDA_VENCIMENTO",
                "type": "int",
                "selected": false
            },
            "PRIMEIRO_VENCIMENTO": {
                "desc": "PRIMEIRO_VENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "CODUND": {
                "desc": "CODUND",
                "type": "varchar",
                "selected": false
            },
            "DATACONTRATO": {
                "desc": "DATACONTRATO",
                "type": "datetime",
                "selected": false
            },
            "DATAFIM": {
                "desc": "DATAFIM",
                "type": "datetime",
                "selected": false
            },
            "DATAINICIO": {
                "desc": "DATAINICIO",
                "type": "datetime",
                "selected": false
            },
            "DATATERMINO": {
                "desc": "DATATERMINO",
                "type": "datetime",
                "selected": false
            },
            "DESCRICAO_CONTRATO_ALUGUEL": {
                "desc": "DESCRICAO_CONTRATO_ALUGUEL",
                "type": "varchar",
                "selected": false
            },
            "LOCADOR_NOME_CPF_CNPJ": {
                "desc": "LOCADOR_NOME_CPF_CNPJ",
                "type": "varchar",
                "selected": false
            },
            "NSEQITMCNT": {
                "desc": "NSEQITMCNT",
                "type": "int",
                "selected": false
            },
            "NUMERONF": {
                "desc": "NUMERONF",
                "type": "varchar",
                "selected": false
            },
            "TOTAL_NF_DIGITADAS": {
                "desc": "TOTAL_NF_DIGITADAS",
                "type": "varchar",
                "selected": false
            },
            "ADM": {
                "desc": "ADM",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAOCONTRATO": {
                "desc": "DESCRICAOCONTRATO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAOFORMAPAGAMENTO": {
                "desc": "DESCRICAOFORMAPAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "DIRETOREXECUTIVO": {
                "desc": "DIRETOREXECUTIVO",
                "type": "varchar",
                "selected": false
            },
            "ENGCIVIL": {
                "desc": "ENGCIVIL",
                "type": "varchar",
                "selected": false
            },
            "HISTORICOMOVIMENTO": {
                "desc": "HISTORICOMOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "LIDERCONTRATO": {
                "desc": "LIDERCONTRATO",
                "type": "varchar",
                "selected": false
            },
            "LIQUIDO_IR": {
                "desc": "LIQUIDO_IR",
                "type": "numeric",
                "selected": false
            },
            "PROPRIETARIO_CPF_CNPJ": {
                "desc": "PROPRIETARIO_CPF_CNPJ",
                "type": "varchar",
                "selected": false
            },
            "PROPRIETARIO_DADOS_BANCARIOS": {
                "desc": "PROPRIETARIO_DADOS_BANCARIOS",
                "type": "varchar",
                "selected": false
            },
            "PROPRIETARIO_ENDERECO": {
                "desc": "PROPRIETARIO_ENDERECO",
                "type": "varchar",
                "selected": false
            },
            "PROPRIETARIO_NOME": {
                "desc": "PROPRIETARIO_NOME",
                "type": "varchar",
                "selected": false
            },
            "REVISAO": {
                "desc": "REVISAO",
                "type": "int",
                "selected": false
            },
            "TIPOFORMAPAGAMENTO": {
                "desc": "TIPOFORMAPAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "VALORDESC": {
                "desc": "VALORDESC",
                "type": "numeric",
                "selected": false
            },
            "VALORDESP": {
                "desc": "VALORDESP",
                "type": "numeric",
                "selected": false
            },
            "VALORIRRF": {
                "desc": "VALORIRRF",
                "type": "numeric",
                "selected": false
            },
            "HISTORICO_ITEM": {
                "desc": "HISTORICO_ITEM",
                "type": "varchar",
                "selected": false
            },
            "HISTORICO_NF": {
                "desc": "HISTORICO_NF",
                "type": "varchar",
                "selected": false
            },
            "CÓDIGO DA COLIGADA": {
                "desc": "CÓDIGO DA COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "DATA DE CRIAÇÃO": {
                "desc": "DATA DE CRIAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "DATA DE EMISSÃO": {
                "desc": "DATA DE EMISSÃO",
                "type": "varchar",
                "selected": false
            },
            "HORÁRIO DE CRIAÇÃO": {
                "desc": "HORÁRIO DE CRIAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "Nº DO CONTRATO": {
                "desc": "Nº DO CONTRATO",
                "type": "varchar",
                "selected": false
            },
            "Nº MOVIMENTO": {
                "desc": "Nº MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "TIPO MOVIMENTO": {
                "desc": "TIPO MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "USUÁRIO DA ULTIMA MODIFICAÇÃO": {
                "desc": "USUÁRIO DA ULTIMA MODIFICAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "USUÁRIO DE CRIAÇÃO": {
                "desc": "USUÁRIO DE CRIAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "VALOR TOTAL DE DESCONTO SOBRE": {
                "desc": "VALOR TOTAL DE DESCONTO SOBRE A NF (NÃO",
                "type": "varchar",
                "selected": false
            },
            "FORNECEDOR CONTRATO": {
                "desc": "FORNECEDOR CONTRATO",
                "type": "varchar",
                "selected": false
            },
            "PERIODO_MEDICAO": {
                "desc": "PERIODO_MEDICAO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_RETIDO_MEDICAO": {
                "desc": "VALOR_RETIDO_MEDICAO",
                "type": "varchar",
                "selected": false
            },
            "DATAAPROVACAO": {
                "desc": "DATAAPROVACAO",
                "type": "varchar",
                "selected": false
            },
            "MEDIA": {
                "desc": "MEDIA",
                "type": "varchar",
                "selected": false
            },
            "ANO EMISSAO NF": {
                "desc": "ANO EMISSAO NF",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_PRODUTO": {
                "desc": "CODIGO_PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "DATA DE EMISSÃO NF": {
                "desc": "DATA DE EMISSÃO NF",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO_FROTA": {
                "desc": "DESCRICAO_FROTA",
                "type": "varchar",
                "selected": false
            },
            "IDENTIFICADOR_MOVIMENTO": {
                "desc": "IDENTIFICADOR_MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "MES EMISSAO NF": {
                "desc": "MES EMISSAO NF",
                "type": "varchar",
                "selected": false
            },
            "NUMERO_SEQUENCIAL_ITEM_NF": {
                "desc": "NUMERO_SEQUENCIAL_ITEM_NF",
                "type": "varchar",
                "selected": false
            },
            "ALIQUOTA INSS": {
                "desc": "ALIQUOTA INSS",
                "type": "numeric",
                "selected": false
            },
            "ANO EMISSAO": {
                "desc": "ANO EMISSAO",
                "type": "varchar",
                "selected": false
            },
            "CENTRO CUSTO": {
                "desc": "CENTRO CUSTO",
                "type": "varchar",
                "selected": false
            },
            "CÓD. COL.": {
                "desc": "CÓD. COL.",
                "type": "int",
                "selected": false
            },
            "COFIRF": {
                "desc": "COFIRF",
                "type": "numeric",
                "selected": false
            },
            "CSLLRF": {
                "desc": "CSLLRF",
                "type": "numeric",
                "selected": false
            },
            "DATA BAIXA": {
                "desc": "DATA BAIXA",
                "type": "varchar",
                "selected": false
            },
            "DATA VENCIMENTO": {
                "desc": "DATA VENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "DT EMISSAO NF": {
                "desc": "DT EMISSAO NF",
                "type": "varchar",
                "selected": false
            },
            "ID MOV": {
                "desc": "ID MOV",
                "type": "int",
                "selected": false
            },
            "INSS": {
                "desc": "INSS",
                "type": "numeric",
                "selected": false
            },
            "IRRF": {
                "desc": "IRRF",
                "type": "numeric",
                "selected": false
            },
            "ISSRET": {
                "desc": "ISSRET",
                "type": "numeric",
                "selected": false
            },
            "LINHA": {
                "desc": "LINHA",
                "type": "int",
                "selected": false
            },
            "MES EMISSAO": {
                "desc": "MES EMISSAO",
                "type": "varchar",
                "selected": false
            },
            "Nº NF": {
                "desc": "Nº NF",
                "type": "varchar",
                "selected": false
            },
            "PISRF": {
                "desc": "PISRF",
                "type": "numeric",
                "selected": false
            },
            "STATUS NF": {
                "desc": "STATUS NF",
                "type": "varchar",
                "selected": false
            },
            "TIPO MOV": {
                "desc": "TIPO MOV",
                "type": "varchar",
                "selected": false
            },
            "TOTAL IMPOSTOS NF": {
                "desc": "TOTAL IMPOSTOS NF",
                "type": "numeric",
                "selected": false
            },
            "TOTAL LIQUIDO APOS ABAT": {
                "desc": "TOTAL LIQUIDO APOS ABAT",
                "type": "numeric",
                "selected": false
            },
            "VALOR BAIXADO": {
                "desc": "VALOR BAIXADO",
                "type": "numeric",
                "selected": false
            },
            "VALOR BRUTO NF": {
                "desc": "VALOR BRUTO NF",
                "type": "numeric",
                "selected": false
            },
            "CODIGO_INSUMO": {
                "desc": "CODIGO_INSUMO",
                "type": "varchar",
                "selected": false
            },
            "CODPRJ": {
                "desc": "CODPRJ",
                "type": "varchar",
                "selected": false
            },
            "INSUMO": {
                "desc": "INSUMO",
                "type": "varchar",
                "selected": false
            },
            "NUMCNT": {
                "desc": "NUMCNT",
                "type": "varchar",
                "selected": false
            },
            "PERIODO": {
                "desc": "PERIODO",
                "type": "varchar",
                "selected": false
            },
            "PERIODOMED": {
                "desc": "PERIODOMED",
                "type": "varchar",
                "selected": false
            },
            "QUANTIDADEMEDIDA": {
                "desc": "QUANTIDADEMEDIDA",
                "type": "varchar",
                "selected": false
            },
            "UNIDADE_INSUMO": {
                "desc": "UNIDADE_INSUMO",
                "type": "varchar",
                "selected": false
            },
            "VALORMEDIDO": {
                "desc": "VALORMEDIDO",
                "type": "varchar",
                "selected": false
            },
            "CONTRATO_FORNECEDOR": {
                "desc": "CONTRATO_FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "DESCONTO_ALIMENTACAO": {
                "desc": "DESCONTO_ALIMENTACAO",
                "type": "varchar",
                "selected": false
            },
            "LIQUIDO": {
                "desc": "LIQUIDO",
                "type": "varchar",
                "selected": false
            },
            "PERCENTUAL_LIQUIDO%": {
                "desc": "PERCENTUAL_LIQUIDO%",
                "type": "varchar",
                "selected": false
            },
            "TOTALMEDICAO": {
                "desc": "TOTALMEDICAO",
                "type": "varchar",
                "selected": false
            },
            "MENOR_PRECO": {
                "desc": "MENOR_PRECO",
                "type": "varchar",
                "selected": false
            },
            "ULTIMA_DATA_COMPRA": {
                "desc": "ULTIMA_DATA_COMPRA",
                "type": "varchar",
                "selected": false
            },
            "CNPJFORNECEDOR": {
                "desc": "CNPJFORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CODIGOCENTROCUSTO": {
                "desc": "CODIGOCENTROCUSTO",
                "type": "varchar",
                "selected": false
            },
            "CODLOCALESTOQUE": {
                "desc": "CODLOCALESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "CODMOVIMENTO": {
                "desc": "CODMOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "VALORBRUTOITEMORIG": {
                "desc": "VALORBRUTOITEMORIG",
                "type": "numeric",
                "selected": false
            },
            "ENDERECO": {
                "desc": "ENDERECO",
                "type": "varchar",
                "selected": false
            },
            "TIPOINSCRICAOEMPRESA": {
                "desc": "TIPOINSCRICAOEMPRESA",
                "type": "varchar",
                "selected": false
            },
            "CODIGODODESCONTO": {
                "desc": "CODIGODODESCONTO",
                "type": "varchar",
                "selected": false
            },
            "DATADODESCONTO": {
                "desc": "DATADODESCONTO",
                "type": "varchar",
                "selected": false
            },
            "VALORDODESCONTO": {
                "desc": "VALORDODESCONTO",
                "type": "varchar",
                "selected": false
            },
            "QTD": {
                "desc": "QTD",
                "type": "varchar",
                "selected": false
            },
            "TOT": {
                "desc": "TOT",
                "type": "varchar",
                "selected": false
            },
            "INSCEST": {
                "desc": "INSCEST",
                "type": "varchar",
                "selected": false
            },
            "TEXTO": {
                "desc": "TEXTO",
                "type": "varchar",
                "selected": false
            },
            "ALIQUOTAISS": {
                "desc": "ALIQUOTAISS",
                "type": "numeric",
                "selected": false
            },
            "ALIQUOTAISSOUTROS": {
                "desc": "ALIQUOTAISSOUTROS",
                "type": "numeric",
                "selected": false
            },
            "ALIQUOTAISSRF": {
                "desc": "ALIQUOTAISSRF",
                "type": "numeric",
                "selected": false
            },
            "BAIRROCLIENTE": {
                "desc": "BAIRROCLIENTE",
                "type": "varchar",
                "selected": false
            },
            "BAIRROCOLETA": {
                "desc": "BAIRROCOLETA",
                "type": "varchar",
                "selected": false
            },
            "BAIRROFILIAL": {
                "desc": "BAIRROFILIAL",
                "type": "varchar",
                "selected": false
            },
            "BASEICMS": {
                "desc": "BASEICMS",
                "type": "numeric",
                "selected": false
            },
            "BASEICMSST": {
                "desc": "BASEICMSST",
                "type": "numeric",
                "selected": false
            },
            "BASETRBIPI": {
                "desc": "BASETRBIPI",
                "type": "numeric",
                "selected": false
            },
            "BASETRBISS": {
                "desc": "BASETRBISS",
                "type": "numeric",
                "selected": false
            },
            "BASETRBISSOUTROS": {
                "desc": "BASETRBISSOUTROS",
                "type": "numeric",
                "selected": false
            },
            "BASETRBISSRF": {
                "desc": "BASETRBISSRF",
                "type": "numeric",
                "selected": false
            },
            "CEPCLIENTE": {
                "desc": "CEPCLIENTE",
                "type": "varchar",
                "selected": false
            },
            "CEPCOLETA": {
                "desc": "CEPCOLETA",
                "type": "varchar",
                "selected": false
            },
            "CEPFILIAL": {
                "desc": "CEPFILIAL",
                "type": "varchar",
                "selected": false
            },
            "CHAVEACESSO": {
                "desc": "CHAVEACESSO",
                "type": "varchar",
                "selected": false
            },
            "CHAVEACESSONFE": {
                "desc": "CHAVEACESSONFE",
                "type": "varchar",
                "selected": false
            },
            "CIDADECLIENTE": {
                "desc": "CIDADECLIENTE",
                "type": "varchar",
                "selected": false
            },
            "CIDADEFILIAL": {
                "desc": "CIDADEFILIAL",
                "type": "varchar",
                "selected": false
            },
            "CIDADETRANSP": {
                "desc": "CIDADETRANSP",
                "type": "varchar",
                "selected": false
            },
            "CNPJCLIENTE": {
                "desc": "CNPJCLIENTE",
                "type": "varchar",
                "selected": false
            },
            "CNPJCPFCOLETA": {
                "desc": "CNPJCPFCOLETA",
                "type": "varchar",
                "selected": false
            },
            "CNPJCPFENTREGA": {
                "desc": "CNPJCPFENTREGA",
                "type": "varchar",
                "selected": false
            },
            "CNPJFILIAL": {
                "desc": "CNPJFILIAL",
                "type": "varchar",
                "selected": false
            },
            "CNPJTRANSP": {
                "desc": "CNPJTRANSP",
                "type": "varchar",
                "selected": false
            },
            "CODETDCOLETA": {
                "desc": "CODETDCOLETA",
                "type": "varchar",
                "selected": false
            },
            "CODIGOSERVICO": {
                "desc": "CODIGOSERVICO",
                "type": "varchar",
                "selected": false
            },
            "CODNAT": {
                "desc": "CODNAT",
                "type": "varchar",
                "selected": false
            },
            "COMPLEMENTOCLIENTE": {
                "desc": "COMPLEMENTOCLIENTE",
                "type": "varchar",
                "selected": false
            },
            "COMPLEMENTOFILIAL": {
                "desc": "COMPLEMENTOFILIAL",
                "type": "varchar",
                "selected": false
            },
            "ENDCOLETA": {
                "desc": "ENDCOLETA",
                "type": "varchar",
                "selected": false
            },
            "ENDENTREGA": {
                "desc": "ENDENTREGA",
                "type": "varchar",
                "selected": false
            },
            "ENDTRANSP": {
                "desc": "ENDTRANSP",
                "type": "varchar",
                "selected": false
            },
            "ESTADOCLIENTE": {
                "desc": "ESTADOCLIENTE",
                "type": "varchar",
                "selected": false
            },
            "ESTADOFILIAL": {
                "desc": "ESTADOFILIAL",
                "type": "varchar",
                "selected": false
            },
            "ESTADOTRANSP": {
                "desc": "ESTADOTRANSP",
                "type": "varchar",
                "selected": false
            },
            "IDMOV1": {
                "desc": "IDMOV1",
                "type": "int",
                "selected": false
            },
            "INFCOMPLCONTRIBUINTE": {
                "desc": "INFCOMPLCONTRIBUINTE",
                "type": "varchar",
                "selected": false
            },
            "INSCREESTADUALTRANSP": {
                "desc": "INSCREESTADUALTRANSP",
                "type": "varchar",
                "selected": false
            },
            "INSCRESTCOLETA": {
                "desc": "INSCRESTCOLETA",
                "type": "varchar",
                "selected": false
            },
            "INSCRESTENTREGA": {
                "desc": "INSCRESTENTREGA",
                "type": "varchar",
                "selected": false
            },
            "INSCRICAOESTADUALCLIENTE": {
                "desc": "INSCRICAOESTADUALCLIENTE",
                "type": "varchar",
                "selected": false
            },
            "INSCRICAOESTADUALFILIAL": {
                "desc": "INSCRICAOESTADUALFILIAL",
                "type": "varchar",
                "selected": false
            },
            "INSCRICAOMUNICIAL": {
                "desc": "INSCRICAOMUNICIAL",
                "type": "varchar",
                "selected": false
            },
            "INSCRICAOMUNICIPALCLIENTE": {
                "desc": "INSCRICAOMUNICIPALCLIENTE",
                "type": "varchar",
                "selected": false
            },
            "MENSAGEM": {
                "desc": "MENSAGEM",
                "type": "varchar",
                "selected": false
            },
            "MUNICIPIOCOLETA": {
                "desc": "MUNICIPIOCOLETA",
                "type": "varchar",
                "selected": false
            },
            "MUNICIPIOENTREGA": {
                "desc": "MUNICIPIOENTREGA",
                "type": "varchar",
                "selected": false
            },
            "MUNICIPIOSERV": {
                "desc": "MUNICIPIOSERV",
                "type": "varchar",
                "selected": false
            },
            "NOMECFOP": {
                "desc": "NOMECFOP",
                "type": "varchar",
                "selected": false
            },
            "NOMECLIENTE": {
                "desc": "NOMECLIENTE",
                "type": "varchar",
                "selected": false
            },
            "NOMECOLETA": {
                "desc": "NOMECOLETA",
                "type": "varchar",
                "selected": false
            },
            "NOMEENTREGA": {
                "desc": "NOMEENTREGA",
                "type": "varchar",
                "selected": false
            },
            "NOMEFILIAL": {
                "desc": "NOMEFILIAL",
                "type": "varchar",
                "selected": false
            },
            "NOMETRANSP": {
                "desc": "NOMETRANSP",
                "type": "varchar",
                "selected": false
            },
            "NUMEROCLIENTE": {
                "desc": "NUMEROCLIENTE",
                "type": "varchar",
                "selected": false
            },
            "NUMEROFILIAL": {
                "desc": "NUMEROFILIAL",
                "type": "varchar",
                "selected": false
            },
            "PESOBRUTO": {
                "desc": "PESOBRUTO",
                "type": "numeric",
                "selected": false
            },
            "RUACLIENTE": {
                "desc": "RUACLIENTE",
                "type": "varchar",
                "selected": false
            },
            "RUAFILIAL": {
                "desc": "RUAFILIAL",
                "type": "varchar",
                "selected": false
            },
            "TELEFONECLIENTE": {
                "desc": "TELEFONECLIENTE",
                "type": "varchar",
                "selected": false
            },
            "TELEFONEFILIAL": {
                "desc": "TELEFONEFILIAL",
                "type": "varchar",
                "selected": false
            },
            "TIPOFRETE": {
                "desc": "TIPOFRETE",
                "type": "varchar",
                "selected": false
            },
            "VALORBRUTOORIG": {
                "desc": "VALORBRUTOORIG",
                "type": "numeric",
                "selected": false
            },
            "VALORCOFINS": {
                "desc": "VALORCOFINS",
                "type": "numeric",
                "selected": false
            },
            "VALORCSLL": {
                "desc": "VALORCSLL",
                "type": "numeric",
                "selected": false
            },
            "VALORFRETE": {
                "desc": "VALORFRETE",
                "type": "numeric",
                "selected": false
            },
            "VALORICMS": {
                "desc": "VALORICMS",
                "type": "numeric",
                "selected": false
            },
            "VALORICMSST": {
                "desc": "VALORICMSST",
                "type": "numeric",
                "selected": false
            },
            "VALORINSS": {
                "desc": "VALORINSS",
                "type": "numeric",
                "selected": false
            },
            "VALORPIS": {
                "desc": "VALORPIS",
                "type": "numeric",
                "selected": false
            },
            "VALORSEGURO": {
                "desc": "VALORSEGURO",
                "type": "numeric",
                "selected": false
            },
            "VALORSERVICO": {
                "desc": "VALORSERVICO",
                "type": "numeric",
                "selected": false
            },
            "VALORTRBIPI": {
                "desc": "VALORTRBIPI",
                "type": "numeric",
                "selected": false
            },
            "VALORTRBISS": {
                "desc": "VALORTRBISS",
                "type": "numeric",
                "selected": false
            },
            "VALORTRBISSOUTROS": {
                "desc": "VALORTRBISSOUTROS",
                "type": "numeric",
                "selected": false
            },
            "VALORTRBISSRF": {
                "desc": "VALORTRBISSRF",
                "type": "numeric",
                "selected": false
            },
            "VOLUME": {
                "desc": "VOLUME",
                "type": "numeric",
                "selected": false
            },
            "CGC": {
                "desc": "CGC",
                "type": "varchar",
                "selected": false
            },
            "FAX1": {
                "desc": "FAX1",
                "type": "varchar",
                "selected": false
            },
            "INSCRICAOESTADUAL": {
                "desc": "INSCRICAOESTADUAL",
                "type": "varchar",
                "selected": false
            },
            "CODPRD": {
                "desc": "CODPRD",
                "type": "varchar",
                "selected": false
            },
            "VALORRATCCU": {
                "desc": "VALORRATCCU",
                "type": "varchar",
                "selected": false
            },
            "CODSTACNT": {
                "desc": "CODSTACNT",
                "type": "varchar",
                "selected": false
            }
        }
    },
    TMOV: {
        "code": "TMOV",
        "desc": "Movimentos (Vendas / Compras / Estoque)",
        "priority": 7,
        "joinCondition": "PFUNC.CODCOLIGADA = TMOV.CODCOLIGADA",
        "fields": {
            "CODCOLIGADA": {
                "desc": "Código da Coligada",
                "type": "smallint",
                "selected": false
            },
            "IDMOV": {
                "desc": "Identificador do Movimento",
                "type": "int",
                "selected": true
            },
            "NUMEROMOV": {
                "desc": "Número do Movimento / Nota",
                "type": "varchar",
                "selected": true
            },
            "CODTMV": {
                "desc": "Tipo de Movimento (Ex: 1.1.02)",
                "type": "varchar",
                "selected": true
            },
            "CODFO": {
                "desc": "Código do Fornecedor",
                "type": "varchar",
                "selected": false
            },
            "VALORLIQUIDO": {
                "desc": "Valor Líquido do Movimento",
                "type": "numeric",
                "selected": true
            },
            "VALORBRUTO": {
                "desc": "Valor Bruto do Movimento",
                "type": "numeric",
                "selected": false
            },
            "STATUS": {
                "desc": "Status do Movimento (A=Aberto, F=Faturado, C=Cancelado)",
                "type": "char",
                "selected": true
            },
            "DATAEMISSAO": {
                "desc": "Data de Emissão",
                "type": "datetime",
                "selected": true
            },
            "CENTROCUSTO": {
                "desc": "CENTROCUSTO",
                "type": "varchar",
                "selected": false
            },
            "COLIGADA": {
                "desc": "COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "FORNECEDOR": {
                "desc": "FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "IDLAN": {
                "desc": "IDLAN",
                "type": "varchar",
                "selected": false
            },
            "TIPODOCUMENTO": {
                "desc": "TIPODOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "USUARIO": {
                "desc": "USUARIO",
                "type": "varchar",
                "selected": false
            },
            "CLIENTEFORNECEDOR": {
                "desc": "CLIENTEFORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CODFILIAL": {
                "desc": "CODFILIAL",
                "type": "int",
                "selected": false
            },
            "DATAVENCIMENTO": {
                "desc": "DATAVENCIMENTO",
                "type": "datetime",
                "selected": false
            },
            "HISTORICO": {
                "desc": "HISTORICO",
                "type": "varchar",
                "selected": false
            },
            "MOVIMENTO": {
                "desc": "MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "NUMERODOCUMENTO": {
                "desc": "NUMERODOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "STATUS_LANCAMENTO": {
                "desc": "STATUS_LANCAMENTO",
                "type": "varchar",
                "selected": false
            },
            "TIPO": {
                "desc": "TIPO",
                "type": "varchar",
                "selected": false
            },
            "TIPODOC": {
                "desc": "TIPODOC",
                "type": "varchar",
                "selected": false
            },
            "USUARIOCRIACAO": {
                "desc": "USUARIOCRIACAO",
                "type": "varchar",
                "selected": false
            },
            "USUARIOCRIACAOORIGEM": {
                "desc": "USUARIOCRIACAOORIGEM",
                "type": "varchar",
                "selected": false
            },
            "VALORORIGINAL": {
                "desc": "VALORORIGINAL",
                "type": "numeric",
                "selected": false
            },
            "VALORORIGINAL1": {
                "desc": "VALORORIGINAL1",
                "type": "numeric",
                "selected": false
            },
            "DATABAIXA": {
                "desc": "DATABAIXA",
                "type": "varchar",
                "selected": false
            },
            "TIPO_RECEITA_DESPESA": {
                "desc": "TIPO_RECEITA_DESPESA",
                "type": "varchar",
                "selected": false
            },
            "VALOR": {
                "desc": "VALOR",
                "type": "varchar",
                "selected": false
            },
            "FORNECEDOR_BAIRRO_CIDADE_ESTAD": {
                "desc": "FORNECEDOR_BAIRRO_CIDADE_ESTADO_CNPJ",
                "type": "varchar",
                "selected": false
            },
            "FORNECEDOR_RUA_NUMERO": {
                "desc": "FORNECEDOR_RUA_NUMERO",
                "type": "varchar",
                "selected": false
            },
            "CCUSTO": {
                "desc": "CCUSTO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO": {
                "desc": "DESCRICAO",
                "type": "varchar",
                "selected": false
            },
            "NSEQITMMOV": {
                "desc": "NSEQITMMOV",
                "type": "varchar",
                "selected": false
            },
            "PRECOUNITARIO": {
                "desc": "PRECOUNITARIO",
                "type": "varchar",
                "selected": false
            },
            "QUANTIDADE": {
                "desc": "QUANTIDADE",
                "type": "varchar",
                "selected": false
            },
            "VALORBRUTOITEM": {
                "desc": "VALORBRUTOITEM",
                "type": "varchar",
                "selected": false
            },
            "CNPJCPF": {
                "desc": "CNPJCPF",
                "type": "varchar",
                "selected": false
            },
            "CODLOTE": {
                "desc": "CODLOTE",
                "type": "int",
                "selected": false
            },
            "IDLANCAMENTO": {
                "desc": "IDLANCAMENTO",
                "type": "int",
                "selected": false
            },
            "IDPARTIDA": {
                "desc": "IDPARTIDA",
                "type": "int",
                "selected": false
            },
            "COD_NATORCAMENTARIA": {
                "desc": "COD_NATORCAMENTARIA",
                "type": "varchar",
                "selected": false
            },
            "CODCCUSTO": {
                "desc": "CODCCUSTO",
                "type": "varchar",
                "selected": false
            },
            "CODCFO": {
                "desc": "CODCFO",
                "type": "varchar",
                "selected": false
            },
            "CODCXA": {
                "desc": "CODCXA",
                "type": "varchar",
                "selected": false
            },
            "CONTACAIXA": {
                "desc": "CONTACAIXA",
                "type": "varchar",
                "selected": false
            },
            "DIFERENCA_ORIGINAL_BAIXA": {
                "desc": "DIFERENCA_ORIGINAL_BAIXA",
                "type": "varchar",
                "selected": false
            },
            "NATORCAMENTARIA": {
                "desc": "NATORCAMENTARIA",
                "type": "varchar",
                "selected": false
            },
            "NOMECLIFOR": {
                "desc": "NOMECLIFOR",
                "type": "varchar",
                "selected": false
            },
            "VALORRATEIO": {
                "desc": "VALORRATEIO",
                "type": "varchar",
                "selected": false
            },
            "CODIGOCOLIGADA": {
                "desc": "CODIGOCOLIGADA",
                "type": "varchar",
                "selected": false
            },
            "NOMECLIFOR1": {
                "desc": "NOMECLIFOR1",
                "type": "varchar",
                "selected": false
            },
            "PARCELA": {
                "desc": "PARCELA",
                "type": "varchar",
                "selected": false
            },
            "USUARIO_CRIACAO": {
                "desc": "USUARIO_CRIACAO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_ORIGINAL": {
                "desc": "VALOR_ORIGINAL",
                "type": "varchar",
                "selected": false
            },
            "VALORPAGO": {
                "desc": "VALORPAGO",
                "type": "varchar",
                "selected": false
            },
            "CGCCFO": {
                "desc": "CGCCFO",
                "type": "varchar",
                "selected": false
            },
            "DATASAIDA": {
                "desc": "DATASAIDA",
                "type": "varchar",
                "selected": false
            },
            "NOME": {
                "desc": "NOME",
                "type": "varchar",
                "selected": false
            },
            "NOME1": {
                "desc": "NOME1",
                "type": "varchar",
                "selected": false
            },
            "IDPGTO": {
                "desc": "IDPGTO",
                "type": "varchar",
                "selected": false
            },
            "PAGREC": {
                "desc": "PAGREC",
                "type": "varchar",
                "selected": false
            },
            "PAGREC1": {
                "desc": "PAGREC1",
                "type": "varchar",
                "selected": false
            },
            "RECMODIFIEDBY": {
                "desc": "RECMODIFIEDBY",
                "type": "varchar",
                "selected": false
            },
            "STATUSLAN": {
                "desc": "STATUSLAN",
                "type": "varchar",
                "selected": false
            },
            "CODIGOPRD": {
                "desc": "CODIGOPRD",
                "type": "varchar",
                "selected": false
            },
            "NOMEFANTASIA": {
                "desc": "NOMEFANTASIA",
                "type": "varchar",
                "selected": false
            },
            "QUANTIDADE_CONSUMIDA": {
                "desc": "QUANTIDADE_CONSUMIDA",
                "type": "varchar",
                "selected": false
            },
            "CLASSIFICACAO": {
                "desc": "CLASSIFICACAO",
                "type": "varchar",
                "selected": false
            },
            "COD_PRODUTO": {
                "desc": "COD_PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "CODLOC": {
                "desc": "CODLOC",
                "type": "varchar",
                "selected": false
            },
            "DATAMOVIMENTO": {
                "desc": "DATAMOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "NOME_CENTRO_CUSTO": {
                "desc": "NOME_CENTRO_CUSTO",
                "type": "varchar",
                "selected": false
            },
            "NOME_COLIGADA": {
                "desc": "NOME_COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "NOME_FANTASIA_PRODUTO": {
                "desc": "NOME_FANTASIA_PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "NOME_FCFO": {
                "desc": "NOME_FCFO",
                "type": "varchar",
                "selected": false
            },
            "NOME_FILIAL": {
                "desc": "NOME_FILIAL",
                "type": "varchar",
                "selected": false
            },
            "NOME_LOCAL": {
                "desc": "NOME_LOCAL",
                "type": "varchar",
                "selected": false
            },
            "NUMEROSEQUENCIAL": {
                "desc": "NUMEROSEQUENCIAL",
                "type": "varchar",
                "selected": false
            },
            "UN": {
                "desc": "UN",
                "type": "varchar",
                "selected": false
            },
            "ANOBAIXA": {
                "desc": "ANOBAIXA",
                "type": "varchar",
                "selected": false
            },
            "MESBAIXA": {
                "desc": "MESBAIXA",
                "type": "varchar",
                "selected": false
            },
            "COLUMN1": {
                "desc": "Column1",
                "type": "varchar",
                "selected": false
            },
            "COLUMN2": {
                "desc": "Column2",
                "type": "varchar",
                "selected": false
            },
            "ANOEMISSAO": {
                "desc": "ANOEMISSAO",
                "type": "int",
                "selected": false
            },
            "ANOVCTO": {
                "desc": "ANOVCTO",
                "type": "int",
                "selected": false
            },
            "CLIENTE/FORNECEDOR": {
                "desc": "CLIENTE/FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CÓDIGO MOVIMENTO": {
                "desc": "CÓDIGO MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "CÓDIGO PRODUTO": {
                "desc": "CÓDIGO PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "CODTRF": {
                "desc": "CODTRF",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO CENTRO DE CUSTO": {
                "desc": "DESCRICAO CENTRO DE CUSTO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO PRODUTO": {
                "desc": "DESCRICAO PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "DIABAIXA": {
                "desc": "DIABAIXA",
                "type": "int",
                "selected": false
            },
            "DIAEMISSAO": {
                "desc": "DIAEMISSAO",
                "type": "int",
                "selected": false
            },
            "DIAVCTO": {
                "desc": "DIAVCTO",
                "type": "int",
                "selected": false
            },
            "IDPRJ": {
                "desc": "IDPRJ",
                "type": "int",
                "selected": false
            },
            "IDTRF": {
                "desc": "IDTRF",
                "type": "int",
                "selected": false
            },
            "MESEMISSAO": {
                "desc": "MESEMISSAO",
                "type": "int",
                "selected": false
            },
            "MESVCTO": {
                "desc": "MESVCTO",
                "type": "int",
                "selected": false
            },
            "NOME MOVIMENTO": {
                "desc": "NOME MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "PAGAR OU RECEBER": {
                "desc": "PAGAR ou RECEBER",
                "type": "varchar",
                "selected": false
            },
            "PERCENTUALRATEIO": {
                "desc": "PERCENTUALRATEIO",
                "type": "numeric",
                "selected": false
            },
            "PROJETO": {
                "desc": "PROJETO",
                "type": "varchar",
                "selected": false
            },
            "STATUS BAIXA DO LANÇAMENTO": {
                "desc": "STATUS BAIXA DO LANÇAMENTO",
                "type": "varchar",
                "selected": false
            },
            "STATUS DA FATURA": {
                "desc": "STATUS DA FATURA",
                "type": "varchar",
                "selected": false
            },
            "STATUS LANÇAMENTO": {
                "desc": "STATUS LANÇAMENTO",
                "type": "varchar",
                "selected": false
            },
            "ATENDIMENTO": {
                "desc": "ATENDIMENTO",
                "type": "varchar",
                "selected": false
            },
            "CIDADECOLIGADA": {
                "desc": "CIDADECOLIGADA",
                "type": "varchar",
                "selected": false
            },
            "CODATENDIMENTO": {
                "desc": "CODATENDIMENTO",
                "type": "int",
                "selected": false
            },
            "CODLOCAL": {
                "desc": "CODLOCAL",
                "type": "int",
                "selected": false
            },
            "CONDPAGAMENTO": {
                "desc": "CONDPAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "DATACRIACAO": {
                "desc": "DATACRIACAO",
                "type": "datetime",
                "selected": false
            },
            "FILIAL": {
                "desc": "FILIAL",
                "type": "varchar",
                "selected": false
            },
            "HISTORICOCURTO": {
                "desc": "HISTORICOCURTO",
                "type": "varchar",
                "selected": false
            },
            "HISTORICOLONGO": {
                "desc": "HISTORICOLONGO",
                "type": "varchar",
                "selected": false
            },
            "IMAGEM": {
                "desc": "IMAGEM",
                "type": "varchar",
                "selected": false
            },
            "LOCALESTOQUE": {
                "desc": "LOCALESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "RUACOLIGADA": {
                "desc": "RUACOLIGADA",
                "type": "varchar",
                "selected": false
            },
            "SERIE": {
                "desc": "SERIE",
                "type": "varchar",
                "selected": false
            },
            "TIPOMOVIMENTO": {
                "desc": "TIPOMOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "DATANASCIMENTO": {
                "desc": "DATANASCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "NOME2": {
                "desc": "NOME2",
                "type": "varchar",
                "selected": false
            },
            "CODCCUSTO1": {
                "desc": "CODCCUSTO1",
                "type": "varchar",
                "selected": false
            },
            "CPF": {
                "desc": "CPF",
                "type": "varchar",
                "selected": false
            },
            "MES_ANIVERSARIO": {
                "desc": "MES_ANIVERSARIO",
                "type": "varchar",
                "selected": false
            },
            "MES_ANO": {
                "desc": "MES_ANO",
                "type": "varchar",
                "selected": false
            },
            "PJDATAINICIO": {
                "desc": "PJDATAINICIO",
                "type": "datetime",
                "selected": false
            },
            "PJDATAULTIMAALT": {
                "desc": "PJDATAULTIMAALT",
                "type": "datetime",
                "selected": false
            },
            "PJVALORATUAL": {
                "desc": "PJVALORATUAL",
                "type": "numeric",
                "selected": false
            },
            "DESCRICAO FANATASIA": {
                "desc": "DESCRICAO FANATASIA",
                "type": "varchar",
                "selected": false
            },
            "PREÇO UNIT": {
                "desc": "PREÇO UNIT",
                "type": "varchar",
                "selected": false
            },
            "QTDE": {
                "desc": "QTDE",
                "type": "varchar",
                "selected": false
            },
            "VALOR CALC": {
                "desc": "VALOR CALC",
                "type": "varchar",
                "selected": false
            },
            "TOTALPRECOUNITARIO": {
                "desc": "TOTALPRECOUNITARIO",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_COLIGADA": {
                "desc": "CODIGO_COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "REF_LANCTO": {
                "desc": "REF_LANCTO",
                "type": "varchar",
                "selected": false
            },
            "STATUS_LANCTO": {
                "desc": "STATUS_LANCTO",
                "type": "varchar",
                "selected": false
            },
            "DATA_ALTERACAO": {
                "desc": "DATA_ALTERACAO",
                "type": "varchar",
                "selected": false
            },
            "DATA_CRIACAO": {
                "desc": "DATA_CRIACAO",
                "type": "varchar",
                "selected": false
            },
            "IDPRD": {
                "desc": "IDPRD",
                "type": "varchar",
                "selected": false
            },
            "LOCAL_ESTOQUE_SC": {
                "desc": "LOCAL_ESTOQUE_SC",
                "type": "varchar",
                "selected": false
            },
            "QUANTIDADEARECEBER": {
                "desc": "QUANTIDADEARECEBER",
                "type": "varchar",
                "selected": false
            },
            "QUANTIDADEORIGINAL": {
                "desc": "QUANTIDADEORIGINAL",
                "type": "varchar",
                "selected": false
            },
            "SALDO_015": {
                "desc": "SALDO_015",
                "type": "varchar",
                "selected": false
            },
            "SALDO_SC": {
                "desc": "SALDO_SC",
                "type": "varchar",
                "selected": false
            },
            "UNIDADE": {
                "desc": "UNIDADE",
                "type": "varchar",
                "selected": false
            },
            "USUARIO_MODIFICACAO": {
                "desc": "USUARIO_MODIFICACAO",
                "type": "varchar",
                "selected": false
            },
            "CONTRATO": {
                "desc": "CONTRATO",
                "type": "varchar",
                "selected": false
            },
            "ORDEM": {
                "desc": "ORDEM",
                "type": "int",
                "selected": false
            },
            "PRODUTO": {
                "desc": "PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "RAZAOSOCIAL": {
                "desc": "RAZAOSOCIAL",
                "type": "varchar",
                "selected": false
            },
            "CODIGOLOCALEST": {
                "desc": "CODIGOLOCALEST",
                "type": "varchar",
                "selected": false
            },
            "CODIGOPRODUTO": {
                "desc": "CODIGOPRODUTO",
                "type": "varchar",
                "selected": false
            },
            "DATAENTREGA": {
                "desc": "DATAENTREGA",
                "type": "varchar",
                "selected": false
            },
            "DESC_PAG": {
                "desc": "DESC_PAG",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAOPRODUTO": {
                "desc": "DESCRICAOPRODUTO",
                "type": "varchar",
                "selected": false
            },
            "END_OBRA": {
                "desc": "END_OBRA",
                "type": "varchar",
                "selected": false
            },
            "PAGAMENTO": {
                "desc": "PAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "PRAZOENTREGA": {
                "desc": "PRAZOENTREGA",
                "type": "varchar",
                "selected": false
            },
            "QTDEPRODUTO": {
                "desc": "QTDEPRODUTO",
                "type": "varchar",
                "selected": false
            },
            "SEQUENCIAL": {
                "desc": "SEQUENCIAL",
                "type": "varchar",
                "selected": false
            },
            "SOLICITANTE": {
                "desc": "SOLICITANTE",
                "type": "varchar",
                "selected": false
            },
            "VALORDESC": {
                "desc": "VALORDESC",
                "type": "numeric",
                "selected": false
            },
            "VALORDESP": {
                "desc": "VALORDESP",
                "type": "numeric",
                "selected": false
            },
            "VALORFRETE": {
                "desc": "VALORFRETE",
                "type": "numeric",
                "selected": false
            },
            "LOCAL_ESTOQUE_BAIRRO": {
                "desc": "LOCAL_ESTOQUE_BAIRRO",
                "type": "varchar",
                "selected": false
            },
            "LOCAL_ESTOQUE_CIDADE": {
                "desc": "LOCAL_ESTOQUE_CIDADE",
                "type": "varchar",
                "selected": false
            },
            "LOCAL_ESTOQUE_COMPLEMENTO": {
                "desc": "LOCAL_ESTOQUE_COMPLEMENTO",
                "type": "varchar",
                "selected": false
            },
            "LOCAL_ESTOQUE_ENDERECO": {
                "desc": "LOCAL_ESTOQUE_ENDERECO",
                "type": "varchar",
                "selected": false
            },
            "ANOEMI": {
                "desc": "ANOEMI",
                "type": "int",
                "selected": false
            },
            "ANOEMI1": {
                "desc": "ANOEMI1",
                "type": "int",
                "selected": false
            },
            "ATUAÇÃOFORNECEDOR": {
                "desc": "ATUAÇÃOFORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CENTRO_CUSTO": {
                "desc": "CENTRO_CUSTO",
                "type": "varchar",
                "selected": false
            },
            "DATAEMISSÃO": {
                "desc": "DATAEMISSÃO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO_CENTROCUSTO": {
                "desc": "DESCRICAO_CENTROCUSTO",
                "type": "varchar",
                "selected": false
            },
            "DIAEMI": {
                "desc": "DIAEMI",
                "type": "int",
                "selected": false
            },
            "DIAEMI1": {
                "desc": "DIAEMI1",
                "type": "int",
                "selected": false
            },
            "EMPREI": {
                "desc": "EMPREI",
                "type": "varchar",
                "selected": false
            },
            "FROTA": {
                "desc": "FROTA",
                "type": "varchar",
                "selected": false
            },
            "LOCEST": {
                "desc": "LOCEST",
                "type": "varchar",
                "selected": false
            },
            "MESEMI": {
                "desc": "MESEMI",
                "type": "int",
                "selected": false
            },
            "MESEMI1": {
                "desc": "MESEMI1",
                "type": "int",
                "selected": false
            },
            "NOMEMOV": {
                "desc": "NOMEMOV",
                "type": "varchar",
                "selected": false
            },
            "RECDESP": {
                "desc": "RECDESP",
                "type": "varchar",
                "selected": false
            },
            "TIPO_MOVIMENTO": {
                "desc": "TIPO_MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "TOTALITEM": {
                "desc": "TOTALITEM",
                "type": "numeric",
                "selected": false
            },
            "VALORBRUOTITEM": {
                "desc": "VALORBRUOTITEM",
                "type": "numeric",
                "selected": false
            },
            "VALORNF": {
                "desc": "VALORNF",
                "type": "numeric",
                "selected": false
            },
            "VALORUNITARIO": {
                "desc": "VALORUNITARIO",
                "type": "numeric",
                "selected": false
            },
            "VEICULOLEVE": {
                "desc": "VEICULOLEVE",
                "type": "varchar",
                "selected": false
            },
            "CODIGOCONTRATO": {
                "desc": "CODIGOCONTRATO",
                "type": "varchar",
                "selected": false
            },
            "CONFERENCIA": {
                "desc": "CONFERENCIA",
                "type": "varchar",
                "selected": false
            },
            "ESTADO": {
                "desc": "ESTADO",
                "type": "varchar",
                "selected": false
            },
            "IDCONTRATO": {
                "desc": "IDCONTRATO",
                "type": "int",
                "selected": false
            },
            "NUMERO_MOVIMENTO_ORIGEM": {
                "desc": "NUMERO_MOVIMENTO_ORIGEM",
                "type": "varchar",
                "selected": false
            },
            "VALORNFLIQUIDO": {
                "desc": "VALORNFLIQUIDO",
                "type": "numeric",
                "selected": false
            },
            "GRUPOPRODUTO": {
                "desc": "GRUPOPRODUTO",
                "type": "varchar",
                "selected": false
            },
            "CNPJ_FORNECEDOR": {
                "desc": "CNPJ_FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_FORNECEDOR": {
                "desc": "CODIGO_FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_LOCAL_ESTOQUE": {
                "desc": "CODIGO_LOCAL_ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_UNIDADE_MEDIDA": {
                "desc": "CODIGO_UNIDADE_MEDIDA",
                "type": "varchar",
                "selected": false
            },
            "DATA_EMISSAO_NF": {
                "desc": "DATA_EMISSAO_NF",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO_LOCAL_ESTOQUE": {
                "desc": "DESCRICAO_LOCAL_ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO_PRODUTO": {
                "desc": "DESCRICAO_PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "NOME_FORNECEDOR": {
                "desc": "NOME_FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "NRO_SEQ_NF": {
                "desc": "NRO_SEQ_NF",
                "type": "varchar",
                "selected": false
            },
            "NUMERO_NF": {
                "desc": "NUMERO_NF",
                "type": "varchar",
                "selected": false
            },
            "SERIE_NF": {
                "desc": "SERIE_NF",
                "type": "varchar",
                "selected": false
            },
            "USUARIO_ALTERACAO": {
                "desc": "USUARIO_ALTERACAO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_BRUTO_NF": {
                "desc": "VALOR_BRUTO_NF",
                "type": "varchar",
                "selected": false
            },
            "VALOR_DESCONTO_NF": {
                "desc": "VALOR_DESCONTO_NF",
                "type": "varchar",
                "selected": false
            },
            "VALOR_DESPESA_NF": {
                "desc": "VALOR_DESPESA_NF",
                "type": "varchar",
                "selected": false
            },
            "VALOR_FRENTE_NF": {
                "desc": "VALOR_FRENTE_NF",
                "type": "varchar",
                "selected": false
            },
            "VALOR_LIQUIDO_NF": {
                "desc": "VALOR_LIQUIDO_NF",
                "type": "varchar",
                "selected": false
            },
            "VALORTOTALITEM": {
                "desc": "VALORTOTALITEM",
                "type": "varchar",
                "selected": false
            },
            "NOMEMUNICIPIO": {
                "desc": "NOMEMUNICIPIO",
                "type": "varchar",
                "selected": false
            },
            "ABATIMENTOICMS": {
                "desc": "ABATIMENTOICMS",
                "type": "numeric",
                "selected": false
            },
            "ABATIMENTONAOTRIB": {
                "desc": "ABATIMENTONAOTRIB",
                "type": "numeric",
                "selected": false
            },
            "ALIQUOTA": {
                "desc": "ALIQUOTA",
                "type": "numeric",
                "selected": false
            },
            "ALTERACAOBLOQUEADA": {
                "desc": "ALTERACAOBLOQUEADA",
                "type": "int",
                "selected": false
            },
            "APLICFORMULA": {
                "desc": "APLICFORMULA",
                "type": "varchar",
                "selected": false
            },
            "APROPRIADO": {
                "desc": "APROPRIADO",
                "type": "int",
                "selected": false
            },
            "BAIXAAUTORIZADA": {
                "desc": "BAIXAAUTORIZADA",
                "type": "int",
                "selected": false
            },
            "BAIXAPENDENTE": {
                "desc": "BAIXAPENDENTE",
                "type": "int",
                "selected": false
            },
            "CAMPOALFAOP1": {
                "desc": "CAMPOALFAOP1",
                "type": "varchar",
                "selected": false
            },
            "CAMPOALFAOP2": {
                "desc": "CAMPOALFAOP2",
                "type": "varchar",
                "selected": false
            },
            "CAMPOALFAOP3": {
                "desc": "CAMPOALFAOP3",
                "type": "varchar",
                "selected": false
            },
            "CAMPOLIVRE1": {
                "desc": "CAMPOLIVRE1",
                "type": "varchar",
                "selected": false
            },
            "CAMPOLIVRE2": {
                "desc": "CAMPOLIVRE2",
                "type": "varchar",
                "selected": false
            },
            "CAMPOLIVRE3": {
                "desc": "CAMPOLIVRE3",
                "type": "varchar",
                "selected": false
            },
            "CANCELADOFAT": {
                "desc": "CANCELADOFAT",
                "type": "int",
                "selected": false
            },
            "CAPMENSAL": {
                "desc": "CAPMENSAL",
                "type": "numeric",
                "selected": false
            },
            "CARENCIAJUROS": {
                "desc": "CARENCIAJUROS",
                "type": "int",
                "selected": false
            },
            "CATEGORIAAUTONOMO": {
                "desc": "CATEGORIAAUTONOMO",
                "type": "int",
                "selected": false
            },
            "CHAPA": {
                "desc": "CHAPA",
                "type": "varchar",
                "selected": false
            },
            "CHAPARESP": {
                "desc": "CHAPARESP",
                "type": "varchar",
                "selected": false
            },
            "CHAVEACESSONFE": {
                "desc": "CHAVEACESSONFE",
                "type": "varchar",
                "selected": false
            },
            "CLASSECONSUMO": {
                "desc": "CLASSECONSUMO",
                "type": "varchar",
                "selected": false
            },
            "CLASSELCDPR": {
                "desc": "CLASSELCDPR",
                "type": "int",
                "selected": false
            },
            "CLASSIFICACAOPAGREC": {
                "desc": "CLASSIFICACAOPAGREC",
                "type": "varchar",
                "selected": false
            },
            "CNABACEITE": {
                "desc": "CNABACEITE",
                "type": "int",
                "selected": false
            },
            "CNABAUTENTICACAO": {
                "desc": "CNABAUTENTICACAO",
                "type": "varchar",
                "selected": false
            },
            "CNABBANCO": {
                "desc": "CNABBANCO",
                "type": "varchar",
                "selected": false
            },
            "CNABCARTEIRA": {
                "desc": "CNABCARTEIRA",
                "type": "int",
                "selected": false
            },
            "CNABCODRETORNO": {
                "desc": "CNABCODRETORNO",
                "type": "varchar",
                "selected": false
            },
            "CNABCOMANDO": {
                "desc": "CNABCOMANDO",
                "type": "int",
                "selected": false
            },
            "CNABINSTRUCAOCOD1": {
                "desc": "CNABINSTRUCAOCOD1",
                "type": "int",
                "selected": false
            },
            "CNABINSTRUCAOCOD2": {
                "desc": "CNABINSTRUCAOCOD2",
                "type": "int",
                "selected": false
            },
            "CNABNOSSONUMERO": {
                "desc": "CNABNOSSONUMERO",
                "type": "varchar",
                "selected": false
            },
            "CNABSTATUS": {
                "desc": "CNABSTATUS",
                "type": "int",
                "selected": false
            },
            "CNPJCPFADQUIRENTE": {
                "desc": "CNPJCPFADQUIRENTE",
                "type": "varchar",
                "selected": false
            },
            "CODAGENDAMENTO": {
                "desc": "CODAGENDAMENTO",
                "type": "int",
                "selected": false
            },
            "CODAPLICACAO": {
                "desc": "CODAPLICACAO",
                "type": "varchar",
                "selected": false
            },
            "CODBAIXA": {
                "desc": "CODBAIXA",
                "type": "int",
                "selected": false
            },
            "CODCCUSTODESTINO": {
                "desc": "CODCCUSTODESTINO",
                "type": "varchar",
                "selected": false
            },
            "CODCFO1": {
                "desc": "CODCFO1",
                "type": "varchar",
                "selected": false
            },
            "CODCFOAUX": {
                "desc": "CODCFOAUX",
                "type": "varchar",
                "selected": false
            },
            "CODCFONATUREZA": {
                "desc": "CODCFONATUREZA",
                "type": "varchar",
                "selected": false
            },
            "CODCFOORIGEM": {
                "desc": "CODCFOORIGEM",
                "type": "varchar",
                "selected": false
            },
            "CODCFOORIGEM1": {
                "desc": "CODCFOORIGEM1",
                "type": "varchar",
                "selected": false
            },
            "CODCFOTRANSFAT": {
                "desc": "CODCFOTRANSFAT",
                "type": "varchar",
                "selected": false
            },
            "CODCOLCFO": {
                "desc": "CODCOLCFO",
                "type": "int",
                "selected": false
            },
            "CODCOLCFO1": {
                "desc": "CODCOLCFO1",
                "type": "int",
                "selected": false
            },
            "CODCOLCFOAUX": {
                "desc": "CODCOLCFOAUX",
                "type": "int",
                "selected": false
            },
            "CODCOLCFONATUREZA": {
                "desc": "CODCOLCFONATUREZA",
                "type": "int",
                "selected": false
            },
            "CODCOLCFOORIGEM": {
                "desc": "CODCOLCFOORIGEM",
                "type": "int",
                "selected": false
            },
            "CODCOLCFOORIGEM1": {
                "desc": "CODCOLCFOORIGEM1",
                "type": "int",
                "selected": false
            },
            "CODCOLCFOTRANSFAT": {
                "desc": "CODCOLCFOTRANSFAT",
                "type": "int",
                "selected": false
            },
            "CODCOLCONVENIO": {
                "desc": "CODCOLCONVENIO",
                "type": "int",
                "selected": false
            },
            "CODCOLCXA": {
                "desc": "CODCOLCXA",
                "type": "int",
                "selected": false
            },
            "CODCOLCXA1": {
                "desc": "CODCOLCXA1",
                "type": "int",
                "selected": false
            },
            "CODCOLIGADA1": {
                "desc": "CODCOLIGADA1",
                "type": "int",
                "selected": false
            },
            "CODCOLINTERMEDIADOR": {
                "desc": "CODCOLINTERMEDIADOR",
                "type": "int",
                "selected": false
            },
            "CODCOLPGTO": {
                "desc": "CODCOLPGTO",
                "type": "int",
                "selected": false
            },
            "CODCOLTOMADOR": {
                "desc": "CODCOLTOMADOR",
                "type": "int",
                "selected": false
            },
            "CODCOLXCX": {
                "desc": "CODCOLXCX",
                "type": "int",
                "selected": false
            },
            "CODCPG": {
                "desc": "CODCPG",
                "type": "varchar",
                "selected": false
            },
            "CODCXA1": {
                "desc": "CODCXA1",
                "type": "varchar",
                "selected": false
            },
            "CODDEPARTAMENTO": {
                "desc": "CODDEPARTAMENTO",
                "type": "varchar",
                "selected": false
            },
            "CODDEPARTAMENTO1": {
                "desc": "CODDEPARTAMENTO1",
                "type": "varchar",
                "selected": false
            },
            "CODDEPTODESTINO": {
                "desc": "CODDEPTODESTINO",
                "type": "varchar",
                "selected": false
            },
            "CODDIARIO": {
                "desc": "CODDIARIO",
                "type": "varchar",
                "selected": false
            },
            "CODDIARIO1": {
                "desc": "CODDIARIO1",
                "type": "varchar",
                "selected": false
            },
            "CODDIARIOBAIXA": {
                "desc": "CODDIARIOBAIXA",
                "type": "varchar",
                "selected": false
            },
            "CODENTREGA": {
                "desc": "CODENTREGA",
                "type": "varchar",
                "selected": false
            },
            "CODETDMUNSERV": {
                "desc": "CODETDMUNSERV",
                "type": "varchar",
                "selected": false
            },
            "CODETDPLACA": {
                "desc": "CODETDPLACA",
                "type": "varchar",
                "selected": false
            },
            "CODEVENTO": {
                "desc": "CODEVENTO",
                "type": "int",
                "selected": false
            },
            "CODEVENTO1": {
                "desc": "CODEVENTO1",
                "type": "int",
                "selected": false
            },
            "CODEVENTOBAIXA": {
                "desc": "CODEVENTOBAIXA",
                "type": "int",
                "selected": false
            },
            "CODFAIXAENTREGA": {
                "desc": "CODFAIXAENTREGA",
                "type": "varchar",
                "selected": false
            },
            "CODFILIAL1": {
                "desc": "CODFILIAL1",
                "type": "int",
                "selected": false
            },
            "CODFILIALDESTINO": {
                "desc": "CODFILIALDESTINO",
                "type": "int",
                "selected": false
            },
            "CODFILIALENTREGA": {
                "desc": "CODFILIALENTREGA",
                "type": "int",
                "selected": false
            },
            "CODFILIALSCP": {
                "desc": "CODFILIALSCP",
                "type": "int",
                "selected": false
            },
            "CODIGOBARRA": {
                "desc": "CODIGOBARRA",
                "type": "varchar",
                "selected": false
            },
            "CODIGOIRRF": {
                "desc": "CODIGOIRRF",
                "type": "varchar",
                "selected": false
            },
            "CODIGOSERVICO": {
                "desc": "CODIGOSERVICO",
                "type": "varchar",
                "selected": false
            },
            "CODINDEXADOR": {
                "desc": "CODINDEXADOR",
                "type": "varchar",
                "selected": false
            },
            "CODLAF": {
                "desc": "CODLAF",
                "type": "varchar",
                "selected": false
            },
            "CODLAFE": {
                "desc": "CODLAFE",
                "type": "varchar",
                "selected": false
            },
            "CODLOCDESTINO": {
                "desc": "CODLOCDESTINO",
                "type": "varchar",
                "selected": false
            },
            "CODLOCENTREGA": {
                "desc": "CODLOCENTREGA",
                "type": "varchar",
                "selected": false
            },
            "CODLOCEXP": {
                "desc": "CODLOCEXP",
                "type": "varchar",
                "selected": false
            },
            "CODMEN": {
                "desc": "CODMEN",
                "type": "varchar",
                "selected": false
            },
            "CODMEN2": {
                "desc": "CODMEN2",
                "type": "varchar",
                "selected": false
            },
            "CODMENDESCONTO": {
                "desc": "CODMENDESCONTO",
                "type": "varchar",
                "selected": false
            },
            "CODMENDESPESA": {
                "desc": "CODMENDESPESA",
                "type": "varchar",
                "selected": false
            },
            "CODMENFRETE": {
                "desc": "CODMENFRETE",
                "type": "varchar",
                "selected": false
            },
            "CODMOELANCAMENTO": {
                "desc": "CODMOELANCAMENTO",
                "type": "varchar",
                "selected": false
            },
            "CODMOEVALORLIQUIDO": {
                "desc": "CODMOEVALORLIQUIDO",
                "type": "varchar",
                "selected": false
            },
            "CODMOEVALORORIGINAL": {
                "desc": "CODMOEVALORORIGINAL",
                "type": "varchar",
                "selected": false
            },
            "CODMUNOPER": {
                "desc": "CODMUNOPER",
                "type": "varchar",
                "selected": false
            },
            "CODMUNSERVICO": {
                "desc": "CODMUNSERVICO",
                "type": "varchar",
                "selected": false
            },
            "CODRECEITA": {
                "desc": "CODRECEITA",
                "type": "varchar",
                "selected": false
            },
            "CODRPR": {
                "desc": "CODRPR",
                "type": "varchar",
                "selected": false
            },
            "CODRPR1": {
                "desc": "CODRPR1",
                "type": "varchar",
                "selected": false
            },
            "CODTB1FAT": {
                "desc": "CODTB1FAT",
                "type": "varchar",
                "selected": false
            },
            "CODTB1FLX": {
                "desc": "CODTB1FLX",
                "type": "varchar",
                "selected": false
            },
            "CODTB1FLX1": {
                "desc": "CODTB1FLX1",
                "type": "varchar",
                "selected": false
            },
            "CODTB2FAT": {
                "desc": "CODTB2FAT",
                "type": "varchar",
                "selected": false
            },
            "CODTB2FLX": {
                "desc": "CODTB2FLX",
                "type": "varchar",
                "selected": false
            },
            "CODTB2FLX1": {
                "desc": "CODTB2FLX1",
                "type": "varchar",
                "selected": false
            },
            "CODTB3FAT": {
                "desc": "CODTB3FAT",
                "type": "varchar",
                "selected": false
            },
            "CODTB3FLX": {
                "desc": "CODTB3FLX",
                "type": "varchar",
                "selected": false
            },
            "CODTB3FLX1": {
                "desc": "CODTB3FLX1",
                "type": "varchar",
                "selected": false
            },
            "CODTB4FAT": {
                "desc": "CODTB4FAT",
                "type": "varchar",
                "selected": false
            },
            "CODTB4FLX": {
                "desc": "CODTB4FLX",
                "type": "varchar",
                "selected": false
            },
            "CODTB4FLX1": {
                "desc": "CODTB4FLX1",
                "type": "varchar",
                "selected": false
            },
            "CODTB5FAT": {
                "desc": "CODTB5FAT",
                "type": "varchar",
                "selected": false
            },
            "CODTB5FLX": {
                "desc": "CODTB5FLX",
                "type": "varchar",
                "selected": false
            },
            "CODTB5FLX1": {
                "desc": "CODTB5FLX1",
                "type": "varchar",
                "selected": false
            },
            "CODTDO": {
                "desc": "CODTDO",
                "type": "varchar",
                "selected": false
            },
            "CODTDO1": {
                "desc": "CODTDO1",
                "type": "varchar",
                "selected": false
            },
            "CODTOMADOR": {
                "desc": "CODTOMADOR",
                "type": "varchar",
                "selected": false
            },
            "CODTRA": {
                "desc": "CODTRA",
                "type": "varchar",
                "selected": false
            },
            "CODTRA2": {
                "desc": "CODTRA2",
                "type": "varchar",
                "selected": false
            },
            "CODUFOPER": {
                "desc": "CODUFOPER",
                "type": "varchar",
                "selected": false
            },
            "CODUSUARIO": {
                "desc": "CODUSUARIO",
                "type": "varchar",
                "selected": false
            },
            "CODUSUARIOAPROVADESC": {
                "desc": "CODUSUARIOAPROVADESC",
                "type": "varchar",
                "selected": false
            },
            "CODUSUDESBLOQUEIO1": {
                "desc": "CODUSUDESBLOQUEIO1",
                "type": "varchar",
                "selected": false
            },
            "CODUSUDESBLOQUEIO2": {
                "desc": "CODUSUDESBLOQUEIO2",
                "type": "varchar",
                "selected": false
            },
            "CODVEN": {
                "desc": "CODVEN",
                "type": "varchar",
                "selected": false
            },
            "CODVEN1": {
                "desc": "CODVEN1",
                "type": "varchar",
                "selected": false
            },
            "CODVEN2": {
                "desc": "CODVEN2",
                "type": "varchar",
                "selected": false
            },
            "CODVEN3": {
                "desc": "CODVEN3",
                "type": "varchar",
                "selected": false
            },
            "CODVEN4": {
                "desc": "CODVEN4",
                "type": "varchar",
                "selected": false
            },
            "CODVIATRANSPORTE": {
                "desc": "CODVIATRANSPORTE",
                "type": "varchar",
                "selected": false
            },
            "COMISSAOREPRES": {
                "desc": "COMISSAOREPRES",
                "type": "numeric",
                "selected": false
            },
            "CONTABILIZADOPORTOTAL": {
                "desc": "CONTABILIZADOPORTOTAL",
                "type": "int",
                "selected": false
            },
            "CONTORCAMENTOANTIGO": {
                "desc": "CONTORCAMENTOANTIGO",
                "type": "int",
                "selected": false
            },
            "CONVENIO": {
                "desc": "CONVENIO",
                "type": "varchar",
                "selected": false
            },
            "COTA": {
                "desc": "COTA",
                "type": "int",
                "selected": false
            },
            "COTACAOBAIXA": {
                "desc": "COTACAOBAIXA",
                "type": "numeric",
                "selected": false
            },
            "COTACAOINCLUSAO": {
                "desc": "COTACAOINCLUSAO",
                "type": "numeric",
                "selected": false
            },
            "CPFCNPJLCDPR": {
                "desc": "CPFCNPJLCDPR",
                "type": "varchar",
                "selected": false
            },
            "CRO": {
                "desc": "CRO",
                "type": "int",
                "selected": false
            },
            "DATAALTERACAO": {
                "desc": "DATAALTERACAO",
                "type": "datetime",
                "selected": false
            },
            "DATABASEMOV": {
                "desc": "DATABASEMOV",
                "type": "datetime",
                "selected": false
            },
            "DATACANCELAMENTO": {
                "desc": "DATACANCELAMENTO",
                "type": "datetime",
                "selected": false
            },
            "DATACANCELAMENTOMOV": {
                "desc": "DATACANCELAMENTOMOV",
                "type": "datetime",
                "selected": false
            },
            "DATACANCELBAIXA": {
                "desc": "DATACANCELBAIXA",
                "type": "datetime",
                "selected": false
            },
            "DATACHEQUE": {
                "desc": "DATACHEQUE",
                "type": "datetime",
                "selected": false
            },
            "DATACONTABILIZ": {
                "desc": "DATACONTABILIZ",
                "type": "datetime",
                "selected": false
            },
            "DATACONTABILIZACAO": {
                "desc": "DATACONTABILIZACAO",
                "type": "datetime",
                "selected": false
            },
            "DATACONTABILIZBX": {
                "desc": "DATACONTABILIZBX",
                "type": "datetime",
                "selected": false
            },
            "DATACONTROLEAPROVACAO": {
                "desc": "DATACONTROLEAPROVACAO",
                "type": "datetime",
                "selected": false
            },
            "DATACRIACAO1": {
                "desc": "DATACRIACAO1",
                "type": "datetime",
                "selected": false
            },
            "DATADEDUCAO": {
                "desc": "DATADEDUCAO",
                "type": "datetime",
                "selected": false
            },
            "DATAEMISSAO1": {
                "desc": "DATAEMISSAO1",
                "type": "datetime",
                "selected": false
            },
            "DATAESTORNOLAN": {
                "desc": "DATAESTORNOLAN",
                "type": "datetime",
                "selected": false
            },
            "DATAEXTRA1": {
                "desc": "DATAEXTRA1",
                "type": "datetime",
                "selected": false
            },
            "DATAEXTRA2": {
                "desc": "DATAEXTRA2",
                "type": "datetime",
                "selected": false
            },
            "DATAFATCNT": {
                "desc": "DATAFATCNT",
                "type": "datetime",
                "selected": false
            },
            "DATAFECHAMENTO": {
                "desc": "DATAFECHAMENTO",
                "type": "datetime",
                "selected": false
            },
            "DATALANCAMENTO": {
                "desc": "DATALANCAMENTO",
                "type": "datetime",
                "selected": false
            },
            "DATAOP1": {
                "desc": "DATAOP1",
                "type": "datetime",
                "selected": false
            },
            "DATAOP2": {
                "desc": "DATAOP2",
                "type": "datetime",
                "selected": false
            },
            "DATAOP3": {
                "desc": "DATAOP3",
                "type": "datetime",
                "selected": false
            },
            "DATAOP4": {
                "desc": "DATAOP4",
                "type": "datetime",
                "selected": false
            },
            "DATAOP5": {
                "desc": "DATAOP5",
                "type": "datetime",
                "selected": false
            },
            "DATAORCAMENTO": {
                "desc": "DATAORCAMENTO",
                "type": "datetime",
                "selected": false
            },
            "DATAPAG": {
                "desc": "DATAPAG",
                "type": "datetime",
                "selected": false
            },
            "DATAPREVBAIXA": {
                "desc": "DATAPREVBAIXA",
                "type": "datetime",
                "selected": false
            },
            "DATAPROCESSAMENTO": {
                "desc": "DATAPROCESSAMENTO",
                "type": "datetime",
                "selected": false
            },
            "DATAPROGRAMACAO": {
                "desc": "DATAPROGRAMACAO",
                "type": "datetime",
                "selected": false
            },
            "DATAPROGRAMACAOANT": {
                "desc": "DATAPROGRAMACAOANT",
                "type": "datetime",
                "selected": false
            },
            "DATARECIBO": {
                "desc": "DATARECIBO",
                "type": "datetime",
                "selected": false
            },
            "DATARETORNO": {
                "desc": "DATARETORNO",
                "type": "datetime",
                "selected": false
            },
            "DATAVENCIMENTOANTECIP": {
                "desc": "DATAVENCIMENTOANTECIP",
                "type": "datetime",
                "selected": false
            },
            "DEDUCAOIRRF": {
                "desc": "DEDUCAOIRRF",
                "type": "numeric",
                "selected": false
            },
            "DESCONSIDERARSNMOV": {
                "desc": "DESCONSIDERARSNMOV",
                "type": "int",
                "selected": false
            },
            "DESCONTADO": {
                "desc": "DESCONTADO",
                "type": "int",
                "selected": false
            },
            "DESCONTOCOMERCIAL": {
                "desc": "DESCONTOCOMERCIAL",
                "type": "numeric",
                "selected": false
            },
            "DIGCONVENIO": {
                "desc": "DIGCONVENIO",
                "type": "varchar",
                "selected": false
            },
            "DISTANCIA": {
                "desc": "DISTANCIA",
                "type": "int",
                "selected": false
            },
            "DOCESTRANGEIROADQUIRENTE": {
                "desc": "DOCESTRANGEIROADQUIRENTE",
                "type": "varchar",
                "selected": false
            },
            "DOCIMPRESSO": {
                "desc": "DOCIMPRESSO",
                "type": "int",
                "selected": false
            },
            "DTALT": {
                "desc": "DTALT",
                "type": "datetime",
                "selected": false
            },
            "DTHENTREGA": {
                "desc": "DTHENTREGA",
                "type": "datetime",
                "selected": false
            },
            "EMITEBOLETA": {
                "desc": "EMITEBOLETA",
                "type": "varchar",
                "selected": false
            },
            "EMITIDO": {
                "desc": "EMITIDO",
                "type": "varchar",
                "selected": false
            },
            "ESPECIE": {
                "desc": "ESPECIE",
                "type": "varchar",
                "selected": false
            },
            "EXTENPORANEO": {
                "desc": "EXTENPORANEO",
                "type": "int",
                "selected": false
            },
            "FASE": {
                "desc": "FASE",
                "type": "varchar",
                "selected": false
            },
            "FATIMPRESSA": {
                "desc": "FATIMPRESSA",
                "type": "int",
                "selected": false
            },
            "FATURADOFAT": {
                "desc": "FATURADOFAT",
                "type": "int",
                "selected": false
            },
            "FILIALCONTABIL": {
                "desc": "FILIALCONTABIL",
                "type": "int",
                "selected": false
            },
            "FLAGAGRUPADOFLUXUS": {
                "desc": "FLAGAGRUPADOFLUXUS",
                "type": "int",
                "selected": false
            },
            "FLAGCONCLUSAO": {
                "desc": "FLAGCONCLUSAO",
                "type": "int",
                "selected": false
            },
            "FLAGEFEITOSALDO": {
                "desc": "FLAGEFEITOSALDO",
                "type": "int",
                "selected": false
            },
            "FLAGEXPORFAZENDA": {
                "desc": "FLAGEXPORFAZENDA",
                "type": "int",
                "selected": false
            },
            "FLAGEXPORFISC": {
                "desc": "FLAGEXPORFISC",
                "type": "int",
                "selected": false
            },
            "FLAGEXPORTACAO": {
                "desc": "FLAGEXPORTACAO",
                "type": "int",
                "selected": false
            },
            "FLAGIMPRESSAOFAT": {
                "desc": "FLAGIMPRESSAOFAT",
                "type": "varchar",
                "selected": false
            },
            "FLAGPROCESSADO": {
                "desc": "FLAGPROCESSADO",
                "type": "int",
                "selected": false
            },
            "FORMACALCULO": {
                "desc": "FORMACALCULO",
                "type": "varchar",
                "selected": false
            },
            "FORMULACAPITALIZACAO": {
                "desc": "FORMULACAPITALIZACAO",
                "type": "varchar",
                "selected": false
            },
            "FORMULADESCONTO": {
                "desc": "FORMULADESCONTO",
                "type": "varchar",
                "selected": false
            },
            "FORMULAJUROS": {
                "desc": "FORMULAJUROS",
                "type": "varchar",
                "selected": false
            },
            "FORMULAMULTA": {
                "desc": "FORMULAMULTA",
                "type": "varchar",
                "selected": false
            },
            "FORMULAVALOROP1": {
                "desc": "FORMULAVALOROP1",
                "type": "varchar",
                "selected": false
            },
            "FORMULAVALOROP2": {
                "desc": "FORMULAVALOROP2",
                "type": "varchar",
                "selected": false
            },
            "FORMULAVALOROP3": {
                "desc": "FORMULAVALOROP3",
                "type": "varchar",
                "selected": false
            },
            "FORMULAVALOROP4": {
                "desc": "FORMULAVALOROP4",
                "type": "varchar",
                "selected": false
            },
            "FORMULAVALOROP5": {
                "desc": "FORMULAVALOROP5",
                "type": "varchar",
                "selected": false
            },
            "FORMULAVALOROP6": {
                "desc": "FORMULAVALOROP6",
                "type": "varchar",
                "selected": false
            },
            "FORMULAVALOROP7": {
                "desc": "FORMULAVALOROP7",
                "type": "varchar",
                "selected": false
            },
            "FORMULAVALOROP8": {
                "desc": "FORMULAVALOROP8",
                "type": "varchar",
                "selected": false
            },
            "FRETECIFOUFOB": {
                "desc": "FRETECIFOUFOB",
                "type": "int",
                "selected": false
            },
            "GERADOPORCONTATRABALHO": {
                "desc": "GERADOPORCONTATRABALHO",
                "type": "int",
                "selected": false
            },
            "GERADOPORLOTE": {
                "desc": "GERADOPORLOTE",
                "type": "int",
                "selected": false
            },
            "GEROUCONTATRABALHO": {
                "desc": "GEROUCONTATRABALHO",
                "type": "int",
                "selected": false
            },
            "GEROUFATURA": {
                "desc": "GEROUFATURA",
                "type": "int",
                "selected": false
            },
            "GRUPOTENSAO": {
                "desc": "GRUPOTENSAO",
                "type": "varchar",
                "selected": false
            },
            "HORARIOEMISSAO": {
                "desc": "HORARIOEMISSAO",
                "type": "datetime",
                "selected": false
            },
            "HORASAIDA": {
                "desc": "HORASAIDA",
                "type": "datetime",
                "selected": false
            },
            "HORULTIMAALTERACAO": {
                "desc": "HORULTIMAALTERACAO",
                "type": "datetime",
                "selected": false
            },
            "HRALT": {
                "desc": "HRALT",
                "type": "datetime",
                "selected": false
            },
            "ID": {
                "desc": "ID",
                "type": "int",
                "selected": false
            },
            "IDADIANTAMENTO": {
                "desc": "IDADIANTAMENTO",
                "type": "int",
                "selected": false
            },
            "IDAIDF": {
                "desc": "IDAIDF",
                "type": "int",
                "selected": false
            },
            "IDBAIXAPARCIAL": {
                "desc": "IDBAIXAPARCIAL",
                "type": "int",
                "selected": false
            },
            "IDBOLETO": {
                "desc": "IDBOLETO",
                "type": "int",
                "selected": false
            },
            "IDBORDERO": {
                "desc": "IDBORDERO",
                "type": "int",
                "selected": false
            },
            "IDCEICFO": {
                "desc": "IDCEICFO",
                "type": "int",
                "selected": false
            },
            "IDCEITOMADOR": {
                "desc": "IDCEITOMADOR",
                "type": "int",
                "selected": false
            },
            "IDCLASSMOV": {
                "desc": "IDCLASSMOV",
                "type": "int",
                "selected": false
            },
            "IDCNT": {
                "desc": "IDCNT",
                "type": "int",
                "selected": false
            },
            "IDCONTATOCOBRANCA": {
                "desc": "IDCONTATOCOBRANCA",
                "type": "int",
                "selected": false
            },
            "IDCONTATOENTREGA": {
                "desc": "IDCONTATOENTREGA",
                "type": "int",
                "selected": false
            },
            "IDCONVENIO": {
                "desc": "IDCONVENIO",
                "type": "int",
                "selected": false
            },
            "IDDEVOLUCAO": {
                "desc": "IDDEVOLUCAO",
                "type": "int",
                "selected": false
            },
            "IDFAT": {
                "desc": "IDFAT",
                "type": "int",
                "selected": false
            },
            "IDFLUIG": {
                "desc": "IDFLUIG",
                "type": "int",
                "selected": false
            },
            "IDFORMAPAGTO": {
                "desc": "IDFORMAPAGTO",
                "type": "int",
                "selected": false
            },
            "IDGUIA": {
                "desc": "IDGUIA",
                "type": "int",
                "selected": false
            },
            "IDHISTORICO": {
                "desc": "IDHISTORICO",
                "type": "int",
                "selected": false
            },
            "IDINTEGRACAO": {
                "desc": "IDINTEGRACAO",
                "type": "varchar",
                "selected": false
            },
            "IDINTERMEDIADOR": {
                "desc": "IDINTERMEDIADOR",
                "type": "int",
                "selected": false
            },
            "IDIRRF": {
                "desc": "IDIRRF",
                "type": "int",
                "selected": false
            },
            "IDLANFILHORELBOLETO": {
                "desc": "IDLANFILHORELBOLETO",
                "type": "int",
                "selected": false
            },
            "IDLANMOVORIGEM": {
                "desc": "IDLANMOVORIGEM",
                "type": "int",
                "selected": false
            },
            "IDLANREPASSE": {
                "desc": "IDLANREPASSE",
                "type": "int",
                "selected": false
            },
            "IDLOT": {
                "desc": "IDLOT",
                "type": "int",
                "selected": false
            },
            "IDLOTEPROCESSO": {
                "desc": "IDLOTEPROCESSO",
                "type": "int",
                "selected": false
            },
            "IDLOTEPROCESSOREFAT": {
                "desc": "IDLOTEPROCESSOREFAT",
                "type": "int",
                "selected": false
            },
            "IDMOV1": {
                "desc": "IDMOV1",
                "type": "int",
                "selected": false
            },
            "IDMOVCFO": {
                "desc": "IDMOVCFO",
                "type": "int",
                "selected": false
            },
            "IDMOVCTRC": {
                "desc": "IDMOVCTRC",
                "type": "int",
                "selected": false
            },
            "IDMOVLCTFLUXUS": {
                "desc": "IDMOVLCTFLUXUS",
                "type": "int",
                "selected": false
            },
            "IDMOVOSMNT": {
                "desc": "IDMOVOSMNT",
                "type": "int",
                "selected": false
            },
            "IDMOVPEDDESDOBRADO": {
                "desc": "IDMOVPEDDESDOBRADO",
                "type": "int",
                "selected": false
            },
            "IDMOVRELAC": {
                "desc": "IDMOVRELAC",
                "type": "int",
                "selected": false
            },
            "IDNAT": {
                "desc": "IDNAT",
                "type": "int",
                "selected": false
            },
            "IDNAT2": {
                "desc": "IDNAT2",
                "type": "int",
                "selected": false
            },
            "IDNATFRETE": {
                "desc": "IDNATFRETE",
                "type": "int",
                "selected": false
            },
            "IDNATRENDIMENTO": {
                "desc": "IDNATRENDIMENTO",
                "type": "int",
                "selected": false
            },
            "IDNATRENDIMENTOIRRF": {
                "desc": "IDNATRENDIMENTOIRRF",
                "type": "int",
                "selected": false
            },
            "IDNOTACREDITO": {
                "desc": "IDNOTACREDITO",
                "type": "int",
                "selected": false
            },
            "IDOBJOF": {
                "desc": "IDOBJOF",
                "type": "varchar",
                "selected": false
            },
            "IDOPERACAO": {
                "desc": "IDOPERACAO",
                "type": "int",
                "selected": false
            },
            "IDOPERACAO1": {
                "desc": "IDOPERACAO1",
                "type": "int",
                "selected": false
            },
            "IDOPERACAOBAIXA": {
                "desc": "IDOPERACAOBAIXA",
                "type": "int",
                "selected": false
            },
            "IDREDUCAOZ": {
                "desc": "IDREDUCAOZ",
                "type": "int",
                "selected": false
            },
            "IDSALDOESTOQUE": {
                "desc": "IDSALDOESTOQUE",
                "type": "int",
                "selected": false
            },
            "IDSESSAO": {
                "desc": "IDSESSAO",
                "type": "int",
                "selected": false
            },
            "IDTSS": {
                "desc": "IDTSS",
                "type": "varchar",
                "selected": false
            },
            "IDXCX": {
                "desc": "IDXCX",
                "type": "int",
                "selected": false
            },
            "IMPOSTOEDITADO": {
                "desc": "IMPOSTOEDITADO",
                "type": "int",
                "selected": false
            },
            "INDNATREC": {
                "desc": "INDNATREC",
                "type": "varchar",
                "selected": false
            },
            "INDUSOOBJ": {
                "desc": "INDUSOOBJ",
                "type": "numeric",
                "selected": false
            },
            "INSSEMOUTRAEMPRESA": {
                "desc": "INSSEMOUTRAEMPRESA",
                "type": "numeric",
                "selected": false
            },
            "INSSEMOUTRAEMPRESA1": {
                "desc": "INSSEMOUTRAEMPRESA1",
                "type": "numeric",
                "selected": false
            },
            "INTEGRAAPLICACAO": {
                "desc": "INTEGRAAPLICACAO",
                "type": "varchar",
                "selected": false
            },
            "INTEGRADOAUTOMACAO": {
                "desc": "INTEGRADOAUTOMACAO",
                "type": "int",
                "selected": false
            },
            "INTEGRADOBONUM": {
                "desc": "INTEGRADOBONUM",
                "type": "int",
                "selected": false
            },
            "IPTE": {
                "desc": "IPTE",
                "type": "varchar",
                "selected": false
            },
            "ITENSAGRUPADOS": {
                "desc": "ITENSAGRUPADOS",
                "type": "int",
                "selected": false
            },
            "JAIMPRIMIU": {
                "desc": "JAIMPRIMIU",
                "type": "int",
                "selected": false
            },
            "JUROSDIA": {
                "desc": "JUROSDIA",
                "type": "numeric",
                "selected": false
            },
            "JUROSVENDOR": {
                "desc": "JUROSVENDOR",
                "type": "numeric",
                "selected": false
            },
            "JUSTIFICATIVASUBSTITUICAO": {
                "desc": "JUSTIFICATIVASUBSTITUICAO",
                "type": "varchar",
                "selected": false
            },
            "LIBAUTORIZADA": {
                "desc": "LIBAUTORIZADA",
                "type": "int",
                "selected": false
            },
            "LOCPAG": {
                "desc": "LOCPAG",
                "type": "varchar",
                "selected": false
            },
            "LOTE": {
                "desc": "LOTE",
                "type": "varchar",
                "selected": false
            },
            "MARCA": {
                "desc": "MARCA",
                "type": "varchar",
                "selected": false
            },
            "MENSBAIXA": {
                "desc": "MENSBAIXA",
                "type": "varchar",
                "selected": false
            },
            "MESDECOMPETENCIA": {
                "desc": "MESDECOMPETENCIA",
                "type": "datetime",
                "selected": false
            },
            "MODALIDADELCDPR": {
                "desc": "MODALIDADELCDPR",
                "type": "int",
                "selected": false
            },
            "MODELOCONTABILIZACAO": {
                "desc": "MODELOCONTABILIZACAO",
                "type": "int",
                "selected": false
            },
            "MODELOCONTABILIZACAOBAIXA": {
                "desc": "MODELOCONTABILIZACAOBAIXA",
                "type": "int",
                "selected": false
            },
            "MODOCALCULOBX": {
                "desc": "MODOCALCULOBX",
                "type": "int",
                "selected": false
            },
            "MOEDAVINCULO": {
                "desc": "MOEDAVINCULO",
                "type": "varchar",
                "selected": false
            },
            "MOTIVOSUBSTITUICAO": {
                "desc": "MOTIVOSUBSTITUICAO",
                "type": "varchar",
                "selected": false
            },
            "MOVIMPRESSO": {
                "desc": "MOVIMPRESSO",
                "type": "int",
                "selected": false
            },
            "MULTADIA": {
                "desc": "MULTADIA",
                "type": "numeric",
                "selected": false
            },
            "MULTAFIXA": {
                "desc": "MULTAFIXA",
                "type": "numeric",
                "selected": false
            },
            "NAONUMERADO": {
                "desc": "NAONUMERADO",
                "type": "varchar",
                "selected": false
            },
            "NATREC": {
                "desc": "NATREC",
                "type": "varchar",
                "selected": false
            },
            "NATUREZAVOLUMES": {
                "desc": "NATUREZAVOLUMES",
                "type": "varchar",
                "selected": false
            },
            "NFOUDUP": {
                "desc": "NFOUDUP",
                "type": "int",
                "selected": false
            },
            "NOMEADQUIRENTE": {
                "desc": "NOMEADQUIRENTE",
                "type": "varchar",
                "selected": false
            },
            "NORDEM": {
                "desc": "NORDEM",
                "type": "varchar",
                "selected": false
            },
            "NSEQDATAFECHAMENTO": {
                "desc": "NSEQDATAFECHAMENTO",
                "type": "int",
                "selected": false
            },
            "NSEQITMCNT": {
                "desc": "NSEQITMCNT",
                "type": "int",
                "selected": false
            },
            "NSEQITMPREVISAO": {
                "desc": "NSEQITMPREVISAO",
                "type": "int",
                "selected": false
            },
            "NUMBLOQUEIOS": {
                "desc": "NUMBLOQUEIOS",
                "type": "int",
                "selected": false
            },
            "NUMCONTABILBX": {
                "desc": "NUMCONTABILBX",
                "type": "varchar",
                "selected": false
            },
            "NUMERO": {
                "desc": "NUMERO",
                "type": "varchar",
                "selected": false
            },
            "NUMEROCAIXA": {
                "desc": "NUMEROCAIXA",
                "type": "int",
                "selected": false
            },
            "NUMEROCHEQUE": {
                "desc": "NUMEROCHEQUE",
                "type": "varchar",
                "selected": false
            },
            "NUMEROCONTABIL": {
                "desc": "NUMEROCONTABIL",
                "type": "varchar",
                "selected": false
            },
            "NUMEROCUPOM": {
                "desc": "NUMEROCUPOM",
                "type": "int",
                "selected": false
            },
            "NUMEROLCTABERTO": {
                "desc": "NUMEROLCTABERTO",
                "type": "int",
                "selected": false
            },
            "NUMEROLCTGERADO": {
                "desc": "NUMEROLCTGERADO",
                "type": "int",
                "selected": false
            },
            "NUMEROMOV_VEXPENSES": {
                "desc": "NUMEROMOV_VEXPENSES",
                "type": "varchar",
                "selected": false
            },
            "NUMERORECIBO": {
                "desc": "NUMERORECIBO",
                "type": "varchar",
                "selected": false
            },
            "NUMEROTRIBUTOS": {
                "desc": "NUMEROTRIBUTOS",
                "type": "int",
                "selected": false
            },
            "NUMLOTECONTABIL": {
                "desc": "NUMLOTECONTABIL",
                "type": "int",
                "selected": false
            },
            "NUMLOTECONTABILBX": {
                "desc": "NUMLOTECONTABILBX",
                "type": "int",
                "selected": false
            },
            "NUMRECIBO": {
                "desc": "NUMRECIBO",
                "type": "int",
                "selected": false
            },
            "NUMSEQRECIBO": {
                "desc": "NUMSEQRECIBO",
                "type": "int",
                "selected": false
            },
            "OBSERVACAO": {
                "desc": "OBSERVACAO",
                "type": "varchar",
                "selected": false
            },
            "OCAUTONOMO": {
                "desc": "OCAUTONOMO",
                "type": "int",
                "selected": false
            },
            "OCAUTONOMO1": {
                "desc": "OCAUTONOMO1",
                "type": "int",
                "selected": false
            },
            "PERCBASEINSSEMPREGADO": {
                "desc": "PERCBASEINSSEMPREGADO",
                "type": "numeric",
                "selected": false
            },
            "PERCBASEINSSEMPREGADO1": {
                "desc": "PERCBASEINSSEMPREGADO1",
                "type": "numeric",
                "selected": false
            },
            "PERCCOMISSAO": {
                "desc": "PERCCOMISSAO",
                "type": "numeric",
                "selected": false
            },
            "PERCCOMISSAOVEN2": {
                "desc": "PERCCOMISSAOVEN2",
                "type": "numeric",
                "selected": false
            },
            "PERCCOMISSAOVEN3": {
                "desc": "PERCCOMISSAOVEN3",
                "type": "numeric",
                "selected": false
            },
            "PERCCOMISSAOVEN4": {
                "desc": "PERCCOMISSAOVEN4",
                "type": "numeric",
                "selected": false
            },
            "PERCENTBASEINSS": {
                "desc": "PERCENTBASEINSS",
                "type": "numeric",
                "selected": false
            },
            "PERCENTBASEINSS1": {
                "desc": "PERCENTBASEINSS1",
                "type": "numeric",
                "selected": false
            },
            "PERCENTUALDESC": {
                "desc": "PERCENTUALDESC",
                "type": "numeric",
                "selected": false
            },
            "PERCENTUALDESP": {
                "desc": "PERCENTUALDESP",
                "type": "numeric",
                "selected": false
            },
            "PERCENTUALEXTRA1": {
                "desc": "PERCENTUALEXTRA1",
                "type": "numeric",
                "selected": false
            },
            "PERCENTUALEXTRA2": {
                "desc": "PERCENTUALEXTRA2",
                "type": "numeric",
                "selected": false
            },
            "PERCENTUALFRETE": {
                "desc": "PERCENTUALFRETE",
                "type": "numeric",
                "selected": false
            },
            "PERCENTUALSEGURO": {
                "desc": "PERCENTUALSEGURO",
                "type": "numeric",
                "selected": false
            },
            "PERLETIVO": {
                "desc": "PERLETIVO",
                "type": "varchar",
                "selected": false
            },
            "PESOBRUTO": {
                "desc": "PESOBRUTO",
                "type": "numeric",
                "selected": false
            },
            "PESOLIQUIDO": {
                "desc": "PESOLIQUIDO",
                "type": "numeric",
                "selected": false
            },
            "PLACA": {
                "desc": "PLACA",
                "type": "varchar",
                "selected": false
            },
            "PONTOVENDA": {
                "desc": "PONTOVENDA",
                "type": "varchar",
                "selected": false
            },
            "PRODPREDOMINANTE": {
                "desc": "PRODPREDOMINANTE",
                "type": "varchar",
                "selected": false
            },
            "PROTOCOLOAUTNFE": {
                "desc": "PROTOCOLOAUTNFE",
                "type": "varchar",
                "selected": false
            },
            "QRCODEPIX": {
                "desc": "QRCODEPIX",
                "type": "varchar",
                "selected": false
            },
            "RATEIOCCUSTODEPTO": {
                "desc": "RATEIOCCUSTODEPTO",
                "type": "numeric",
                "selected": false
            },
            "RECCREATEDBY": {
                "desc": "RECCREATEDBY",
                "type": "varchar",
                "selected": false
            },
            "RECCREATEDBY1": {
                "desc": "RECCREATEDBY1",
                "type": "varchar",
                "selected": false
            },
            "RECCREATEDON": {
                "desc": "RECCREATEDON",
                "type": "datetime",
                "selected": false
            },
            "RECCREATEDON1": {
                "desc": "RECCREATEDON1",
                "type": "datetime",
                "selected": false
            },
            "RECIBONFENUMERO": {
                "desc": "RECIBONFENUMERO",
                "type": "varchar",
                "selected": false
            },
            "RECIBONFESERIE": {
                "desc": "RECIBONFESERIE",
                "type": "varchar",
                "selected": false
            },
            "RECIBONFESITUACAO": {
                "desc": "RECIBONFESITUACAO",
                "type": "int",
                "selected": false
            },
            "RECIBONFESTATUS": {
                "desc": "RECIBONFESTATUS",
                "type": "varchar",
                "selected": false
            },
            "RECIBONFETIPO": {
                "desc": "RECIBONFETIPO",
                "type": "int",
                "selected": false
            },
            "RECMODIFIEDBY1": {
                "desc": "RECMODIFIEDBY1",
                "type": "varchar",
                "selected": false
            },
            "RECMODIFIEDON": {
                "desc": "RECMODIFIEDON",
                "type": "datetime",
                "selected": false
            },
            "RECMODIFIEDON1": {
                "desc": "RECMODIFIEDON1",
                "type": "datetime",
                "selected": false
            },
            "REEMBOLSAVEL": {
                "desc": "REEMBOLSAVEL",
                "type": "int",
                "selected": false
            },
            "REUTILIZACAO": {
                "desc": "REUTILIZACAO",
                "type": "int",
                "selected": false
            },
            "SEGUNDONUMERO": {
                "desc": "SEGUNDONUMERO",
                "type": "varchar",
                "selected": false
            },
            "SEGUNDONUMERO1": {
                "desc": "SEGUNDONUMERO1",
                "type": "varchar",
                "selected": false
            },
            "SEQDIARIO": {
                "desc": "SEQDIARIO",
                "type": "varchar",
                "selected": false
            },
            "SEQDIARIO1": {
                "desc": "SEQDIARIO1",
                "type": "varchar",
                "selected": false
            },
            "SEQDIARIOBAIXA": {
                "desc": "SEQDIARIOBAIXA",
                "type": "varchar",
                "selected": false
            },
            "SEQDIARIOESTORNO": {
                "desc": "SEQDIARIOESTORNO",
                "type": "varchar",
                "selected": false
            },
            "SEQDIARIOESTORNO1": {
                "desc": "SEQDIARIOESTORNO1",
                "type": "varchar",
                "selected": false
            },
            "SEQDIARIOESTORNOBAIXA": {
                "desc": "SEQDIARIOESTORNOBAIXA",
                "type": "varchar",
                "selected": false
            },
            "SEQSIACC": {
                "desc": "SEQSIACC",
                "type": "int",
                "selected": false
            },
            "SEQUENCIALESTOQUE": {
                "desc": "SEQUENCIALESTOQUE",
                "type": "int",
                "selected": false
            },
            "SERIEDOCUMENTO": {
                "desc": "SERIEDOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "SERVEXTRA": {
                "desc": "SERVEXTRA",
                "type": "varchar",
                "selected": false
            },
            "STATUSANTERIOR": {
                "desc": "STATUSANTERIOR",
                "type": "varchar",
                "selected": false
            },
            "STATUSAPROVACAO": {
                "desc": "STATUSAPROVACAO",
                "type": "int",
                "selected": false
            },
            "STATUSAVP": {
                "desc": "STATUSAVP",
                "type": "int",
                "selected": false
            },
            "STATUSCHEQUE": {
                "desc": "STATUSCHEQUE",
                "type": "int",
                "selected": false
            },
            "STATUSDDA": {
                "desc": "STATUSDDA",
                "type": "int",
                "selected": false
            },
            "STATUSEXPORTACAO": {
                "desc": "STATUSEXPORTACAO",
                "type": "int",
                "selected": false
            },
            "STATUSEXPORTCONT": {
                "desc": "STATUSEXPORTCONT",
                "type": "int",
                "selected": false
            },
            "STATUSEXTRATO": {
                "desc": "STATUSEXTRATO",
                "type": "int",
                "selected": false
            },
            "STATUSLIBERACAO": {
                "desc": "STATUSLIBERACAO",
                "type": "int",
                "selected": false
            },
            "STATUSLIQDUVIDOSA": {
                "desc": "STATUSLIQDUVIDOSA",
                "type": "int",
                "selected": false
            },
            "STATUSMOVINCLUSAOCOLAB": {
                "desc": "STATUSMOVINCLUSAOCOLAB",
                "type": "int",
                "selected": false
            },
            "STATUSNEGATIVACAO": {
                "desc": "STATUSNEGATIVACAO",
                "type": "int",
                "selected": false
            },
            "STATUSORCAMENTO": {
                "desc": "STATUSORCAMENTO",
                "type": "int",
                "selected": false
            },
            "STATUSPARADIGMA": {
                "desc": "STATUSPARADIGMA",
                "type": "varchar",
                "selected": false
            },
            "STATUSSEPARACAO": {
                "desc": "STATUSSEPARACAO",
                "type": "varchar",
                "selected": false
            },
            "STATUSTERCEIRIZACAO": {
                "desc": "STATUSTERCEIRIZACAO",
                "type": "int",
                "selected": false
            },
            "STSCOMPRAS": {
                "desc": "STSCOMPRAS",
                "type": "varchar",
                "selected": false
            },
            "STSCONCLUIDO": {
                "desc": "STSCONCLUIDO",
                "type": "varchar",
                "selected": false
            },
            "STSCONTRATO": {
                "desc": "STSCONTRATO",
                "type": "varchar",
                "selected": false
            },
            "STSEMAIL": {
                "desc": "STSEMAIL",
                "type": "int",
                "selected": false
            },
            "SUBSERIE": {
                "desc": "SUBSERIE",
                "type": "varchar",
                "selected": false
            },
            "TAXASVENDOR": {
                "desc": "TAXASVENDOR",
                "type": "numeric",
                "selected": false
            },
            "TEMCHEQUEPARCIAL": {
                "desc": "TEMCHEQUEPARCIAL",
                "type": "int",
                "selected": false
            },
            "TIPOASSINANTE": {
                "desc": "TIPOASSINANTE",
                "type": "varchar",
                "selected": false
            },
            "TIPOCONSUMO": {
                "desc": "TIPOCONSUMO",
                "type": "int",
                "selected": false
            },
            "TIPOCONTABILLAN": {
                "desc": "TIPOCONTABILLAN",
                "type": "int",
                "selected": false
            },
            "TIPOJUROSDIA": {
                "desc": "TIPOJUROSDIA",
                "type": "int",
                "selected": false
            },
            "TIPOLCDPR": {
                "desc": "TIPOLCDPR",
                "type": "int",
                "selected": false
            },
            "TIPOSAC": {
                "desc": "TIPOSAC",
                "type": "varchar",
                "selected": false
            },
            "TIPOUTILIZACAO": {
                "desc": "TIPOUTILIZACAO",
                "type": "varchar",
                "selected": false
            },
            "UNCALCULO": {
                "desc": "UNCALCULO",
                "type": "varchar",
                "selected": false
            },
            "USADESPFINANC": {
                "desc": "USADESPFINANC",
                "type": "int",
                "selected": false
            },
            "USARATEIOVALORFIN": {
                "desc": "USARATEIOVALORFIN",
                "type": "int",
                "selected": false
            },
            "USUARIOCRIACAO1": {
                "desc": "USUARIOCRIACAO1",
                "type": "varchar",
                "selected": false
            },
            "VALORACRESCIMOACORDO": {
                "desc": "VALORACRESCIMOACORDO",
                "type": "numeric",
                "selected": false
            },
            "VALORADIANTAMENTO": {
                "desc": "VALORADIANTAMENTO",
                "type": "numeric",
                "selected": false
            },
            "VALORADIANTAMENTO1": {
                "desc": "VALORADIANTAMENTO1",
                "type": "numeric",
                "selected": false
            },
            "VALORADIANTAMENTOBX": {
                "desc": "VALORADIANTAMENTOBX",
                "type": "numeric",
                "selected": false
            },
            "VALORAUXILIAR": {
                "desc": "VALORAUXILIAR",
                "type": "numeric",
                "selected": false
            },
            "VALORBAIXADO": {
                "desc": "VALORBAIXADO",
                "type": "numeric",
                "selected": false
            },
            "VALORBASEIRRF": {
                "desc": "VALORBASEIRRF",
                "type": "numeric",
                "selected": false
            },
            "VALORBRUTOINTERNO": {
                "desc": "VALORBRUTOINTERNO",
                "type": "numeric",
                "selected": false
            },
            "VALORBRUTOORIG": {
                "desc": "VALORBRUTOORIG",
                "type": "numeric",
                "selected": false
            },
            "VALORCAP": {
                "desc": "VALORCAP",
                "type": "numeric",
                "selected": false
            },
            "VALORCAPBX": {
                "desc": "VALORCAPBX",
                "type": "numeric",
                "selected": false
            },
            "VALORCHEQUE": {
                "desc": "VALORCHEQUE",
                "type": "numeric",
                "selected": false
            },
            "VALORCONCLUIDO": {
                "desc": "VALORCONCLUIDO",
                "type": "numeric",
                "selected": false
            },
            "VALORCTRCARATEAR": {
                "desc": "VALORCTRCARATEAR",
                "type": "numeric",
                "selected": false
            },
            "VALORDEDUCAO": {
                "desc": "VALORDEDUCAO",
                "type": "numeric",
                "selected": false
            },
            "VALORDEDUCAODEPENDENTES": {
                "desc": "VALORDEDUCAODEPENDENTES",
                "type": "numeric",
                "selected": false
            },
            "VALORDEDUCAOVARIAVEL": {
                "desc": "VALORDEDUCAOVARIAVEL",
                "type": "numeric",
                "selected": false
            },
            "VALORDESCCONDICIONAL": {
                "desc": "VALORDESCCONDICIONAL",
                "type": "numeric",
                "selected": false
            },
            "VALORDESCONTO": {
                "desc": "VALORDESCONTO",
                "type": "numeric",
                "selected": false
            },
            "VALORDESCONTOACORDO": {
                "desc": "VALORDESCONTOACORDO",
                "type": "numeric",
                "selected": false
            },
            "VALORDESCONTOBX": {
                "desc": "VALORDESCONTOBX",
                "type": "numeric",
                "selected": false
            },
            "VALORDESCONTODUPLICATA": {
                "desc": "VALORDESCONTODUPLICATA",
                "type": "numeric",
                "selected": false
            },
            "VALORDESCONTOPONTUALBX": {
                "desc": "VALORDESCONTOPONTUALBX",
                "type": "numeric",
                "selected": false
            },
            "VALORDESPCONDICIONAL": {
                "desc": "VALORDESPCONDICIONAL",
                "type": "numeric",
                "selected": false
            },
            "VALORDEVOLUCAO": {
                "desc": "VALORDEVOLUCAO",
                "type": "numeric",
                "selected": false
            },
            "VALORDEVOLUCAOBX": {
                "desc": "VALORDEVOLUCAOBX",
                "type": "numeric",
                "selected": false
            },
            "VALOREXTRA1": {
                "desc": "VALOREXTRA1",
                "type": "numeric",
                "selected": false
            },
            "VALOREXTRA2": {
                "desc": "VALOREXTRA2",
                "type": "numeric",
                "selected": false
            },
            "VALORFRETECTRC": {
                "desc": "VALORFRETECTRC",
                "type": "numeric",
                "selected": false
            },
            "VALORINSS": {
                "desc": "VALORINSS",
                "type": "numeric",
                "selected": false
            },
            "VALORINSSBX": {
                "desc": "VALORINSSBX",
                "type": "numeric",
                "selected": false
            },
            "VALORIRRF": {
                "desc": "VALORIRRF",
                "type": "numeric",
                "selected": false
            },
            "VALORIRRFBX": {
                "desc": "VALORIRRFBX",
                "type": "numeric",
                "selected": false
            },
            "VALORJUROS": {
                "desc": "VALORJUROS",
                "type": "numeric",
                "selected": false
            },
            "VALORJUROSACORDO": {
                "desc": "VALORJUROSACORDO",
                "type": "numeric",
                "selected": false
            },
            "VALORJUROSBX": {
                "desc": "VALORJUROSBX",
                "type": "numeric",
                "selected": false
            },
            "VALORJUROSVENDORBX": {
                "desc": "VALORJUROSVENDORBX",
                "type": "numeric",
                "selected": false
            },
            "VALORLIQUIDOORIG": {
                "desc": "VALORLIQUIDOORIG",
                "type": "numeric",
                "selected": false
            },
            "VALORMERCADORIAS": {
                "desc": "VALORMERCADORIAS",
                "type": "numeric",
                "selected": false
            },
            "VALORMULTA": {
                "desc": "VALORMULTA",
                "type": "numeric",
                "selected": false
            },
            "VALORMULTABX": {
                "desc": "VALORMULTABX",
                "type": "numeric",
                "selected": false
            },
            "VALORNOTACREDITO": {
                "desc": "VALORNOTACREDITO",
                "type": "numeric",
                "selected": false
            },
            "VALORNOTACREDITOBX": {
                "desc": "VALORNOTACREDITOBX",
                "type": "numeric",
                "selected": false
            },
            "VALOROP1": {
                "desc": "VALOROP1",
                "type": "numeric",
                "selected": false
            },
            "VALOROP1BX": {
                "desc": "VALOROP1BX",
                "type": "numeric",
                "selected": false
            },
            "VALOROP2": {
                "desc": "VALOROP2",
                "type": "numeric",
                "selected": false
            },
            "VALOROP2BX": {
                "desc": "VALOROP2BX",
                "type": "numeric",
                "selected": false
            },
            "VALOROP3": {
                "desc": "VALOROP3",
                "type": "numeric",
                "selected": false
            },
            "VALOROP3BX": {
                "desc": "VALOROP3BX",
                "type": "numeric",
                "selected": false
            },
            "VALOROP4": {
                "desc": "VALOROP4",
                "type": "numeric",
                "selected": false
            },
            "VALOROP4BX": {
                "desc": "VALOROP4BX",
                "type": "numeric",
                "selected": false
            },
            "VALOROP5": {
                "desc": "VALOROP5",
                "type": "numeric",
                "selected": false
            },
            "VALOROP5BX": {
                "desc": "VALOROP5BX",
                "type": "numeric",
                "selected": false
            },
            "VALOROP6": {
                "desc": "VALOROP6",
                "type": "numeric",
                "selected": false
            },
            "VALOROP6BX": {
                "desc": "VALOROP6BX",
                "type": "numeric",
                "selected": false
            },
            "VALOROP7": {
                "desc": "VALOROP7",
                "type": "numeric",
                "selected": false
            },
            "VALOROP7BX": {
                "desc": "VALOROP7BX",
                "type": "numeric",
                "selected": false
            },
            "VALOROP8": {
                "desc": "VALOROP8",
                "type": "numeric",
                "selected": false
            },
            "VALOROP8BX": {
                "desc": "VALOROP8BX",
                "type": "numeric",
                "selected": false
            },
            "VALOROPERACAODESCONTO": {
                "desc": "VALOROPERACAODESCONTO",
                "type": "numeric",
                "selected": false
            },
            "VALORORIGINALBX": {
                "desc": "VALORORIGINALBX",
                "type": "numeric",
                "selected": false
            },
            "VALOROUTROS": {
                "desc": "VALOROUTROS",
                "type": "numeric",
                "selected": false
            },
            "VALOROUTROSORIG": {
                "desc": "VALOROUTROSORIG",
                "type": "numeric",
                "selected": false
            },
            "VALORPERDAFINANCEIRABX": {
                "desc": "VALORPERDAFINANCEIRABX",
                "type": "numeric",
                "selected": false
            },
            "VALORRATEIOLAN": {
                "desc": "VALORRATEIOLAN",
                "type": "numeric",
                "selected": false
            },
            "VALORRATEIOLANORIG": {
                "desc": "VALORRATEIOLANORIG",
                "type": "numeric",
                "selected": false
            },
            "VALORRECEBIDO": {
                "desc": "VALORRECEBIDO",
                "type": "numeric",
                "selected": false
            },
            "VALORRECEBIDOFATPARC": {
                "desc": "VALORRECEBIDOFATPARC",
                "type": "numeric",
                "selected": false
            },
            "VALORREPASSE": {
                "desc": "VALORREPASSE",
                "type": "numeric",
                "selected": false
            },
            "VALORRETENCOESBX": {
                "desc": "VALORRETENCOESBX",
                "type": "numeric",
                "selected": false
            },
            "VALORSEGURO": {
                "desc": "VALORSEGURO",
                "type": "numeric",
                "selected": false
            },
            "VALORSERVICO": {
                "desc": "VALORSERVICO",
                "type": "numeric",
                "selected": false
            },
            "VALORSERVICO1": {
                "desc": "VALORSERVICO1",
                "type": "numeric",
                "selected": false
            },
            "VALORSESTSENAT": {
                "desc": "VALORSESTSENAT",
                "type": "numeric",
                "selected": false
            },
            "VALORSESTSENATBX": {
                "desc": "VALORSESTSENATBX",
                "type": "numeric",
                "selected": false
            },
            "VALORVENCIMENTOANTECIP": {
                "desc": "VALORVENCIMENTOANTECIP",
                "type": "numeric",
                "selected": false
            },
            "VALORVINCULADO": {
                "desc": "VALORVINCULADO",
                "type": "numeric",
                "selected": false
            },
            "VIADETRANSPORTE": {
                "desc": "VIADETRANSPORTE",
                "type": "varchar",
                "selected": false
            },
            "VINCULADOESTOQUEFL": {
                "desc": "VINCULADOESTOQUEFL",
                "type": "int",
                "selected": false
            },
            "VLRDESPACHO": {
                "desc": "VLRDESPACHO",
                "type": "numeric",
                "selected": false
            },
            "VLRFRETEOUTROS": {
                "desc": "VLRFRETEOUTROS",
                "type": "numeric",
                "selected": false
            },
            "VLRPEDAGIO": {
                "desc": "VLRPEDAGIO",
                "type": "numeric",
                "selected": false
            },
            "VLRSECCAT": {
                "desc": "VLRSECCAT",
                "type": "numeric",
                "selected": false
            },
            "VOLUMES": {
                "desc": "VOLUMES",
                "type": "varchar",
                "selected": false
            },
            "VRBASEINSS": {
                "desc": "VRBASEINSS",
                "type": "numeric",
                "selected": false
            },
            "VRBASEINSSOUTRAEMPRESA": {
                "desc": "VRBASEINSSOUTRAEMPRESA",
                "type": "numeric",
                "selected": false
            },
            "VRBASEINSSOUTRAEMPRESA1": {
                "desc": "VRBASEINSSOUTRAEMPRESA1",
                "type": "numeric",
                "selected": false
            },
            "VRBASEIRRF": {
                "desc": "VRBASEIRRF",
                "type": "numeric",
                "selected": false
            },
            "VRDEP": {
                "desc": "VRDEP",
                "type": "numeric",
                "selected": false
            },
            "VRPERDAFINANCEIRA": {
                "desc": "VRPERDAFINANCEIRA",
                "type": "numeric",
                "selected": false
            },
            "CAMPOLIVRE": {
                "desc": "CAMPOLIVRE",
                "type": "varchar",
                "selected": false
            },
            "CODCONDICAOPAGAMENTO": {
                "desc": "CODCONDICAOPAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "EMISSAO": {
                "desc": "EMISSAO",
                "type": "varchar",
                "selected": false
            },
            "FATURA": {
                "desc": "FATURA",
                "type": "varchar",
                "selected": false
            },
            "PRIMEIRO_VENCIMENTO_LANCTO": {
                "desc": "PRIMEIRO_VENCIMENTO_LANCTO",
                "type": "datetime",
                "selected": false
            },
            "REFERENCIA": {
                "desc": "REFERENCIA",
                "type": "varchar",
                "selected": false
            },
            "VENCIMENTO": {
                "desc": "VENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "VALORTOTAL": {
                "desc": "VALORTOTAL",
                "type": "numeric",
                "selected": false
            },
            "CONDICAO_PAGAMENTO": {
                "desc": "CONDICAO_PAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "CONTADOR": {
                "desc": "CONTADOR",
                "type": "int",
                "selected": false
            },
            "DATA_DIGITACAO": {
                "desc": "DATA_DIGITACAO",
                "type": "datetime",
                "selected": false
            },
            "DIFERENCA_EMISSAO_DIGITACAO": {
                "desc": "DIFERENCA_EMISSAO_DIGITACAO",
                "type": "int",
                "selected": false
            },
            "DIFERENCA_SAIDA_VENCIMENTO": {
                "desc": "DIFERENCA_SAIDA_VENCIMENTO",
                "type": "int",
                "selected": false
            },
            "PRIMEIRO_VENCIMENTO": {
                "desc": "PRIMEIRO_VENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "CHAVE": {
                "desc": "CHAVE",
                "type": "varchar",
                "selected": false
            },
            "CÓDIGO DA COLIGADA": {
                "desc": "CÓDIGO DA COLIGADA",
                "type": "int",
                "selected": false
            },
            "CODIGO PRODUTO": {
                "desc": "CODIGO PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "DATA DE CRIAÇÃO": {
                "desc": "DATA DE CRIAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "DATA DE EMISSÃO": {
                "desc": "DATA DE EMISSÃO",
                "type": "datetime",
                "selected": false
            },
            "DESTINO LOCAL DE ESTOQUE": {
                "desc": "DESTINO LOCAL DE ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "DESTINOCENTROCUSTO": {
                "desc": "DESTINOCENTROCUSTO",
                "type": "varchar",
                "selected": false
            },
            "DESTINODATAEMISAO": {
                "desc": "DESTINODATAEMISAO",
                "type": "datetime",
                "selected": false
            },
            "DESTINOIDMOV": {
                "desc": "DESTINOIDMOV",
                "type": "int",
                "selected": false
            },
            "DESTINONUMEROMOV": {
                "desc": "DESTINONUMEROMOV",
                "type": "varchar",
                "selected": false
            },
            "DESTINOTIPOMOV": {
                "desc": "DESTINOTIPOMOV",
                "type": "varchar",
                "selected": false
            },
            "HORÁRIO DE CRIAÇÃO": {
                "desc": "HORÁRIO DE CRIAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "IDENTIFICADOR DO MOVIMENTO": {
                "desc": "IDENTIFICADOR DO MOVIMENTO",
                "type": "int",
                "selected": false
            },
            "LOCAL DE ESTOQUE": {
                "desc": "LOCAL DE ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "Nº MOVIMENTO": {
                "desc": "Nº MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "TIPO MOVIMENTO": {
                "desc": "TIPO MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "USUÁRIO DA ULTIMA MODIFICAÇÃO": {
                "desc": "USUÁRIO DA ULTIMA MODIFICAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "USUÁRIO DE CRIAÇÃO": {
                "desc": "USUÁRIO DE CRIAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "NUMERONF": {
                "desc": "NUMERONF",
                "type": "varchar",
                "selected": false
            },
            "TOTAL_NF_DIGITADAS": {
                "desc": "TOTAL_NF_DIGITADAS",
                "type": "varchar",
                "selected": false
            },
            "STATUS_MOVIMENTO": {
                "desc": "STATUS_MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "ADM": {
                "desc": "ADM",
                "type": "varchar",
                "selected": false
            },
            "CPFCNPJFAVORECIDO": {
                "desc": "CPFCNPJFAVORECIDO",
                "type": "varchar",
                "selected": false
            },
            "DATACONTRATO": {
                "desc": "DATACONTRATO",
                "type": "datetime",
                "selected": false
            },
            "DATAFIM": {
                "desc": "DATAFIM",
                "type": "datetime",
                "selected": false
            },
            "DATAINICIO": {
                "desc": "DATAINICIO",
                "type": "datetime",
                "selected": false
            },
            "DESCRICAOCONTRATO": {
                "desc": "DESCRICAOCONTRATO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAOFORMAPAGAMENTO": {
                "desc": "DESCRICAOFORMAPAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "DIRETOREXECUTIVO": {
                "desc": "DIRETOREXECUTIVO",
                "type": "varchar",
                "selected": false
            },
            "ENDERECO_IMOVEL": {
                "desc": "ENDERECO_IMOVEL",
                "type": "varchar",
                "selected": false
            },
            "ENGCIVIL": {
                "desc": "ENGCIVIL",
                "type": "varchar",
                "selected": false
            },
            "FAVORECIDO": {
                "desc": "FAVORECIDO",
                "type": "varchar",
                "selected": false
            },
            "HISTORICOMOVIMENTO": {
                "desc": "HISTORICOMOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "LIDERCONTRATO": {
                "desc": "LIDERCONTRATO",
                "type": "varchar",
                "selected": false
            },
            "LIQUIDO_IR": {
                "desc": "LIQUIDO_IR",
                "type": "numeric",
                "selected": false
            },
            "PROPRIETARIO_CPF_CNPJ": {
                "desc": "PROPRIETARIO_CPF_CNPJ",
                "type": "varchar",
                "selected": false
            },
            "PROPRIETARIO_DADOS_BANCARIOS": {
                "desc": "PROPRIETARIO_DADOS_BANCARIOS",
                "type": "varchar",
                "selected": false
            },
            "PROPRIETARIO_ENDERECO": {
                "desc": "PROPRIETARIO_ENDERECO",
                "type": "varchar",
                "selected": false
            },
            "PROPRIETARIO_NOME": {
                "desc": "PROPRIETARIO_NOME",
                "type": "varchar",
                "selected": false
            },
            "REVISAO": {
                "desc": "REVISAO",
                "type": "int",
                "selected": false
            },
            "TIPOFORMAPAGAMENTO": {
                "desc": "TIPOFORMAPAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "HISTORICO_ITEM": {
                "desc": "HISTORICO_ITEM",
                "type": "varchar",
                "selected": false
            },
            "HISTORICO_NF": {
                "desc": "HISTORICO_NF",
                "type": "varchar",
                "selected": false
            },
            "IDENGEMAT": {
                "desc": "IDENGEMAT",
                "type": "int",
                "selected": false
            },
            "Nº DO CONTRATO": {
                "desc": "Nº DO CONTRATO",
                "type": "varchar",
                "selected": false
            },
            "VALOR TOTAL DE DESCONTO SOBRE": {
                "desc": "VALOR TOTAL DE DESCONTO SOBRE A NF (NÃO",
                "type": "varchar",
                "selected": false
            },
            "FORNECEDOR CONTRATO": {
                "desc": "FORNECEDOR CONTRATO",
                "type": "varchar",
                "selected": false
            },
            "PERIODO_MEDICAO": {
                "desc": "PERIODO_MEDICAO",
                "type": "varchar",
                "selected": false
            },
            "SALDO": {
                "desc": "SALDO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_RETIDO_MEDICAO": {
                "desc": "VALOR_RETIDO_MEDICAO",
                "type": "varchar",
                "selected": false
            },
            "DATAAPROVACAO": {
                "desc": "DATAAPROVACAO",
                "type": "varchar",
                "selected": false
            },
            "DATA_EMISSAO_RECEBIDA": {
                "desc": "DATA_EMISSAO_RECEBIDA",
                "type": "varchar",
                "selected": false
            },
            "DATA_EMISSAO_SOLICITACAO": {
                "desc": "DATA_EMISSAO_SOLICITACAO",
                "type": "varchar",
                "selected": false
            },
            "DATA_ENTEGA": {
                "desc": "DATA_ENTEGA",
                "type": "varchar",
                "selected": false
            },
            "LOCAL_ESTOQUE": {
                "desc": "LOCAL_ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "NUMERO_ORDEM_COMPRA": {
                "desc": "NUMERO_ORDEM_COMPRA",
                "type": "varchar",
                "selected": false
            },
            "NUMERO_SOLICITACAO": {
                "desc": "NUMERO_SOLICITACAO",
                "type": "varchar",
                "selected": false
            },
            "QUANTIDADE_DIAS_SOLICITACAO_PA": {
                "desc": "QUANTIDADE_DIAS_SOLICITACAO_PARA_ORDEM_D",
                "type": "varchar",
                "selected": false
            },
            "QUANTIDADE_RECEBIDA": {
                "desc": "QUANTIDADE_RECEBIDA",
                "type": "varchar",
                "selected": false
            },
            "USUARIO_COMPRADOR": {
                "desc": "USUARIO_COMPRADOR",
                "type": "varchar",
                "selected": false
            },
            "USUARIO_SOLICITANTE": {
                "desc": "USUARIO_SOLICITANTE",
                "type": "varchar",
                "selected": false
            },
            "MEDIA": {
                "desc": "MEDIA",
                "type": "varchar",
                "selected": false
            },
            "ANO EMISSAO NF": {
                "desc": "ANO EMISSAO NF",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_PRODUTO": {
                "desc": "CODIGO_PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "DATA DE EMISSÃO NF": {
                "desc": "DATA DE EMISSÃO NF",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO_FROTA": {
                "desc": "DESCRICAO_FROTA",
                "type": "varchar",
                "selected": false
            },
            "IDENTIFICADOR_MOVIMENTO": {
                "desc": "IDENTIFICADOR_MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "MES EMISSAO NF": {
                "desc": "MES EMISSAO NF",
                "type": "varchar",
                "selected": false
            },
            "NUMERO_SEQUENCIAL_ITEM_NF": {
                "desc": "NUMERO_SEQUENCIAL_ITEM_NF",
                "type": "varchar",
                "selected": false
            },
            "ALIQUOTA INSS": {
                "desc": "ALIQUOTA INSS",
                "type": "numeric",
                "selected": false
            },
            "ANO EMISSAO": {
                "desc": "ANO EMISSAO",
                "type": "varchar",
                "selected": false
            },
            "CENTRO CUSTO": {
                "desc": "CENTRO CUSTO",
                "type": "varchar",
                "selected": false
            },
            "CÓD. COL.": {
                "desc": "CÓD. COL.",
                "type": "int",
                "selected": false
            },
            "COFIRF": {
                "desc": "COFIRF",
                "type": "numeric",
                "selected": false
            },
            "CSLLRF": {
                "desc": "CSLLRF",
                "type": "numeric",
                "selected": false
            },
            "DATA BAIXA": {
                "desc": "DATA BAIXA",
                "type": "varchar",
                "selected": false
            },
            "DATA VENCIMENTO": {
                "desc": "DATA VENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "DT EMISSAO NF": {
                "desc": "DT EMISSAO NF",
                "type": "varchar",
                "selected": false
            },
            "ID MOV": {
                "desc": "ID MOV",
                "type": "int",
                "selected": false
            },
            "INSS": {
                "desc": "INSS",
                "type": "numeric",
                "selected": false
            },
            "IRRF": {
                "desc": "IRRF",
                "type": "numeric",
                "selected": false
            },
            "ISSRET": {
                "desc": "ISSRET",
                "type": "numeric",
                "selected": false
            },
            "LINHA": {
                "desc": "LINHA",
                "type": "int",
                "selected": false
            },
            "MES EMISSAO": {
                "desc": "MES EMISSAO",
                "type": "varchar",
                "selected": false
            },
            "Nº NF": {
                "desc": "Nº NF",
                "type": "varchar",
                "selected": false
            },
            "PISRF": {
                "desc": "PISRF",
                "type": "numeric",
                "selected": false
            },
            "STATUS NF": {
                "desc": "STATUS NF",
                "type": "varchar",
                "selected": false
            },
            "TIPO MOV": {
                "desc": "TIPO MOV",
                "type": "varchar",
                "selected": false
            },
            "TOTAL IMPOSTOS NF": {
                "desc": "TOTAL IMPOSTOS NF",
                "type": "numeric",
                "selected": false
            },
            "TOTAL LIQUIDO APOS ABAT": {
                "desc": "TOTAL LIQUIDO APOS ABAT",
                "type": "numeric",
                "selected": false
            },
            "VALOR BAIXADO": {
                "desc": "VALOR BAIXADO",
                "type": "numeric",
                "selected": false
            },
            "VALOR BRUTO NF": {
                "desc": "VALOR BRUTO NF",
                "type": "numeric",
                "selected": false
            },
            "MENOR_PRECO": {
                "desc": "MENOR_PRECO",
                "type": "varchar",
                "selected": false
            },
            "ULTIMA_DATA_COMPRA": {
                "desc": "ULTIMA_DATA_COMPRA",
                "type": "varchar",
                "selected": false
            },
            "CNPJFORNECEDOR": {
                "desc": "CNPJFORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CODIGOCENTROCUSTO": {
                "desc": "CODIGOCENTROCUSTO",
                "type": "varchar",
                "selected": false
            },
            "CODLOCALESTOQUE": {
                "desc": "CODLOCALESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "CODMOVIMENTO": {
                "desc": "CODMOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "CODUND": {
                "desc": "CODUND",
                "type": "varchar",
                "selected": false
            },
            "VALORBRUTOITEMORIG": {
                "desc": "VALORBRUTOITEMORIG",
                "type": "numeric",
                "selected": false
            },
            "DESCRIÇÃO TAREFA": {
                "desc": "DESCRIÇÃO TAREFA",
                "type": "varchar",
                "selected": false
            },
            "GRUPO DE CUSTO": {
                "desc": "GRUPO DE CUSTO",
                "type": "varchar",
                "selected": false
            },
            "IDPRJ1": {
                "desc": "IDPRJ1",
                "type": "int",
                "selected": false
            },
            "QUANTIDADE ORÇADA": {
                "desc": "QUANTIDADE ORÇADA",
                "type": "numeric",
                "selected": false
            },
            "QUANTIDADE PEDIDO EXTRA": {
                "desc": "QUANTIDADE PEDIDO EXTRA",
                "type": "numeric",
                "selected": false
            },
            "QUANTIDADE SOLICITADA": {
                "desc": "QUANTIDADE SOLICITADA",
                "type": "numeric",
                "selected": false
            },
            "RECURSO": {
                "desc": "RECURSO",
                "type": "varchar",
                "selected": false
            },
            "SALDO QTD GERAL": {
                "desc": "SALDO QTD GERAL",
                "type": "numeric",
                "selected": false
            },
            "SALDO QTD SOLICITAÇÃO": {
                "desc": "SALDO QTD SOLICITAÇÃO",
                "type": "numeric",
                "selected": false
            },
            "CIDADE": {
                "desc": "CIDADE",
                "type": "varchar",
                "selected": false
            },
            "PRECO": {
                "desc": "PRECO",
                "type": "varchar",
                "selected": false
            },
            "NUMMOV$": {
                "desc": "NUMMOV$",
                "type": "varchar",
                "selected": false
            },
            "CODETD": {
                "desc": "CODETD",
                "type": "varchar",
                "selected": false
            },
            "INSCEST": {
                "desc": "INSCEST",
                "type": "varchar",
                "selected": false
            },
            "TEXTO": {
                "desc": "TEXTO",
                "type": "varchar",
                "selected": false
            },
            "CIFOUFOB": {
                "desc": "CIFOUFOB",
                "type": "varchar",
                "selected": false
            },
            "CODTMV1": {
                "desc": "CODTMV1",
                "type": "varchar",
                "selected": false
            },
            "ALIQUOTAISS": {
                "desc": "ALIQUOTAISS",
                "type": "numeric",
                "selected": false
            },
            "ALIQUOTAISSOUTROS": {
                "desc": "ALIQUOTAISSOUTROS",
                "type": "numeric",
                "selected": false
            },
            "ALIQUOTAISSRF": {
                "desc": "ALIQUOTAISSRF",
                "type": "numeric",
                "selected": false
            },
            "BAIRROCLIENTE": {
                "desc": "BAIRROCLIENTE",
                "type": "varchar",
                "selected": false
            },
            "BAIRROCOLETA": {
                "desc": "BAIRROCOLETA",
                "type": "varchar",
                "selected": false
            },
            "BAIRROENTREGA": {
                "desc": "BAIRROENTREGA",
                "type": "varchar",
                "selected": false
            },
            "BAIRROFILIAL": {
                "desc": "BAIRROFILIAL",
                "type": "varchar",
                "selected": false
            },
            "BASEICMS": {
                "desc": "BASEICMS",
                "type": "numeric",
                "selected": false
            },
            "BASEICMSST": {
                "desc": "BASEICMSST",
                "type": "numeric",
                "selected": false
            },
            "BASETRBIPI": {
                "desc": "BASETRBIPI",
                "type": "numeric",
                "selected": false
            },
            "BASETRBISS": {
                "desc": "BASETRBISS",
                "type": "numeric",
                "selected": false
            },
            "BASETRBISSOUTROS": {
                "desc": "BASETRBISSOUTROS",
                "type": "numeric",
                "selected": false
            },
            "BASETRBISSRF": {
                "desc": "BASETRBISSRF",
                "type": "numeric",
                "selected": false
            },
            "CEPCLIENTE": {
                "desc": "CEPCLIENTE",
                "type": "varchar",
                "selected": false
            },
            "CEPCOLETA": {
                "desc": "CEPCOLETA",
                "type": "varchar",
                "selected": false
            },
            "CEPENTREGA": {
                "desc": "CEPENTREGA",
                "type": "varchar",
                "selected": false
            },
            "CEPFILIAL": {
                "desc": "CEPFILIAL",
                "type": "varchar",
                "selected": false
            },
            "CHAVEACESSO": {
                "desc": "CHAVEACESSO",
                "type": "varchar",
                "selected": false
            },
            "CIDADECLIENTE": {
                "desc": "CIDADECLIENTE",
                "type": "varchar",
                "selected": false
            },
            "CIDADEFILIAL": {
                "desc": "CIDADEFILIAL",
                "type": "varchar",
                "selected": false
            },
            "CIDADETRANSP": {
                "desc": "CIDADETRANSP",
                "type": "varchar",
                "selected": false
            },
            "CNPJCLIENTE": {
                "desc": "CNPJCLIENTE",
                "type": "varchar",
                "selected": false
            },
            "CNPJCPFCOLETA": {
                "desc": "CNPJCPFCOLETA",
                "type": "varchar",
                "selected": false
            },
            "CNPJCPFENTREGA": {
                "desc": "CNPJCPFENTREGA",
                "type": "varchar",
                "selected": false
            },
            "CNPJFILIAL": {
                "desc": "CNPJFILIAL",
                "type": "varchar",
                "selected": false
            },
            "CNPJTRANSP": {
                "desc": "CNPJTRANSP",
                "type": "varchar",
                "selected": false
            },
            "CODETDCOLETA": {
                "desc": "CODETDCOLETA",
                "type": "varchar",
                "selected": false
            },
            "CODETDENTREGA": {
                "desc": "CODETDENTREGA",
                "type": "varchar",
                "selected": false
            },
            "CODNAT": {
                "desc": "CODNAT",
                "type": "varchar",
                "selected": false
            },
            "COMPLEMENTOCLIENTE": {
                "desc": "COMPLEMENTOCLIENTE",
                "type": "varchar",
                "selected": false
            },
            "COMPLEMENTOFILIAL": {
                "desc": "COMPLEMENTOFILIAL",
                "type": "varchar",
                "selected": false
            },
            "ENDCOLETA": {
                "desc": "ENDCOLETA",
                "type": "varchar",
                "selected": false
            },
            "ENDENTREGA": {
                "desc": "ENDENTREGA",
                "type": "varchar",
                "selected": false
            },
            "ENDTRANSP": {
                "desc": "ENDTRANSP",
                "type": "varchar",
                "selected": false
            },
            "ESTADOCLIENTE": {
                "desc": "ESTADOCLIENTE",
                "type": "varchar",
                "selected": false
            },
            "ESTADOFILIAL": {
                "desc": "ESTADOFILIAL",
                "type": "varchar",
                "selected": false
            },
            "ESTADOTRANSP": {
                "desc": "ESTADOTRANSP",
                "type": "varchar",
                "selected": false
            },
            "INFCOMPLCONTRIBUINTE": {
                "desc": "INFCOMPLCONTRIBUINTE",
                "type": "varchar",
                "selected": false
            },
            "INSCREESTADUALTRANSP": {
                "desc": "INSCREESTADUALTRANSP",
                "type": "varchar",
                "selected": false
            },
            "INSCRESTCOLETA": {
                "desc": "INSCRESTCOLETA",
                "type": "varchar",
                "selected": false
            },
            "INSCRESTENTREGA": {
                "desc": "INSCRESTENTREGA",
                "type": "varchar",
                "selected": false
            },
            "INSCRICAOESTADUALCLIENTE": {
                "desc": "INSCRICAOESTADUALCLIENTE",
                "type": "varchar",
                "selected": false
            },
            "INSCRICAOESTADUALFILIAL": {
                "desc": "INSCRICAOESTADUALFILIAL",
                "type": "varchar",
                "selected": false
            },
            "INSCRICAOMUNICIAL": {
                "desc": "INSCRICAOMUNICIAL",
                "type": "varchar",
                "selected": false
            },
            "INSCRICAOMUNICIPALCLIENTE": {
                "desc": "INSCRICAOMUNICIPALCLIENTE",
                "type": "varchar",
                "selected": false
            },
            "MENSAGEM": {
                "desc": "MENSAGEM",
                "type": "varchar",
                "selected": false
            },
            "MUNICIPIOCOLETA": {
                "desc": "MUNICIPIOCOLETA",
                "type": "varchar",
                "selected": false
            },
            "MUNICIPIOENTREGA": {
                "desc": "MUNICIPIOENTREGA",
                "type": "varchar",
                "selected": false
            },
            "MUNICIPIOSERV": {
                "desc": "MUNICIPIOSERV",
                "type": "varchar",
                "selected": false
            },
            "NOMECFOP": {
                "desc": "NOMECFOP",
                "type": "varchar",
                "selected": false
            },
            "NOMECLIENTE": {
                "desc": "NOMECLIENTE",
                "type": "varchar",
                "selected": false
            },
            "NOMECOLETA": {
                "desc": "NOMECOLETA",
                "type": "varchar",
                "selected": false
            },
            "NOMEENTREGA": {
                "desc": "NOMEENTREGA",
                "type": "varchar",
                "selected": false
            },
            "NOMEFILIAL": {
                "desc": "NOMEFILIAL",
                "type": "varchar",
                "selected": false
            },
            "NOMETRANSP": {
                "desc": "NOMETRANSP",
                "type": "varchar",
                "selected": false
            },
            "NUMEROCLIENTE": {
                "desc": "NUMEROCLIENTE",
                "type": "varchar",
                "selected": false
            },
            "NUMEROFILIAL": {
                "desc": "NUMEROFILIAL",
                "type": "varchar",
                "selected": false
            },
            "RUACLIENTE": {
                "desc": "RUACLIENTE",
                "type": "varchar",
                "selected": false
            },
            "RUAFILIAL": {
                "desc": "RUAFILIAL",
                "type": "varchar",
                "selected": false
            },
            "TELEFONECLIENTE": {
                "desc": "TELEFONECLIENTE",
                "type": "varchar",
                "selected": false
            },
            "TELEFONEFILIAL": {
                "desc": "TELEFONEFILIAL",
                "type": "varchar",
                "selected": false
            },
            "TIPOFRETE": {
                "desc": "TIPOFRETE",
                "type": "varchar",
                "selected": false
            },
            "VALORCOFINS": {
                "desc": "VALORCOFINS",
                "type": "numeric",
                "selected": false
            },
            "VALORCSLL": {
                "desc": "VALORCSLL",
                "type": "numeric",
                "selected": false
            },
            "VALORICMS": {
                "desc": "VALORICMS",
                "type": "numeric",
                "selected": false
            },
            "VALORICMSST": {
                "desc": "VALORICMSST",
                "type": "numeric",
                "selected": false
            },
            "VALORPIS": {
                "desc": "VALORPIS",
                "type": "numeric",
                "selected": false
            },
            "VALORTRBIPI": {
                "desc": "VALORTRBIPI",
                "type": "numeric",
                "selected": false
            },
            "VALORTRBISS": {
                "desc": "VALORTRBISS",
                "type": "numeric",
                "selected": false
            },
            "VALORTRBISSOUTROS": {
                "desc": "VALORTRBISSOUTROS",
                "type": "numeric",
                "selected": false
            },
            "VALORTRBISSRF": {
                "desc": "VALORTRBISSRF",
                "type": "numeric",
                "selected": false
            },
            "VOLUME": {
                "desc": "VOLUME",
                "type": "numeric",
                "selected": false
            },
            "BAIRRO": {
                "desc": "BAIRRO",
                "type": "varchar",
                "selected": false
            },
            "CEP": {
                "desc": "CEP",
                "type": "varchar",
                "selected": false
            },
            "CGC": {
                "desc": "CGC",
                "type": "varchar",
                "selected": false
            },
            "COMPLEMENTO": {
                "desc": "COMPLEMENTO",
                "type": "varchar",
                "selected": false
            },
            "FAX": {
                "desc": "FAX",
                "type": "varchar",
                "selected": false
            },
            "FAX1": {
                "desc": "FAX1",
                "type": "varchar",
                "selected": false
            },
            "INSCRICAOESTADUAL": {
                "desc": "INSCRICAOESTADUAL",
                "type": "varchar",
                "selected": false
            },
            "RUA": {
                "desc": "RUA",
                "type": "varchar",
                "selected": false
            },
            "TELEFONE": {
                "desc": "TELEFONE",
                "type": "varchar",
                "selected": false
            },
            "CODPRD": {
                "desc": "CODPRD",
                "type": "varchar",
                "selected": false
            },
            "VALORRATCCU": {
                "desc": "VALORRATCCU",
                "type": "varchar",
                "selected": false
            },
            "CODTBORCAMENTO": {
                "desc": "CODTBORCAMENTO",
                "type": "varchar",
                "selected": false
            },
            "INATIVO": {
                "desc": "INATIVO",
                "type": "int",
                "selected": false
            },
            "NAOPERMITETRANSF": {
                "desc": "NAOPERMITETRANSF",
                "type": "int",
                "selected": false
            },
            "NATUREZA": {
                "desc": "NATUREZA",
                "type": "int",
                "selected": false
            },
            "SINTETICOANALITICO": {
                "desc": "SINTETICOANALITICO",
                "type": "int",
                "selected": false
            },
            "APROVADOR": {
                "desc": "APROVADOR",
                "type": "varchar",
                "selected": false
            }
        }
    },
    FLAN: {
        "code": "FLAN",
        "desc": "Lançamentos Financeiros (Contas a Pagar/Receber)",
        "priority": 7,
        "joinCondition": "PFUNC.CODCOLIGADA = FLAN.CODCOLIGADA",
        "fields": {
            "CODCOLIGADA": {
                "desc": "Código da Coligada",
                "type": "smallint",
                "selected": false
            },
            "IDLAN": {
                "desc": "Identificador do Lançamento",
                "type": "int",
                "selected": true
            },
            "NUMERODOCUMENTO": {
                "desc": "Número do Documento",
                "type": "varchar",
                "selected": true
            },
            "CODCFO": {
                "desc": "Código do Cliente/Fornecedor",
                "type": "varchar",
                "selected": false
            },
            "VALORORIGINAL": {
                "desc": "Valor Original",
                "type": "numeric",
                "selected": true
            },
            "VALORBAIXADO": {
                "desc": "Valor Baixado",
                "type": "numeric",
                "selected": false
            },
            "DATAVENCIMENTO": {
                "desc": "Data de Vencimento",
                "type": "datetime",
                "selected": true
            },
            "DATABAIXA": {
                "desc": "Data de Baixa",
                "type": "datetime",
                "selected": false
            },
            "STATUSLAN": {
                "desc": "Status (0=Aberto, 1=Baixado, 2=Cancelado)",
                "type": "smallint",
                "selected": true
            },
            "DTLIMITEDESCONTO": {
                "desc": "DTLIMITEDESCONTO",
                "type": "varchar",
                "selected": false
            },
            "TIPODESCONTO": {
                "desc": "TIPODESCONTO",
                "type": "int",
                "selected": false
            },
            "VALORDESCONTO": {
                "desc": "VALORDESCONTO",
                "type": "numeric",
                "selected": false
            },
            "PERCENTUALMULTAMORA": {
                "desc": "PERCENTUALMULTAMORA",
                "type": "int",
                "selected": false
            },
            "IDBOLETO": {
                "desc": "IDBOLETO",
                "type": "int",
                "selected": false
            },
            "HISTORICO_LANCAMENTO": {
                "desc": "HISTORICO_LANCAMENTO",
                "type": "varchar",
                "selected": false
            },
            "DADOS_PARCELA": {
                "desc": "DADOS_PARCELA",
                "type": "varchar",
                "selected": false
            },
            "CLIENTE": {
                "desc": "CLIENTE",
                "type": "varchar",
                "selected": false
            },
            "CLIENTE_FORNECEDOR": {
                "desc": "CLIENTE_FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "DOCUMENTO": {
                "desc": "DOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "EMISSAO": {
                "desc": "EMISSAO",
                "type": "varchar",
                "selected": false
            },
            "NOME_COLIGADA": {
                "desc": "NOME_COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "PAGAR": {
                "desc": "PAGAR",
                "type": "varchar",
                "selected": false
            },
            "RECEBER": {
                "desc": "RECEBER",
                "type": "varchar",
                "selected": false
            },
            "TIPO_DOC": {
                "desc": "TIPO_DOC",
                "type": "varchar",
                "selected": false
            },
            "VENCIMENTO": {
                "desc": "VENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "OBRA": {
                "desc": "OBRA",
                "type": "varchar",
                "selected": false
            },
            "CCUSTO": {
                "desc": "CCUSTO",
                "type": "varchar",
                "selected": false
            },
            "CODCCUSTO": {
                "desc": "CODCCUSTO",
                "type": "varchar",
                "selected": false
            },
            "CODNATFINANCEIRA": {
                "desc": "CODNATFINANCEIRA",
                "type": "varchar",
                "selected": false
            },
            "NATORCAMENTARIA": {
                "desc": "NATORCAMENTARIA",
                "type": "varchar",
                "selected": false
            },
            "CODIGOPRD": {
                "desc": "CODIGOPRD",
                "type": "varchar",
                "selected": false
            },
            "PRODUTO": {
                "desc": "PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "QUANTIDADE": {
                "desc": "QUANTIDADE",
                "type": "numeric",
                "selected": false
            },
            "SEQ": {
                "desc": "SEQ",
                "type": "int",
                "selected": false
            },
            "TOTAL": {
                "desc": "TOTAL",
                "type": "numeric",
                "selected": false
            },
            "UND": {
                "desc": "UND",
                "type": "varchar",
                "selected": false
            },
            "UNITARIO": {
                "desc": "UNITARIO",
                "type": "numeric",
                "selected": false
            },
            "ANO": {
                "desc": "ANO",
                "type": "varchar",
                "selected": false
            },
            "CELULAR": {
                "desc": "CELULAR",
                "type": "varchar",
                "selected": false
            },
            "CODAPLICACAO": {
                "desc": "CODAPLICACAO",
                "type": "varchar",
                "selected": false
            },
            "CODIGOCOLIGADA": {
                "desc": "CODIGOCOLIGADA",
                "type": "varchar",
                "selected": false
            },
            "COLUMN1": {
                "desc": "Column1",
                "type": "varchar",
                "selected": false
            },
            "CONTADOR": {
                "desc": "CONTADOR",
                "type": "varchar",
                "selected": false
            },
            "DIA": {
                "desc": "DIA",
                "type": "varchar",
                "selected": false
            },
            "DIFERENÇA": {
                "desc": "DIFERENÇA",
                "type": "varchar",
                "selected": false
            },
            "EMAIL": {
                "desc": "EMAIL",
                "type": "varchar",
                "selected": false
            },
            "EMPREENDIMENTO": {
                "desc": "EMPREENDIMENTO",
                "type": "varchar",
                "selected": false
            },
            "HISTORICO": {
                "desc": "HISTORICO",
                "type": "varchar",
                "selected": false
            },
            "JUROS DE MORA": {
                "desc": "JUROS DE MORA",
                "type": "varchar",
                "selected": false
            },
            "LOTE": {
                "desc": "LOTE",
                "type": "varchar",
                "selected": false
            },
            "MES": {
                "desc": "MES",
                "type": "varchar",
                "selected": false
            },
            "METRAGEM": {
                "desc": "METRAGEM",
                "type": "varchar",
                "selected": false
            },
            "MULTA POR MORA": {
                "desc": "MULTA POR MORA",
                "type": "varchar",
                "selected": false
            },
            "NUM_VENDA": {
                "desc": "NUM_VENDA",
                "type": "varchar",
                "selected": false
            },
            "PARCELA": {
                "desc": "PARCELA",
                "type": "varchar",
                "selected": false
            },
            "QUADRA": {
                "desc": "QUADRA",
                "type": "varchar",
                "selected": false
            },
            "SITUAÇÃO DA VENDA": {
                "desc": "SITUAÇÃO DA VENDA",
                "type": "varchar",
                "selected": false
            },
            "SUPERIOR A 180 DIAS": {
                "desc": "SUPERIOR A 180 DIAS",
                "type": "varchar",
                "selected": false
            },
            "TELEFONE": {
                "desc": "TELEFONE",
                "type": "varchar",
                "selected": false
            },
            "ANO VENDA": {
                "desc": "ANO VENDA",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_CLIENTE": {
                "desc": "CODIGO_CLIENTE",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_COLIGADA": {
                "desc": "CODIGO_COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "COLIGADA_CLIENTE": {
                "desc": "COLIGADA_CLIENTE",
                "type": "varchar",
                "selected": false
            },
            "COMPRADORATUAL": {
                "desc": "COMPRADORATUAL",
                "type": "varchar",
                "selected": false
            },
            "CPFCNPJCOMPRADORATUAL": {
                "desc": "CPFCNPJCOMPRADORATUAL",
                "type": "varchar",
                "selected": false
            },
            "DATA VENDA": {
                "desc": "DATA VENDA",
                "type": "varchar",
                "selected": false
            },
            "MES VENDA": {
                "desc": "MES VENDA",
                "type": "varchar",
                "selected": false
            },
            "OCORREU_CESSAO_TRANSF.": {
                "desc": "OCORREU_CESSAO_TRANSF.",
                "type": "varchar",
                "selected": false
            },
            "PRECO_LOTE": {
                "desc": "PRECO_LOTE",
                "type": "varchar",
                "selected": false
            },
            "QTDPARCELASATRASADAS": {
                "desc": "QTDPARCELASATRASADAS",
                "type": "varchar",
                "selected": false
            },
            "QTDPARCELASEMABERTO": {
                "desc": "QTDPARCELASEMABERTO",
                "type": "varchar",
                "selected": false
            },
            "QTDPARCELASPAGAS": {
                "desc": "QTDPARCELASPAGAS",
                "type": "varchar",
                "selected": false
            },
            "SALDODEVEDORCOMPARCIAL": {
                "desc": "SALDODEVEDORCOMPARCIAL",
                "type": "varchar",
                "selected": false
            },
            "TABELA_PRECO": {
                "desc": "TABELA_PRECO",
                "type": "varchar",
                "selected": false
            },
            "TOTALPAGO": {
                "desc": "TOTALPAGO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_DISTRATO": {
                "desc": "VALOR_DISTRATO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_LIQUIDO_DISTRATO": {
                "desc": "VALOR_LIQUIDO_DISTRATO",
                "type": "varchar",
                "selected": false
            },
            "VALORVENDA": {
                "desc": "VALORVENDA",
                "type": "varchar",
                "selected": false
            },
            "ANOCOMPENSACAO": {
                "desc": "ANOCOMPENSACAO",
                "type": "varchar",
                "selected": false
            },
            "ANODIGITACAO": {
                "desc": "ANODIGITACAO",
                "type": "varchar",
                "selected": false
            },
            "ANOEMISSAO": {
                "desc": "ANOEMISSAO",
                "type": "varchar",
                "selected": false
            },
            "CC_NV1": {
                "desc": "CC_NV1",
                "type": "varchar",
                "selected": false
            },
            "CC_NV2": {
                "desc": "CC_NV2",
                "type": "varchar",
                "selected": false
            },
            "CC_NV3": {
                "desc": "CC_NV3",
                "type": "varchar",
                "selected": false
            },
            "CLIENTE/FORNECEDOR": {
                "desc": "CLIENTE/FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "COD. COLIGADA": {
                "desc": "COD. COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "COLIGADA": {
                "desc": "COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "CONTA-CAIXA PGTO": {
                "desc": "CONTA-CAIXA PGTO",
                "type": "varchar",
                "selected": false
            },
            "DATACOMPENSACAO": {
                "desc": "DATACOMPENSACAO",
                "type": "varchar",
                "selected": false
            },
            "DATADIGITACAO": {
                "desc": "DATADIGITACAO",
                "type": "varchar",
                "selected": false
            },
            "DATAEMISSAO": {
                "desc": "DATAEMISSAO",
                "type": "varchar",
                "selected": false
            },
            "DIACOMPENSACAO": {
                "desc": "DIACOMPENSACAO",
                "type": "varchar",
                "selected": false
            },
            "DIADIGITACAO": {
                "desc": "DIADIGITACAO",
                "type": "varchar",
                "selected": false
            },
            "DIAEMISSAO": {
                "desc": "DIAEMISSAO",
                "type": "varchar",
                "selected": false
            },
            "FORMAPGTO": {
                "desc": "FORMAPGTO",
                "type": "varchar",
                "selected": false
            },
            "MESCOMPENSACAO": {
                "desc": "MESCOMPENSACAO",
                "type": "varchar",
                "selected": false
            },
            "MESDIGITACAO": {
                "desc": "MESDIGITACAO",
                "type": "varchar",
                "selected": false
            },
            "MESEMISSAO": {
                "desc": "MESEMISSAO",
                "type": "varchar",
                "selected": false
            },
            "NT_NV1": {
                "desc": "NT_NV1",
                "type": "varchar",
                "selected": false
            },
            "NT_NV2": {
                "desc": "NT_NV2",
                "type": "varchar",
                "selected": false
            },
            "ORIGEM": {
                "desc": "ORIGEM",
                "type": "varchar",
                "selected": false
            },
            "PAGAR OU RECEBER": {
                "desc": "PAGAR ou RECEBER",
                "type": "varchar",
                "selected": false
            },
            "PERCENTUALRATEIO": {
                "desc": "PERCENTUALRATEIO",
                "type": "varchar",
                "selected": false
            },
            "REFERENCIA_EXTRATO": {
                "desc": "REFERENCIA_EXTRATO",
                "type": "varchar",
                "selected": false
            },
            "REFERENCIA_LANCTO": {
                "desc": "REFERENCIA_LANCTO",
                "type": "varchar",
                "selected": false
            },
            "STATUS BAIXA DO LANÇAMENTO": {
                "desc": "STATUS BAIXA DO LANÇAMENTO",
                "type": "varchar",
                "selected": false
            },
            "STATUS LANÇAMENTO": {
                "desc": "STATUS LANÇAMENTO",
                "type": "varchar",
                "selected": false
            },
            "TIPO DE DOCUMENTO": {
                "desc": "TIPO DE DOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "VALOR": {
                "desc": "VALOR",
                "type": "varchar",
                "selected": false
            },
            "CODCXA": {
                "desc": "CODCXA",
                "type": "varchar",
                "selected": false
            },
            "NOME": {
                "desc": "NOME",
                "type": "varchar",
                "selected": false
            },
            "VALORBAIXA": {
                "desc": "VALORBAIXA",
                "type": "varchar",
                "selected": false
            },
            "BAIXADO": {
                "desc": "BAIXADO",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_TIPO_DOCUMENTO": {
                "desc": "CODIGO_TIPO_DOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "COLIGADA_NOME": {
                "desc": "COLIGADA_NOME",
                "type": "varchar",
                "selected": false
            },
            "DATA_BAIXA": {
                "desc": "DATA_BAIXA",
                "type": "varchar",
                "selected": false
            },
            "DATACRIACAO": {
                "desc": "DATACRIACAO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO_TIPO_DOCUMENTO": {
                "desc": "DESCRICAO_TIPO_DOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "FILIAL": {
                "desc": "FILIAL",
                "type": "varchar",
                "selected": false
            },
            "FILIAL_NOME": {
                "desc": "FILIAL_NOME",
                "type": "varchar",
                "selected": false
            },
            "PAGAR_OU_RECEBER": {
                "desc": "PAGAR_OU_RECEBER",
                "type": "varchar",
                "selected": false
            },
            "REF_LANCAMENTO": {
                "desc": "REF_LANCAMENTO",
                "type": "varchar",
                "selected": false
            },
            "SALDO": {
                "desc": "SALDO",
                "type": "varchar",
                "selected": false
            },
            "CLASSFIN": {
                "desc": "CLASSFIN",
                "type": "varchar",
                "selected": false
            },
            "CODCLASSFIN": {
                "desc": "CODCLASSFIN",
                "type": "varchar",
                "selected": false
            },
            "CONTACAIXA": {
                "desc": "CONTACAIXA",
                "type": "varchar",
                "selected": false
            },
            "NOMECLIFOR": {
                "desc": "NOMECLIFOR",
                "type": "varchar",
                "selected": false
            },
            "COD_NATORCAMENTARIA": {
                "desc": "COD_NATORCAMENTARIA",
                "type": "varchar",
                "selected": false
            },
            "VALORRATEIO": {
                "desc": "VALORRATEIO",
                "type": "varchar",
                "selected": false
            },
            "CENTROCUSTO": {
                "desc": "CENTROCUSTO",
                "type": "varchar",
                "selected": false
            },
            "FORNECEDOR": {
                "desc": "FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "TIPODOCUMENTO": {
                "desc": "TIPODOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "USUARIO": {
                "desc": "USUARIO",
                "type": "varchar",
                "selected": false
            },
            "CLIENTEFORNECEDOR": {
                "desc": "CLIENTEFORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CODFILIAL": {
                "desc": "CODFILIAL",
                "type": "int",
                "selected": false
            },
            "MOVIMENTO": {
                "desc": "MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "STATUS_LANCAMENTO": {
                "desc": "STATUS_LANCAMENTO",
                "type": "varchar",
                "selected": false
            },
            "TIPO": {
                "desc": "TIPO",
                "type": "varchar",
                "selected": false
            },
            "TIPODOC": {
                "desc": "TIPODOC",
                "type": "varchar",
                "selected": false
            },
            "USUARIOCRIACAO": {
                "desc": "USUARIOCRIACAO",
                "type": "varchar",
                "selected": false
            },
            "USUARIOCRIACAOORIGEM": {
                "desc": "USUARIOCRIACAOORIGEM",
                "type": "varchar",
                "selected": false
            },
            "VALORORIGINAL1": {
                "desc": "VALORORIGINAL1",
                "type": "numeric",
                "selected": false
            },
            "VALORREAJUSTADO": {
                "desc": "VALORREAJUSTADO",
                "type": "varchar",
                "selected": false
            },
            "TIPO_RECEITA_DESPESA": {
                "desc": "TIPO_RECEITA_DESPESA",
                "type": "varchar",
                "selected": false
            },
            "PARTICIPACAO": {
                "desc": "PARTICIPACAO",
                "type": "varchar",
                "selected": false
            },
            "VALORPAGO": {
                "desc": "VALORPAGO",
                "type": "varchar",
                "selected": false
            },
            "PERIODO": {
                "desc": "PERIODO",
                "type": "varchar",
                "selected": false
            },
            "TOTAL_PAGO": {
                "desc": "TOTAL_PAGO",
                "type": "varchar",
                "selected": false
            },
            "TOTAL_RECEBIDO": {
                "desc": "TOTAL_RECEBIDO",
                "type": "varchar",
                "selected": false
            },
            "CNPJCPF": {
                "desc": "CNPJCPF",
                "type": "varchar",
                "selected": false
            },
            "CODLOTE": {
                "desc": "CODLOTE",
                "type": "int",
                "selected": false
            },
            "IDLANCAMENTO": {
                "desc": "IDLANCAMENTO",
                "type": "int",
                "selected": false
            },
            "IDPARTIDA": {
                "desc": "IDPARTIDA",
                "type": "int",
                "selected": false
            },
            "DIFERENCA_ORIGINAL_BAIXA": {
                "desc": "DIFERENCA_ORIGINAL_BAIXA",
                "type": "varchar",
                "selected": false
            },
            "ALIQUOTA": {
                "desc": "ALIQUOTA",
                "type": "numeric",
                "selected": false
            },
            "ALTERACAOBLOQUEADA": {
                "desc": "ALTERACAOBLOQUEADA",
                "type": "int",
                "selected": false
            },
            "APLICFORMULA": {
                "desc": "APLICFORMULA",
                "type": "varchar",
                "selected": false
            },
            "BAIXAAUTORIZADA": {
                "desc": "BAIXAAUTORIZADA",
                "type": "int",
                "selected": false
            },
            "BAIXAPENDENTE": {
                "desc": "BAIXAPENDENTE",
                "type": "int",
                "selected": false
            },
            "CAMPOALFAOP1": {
                "desc": "CAMPOALFAOP1",
                "type": "varchar",
                "selected": false
            },
            "CAMPOALFAOP2": {
                "desc": "CAMPOALFAOP2",
                "type": "varchar",
                "selected": false
            },
            "CAMPOALFAOP3": {
                "desc": "CAMPOALFAOP3",
                "type": "varchar",
                "selected": false
            },
            "CANCELADOFAT": {
                "desc": "CANCELADOFAT",
                "type": "int",
                "selected": false
            },
            "CAPMENSAL": {
                "desc": "CAPMENSAL",
                "type": "numeric",
                "selected": false
            },
            "CARENCIAJUROS": {
                "desc": "CARENCIAJUROS",
                "type": "int",
                "selected": false
            },
            "CATEGORIAAUTONOMO": {
                "desc": "CATEGORIAAUTONOMO",
                "type": "int",
                "selected": false
            },
            "CHAPA": {
                "desc": "CHAPA",
                "type": "varchar",
                "selected": false
            },
            "CLASSELCDPR": {
                "desc": "CLASSELCDPR",
                "type": "int",
                "selected": false
            },
            "CLASSIFICACAO": {
                "desc": "CLASSIFICACAO",
                "type": "int",
                "selected": false
            },
            "CLASSIFICACAOPAGREC": {
                "desc": "CLASSIFICACAOPAGREC",
                "type": "varchar",
                "selected": false
            },
            "CNABACEITE": {
                "desc": "CNABACEITE",
                "type": "int",
                "selected": false
            },
            "CNABAUTENTICACAO": {
                "desc": "CNABAUTENTICACAO",
                "type": "varchar",
                "selected": false
            },
            "CNABBANCO": {
                "desc": "CNABBANCO",
                "type": "varchar",
                "selected": false
            },
            "CNABCARTEIRA": {
                "desc": "CNABCARTEIRA",
                "type": "int",
                "selected": false
            },
            "CNABCODRETORNO": {
                "desc": "CNABCODRETORNO",
                "type": "varchar",
                "selected": false
            },
            "CNABCOMANDO": {
                "desc": "CNABCOMANDO",
                "type": "int",
                "selected": false
            },
            "CNABINSTRUCAOCOD1": {
                "desc": "CNABINSTRUCAOCOD1",
                "type": "int",
                "selected": false
            },
            "CNABINSTRUCAOCOD2": {
                "desc": "CNABINSTRUCAOCOD2",
                "type": "int",
                "selected": false
            },
            "CNABNOSSONUMERO": {
                "desc": "CNABNOSSONUMERO",
                "type": "varchar",
                "selected": false
            },
            "CNABSTATUS": {
                "desc": "CNABSTATUS",
                "type": "int",
                "selected": false
            },
            "CODBAIXA": {
                "desc": "CODBAIXA",
                "type": "int",
                "selected": false
            },
            "CODCFOORIGEM": {
                "desc": "CODCFOORIGEM",
                "type": "varchar",
                "selected": false
            },
            "CODCOLCFO": {
                "desc": "CODCOLCFO",
                "type": "int",
                "selected": false
            },
            "CODCOLCFOORIGEM": {
                "desc": "CODCOLCFOORIGEM",
                "type": "int",
                "selected": false
            },
            "CODCOLCONVENIO": {
                "desc": "CODCOLCONVENIO",
                "type": "int",
                "selected": false
            },
            "CODCOLCXA": {
                "desc": "CODCOLCXA",
                "type": "int",
                "selected": false
            },
            "CODCOLPGTO": {
                "desc": "CODCOLPGTO",
                "type": "int",
                "selected": false
            },
            "CODCOLTOMADOR": {
                "desc": "CODCOLTOMADOR",
                "type": "int",
                "selected": false
            },
            "CODCOLXCX": {
                "desc": "CODCOLXCX",
                "type": "int",
                "selected": false
            },
            "CODDEPARTAMENTO": {
                "desc": "CODDEPARTAMENTO",
                "type": "varchar",
                "selected": false
            },
            "CODDIARIO": {
                "desc": "CODDIARIO",
                "type": "varchar",
                "selected": false
            },
            "CODDIARIOBAIXA": {
                "desc": "CODDIARIOBAIXA",
                "type": "varchar",
                "selected": false
            },
            "CODEVENTO": {
                "desc": "CODEVENTO",
                "type": "int",
                "selected": false
            },
            "CODEVENTOBAIXA": {
                "desc": "CODEVENTOBAIXA",
                "type": "int",
                "selected": false
            },
            "CODIGOBARRA": {
                "desc": "CODIGOBARRA",
                "type": "varchar",
                "selected": false
            },
            "CODINDEXADOR": {
                "desc": "CODINDEXADOR",
                "type": "varchar",
                "selected": false
            },
            "CODMOEVALORORIGINAL": {
                "desc": "CODMOEVALORORIGINAL",
                "type": "varchar",
                "selected": false
            },
            "CODRECEITA": {
                "desc": "CODRECEITA",
                "type": "varchar",
                "selected": false
            },
            "CODRPR": {
                "desc": "CODRPR",
                "type": "varchar",
                "selected": false
            },
            "CODTB1FLX": {
                "desc": "CODTB1FLX",
                "type": "varchar",
                "selected": false
            },
            "CODTB2FLX": {
                "desc": "CODTB2FLX",
                "type": "varchar",
                "selected": false
            },
            "CODTB3FLX": {
                "desc": "CODTB3FLX",
                "type": "varchar",
                "selected": false
            },
            "CODTB4FLX": {
                "desc": "CODTB4FLX",
                "type": "varchar",
                "selected": false
            },
            "CODTB5FLX": {
                "desc": "CODTB5FLX",
                "type": "varchar",
                "selected": false
            },
            "CODTDO": {
                "desc": "CODTDO",
                "type": "varchar",
                "selected": false
            },
            "CODTOMADOR": {
                "desc": "CODTOMADOR",
                "type": "varchar",
                "selected": false
            },
            "CODUSUDESBLOQUEIO1": {
                "desc": "CODUSUDESBLOQUEIO1",
                "type": "varchar",
                "selected": false
            },
            "CODUSUDESBLOQUEIO2": {
                "desc": "CODUSUDESBLOQUEIO2",
                "type": "varchar",
                "selected": false
            },
            "CODVEN": {
                "desc": "CODVEN",
                "type": "varchar",
                "selected": false
            },
            "CONVENIO": {
                "desc": "CONVENIO",
                "type": "varchar",
                "selected": false
            },
            "COTA": {
                "desc": "COTA",
                "type": "int",
                "selected": false
            },
            "COTACAOBAIXA": {
                "desc": "COTACAOBAIXA",
                "type": "numeric",
                "selected": false
            },
            "COTACAOINCLUSAO": {
                "desc": "COTACAOINCLUSAO",
                "type": "numeric",
                "selected": false
            },
            "CPFCNPJLCDPR": {
                "desc": "CPFCNPJLCDPR",
                "type": "varchar",
                "selected": false
            },
            "DATAALTERACAO": {
                "desc": "DATAALTERACAO",
                "type": "datetime",
                "selected": false
            },
            "DATACANCELAMENTO": {
                "desc": "DATACANCELAMENTO",
                "type": "datetime",
                "selected": false
            },
            "DATACANCELBAIXA": {
                "desc": "DATACANCELBAIXA",
                "type": "datetime",
                "selected": false
            },
            "DATACHEQUE": {
                "desc": "DATACHEQUE",
                "type": "datetime",
                "selected": false
            },
            "DATACONTABILIZ": {
                "desc": "DATACONTABILIZ",
                "type": "datetime",
                "selected": false
            },
            "DATACONTABILIZBX": {
                "desc": "DATACONTABILIZBX",
                "type": "datetime",
                "selected": false
            },
            "DATACONTROLEAPROVACAO": {
                "desc": "DATACONTROLEAPROVACAO",
                "type": "datetime",
                "selected": false
            },
            "DATAESTORNOLAN": {
                "desc": "DATAESTORNOLAN",
                "type": "datetime",
                "selected": false
            },
            "DATAFATCNT": {
                "desc": "DATAFATCNT",
                "type": "datetime",
                "selected": false
            },
            "DATAOP1": {
                "desc": "DATAOP1",
                "type": "datetime",
                "selected": false
            },
            "DATAOP2": {
                "desc": "DATAOP2",
                "type": "datetime",
                "selected": false
            },
            "DATAOP3": {
                "desc": "DATAOP3",
                "type": "datetime",
                "selected": false
            },
            "DATAOP4": {
                "desc": "DATAOP4",
                "type": "datetime",
                "selected": false
            },
            "DATAOP5": {
                "desc": "DATAOP5",
                "type": "datetime",
                "selected": false
            },
            "DATAORCAMENTO": {
                "desc": "DATAORCAMENTO",
                "type": "datetime",
                "selected": false
            },
            "DATAPAG": {
                "desc": "DATAPAG",
                "type": "datetime",
                "selected": false
            },
            "DATAPREVBAIXA": {
                "desc": "DATAPREVBAIXA",
                "type": "datetime",
                "selected": false
            },
            "DATARECIBO": {
                "desc": "DATARECIBO",
                "type": "datetime",
                "selected": false
            },
            "DATAVENCIMENTOANTECIP": {
                "desc": "DATAVENCIMENTOANTECIP",
                "type": "datetime",
                "selected": false
            },
            "DESCONTADO": {
                "desc": "DESCONTADO",
                "type": "int",
                "selected": false
            },
            "DESCONTOCOMERCIAL": {
                "desc": "DESCONTOCOMERCIAL",
                "type": "numeric",
                "selected": false
            },
            "DIGCONVENIO": {
                "desc": "DIGCONVENIO",
                "type": "varchar",
                "selected": false
            },
            "DTALT": {
                "desc": "DTALT",
                "type": "datetime",
                "selected": false
            },
            "EMITIDO": {
                "desc": "EMITIDO",
                "type": "varchar",
                "selected": false
            },
            "FATURADOFAT": {
                "desc": "FATURADOFAT",
                "type": "int",
                "selected": false
            },
            "FILIALCONTABIL": {
                "desc": "FILIALCONTABIL",
                "type": "int",
                "selected": false
            },
            "FORMULACAPITALIZACAO": {
                "desc": "FORMULACAPITALIZACAO",
                "type": "varchar",
                "selected": false
            },
            "FORMULADESCONTO": {
                "desc": "FORMULADESCONTO",
                "type": "varchar",
                "selected": false
            },
            "FORMULAJUROS": {
                "desc": "FORMULAJUROS",
                "type": "varchar",
                "selected": false
            },
            "FORMULAMULTA": {
                "desc": "FORMULAMULTA",
                "type": "varchar",
                "selected": false
            },
            "FORMULAVALOROP1": {
                "desc": "FORMULAVALOROP1",
                "type": "varchar",
                "selected": false
            },
            "FORMULAVALOROP2": {
                "desc": "FORMULAVALOROP2",
                "type": "varchar",
                "selected": false
            },
            "FORMULAVALOROP3": {
                "desc": "FORMULAVALOROP3",
                "type": "varchar",
                "selected": false
            },
            "FORMULAVALOROP4": {
                "desc": "FORMULAVALOROP4",
                "type": "varchar",
                "selected": false
            },
            "FORMULAVALOROP5": {
                "desc": "FORMULAVALOROP5",
                "type": "varchar",
                "selected": false
            },
            "FORMULAVALOROP6": {
                "desc": "FORMULAVALOROP6",
                "type": "varchar",
                "selected": false
            },
            "FORMULAVALOROP7": {
                "desc": "FORMULAVALOROP7",
                "type": "varchar",
                "selected": false
            },
            "FORMULAVALOROP8": {
                "desc": "FORMULAVALOROP8",
                "type": "varchar",
                "selected": false
            },
            "HRALT": {
                "desc": "HRALT",
                "type": "datetime",
                "selected": false
            },
            "ID": {
                "desc": "ID",
                "type": "int",
                "selected": false
            },
            "IDADIANTAMENTO": {
                "desc": "IDADIANTAMENTO",
                "type": "int",
                "selected": false
            },
            "IDBAIXAPARCIAL": {
                "desc": "IDBAIXAPARCIAL",
                "type": "int",
                "selected": false
            },
            "IDBORDERO": {
                "desc": "IDBORDERO",
                "type": "int",
                "selected": false
            },
            "IDCEITOMADOR": {
                "desc": "IDCEITOMADOR",
                "type": "int",
                "selected": false
            },
            "IDCNT": {
                "desc": "IDCNT",
                "type": "int",
                "selected": false
            },
            "IDCONVENIO": {
                "desc": "IDCONVENIO",
                "type": "int",
                "selected": false
            },
            "IDDEVOLUCAO": {
                "desc": "IDDEVOLUCAO",
                "type": "int",
                "selected": false
            },
            "IDFAT": {
                "desc": "IDFAT",
                "type": "int",
                "selected": false
            },
            "IDFLUIG": {
                "desc": "IDFLUIG",
                "type": "int",
                "selected": false
            },
            "IDFORMAPAGTO": {
                "desc": "IDFORMAPAGTO",
                "type": "int",
                "selected": false
            },
            "IDGUIA": {
                "desc": "IDGUIA",
                "type": "int",
                "selected": false
            },
            "IDHISTORICO": {
                "desc": "IDHISTORICO",
                "type": "int",
                "selected": false
            },
            "IDIRRF": {
                "desc": "IDIRRF",
                "type": "int",
                "selected": false
            },
            "IDLANFILHORELBOLETO": {
                "desc": "IDLANFILHORELBOLETO",
                "type": "int",
                "selected": false
            },
            "IDLANMOVORIGEM": {
                "desc": "IDLANMOVORIGEM",
                "type": "int",
                "selected": false
            },
            "IDLANREPASSE": {
                "desc": "IDLANREPASSE",
                "type": "int",
                "selected": false
            },
            "IDMOV": {
                "desc": "IDMOV",
                "type": "int",
                "selected": false
            },
            "IDNATRENDIMENTOIRRF": {
                "desc": "IDNATRENDIMENTOIRRF",
                "type": "int",
                "selected": false
            },
            "IDNOTACREDITO": {
                "desc": "IDNOTACREDITO",
                "type": "int",
                "selected": false
            },
            "IDOPERACAO": {
                "desc": "IDOPERACAO",
                "type": "int",
                "selected": false
            },
            "IDOPERACAOBAIXA": {
                "desc": "IDOPERACAOBAIXA",
                "type": "int",
                "selected": false
            },
            "IDPGTO": {
                "desc": "IDPGTO",
                "type": "int",
                "selected": false
            },
            "IDSESSAO": {
                "desc": "IDSESSAO",
                "type": "int",
                "selected": false
            },
            "IDXCX": {
                "desc": "IDXCX",
                "type": "int",
                "selected": false
            },
            "IMPOSTOEDITADO": {
                "desc": "IMPOSTOEDITADO",
                "type": "int",
                "selected": false
            },
            "INDNATREC": {
                "desc": "INDNATREC",
                "type": "varchar",
                "selected": false
            },
            "INSSEMOUTRAEMPRESA": {
                "desc": "INSSEMOUTRAEMPRESA",
                "type": "numeric",
                "selected": false
            },
            "IPTE": {
                "desc": "IPTE",
                "type": "varchar",
                "selected": false
            },
            "JAIMPRIMIU": {
                "desc": "JAIMPRIMIU",
                "type": "int",
                "selected": false
            },
            "JUROSDIA": {
                "desc": "JUROSDIA",
                "type": "numeric",
                "selected": false
            },
            "JUROSVENDOR": {
                "desc": "JUROSVENDOR",
                "type": "numeric",
                "selected": false
            },
            "LIBAUTORIZADA": {
                "desc": "LIBAUTORIZADA",
                "type": "int",
                "selected": false
            },
            "LOCPAG": {
                "desc": "LOCPAG",
                "type": "varchar",
                "selected": false
            },
            "MENSBAIXA": {
                "desc": "MENSBAIXA",
                "type": "varchar",
                "selected": false
            },
            "MESDECOMPETENCIA": {
                "desc": "MESDECOMPETENCIA",
                "type": "datetime",
                "selected": false
            },
            "MODALIDADELCDPR": {
                "desc": "MODALIDADELCDPR",
                "type": "int",
                "selected": false
            },
            "MODELOCONTABILIZACAO": {
                "desc": "MODELOCONTABILIZACAO",
                "type": "int",
                "selected": false
            },
            "MODELOCONTABILIZACAOBAIXA": {
                "desc": "MODELOCONTABILIZACAOBAIXA",
                "type": "int",
                "selected": false
            },
            "MODOCALCULOBX": {
                "desc": "MODOCALCULOBX",
                "type": "int",
                "selected": false
            },
            "MOEDAVINCULO": {
                "desc": "MOEDAVINCULO",
                "type": "varchar",
                "selected": false
            },
            "MULTADIA": {
                "desc": "MULTADIA",
                "type": "numeric",
                "selected": false
            },
            "MULTAFIXA": {
                "desc": "MULTAFIXA",
                "type": "numeric",
                "selected": false
            },
            "NATREC": {
                "desc": "NATREC",
                "type": "varchar",
                "selected": false
            },
            "NFOUDUP": {
                "desc": "NFOUDUP",
                "type": "int",
                "selected": false
            },
            "NSEQITMCNT": {
                "desc": "NSEQITMCNT",
                "type": "int",
                "selected": false
            },
            "NSEQITMPREVISAO": {
                "desc": "NSEQITMPREVISAO",
                "type": "int",
                "selected": false
            },
            "NUMBLOQUEIOS": {
                "desc": "NUMBLOQUEIOS",
                "type": "int",
                "selected": false
            },
            "NUMCONTABILBX": {
                "desc": "NUMCONTABILBX",
                "type": "varchar",
                "selected": false
            },
            "NUMEROCHEQUE": {
                "desc": "NUMEROCHEQUE",
                "type": "varchar",
                "selected": false
            },
            "NUMEROCONTABIL": {
                "desc": "NUMEROCONTABIL",
                "type": "varchar",
                "selected": false
            },
            "NUMLOTECONTABIL": {
                "desc": "NUMLOTECONTABIL",
                "type": "int",
                "selected": false
            },
            "NUMLOTECONTABILBX": {
                "desc": "NUMLOTECONTABILBX",
                "type": "int",
                "selected": false
            },
            "NUMRECIBO": {
                "desc": "NUMRECIBO",
                "type": "int",
                "selected": false
            },
            "NUMSEQRECIBO": {
                "desc": "NUMSEQRECIBO",
                "type": "int",
                "selected": false
            },
            "OCAUTONOMO": {
                "desc": "OCAUTONOMO",
                "type": "int",
                "selected": false
            },
            "PAGREC": {
                "desc": "PAGREC",
                "type": "int",
                "selected": false
            },
            "PERCBASEINSSEMPREGADO": {
                "desc": "PERCBASEINSSEMPREGADO",
                "type": "numeric",
                "selected": false
            },
            "PERCENTBASEINSS": {
                "desc": "PERCENTBASEINSS",
                "type": "numeric",
                "selected": false
            },
            "PERLETIVO": {
                "desc": "PERLETIVO",
                "type": "varchar",
                "selected": false
            },
            "QRCODEPIX": {
                "desc": "QRCODEPIX",
                "type": "varchar",
                "selected": false
            },
            "RECCREATEDBY": {
                "desc": "RECCREATEDBY",
                "type": "varchar",
                "selected": false
            },
            "RECCREATEDON": {
                "desc": "RECCREATEDON",
                "type": "datetime",
                "selected": false
            },
            "RECMODIFIEDBY": {
                "desc": "RECMODIFIEDBY",
                "type": "varchar",
                "selected": false
            },
            "RECMODIFIEDON": {
                "desc": "RECMODIFIEDON",
                "type": "datetime",
                "selected": false
            },
            "REEMBOLSAVEL": {
                "desc": "REEMBOLSAVEL",
                "type": "int",
                "selected": false
            },
            "REUTILIZACAO": {
                "desc": "REUTILIZACAO",
                "type": "int",
                "selected": false
            },
            "SEGUNDONUMERO": {
                "desc": "SEGUNDONUMERO",
                "type": "varchar",
                "selected": false
            },
            "SEQDIARIO": {
                "desc": "SEQDIARIO",
                "type": "varchar",
                "selected": false
            },
            "SEQDIARIOBAIXA": {
                "desc": "SEQDIARIOBAIXA",
                "type": "varchar",
                "selected": false
            },
            "SEQDIARIOESTORNO": {
                "desc": "SEQDIARIOESTORNO",
                "type": "varchar",
                "selected": false
            },
            "SEQDIARIOESTORNOBAIXA": {
                "desc": "SEQDIARIOESTORNOBAIXA",
                "type": "varchar",
                "selected": false
            },
            "SEQSIACC": {
                "desc": "SEQSIACC",
                "type": "int",
                "selected": false
            },
            "SERIEDOCUMENTO": {
                "desc": "SERIEDOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "SERVEXTRA": {
                "desc": "SERVEXTRA",
                "type": "varchar",
                "selected": false
            },
            "STATUSAPROVACAO": {
                "desc": "STATUSAPROVACAO",
                "type": "int",
                "selected": false
            },
            "STATUSAVP": {
                "desc": "STATUSAVP",
                "type": "int",
                "selected": false
            },
            "STATUSDDA": {
                "desc": "STATUSDDA",
                "type": "int",
                "selected": false
            },
            "STATUSEXPORTACAO": {
                "desc": "STATUSEXPORTACAO",
                "type": "int",
                "selected": false
            },
            "STATUSEXTRATO": {
                "desc": "STATUSEXTRATO",
                "type": "int",
                "selected": false
            },
            "STATUSLIQDUVIDOSA": {
                "desc": "STATUSLIQDUVIDOSA",
                "type": "int",
                "selected": false
            },
            "STATUSNEGATIVACAO": {
                "desc": "STATUSNEGATIVACAO",
                "type": "int",
                "selected": false
            },
            "STATUSORCAMENTO": {
                "desc": "STATUSORCAMENTO",
                "type": "int",
                "selected": false
            },
            "STATUSTERCEIRIZACAO": {
                "desc": "STATUSTERCEIRIZACAO",
                "type": "int",
                "selected": false
            },
            "TAXASVENDOR": {
                "desc": "TAXASVENDOR",
                "type": "numeric",
                "selected": false
            },
            "TEMCHEQUEPARCIAL": {
                "desc": "TEMCHEQUEPARCIAL",
                "type": "int",
                "selected": false
            },
            "TIPOCONTABILLAN": {
                "desc": "TIPOCONTABILLAN",
                "type": "int",
                "selected": false
            },
            "TIPOJUROSDIA": {
                "desc": "TIPOJUROSDIA",
                "type": "int",
                "selected": false
            },
            "TIPOLCDPR": {
                "desc": "TIPOLCDPR",
                "type": "int",
                "selected": false
            },
            "TIPOSAC": {
                "desc": "TIPOSAC",
                "type": "varchar",
                "selected": false
            },
            "VALORACRESCIMOACORDO": {
                "desc": "VALORACRESCIMOACORDO",
                "type": "numeric",
                "selected": false
            },
            "VALORADIANTAMENTO": {
                "desc": "VALORADIANTAMENTO",
                "type": "numeric",
                "selected": false
            },
            "VALORADIANTAMENTOBX": {
                "desc": "VALORADIANTAMENTOBX",
                "type": "numeric",
                "selected": false
            },
            "VALORAUXILIAR": {
                "desc": "VALORAUXILIAR",
                "type": "numeric",
                "selected": false
            },
            "VALORBASEIRRF": {
                "desc": "VALORBASEIRRF",
                "type": "numeric",
                "selected": false
            },
            "VALORCAP": {
                "desc": "VALORCAP",
                "type": "numeric",
                "selected": false
            },
            "VALORCAPBX": {
                "desc": "VALORCAPBX",
                "type": "numeric",
                "selected": false
            },
            "VALORCHEQUE": {
                "desc": "VALORCHEQUE",
                "type": "numeric",
                "selected": false
            },
            "VALORDEDUCAO": {
                "desc": "VALORDEDUCAO",
                "type": "numeric",
                "selected": false
            },
            "VALORDEDUCAODEPENDENTES": {
                "desc": "VALORDEDUCAODEPENDENTES",
                "type": "numeric",
                "selected": false
            },
            "VALORDEDUCAOVARIAVEL": {
                "desc": "VALORDEDUCAOVARIAVEL",
                "type": "numeric",
                "selected": false
            },
            "VALORDESCONTOACORDO": {
                "desc": "VALORDESCONTOACORDO",
                "type": "numeric",
                "selected": false
            },
            "VALORDESCONTOBX": {
                "desc": "VALORDESCONTOBX",
                "type": "numeric",
                "selected": false
            },
            "VALORDESCONTODUPLICATA": {
                "desc": "VALORDESCONTODUPLICATA",
                "type": "numeric",
                "selected": false
            },
            "VALORDESCONTOPONTUALBX": {
                "desc": "VALORDESCONTOPONTUALBX",
                "type": "numeric",
                "selected": false
            },
            "VALORDEVOLUCAO": {
                "desc": "VALORDEVOLUCAO",
                "type": "numeric",
                "selected": false
            },
            "VALORDEVOLUCAOBX": {
                "desc": "VALORDEVOLUCAOBX",
                "type": "numeric",
                "selected": false
            },
            "VALORINSS": {
                "desc": "VALORINSS",
                "type": "numeric",
                "selected": false
            },
            "VALORINSSBX": {
                "desc": "VALORINSSBX",
                "type": "numeric",
                "selected": false
            },
            "VALORIRRF": {
                "desc": "VALORIRRF",
                "type": "numeric",
                "selected": false
            },
            "VALORIRRFBX": {
                "desc": "VALORIRRFBX",
                "type": "numeric",
                "selected": false
            },
            "VALORJUROS": {
                "desc": "VALORJUROS",
                "type": "numeric",
                "selected": false
            },
            "VALORJUROSACORDO": {
                "desc": "VALORJUROSACORDO",
                "type": "numeric",
                "selected": false
            },
            "VALORJUROSBX": {
                "desc": "VALORJUROSBX",
                "type": "numeric",
                "selected": false
            },
            "VALORJUROSVENDORBX": {
                "desc": "VALORJUROSVENDORBX",
                "type": "numeric",
                "selected": false
            },
            "VALORMULTA": {
                "desc": "VALORMULTA",
                "type": "numeric",
                "selected": false
            },
            "VALORMULTABX": {
                "desc": "VALORMULTABX",
                "type": "numeric",
                "selected": false
            },
            "VALORNOTACREDITO": {
                "desc": "VALORNOTACREDITO",
                "type": "numeric",
                "selected": false
            },
            "VALORNOTACREDITOBX": {
                "desc": "VALORNOTACREDITOBX",
                "type": "numeric",
                "selected": false
            },
            "VALOROP1": {
                "desc": "VALOROP1",
                "type": "numeric",
                "selected": false
            },
            "VALOROP1BX": {
                "desc": "VALOROP1BX",
                "type": "numeric",
                "selected": false
            },
            "VALOROP2": {
                "desc": "VALOROP2",
                "type": "numeric",
                "selected": false
            },
            "VALOROP2BX": {
                "desc": "VALOROP2BX",
                "type": "numeric",
                "selected": false
            },
            "VALOROP3": {
                "desc": "VALOROP3",
                "type": "numeric",
                "selected": false
            },
            "VALOROP3BX": {
                "desc": "VALOROP3BX",
                "type": "numeric",
                "selected": false
            },
            "VALOROP4": {
                "desc": "VALOROP4",
                "type": "numeric",
                "selected": false
            },
            "VALOROP4BX": {
                "desc": "VALOROP4BX",
                "type": "numeric",
                "selected": false
            },
            "VALOROP5": {
                "desc": "VALOROP5",
                "type": "numeric",
                "selected": false
            },
            "VALOROP5BX": {
                "desc": "VALOROP5BX",
                "type": "numeric",
                "selected": false
            },
            "VALOROP6": {
                "desc": "VALOROP6",
                "type": "numeric",
                "selected": false
            },
            "VALOROP6BX": {
                "desc": "VALOROP6BX",
                "type": "numeric",
                "selected": false
            },
            "VALOROP7": {
                "desc": "VALOROP7",
                "type": "numeric",
                "selected": false
            },
            "VALOROP7BX": {
                "desc": "VALOROP7BX",
                "type": "numeric",
                "selected": false
            },
            "VALOROP8": {
                "desc": "VALOROP8",
                "type": "numeric",
                "selected": false
            },
            "VALOROP8BX": {
                "desc": "VALOROP8BX",
                "type": "numeric",
                "selected": false
            },
            "VALOROPERACAODESCONTO": {
                "desc": "VALOROPERACAODESCONTO",
                "type": "numeric",
                "selected": false
            },
            "VALORORIGINALBX": {
                "desc": "VALORORIGINALBX",
                "type": "numeric",
                "selected": false
            },
            "VALORPERDAFINANCEIRABX": {
                "desc": "VALORPERDAFINANCEIRABX",
                "type": "numeric",
                "selected": false
            },
            "VALORREPASSE": {
                "desc": "VALORREPASSE",
                "type": "numeric",
                "selected": false
            },
            "VALORRETENCOESBX": {
                "desc": "VALORRETENCOESBX",
                "type": "numeric",
                "selected": false
            },
            "VALORSERVICO": {
                "desc": "VALORSERVICO",
                "type": "numeric",
                "selected": false
            },
            "VALORSESTSENAT": {
                "desc": "VALORSESTSENAT",
                "type": "numeric",
                "selected": false
            },
            "VALORSESTSENATBX": {
                "desc": "VALORSESTSENATBX",
                "type": "numeric",
                "selected": false
            },
            "VALORVENCIMENTOANTECIP": {
                "desc": "VALORVENCIMENTOANTECIP",
                "type": "numeric",
                "selected": false
            },
            "VALORVINCULADO": {
                "desc": "VALORVINCULADO",
                "type": "numeric",
                "selected": false
            },
            "VRBASEINSS": {
                "desc": "VRBASEINSS",
                "type": "numeric",
                "selected": false
            },
            "VRBASEINSSOUTRAEMPRESA": {
                "desc": "VRBASEINSSOUTRAEMPRESA",
                "type": "numeric",
                "selected": false
            },
            "VRBASEIRRF": {
                "desc": "VRBASEIRRF",
                "type": "numeric",
                "selected": false
            },
            "VRDEP": {
                "desc": "VRDEP",
                "type": "numeric",
                "selected": false
            },
            "VRPERDAFINANCEIRA": {
                "desc": "VRPERDAFINANCEIRA",
                "type": "numeric",
                "selected": false
            },
            "COD_PESS_EMPR": {
                "desc": "COD_PESS_EMPR",
                "type": "int",
                "selected": false
            },
            "CODDESPESA": {
                "desc": "CODDESPESA",
                "type": "int",
                "selected": false
            },
            "HISTORICO_ALTERADO_PAULO_VALID": {
                "desc": "HISTORICO_ALTERADO_PAULO_VALIDAR",
                "type": "varchar",
                "selected": false
            },
            "NUM_SUB_UNID": {
                "desc": "NUM_SUB_UNID",
                "type": "varchar",
                "selected": false
            },
            "NUM_UNID": {
                "desc": "NUM_UNID",
                "type": "varchar",
                "selected": false
            },
            "NUMPARCELA": {
                "desc": "NUMPARCELA",
                "type": "int",
                "selected": false
            },
            "SALDOACUMULADO": {
                "desc": "SALDOACUMULADO",
                "type": "varchar",
                "selected": false
            },
            "CODCOLEVENTFIN": {
                "desc": "CODCOLEVENTFIN",
                "type": "int",
                "selected": false
            },
            "CODCONTLOC": {
                "desc": "CODCONTLOC",
                "type": "int",
                "selected": false
            },
            "CODEVENTFIN": {
                "desc": "CODEVENTFIN",
                "type": "int",
                "selected": false
            },
            "NUMPARCEVENTFIN": {
                "desc": "NUMPARCEVENTFIN",
                "type": "int",
                "selected": false
            },
            "TAXAADMCONTLOC": {
                "desc": "TAXAADMCONTLOC",
                "type": "numeric",
                "selected": false
            },
            "VALORJUROSMULTAMORABX": {
                "desc": "VALORJUROSMULTAMORABX",
                "type": "numeric",
                "selected": false
            },
            "DESCRICAO": {
                "desc": "DESCRICAO",
                "type": "varchar",
                "selected": false
            },
            "NOMECLIFOR1": {
                "desc": "NOMECLIFOR1",
                "type": "varchar",
                "selected": false
            },
            "USUARIO_CRIACAO": {
                "desc": "USUARIO_CRIACAO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_ORIGINAL": {
                "desc": "VALOR_ORIGINAL",
                "type": "varchar",
                "selected": false
            },
            "COMP": {
                "desc": "COMP",
                "type": "varchar",
                "selected": false
            },
            "VR_ACUMULADO": {
                "desc": "VR_ACUMULADO",
                "type": "varchar",
                "selected": false
            },
            "VR_COMP": {
                "desc": "VR_COMP",
                "type": "varchar",
                "selected": false
            },
            "ABRIL": {
                "desc": "Abril",
                "type": "varchar",
                "selected": false
            },
            "AGOSTO": {
                "desc": "Agosto",
                "type": "varchar",
                "selected": false
            },
            "DEZEMBRO": {
                "desc": "Dezembro",
                "type": "varchar",
                "selected": false
            },
            "FEVEREIRO": {
                "desc": "Fevereiro",
                "type": "varchar",
                "selected": false
            },
            "JANEIRO": {
                "desc": "Janeiro",
                "type": "varchar",
                "selected": false
            },
            "JULHO": {
                "desc": "Julho",
                "type": "varchar",
                "selected": false
            },
            "JUNHO": {
                "desc": "Junho",
                "type": "varchar",
                "selected": false
            },
            "MAIO": {
                "desc": "Maio",
                "type": "varchar",
                "selected": false
            },
            "MARÇO": {
                "desc": "Março",
                "type": "varchar",
                "selected": false
            },
            "NOVEMBRO": {
                "desc": "Novembro",
                "type": "varchar",
                "selected": false
            },
            "OUTUBRO": {
                "desc": "Outubro",
                "type": "varchar",
                "selected": false
            },
            "SETEMBRO": {
                "desc": "Setembro",
                "type": "varchar",
                "selected": false
            },
            "CURSO": {
                "desc": "CURSO",
                "type": "varchar",
                "selected": false
            },
            "HABILITACAO": {
                "desc": "HABILITACAO",
                "type": "varchar",
                "selected": false
            },
            "NIVEL_ENSINO": {
                "desc": "NIVEL_ENSINO",
                "type": "varchar",
                "selected": false
            },
            "PLETIVO": {
                "desc": "PLETIVO",
                "type": "varchar",
                "selected": false
            },
            "SITUACAO": {
                "desc": "SITUACAO",
                "type": "varchar",
                "selected": false
            },
            "TURNO": {
                "desc": "TURNO",
                "type": "varchar",
                "selected": false
            },
            "ANOVENCIMENTO": {
                "desc": "ANOVENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "DIAVENCIMENTO": {
                "desc": "DIAVENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "MESVENCIMENTO": {
                "desc": "MESVENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "ANOBAIXA": {
                "desc": "ANOBAIXA",
                "type": "varchar",
                "selected": false
            },
            "MESBAIXA": {
                "desc": "MESBAIXA",
                "type": "varchar",
                "selected": false
            },
            "COMPRADOR_PRINCIPAL": {
                "desc": "COMPRADOR_PRINCIPAL",
                "type": "varchar",
                "selected": false
            },
            "CPFCNPJ": {
                "desc": "CPFCNPJ",
                "type": "varchar",
                "selected": false
            },
            "JUROSPORMORA": {
                "desc": "JUROSPORMORA",
                "type": "varchar",
                "selected": false
            },
            "MULTAPORMORA": {
                "desc": "MULTAPORMORA",
                "type": "varchar",
                "selected": false
            },
            "QTDPARCELAVINCENDAS": {
                "desc": "QTDPARCELAVINCENDAS",
                "type": "varchar",
                "selected": false
            },
            "SALDODEVEDORPARCELASEMATRASO": {
                "desc": "SALDODEVEDORPARCELASEMATRASO",
                "type": "varchar",
                "selected": false
            },
            "SALDODEVEDORPARCELAVINCENDAS": {
                "desc": "SALDODEVEDORPARCELAVINCENDAS",
                "type": "varchar",
                "selected": false
            },
            "TOTAL INADIMPLENCIA": {
                "desc": "TOTAL INADIMPLENCIA",
                "type": "varchar",
                "selected": false
            },
            "ANOVCTO": {
                "desc": "ANOVCTO",
                "type": "int",
                "selected": false
            },
            "CÓDIGO MOVIMENTO": {
                "desc": "CÓDIGO MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "CÓDIGO PRODUTO": {
                "desc": "CÓDIGO PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "CODTRF": {
                "desc": "CODTRF",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO CENTRO DE CUSTO": {
                "desc": "DESCRICAO CENTRO DE CUSTO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO PRODUTO": {
                "desc": "DESCRICAO PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "DIABAIXA": {
                "desc": "DIABAIXA",
                "type": "int",
                "selected": false
            },
            "DIAVCTO": {
                "desc": "DIAVCTO",
                "type": "int",
                "selected": false
            },
            "IDPRJ": {
                "desc": "IDPRJ",
                "type": "int",
                "selected": false
            },
            "IDTRF": {
                "desc": "IDTRF",
                "type": "int",
                "selected": false
            },
            "MESVCTO": {
                "desc": "MESVCTO",
                "type": "int",
                "selected": false
            },
            "NOME MOVIMENTO": {
                "desc": "NOME MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "PROJETO": {
                "desc": "PROJETO",
                "type": "varchar",
                "selected": false
            },
            "STATUS DA FATURA": {
                "desc": "STATUS DA FATURA",
                "type": "varchar",
                "selected": false
            },
            "PAGREC1": {
                "desc": "PAGREC1",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO FANATASIA": {
                "desc": "DESCRICAO FANATASIA",
                "type": "varchar",
                "selected": false
            },
            "PREÇO UNIT": {
                "desc": "PREÇO UNIT",
                "type": "varchar",
                "selected": false
            },
            "QTDE": {
                "desc": "QTDE",
                "type": "varchar",
                "selected": false
            },
            "VALOR CALC": {
                "desc": "VALOR CALC",
                "type": "varchar",
                "selected": false
            },
            "REF_LANCTO": {
                "desc": "REF_LANCTO",
                "type": "varchar",
                "selected": false
            },
            "STATUS_LANCTO": {
                "desc": "STATUS_LANCTO",
                "type": "varchar",
                "selected": false
            },
            "ABATIMENTOICMS": {
                "desc": "ABATIMENTOICMS",
                "type": "numeric",
                "selected": false
            },
            "ABATIMENTONAOTRIB": {
                "desc": "ABATIMENTONAOTRIB",
                "type": "numeric",
                "selected": false
            },
            "APROPRIADO": {
                "desc": "APROPRIADO",
                "type": "int",
                "selected": false
            },
            "CAMPOLIVRE1": {
                "desc": "CAMPOLIVRE1",
                "type": "varchar",
                "selected": false
            },
            "CAMPOLIVRE2": {
                "desc": "CAMPOLIVRE2",
                "type": "varchar",
                "selected": false
            },
            "CAMPOLIVRE3": {
                "desc": "CAMPOLIVRE3",
                "type": "varchar",
                "selected": false
            },
            "CHAPARESP": {
                "desc": "CHAPARESP",
                "type": "varchar",
                "selected": false
            },
            "CHAVEACESSONFE": {
                "desc": "CHAVEACESSONFE",
                "type": "varchar",
                "selected": false
            },
            "CLASSECONSUMO": {
                "desc": "CLASSECONSUMO",
                "type": "varchar",
                "selected": false
            },
            "CNPJCPFADQUIRENTE": {
                "desc": "CNPJCPFADQUIRENTE",
                "type": "varchar",
                "selected": false
            },
            "CODAGENDAMENTO": {
                "desc": "CODAGENDAMENTO",
                "type": "int",
                "selected": false
            },
            "CODCCUSTO1": {
                "desc": "CODCCUSTO1",
                "type": "varchar",
                "selected": false
            },
            "CODCCUSTODESTINO": {
                "desc": "CODCCUSTODESTINO",
                "type": "varchar",
                "selected": false
            },
            "CODCFO1": {
                "desc": "CODCFO1",
                "type": "varchar",
                "selected": false
            },
            "CODCFOAUX": {
                "desc": "CODCFOAUX",
                "type": "varchar",
                "selected": false
            },
            "CODCFONATUREZA": {
                "desc": "CODCFONATUREZA",
                "type": "varchar",
                "selected": false
            },
            "CODCFOORIGEM1": {
                "desc": "CODCFOORIGEM1",
                "type": "varchar",
                "selected": false
            },
            "CODCFOTRANSFAT": {
                "desc": "CODCFOTRANSFAT",
                "type": "varchar",
                "selected": false
            },
            "CODCOLCFO1": {
                "desc": "CODCOLCFO1",
                "type": "int",
                "selected": false
            },
            "CODCOLCFOAUX": {
                "desc": "CODCOLCFOAUX",
                "type": "int",
                "selected": false
            },
            "CODCOLCFONATUREZA": {
                "desc": "CODCOLCFONATUREZA",
                "type": "int",
                "selected": false
            },
            "CODCOLCFOORIGEM1": {
                "desc": "CODCOLCFOORIGEM1",
                "type": "int",
                "selected": false
            },
            "CODCOLCFOTRANSFAT": {
                "desc": "CODCOLCFOTRANSFAT",
                "type": "int",
                "selected": false
            },
            "CODCOLCXA1": {
                "desc": "CODCOLCXA1",
                "type": "int",
                "selected": false
            },
            "CODCOLIGADA1": {
                "desc": "CODCOLIGADA1",
                "type": "int",
                "selected": false
            },
            "CODCOLINTERMEDIADOR": {
                "desc": "CODCOLINTERMEDIADOR",
                "type": "int",
                "selected": false
            },
            "CODCPG": {
                "desc": "CODCPG",
                "type": "varchar",
                "selected": false
            },
            "CODCXA1": {
                "desc": "CODCXA1",
                "type": "varchar",
                "selected": false
            },
            "CODDEPARTAMENTO1": {
                "desc": "CODDEPARTAMENTO1",
                "type": "varchar",
                "selected": false
            },
            "CODDEPTODESTINO": {
                "desc": "CODDEPTODESTINO",
                "type": "varchar",
                "selected": false
            },
            "CODDIARIO1": {
                "desc": "CODDIARIO1",
                "type": "varchar",
                "selected": false
            },
            "CODENTREGA": {
                "desc": "CODENTREGA",
                "type": "varchar",
                "selected": false
            },
            "CODETDMUNSERV": {
                "desc": "CODETDMUNSERV",
                "type": "varchar",
                "selected": false
            },
            "CODETDPLACA": {
                "desc": "CODETDPLACA",
                "type": "varchar",
                "selected": false
            },
            "CODEVENTO1": {
                "desc": "CODEVENTO1",
                "type": "int",
                "selected": false
            },
            "CODFAIXAENTREGA": {
                "desc": "CODFAIXAENTREGA",
                "type": "varchar",
                "selected": false
            },
            "CODFILIAL1": {
                "desc": "CODFILIAL1",
                "type": "int",
                "selected": false
            },
            "CODFILIALDESTINO": {
                "desc": "CODFILIALDESTINO",
                "type": "int",
                "selected": false
            },
            "CODFILIALENTREGA": {
                "desc": "CODFILIALENTREGA",
                "type": "int",
                "selected": false
            },
            "CODFILIALSCP": {
                "desc": "CODFILIALSCP",
                "type": "int",
                "selected": false
            },
            "CODIGOIRRF": {
                "desc": "CODIGOIRRF",
                "type": "varchar",
                "selected": false
            },
            "CODIGOSERVICO": {
                "desc": "CODIGOSERVICO",
                "type": "varchar",
                "selected": false
            },
            "CODLAF": {
                "desc": "CODLAF",
                "type": "varchar",
                "selected": false
            },
            "CODLAFE": {
                "desc": "CODLAFE",
                "type": "varchar",
                "selected": false
            },
            "CODLOC": {
                "desc": "CODLOC",
                "type": "varchar",
                "selected": false
            },
            "CODLOCDESTINO": {
                "desc": "CODLOCDESTINO",
                "type": "varchar",
                "selected": false
            },
            "CODLOCENTREGA": {
                "desc": "CODLOCENTREGA",
                "type": "varchar",
                "selected": false
            },
            "CODLOCEXP": {
                "desc": "CODLOCEXP",
                "type": "varchar",
                "selected": false
            },
            "CODMEN": {
                "desc": "CODMEN",
                "type": "varchar",
                "selected": false
            },
            "CODMEN2": {
                "desc": "CODMEN2",
                "type": "varchar",
                "selected": false
            },
            "CODMENDESCONTO": {
                "desc": "CODMENDESCONTO",
                "type": "varchar",
                "selected": false
            },
            "CODMENDESPESA": {
                "desc": "CODMENDESPESA",
                "type": "varchar",
                "selected": false
            },
            "CODMENFRETE": {
                "desc": "CODMENFRETE",
                "type": "varchar",
                "selected": false
            },
            "CODMOELANCAMENTO": {
                "desc": "CODMOELANCAMENTO",
                "type": "varchar",
                "selected": false
            },
            "CODMOEVALORLIQUIDO": {
                "desc": "CODMOEVALORLIQUIDO",
                "type": "varchar",
                "selected": false
            },
            "CODMUNOPER": {
                "desc": "CODMUNOPER",
                "type": "varchar",
                "selected": false
            },
            "CODMUNSERVICO": {
                "desc": "CODMUNSERVICO",
                "type": "varchar",
                "selected": false
            },
            "CODRPR1": {
                "desc": "CODRPR1",
                "type": "varchar",
                "selected": false
            },
            "CODTB1FAT": {
                "desc": "CODTB1FAT",
                "type": "varchar",
                "selected": false
            },
            "CODTB1FLX1": {
                "desc": "CODTB1FLX1",
                "type": "varchar",
                "selected": false
            },
            "CODTB2FAT": {
                "desc": "CODTB2FAT",
                "type": "varchar",
                "selected": false
            },
            "CODTB2FLX1": {
                "desc": "CODTB2FLX1",
                "type": "varchar",
                "selected": false
            },
            "CODTB3FAT": {
                "desc": "CODTB3FAT",
                "type": "varchar",
                "selected": false
            },
            "CODTB3FLX1": {
                "desc": "CODTB3FLX1",
                "type": "varchar",
                "selected": false
            },
            "CODTB4FAT": {
                "desc": "CODTB4FAT",
                "type": "varchar",
                "selected": false
            },
            "CODTB4FLX1": {
                "desc": "CODTB4FLX1",
                "type": "varchar",
                "selected": false
            },
            "CODTB5FAT": {
                "desc": "CODTB5FAT",
                "type": "varchar",
                "selected": false
            },
            "CODTB5FLX1": {
                "desc": "CODTB5FLX1",
                "type": "varchar",
                "selected": false
            },
            "CODTDO1": {
                "desc": "CODTDO1",
                "type": "varchar",
                "selected": false
            },
            "CODTMV": {
                "desc": "CODTMV",
                "type": "varchar",
                "selected": false
            },
            "CODTRA": {
                "desc": "CODTRA",
                "type": "varchar",
                "selected": false
            },
            "CODTRA2": {
                "desc": "CODTRA2",
                "type": "varchar",
                "selected": false
            },
            "CODUFOPER": {
                "desc": "CODUFOPER",
                "type": "varchar",
                "selected": false
            },
            "CODUSUARIO": {
                "desc": "CODUSUARIO",
                "type": "varchar",
                "selected": false
            },
            "CODUSUARIOAPROVADESC": {
                "desc": "CODUSUARIOAPROVADESC",
                "type": "varchar",
                "selected": false
            },
            "CODVEN1": {
                "desc": "CODVEN1",
                "type": "varchar",
                "selected": false
            },
            "CODVEN2": {
                "desc": "CODVEN2",
                "type": "varchar",
                "selected": false
            },
            "CODVEN3": {
                "desc": "CODVEN3",
                "type": "varchar",
                "selected": false
            },
            "CODVEN4": {
                "desc": "CODVEN4",
                "type": "varchar",
                "selected": false
            },
            "CODVIATRANSPORTE": {
                "desc": "CODVIATRANSPORTE",
                "type": "varchar",
                "selected": false
            },
            "COMISSAOREPRES": {
                "desc": "COMISSAOREPRES",
                "type": "numeric",
                "selected": false
            },
            "CONTABILIZADOPORTOTAL": {
                "desc": "CONTABILIZADOPORTOTAL",
                "type": "int",
                "selected": false
            },
            "CONTORCAMENTOANTIGO": {
                "desc": "CONTORCAMENTOANTIGO",
                "type": "int",
                "selected": false
            },
            "CRO": {
                "desc": "CRO",
                "type": "int",
                "selected": false
            },
            "DATABASEMOV": {
                "desc": "DATABASEMOV",
                "type": "datetime",
                "selected": false
            },
            "DATACANCELAMENTOMOV": {
                "desc": "DATACANCELAMENTOMOV",
                "type": "datetime",
                "selected": false
            },
            "DATACONTABILIZACAO": {
                "desc": "DATACONTABILIZACAO",
                "type": "datetime",
                "selected": false
            },
            "DATACRIACAO1": {
                "desc": "DATACRIACAO1",
                "type": "datetime",
                "selected": false
            },
            "DATADEDUCAO": {
                "desc": "DATADEDUCAO",
                "type": "datetime",
                "selected": false
            },
            "DATAEMISSAO1": {
                "desc": "DATAEMISSAO1",
                "type": "datetime",
                "selected": false
            },
            "DATAENTREGA": {
                "desc": "DATAENTREGA",
                "type": "datetime",
                "selected": false
            },
            "DATAEXTRA1": {
                "desc": "DATAEXTRA1",
                "type": "datetime",
                "selected": false
            },
            "DATAEXTRA2": {
                "desc": "DATAEXTRA2",
                "type": "datetime",
                "selected": false
            },
            "DATAFECHAMENTO": {
                "desc": "DATAFECHAMENTO",
                "type": "datetime",
                "selected": false
            },
            "DATALANCAMENTO": {
                "desc": "DATALANCAMENTO",
                "type": "datetime",
                "selected": false
            },
            "DATAMOVIMENTO": {
                "desc": "DATAMOVIMENTO",
                "type": "datetime",
                "selected": false
            },
            "DATAPROCESSAMENTO": {
                "desc": "DATAPROCESSAMENTO",
                "type": "datetime",
                "selected": false
            },
            "DATAPROGRAMACAO": {
                "desc": "DATAPROGRAMACAO",
                "type": "datetime",
                "selected": false
            },
            "DATAPROGRAMACAOANT": {
                "desc": "DATAPROGRAMACAOANT",
                "type": "datetime",
                "selected": false
            },
            "DATARETORNO": {
                "desc": "DATARETORNO",
                "type": "datetime",
                "selected": false
            },
            "DATASAIDA": {
                "desc": "DATASAIDA",
                "type": "datetime",
                "selected": false
            },
            "DEDUCAOIRRF": {
                "desc": "DEDUCAOIRRF",
                "type": "numeric",
                "selected": false
            },
            "DESCONSIDERARSNMOV": {
                "desc": "DESCONSIDERARSNMOV",
                "type": "int",
                "selected": false
            },
            "DISTANCIA": {
                "desc": "DISTANCIA",
                "type": "int",
                "selected": false
            },
            "DOCESTRANGEIROADQUIRENTE": {
                "desc": "DOCESTRANGEIROADQUIRENTE",
                "type": "varchar",
                "selected": false
            },
            "DOCIMPRESSO": {
                "desc": "DOCIMPRESSO",
                "type": "int",
                "selected": false
            },
            "DTHENTREGA": {
                "desc": "DTHENTREGA",
                "type": "datetime",
                "selected": false
            },
            "EMITEBOLETA": {
                "desc": "EMITEBOLETA",
                "type": "varchar",
                "selected": false
            },
            "ESPECIE": {
                "desc": "ESPECIE",
                "type": "varchar",
                "selected": false
            },
            "EXTENPORANEO": {
                "desc": "EXTENPORANEO",
                "type": "int",
                "selected": false
            },
            "FASE": {
                "desc": "FASE",
                "type": "varchar",
                "selected": false
            },
            "FATIMPRESSA": {
                "desc": "FATIMPRESSA",
                "type": "int",
                "selected": false
            },
            "FLAGAGRUPADOFLUXUS": {
                "desc": "FLAGAGRUPADOFLUXUS",
                "type": "int",
                "selected": false
            },
            "FLAGCONCLUSAO": {
                "desc": "FLAGCONCLUSAO",
                "type": "int",
                "selected": false
            },
            "FLAGEFEITOSALDO": {
                "desc": "FLAGEFEITOSALDO",
                "type": "int",
                "selected": false
            },
            "FLAGEXPORFAZENDA": {
                "desc": "FLAGEXPORFAZENDA",
                "type": "int",
                "selected": false
            },
            "FLAGEXPORFISC": {
                "desc": "FLAGEXPORFISC",
                "type": "int",
                "selected": false
            },
            "FLAGEXPORTACAO": {
                "desc": "FLAGEXPORTACAO",
                "type": "int",
                "selected": false
            },
            "FLAGIMPRESSAOFAT": {
                "desc": "FLAGIMPRESSAOFAT",
                "type": "varchar",
                "selected": false
            },
            "FLAGPROCESSADO": {
                "desc": "FLAGPROCESSADO",
                "type": "int",
                "selected": false
            },
            "FORMACALCULO": {
                "desc": "FORMACALCULO",
                "type": "varchar",
                "selected": false
            },
            "FRETECIFOUFOB": {
                "desc": "FRETECIFOUFOB",
                "type": "int",
                "selected": false
            },
            "GERADOPORCONTATRABALHO": {
                "desc": "GERADOPORCONTATRABALHO",
                "type": "int",
                "selected": false
            },
            "GERADOPORLOTE": {
                "desc": "GERADOPORLOTE",
                "type": "int",
                "selected": false
            },
            "GEROUCONTATRABALHO": {
                "desc": "GEROUCONTATRABALHO",
                "type": "int",
                "selected": false
            },
            "GEROUFATURA": {
                "desc": "GEROUFATURA",
                "type": "int",
                "selected": false
            },
            "GRUPOTENSAO": {
                "desc": "GRUPOTENSAO",
                "type": "varchar",
                "selected": false
            },
            "HORARIOEMISSAO": {
                "desc": "HORARIOEMISSAO",
                "type": "datetime",
                "selected": false
            },
            "HORASAIDA": {
                "desc": "HORASAIDA",
                "type": "datetime",
                "selected": false
            },
            "HORULTIMAALTERACAO": {
                "desc": "HORULTIMAALTERACAO",
                "type": "datetime",
                "selected": false
            },
            "IDAIDF": {
                "desc": "IDAIDF",
                "type": "int",
                "selected": false
            },
            "IDCEICFO": {
                "desc": "IDCEICFO",
                "type": "int",
                "selected": false
            },
            "IDCLASSMOV": {
                "desc": "IDCLASSMOV",
                "type": "int",
                "selected": false
            },
            "IDCONTATOCOBRANCA": {
                "desc": "IDCONTATOCOBRANCA",
                "type": "int",
                "selected": false
            },
            "IDCONTATOENTREGA": {
                "desc": "IDCONTATOENTREGA",
                "type": "int",
                "selected": false
            },
            "IDINTEGRACAO": {
                "desc": "IDINTEGRACAO",
                "type": "varchar",
                "selected": false
            },
            "IDINTERMEDIADOR": {
                "desc": "IDINTERMEDIADOR",
                "type": "int",
                "selected": false
            },
            "IDLOT": {
                "desc": "IDLOT",
                "type": "int",
                "selected": false
            },
            "IDLOTEPROCESSO": {
                "desc": "IDLOTEPROCESSO",
                "type": "int",
                "selected": false
            },
            "IDLOTEPROCESSOREFAT": {
                "desc": "IDLOTEPROCESSOREFAT",
                "type": "int",
                "selected": false
            },
            "IDMOV1": {
                "desc": "IDMOV1",
                "type": "int",
                "selected": false
            },
            "IDMOVCFO": {
                "desc": "IDMOVCFO",
                "type": "int",
                "selected": false
            },
            "IDMOVCTRC": {
                "desc": "IDMOVCTRC",
                "type": "int",
                "selected": false
            },
            "IDMOVLCTFLUXUS": {
                "desc": "IDMOVLCTFLUXUS",
                "type": "int",
                "selected": false
            },
            "IDMOVOSMNT": {
                "desc": "IDMOVOSMNT",
                "type": "int",
                "selected": false
            },
            "IDMOVPEDDESDOBRADO": {
                "desc": "IDMOVPEDDESDOBRADO",
                "type": "int",
                "selected": false
            },
            "IDMOVRELAC": {
                "desc": "IDMOVRELAC",
                "type": "int",
                "selected": false
            },
            "IDNAT": {
                "desc": "IDNAT",
                "type": "int",
                "selected": false
            },
            "IDNAT2": {
                "desc": "IDNAT2",
                "type": "int",
                "selected": false
            },
            "IDNATFRETE": {
                "desc": "IDNATFRETE",
                "type": "int",
                "selected": false
            },
            "IDNATRENDIMENTO": {
                "desc": "IDNATRENDIMENTO",
                "type": "int",
                "selected": false
            },
            "IDOBJOF": {
                "desc": "IDOBJOF",
                "type": "varchar",
                "selected": false
            },
            "IDOPERACAO1": {
                "desc": "IDOPERACAO1",
                "type": "int",
                "selected": false
            },
            "IDREDUCAOZ": {
                "desc": "IDREDUCAOZ",
                "type": "int",
                "selected": false
            },
            "IDSALDOESTOQUE": {
                "desc": "IDSALDOESTOQUE",
                "type": "int",
                "selected": false
            },
            "IDTSS": {
                "desc": "IDTSS",
                "type": "varchar",
                "selected": false
            },
            "INDUSOOBJ": {
                "desc": "INDUSOOBJ",
                "type": "numeric",
                "selected": false
            },
            "INSSEMOUTRAEMPRESA1": {
                "desc": "INSSEMOUTRAEMPRESA1",
                "type": "numeric",
                "selected": false
            },
            "INTEGRAAPLICACAO": {
                "desc": "INTEGRAAPLICACAO",
                "type": "varchar",
                "selected": false
            },
            "INTEGRADOAUTOMACAO": {
                "desc": "INTEGRADOAUTOMACAO",
                "type": "int",
                "selected": false
            },
            "INTEGRADOBONUM": {
                "desc": "INTEGRADOBONUM",
                "type": "int",
                "selected": false
            },
            "ITENSAGRUPADOS": {
                "desc": "ITENSAGRUPADOS",
                "type": "int",
                "selected": false
            },
            "JUSTIFICATIVASUBSTITUICAO": {
                "desc": "JUSTIFICATIVASUBSTITUICAO",
                "type": "varchar",
                "selected": false
            },
            "MARCA": {
                "desc": "MARCA",
                "type": "varchar",
                "selected": false
            },
            "MOTIVOSUBSTITUICAO": {
                "desc": "MOTIVOSUBSTITUICAO",
                "type": "varchar",
                "selected": false
            },
            "MOVIMPRESSO": {
                "desc": "MOVIMPRESSO",
                "type": "int",
                "selected": false
            },
            "NAONUMERADO": {
                "desc": "NAONUMERADO",
                "type": "varchar",
                "selected": false
            },
            "NATUREZAVOLUMES": {
                "desc": "NATUREZAVOLUMES",
                "type": "varchar",
                "selected": false
            },
            "NOMEADQUIRENTE": {
                "desc": "NOMEADQUIRENTE",
                "type": "varchar",
                "selected": false
            },
            "NORDEM": {
                "desc": "NORDEM",
                "type": "varchar",
                "selected": false
            },
            "NSEQDATAFECHAMENTO": {
                "desc": "NSEQDATAFECHAMENTO",
                "type": "int",
                "selected": false
            },
            "NUMERO": {
                "desc": "NUMERO",
                "type": "varchar",
                "selected": false
            },
            "NUMEROCAIXA": {
                "desc": "NUMEROCAIXA",
                "type": "int",
                "selected": false
            },
            "NUMEROCUPOM": {
                "desc": "NUMEROCUPOM",
                "type": "int",
                "selected": false
            },
            "NUMEROLCTABERTO": {
                "desc": "NUMEROLCTABERTO",
                "type": "int",
                "selected": false
            },
            "NUMEROLCTGERADO": {
                "desc": "NUMEROLCTGERADO",
                "type": "int",
                "selected": false
            },
            "NUMEROMOV": {
                "desc": "NUMEROMOV",
                "type": "varchar",
                "selected": false
            },
            "NUMEROMOV_VEXPENSES": {
                "desc": "NUMEROMOV_VEXPENSES",
                "type": "varchar",
                "selected": false
            },
            "NUMERORECIBO": {
                "desc": "NUMERORECIBO",
                "type": "varchar",
                "selected": false
            },
            "NUMEROTRIBUTOS": {
                "desc": "NUMEROTRIBUTOS",
                "type": "int",
                "selected": false
            },
            "OBSERVACAO": {
                "desc": "OBSERVACAO",
                "type": "varchar",
                "selected": false
            },
            "OCAUTONOMO1": {
                "desc": "OCAUTONOMO1",
                "type": "int",
                "selected": false
            },
            "PERCBASEINSSEMPREGADO1": {
                "desc": "PERCBASEINSSEMPREGADO1",
                "type": "numeric",
                "selected": false
            },
            "PERCCOMISSAO": {
                "desc": "PERCCOMISSAO",
                "type": "numeric",
                "selected": false
            },
            "PERCCOMISSAOVEN2": {
                "desc": "PERCCOMISSAOVEN2",
                "type": "numeric",
                "selected": false
            },
            "PERCCOMISSAOVEN3": {
                "desc": "PERCCOMISSAOVEN3",
                "type": "numeric",
                "selected": false
            },
            "PERCCOMISSAOVEN4": {
                "desc": "PERCCOMISSAOVEN4",
                "type": "numeric",
                "selected": false
            },
            "PERCENTBASEINSS1": {
                "desc": "PERCENTBASEINSS1",
                "type": "numeric",
                "selected": false
            },
            "PERCENTUALDESC": {
                "desc": "PERCENTUALDESC",
                "type": "numeric",
                "selected": false
            },
            "PERCENTUALDESP": {
                "desc": "PERCENTUALDESP",
                "type": "numeric",
                "selected": false
            },
            "PERCENTUALEXTRA1": {
                "desc": "PERCENTUALEXTRA1",
                "type": "numeric",
                "selected": false
            },
            "PERCENTUALEXTRA2": {
                "desc": "PERCENTUALEXTRA2",
                "type": "numeric",
                "selected": false
            },
            "PERCENTUALFRETE": {
                "desc": "PERCENTUALFRETE",
                "type": "numeric",
                "selected": false
            },
            "PERCENTUALSEGURO": {
                "desc": "PERCENTUALSEGURO",
                "type": "numeric",
                "selected": false
            },
            "PESOBRUTO": {
                "desc": "PESOBRUTO",
                "type": "numeric",
                "selected": false
            },
            "PESOLIQUIDO": {
                "desc": "PESOLIQUIDO",
                "type": "numeric",
                "selected": false
            },
            "PLACA": {
                "desc": "PLACA",
                "type": "varchar",
                "selected": false
            },
            "PONTOVENDA": {
                "desc": "PONTOVENDA",
                "type": "varchar",
                "selected": false
            },
            "PRAZOENTREGA": {
                "desc": "PRAZOENTREGA",
                "type": "int",
                "selected": false
            },
            "PRODPREDOMINANTE": {
                "desc": "PRODPREDOMINANTE",
                "type": "varchar",
                "selected": false
            },
            "PROTOCOLOAUTNFE": {
                "desc": "PROTOCOLOAUTNFE",
                "type": "varchar",
                "selected": false
            },
            "RATEIOCCUSTODEPTO": {
                "desc": "RATEIOCCUSTODEPTO",
                "type": "numeric",
                "selected": false
            },
            "RECCREATEDBY1": {
                "desc": "RECCREATEDBY1",
                "type": "varchar",
                "selected": false
            },
            "RECCREATEDON1": {
                "desc": "RECCREATEDON1",
                "type": "datetime",
                "selected": false
            },
            "RECIBONFENUMERO": {
                "desc": "RECIBONFENUMERO",
                "type": "varchar",
                "selected": false
            },
            "RECIBONFESERIE": {
                "desc": "RECIBONFESERIE",
                "type": "varchar",
                "selected": false
            },
            "RECIBONFESITUACAO": {
                "desc": "RECIBONFESITUACAO",
                "type": "int",
                "selected": false
            },
            "RECIBONFESTATUS": {
                "desc": "RECIBONFESTATUS",
                "type": "varchar",
                "selected": false
            },
            "RECIBONFETIPO": {
                "desc": "RECIBONFETIPO",
                "type": "int",
                "selected": false
            },
            "RECMODIFIEDBY1": {
                "desc": "RECMODIFIEDBY1",
                "type": "varchar",
                "selected": false
            },
            "RECMODIFIEDON1": {
                "desc": "RECMODIFIEDON1",
                "type": "datetime",
                "selected": false
            },
            "SEGUNDONUMERO1": {
                "desc": "SEGUNDONUMERO1",
                "type": "varchar",
                "selected": false
            },
            "SEQDIARIO1": {
                "desc": "SEQDIARIO1",
                "type": "varchar",
                "selected": false
            },
            "SEQDIARIOESTORNO1": {
                "desc": "SEQDIARIOESTORNO1",
                "type": "varchar",
                "selected": false
            },
            "SEQUENCIALESTOQUE": {
                "desc": "SEQUENCIALESTOQUE",
                "type": "int",
                "selected": false
            },
            "SERIE": {
                "desc": "SERIE",
                "type": "varchar",
                "selected": false
            },
            "STATUS": {
                "desc": "STATUS",
                "type": "varchar",
                "selected": false
            },
            "STATUSANTERIOR": {
                "desc": "STATUSANTERIOR",
                "type": "varchar",
                "selected": false
            },
            "STATUSCHEQUE": {
                "desc": "STATUSCHEQUE",
                "type": "int",
                "selected": false
            },
            "STATUSEXPORTCONT": {
                "desc": "STATUSEXPORTCONT",
                "type": "int",
                "selected": false
            },
            "STATUSLIBERACAO": {
                "desc": "STATUSLIBERACAO",
                "type": "int",
                "selected": false
            },
            "STATUSMOVINCLUSAOCOLAB": {
                "desc": "STATUSMOVINCLUSAOCOLAB",
                "type": "int",
                "selected": false
            },
            "STATUSPARADIGMA": {
                "desc": "STATUSPARADIGMA",
                "type": "varchar",
                "selected": false
            },
            "STATUSSEPARACAO": {
                "desc": "STATUSSEPARACAO",
                "type": "varchar",
                "selected": false
            },
            "STSCOMPRAS": {
                "desc": "STSCOMPRAS",
                "type": "varchar",
                "selected": false
            },
            "STSCONCLUIDO": {
                "desc": "STSCONCLUIDO",
                "type": "varchar",
                "selected": false
            },
            "STSCONTRATO": {
                "desc": "STSCONTRATO",
                "type": "varchar",
                "selected": false
            },
            "STSEMAIL": {
                "desc": "STSEMAIL",
                "type": "int",
                "selected": false
            },
            "SUBSERIE": {
                "desc": "SUBSERIE",
                "type": "varchar",
                "selected": false
            },
            "TIPOASSINANTE": {
                "desc": "TIPOASSINANTE",
                "type": "varchar",
                "selected": false
            },
            "TIPOCONSUMO": {
                "desc": "TIPOCONSUMO",
                "type": "int",
                "selected": false
            },
            "TIPOUTILIZACAO": {
                "desc": "TIPOUTILIZACAO",
                "type": "varchar",
                "selected": false
            },
            "UNCALCULO": {
                "desc": "UNCALCULO",
                "type": "varchar",
                "selected": false
            },
            "USADESPFINANC": {
                "desc": "USADESPFINANC",
                "type": "int",
                "selected": false
            },
            "USARATEIOVALORFIN": {
                "desc": "USARATEIOVALORFIN",
                "type": "int",
                "selected": false
            },
            "USUARIOCRIACAO1": {
                "desc": "USUARIOCRIACAO1",
                "type": "varchar",
                "selected": false
            },
            "VALORADIANTAMENTO1": {
                "desc": "VALORADIANTAMENTO1",
                "type": "numeric",
                "selected": false
            },
            "VALORBRUTO": {
                "desc": "VALORBRUTO",
                "type": "numeric",
                "selected": false
            },
            "VALORBRUTOINTERNO": {
                "desc": "VALORBRUTOINTERNO",
                "type": "numeric",
                "selected": false
            },
            "VALORBRUTOORIG": {
                "desc": "VALORBRUTOORIG",
                "type": "numeric",
                "selected": false
            },
            "VALORCONCLUIDO": {
                "desc": "VALORCONCLUIDO",
                "type": "numeric",
                "selected": false
            },
            "VALORCTRCARATEAR": {
                "desc": "VALORCTRCARATEAR",
                "type": "numeric",
                "selected": false
            },
            "VALORDESC": {
                "desc": "VALORDESC",
                "type": "numeric",
                "selected": false
            },
            "VALORDESCCONDICIONAL": {
                "desc": "VALORDESCCONDICIONAL",
                "type": "numeric",
                "selected": false
            },
            "VALORDESP": {
                "desc": "VALORDESP",
                "type": "numeric",
                "selected": false
            },
            "VALORDESPCONDICIONAL": {
                "desc": "VALORDESPCONDICIONAL",
                "type": "numeric",
                "selected": false
            },
            "VALOREXTRA1": {
                "desc": "VALOREXTRA1",
                "type": "numeric",
                "selected": false
            },
            "VALOREXTRA2": {
                "desc": "VALOREXTRA2",
                "type": "numeric",
                "selected": false
            },
            "VALORFRETE": {
                "desc": "VALORFRETE",
                "type": "numeric",
                "selected": false
            },
            "VALORFRETECTRC": {
                "desc": "VALORFRETECTRC",
                "type": "numeric",
                "selected": false
            },
            "VALORLIQUIDO": {
                "desc": "VALORLIQUIDO",
                "type": "numeric",
                "selected": false
            },
            "VALORLIQUIDOORIG": {
                "desc": "VALORLIQUIDOORIG",
                "type": "numeric",
                "selected": false
            },
            "VALORMERCADORIAS": {
                "desc": "VALORMERCADORIAS",
                "type": "numeric",
                "selected": false
            },
            "VALOROUTROS": {
                "desc": "VALOROUTROS",
                "type": "numeric",
                "selected": false
            },
            "VALOROUTROSORIG": {
                "desc": "VALOROUTROSORIG",
                "type": "numeric",
                "selected": false
            },
            "VALORRATEIOLAN": {
                "desc": "VALORRATEIOLAN",
                "type": "numeric",
                "selected": false
            },
            "VALORRATEIOLANORIG": {
                "desc": "VALORRATEIOLANORIG",
                "type": "numeric",
                "selected": false
            },
            "VALORRECEBIDO": {
                "desc": "VALORRECEBIDO",
                "type": "numeric",
                "selected": false
            },
            "VALORRECEBIDOFATPARC": {
                "desc": "VALORRECEBIDOFATPARC",
                "type": "numeric",
                "selected": false
            },
            "VALORSEGURO": {
                "desc": "VALORSEGURO",
                "type": "numeric",
                "selected": false
            },
            "VALORSERVICO1": {
                "desc": "VALORSERVICO1",
                "type": "numeric",
                "selected": false
            },
            "VIADETRANSPORTE": {
                "desc": "VIADETRANSPORTE",
                "type": "varchar",
                "selected": false
            },
            "VINCULADOESTOQUEFL": {
                "desc": "VINCULADOESTOQUEFL",
                "type": "int",
                "selected": false
            },
            "VLRDESPACHO": {
                "desc": "VLRDESPACHO",
                "type": "numeric",
                "selected": false
            },
            "VLRFRETEOUTROS": {
                "desc": "VLRFRETEOUTROS",
                "type": "numeric",
                "selected": false
            },
            "VLRPEDAGIO": {
                "desc": "VLRPEDAGIO",
                "type": "numeric",
                "selected": false
            },
            "VLRSECCAT": {
                "desc": "VLRSECCAT",
                "type": "numeric",
                "selected": false
            },
            "VOLUMES": {
                "desc": "VOLUMES",
                "type": "varchar",
                "selected": false
            },
            "VRBASEINSSOUTRAEMPRESA1": {
                "desc": "VRBASEINSSOUTRAEMPRESA1",
                "type": "numeric",
                "selected": false
            },
            "FATURA": {
                "desc": "FATURA",
                "type": "varchar",
                "selected": false
            },
            "PRIMEIRO_VENCIMENTO_LANCTO": {
                "desc": "PRIMEIRO_VENCIMENTO_LANCTO",
                "type": "datetime",
                "selected": false
            },
            "REFERENCIA": {
                "desc": "REFERENCIA",
                "type": "varchar",
                "selected": false
            },
            "ADM": {
                "desc": "ADM",
                "type": "varchar",
                "selected": false
            },
            "CENTRO_CUSTO": {
                "desc": "CENTRO_CUSTO",
                "type": "varchar",
                "selected": false
            },
            "CODIGOCONTRATO": {
                "desc": "CODIGOCONTRATO",
                "type": "varchar",
                "selected": false
            },
            "CPFCNPJFAVORECIDO": {
                "desc": "CPFCNPJFAVORECIDO",
                "type": "varchar",
                "selected": false
            },
            "DATACONTRATO": {
                "desc": "DATACONTRATO",
                "type": "datetime",
                "selected": false
            },
            "DATAFIM": {
                "desc": "DATAFIM",
                "type": "datetime",
                "selected": false
            },
            "DATAINICIO": {
                "desc": "DATAINICIO",
                "type": "datetime",
                "selected": false
            },
            "DESCRICAOCONTRATO": {
                "desc": "DESCRICAOCONTRATO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAOFORMAPAGAMENTO": {
                "desc": "DESCRICAOFORMAPAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "DIRETOREXECUTIVO": {
                "desc": "DIRETOREXECUTIVO",
                "type": "varchar",
                "selected": false
            },
            "ENDERECO_IMOVEL": {
                "desc": "ENDERECO_IMOVEL",
                "type": "varchar",
                "selected": false
            },
            "ENGCIVIL": {
                "desc": "ENGCIVIL",
                "type": "varchar",
                "selected": false
            },
            "FAVORECIDO": {
                "desc": "FAVORECIDO",
                "type": "varchar",
                "selected": false
            },
            "HISTORICOMOVIMENTO": {
                "desc": "HISTORICOMOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "LIDERCONTRATO": {
                "desc": "LIDERCONTRATO",
                "type": "varchar",
                "selected": false
            },
            "LIQUIDO_IR": {
                "desc": "LIQUIDO_IR",
                "type": "numeric",
                "selected": false
            },
            "PROPRIETARIO_CPF_CNPJ": {
                "desc": "PROPRIETARIO_CPF_CNPJ",
                "type": "varchar",
                "selected": false
            },
            "PROPRIETARIO_DADOS_BANCARIOS": {
                "desc": "PROPRIETARIO_DADOS_BANCARIOS",
                "type": "varchar",
                "selected": false
            },
            "PROPRIETARIO_ENDERECO": {
                "desc": "PROPRIETARIO_ENDERECO",
                "type": "varchar",
                "selected": false
            },
            "PROPRIETARIO_NOME": {
                "desc": "PROPRIETARIO_NOME",
                "type": "varchar",
                "selected": false
            },
            "REVISAO": {
                "desc": "REVISAO",
                "type": "int",
                "selected": false
            },
            "TIPOFORMAPAGAMENTO": {
                "desc": "TIPOFORMAPAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "ALIQUOTA INSS": {
                "desc": "ALIQUOTA INSS",
                "type": "numeric",
                "selected": false
            },
            "ANO EMISSAO": {
                "desc": "ANO EMISSAO",
                "type": "varchar",
                "selected": false
            },
            "CENTRO CUSTO": {
                "desc": "CENTRO CUSTO",
                "type": "varchar",
                "selected": false
            },
            "CÓD. COL.": {
                "desc": "CÓD. COL.",
                "type": "int",
                "selected": false
            },
            "COFIRF": {
                "desc": "COFIRF",
                "type": "numeric",
                "selected": false
            },
            "CSLLRF": {
                "desc": "CSLLRF",
                "type": "numeric",
                "selected": false
            },
            "DATA BAIXA": {
                "desc": "DATA BAIXA",
                "type": "varchar",
                "selected": false
            },
            "DATA VENCIMENTO": {
                "desc": "DATA VENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "DT EMISSAO NF": {
                "desc": "DT EMISSAO NF",
                "type": "varchar",
                "selected": false
            },
            "ID MOV": {
                "desc": "ID MOV",
                "type": "int",
                "selected": false
            },
            "INSS": {
                "desc": "INSS",
                "type": "numeric",
                "selected": false
            },
            "IRRF": {
                "desc": "IRRF",
                "type": "numeric",
                "selected": false
            },
            "ISSRET": {
                "desc": "ISSRET",
                "type": "numeric",
                "selected": false
            },
            "LINHA": {
                "desc": "LINHA",
                "type": "int",
                "selected": false
            },
            "MES EMISSAO": {
                "desc": "MES EMISSAO",
                "type": "varchar",
                "selected": false
            },
            "Nº NF": {
                "desc": "Nº NF",
                "type": "varchar",
                "selected": false
            },
            "PISRF": {
                "desc": "PISRF",
                "type": "numeric",
                "selected": false
            },
            "STATUS NF": {
                "desc": "STATUS NF",
                "type": "varchar",
                "selected": false
            },
            "TIPO MOV": {
                "desc": "TIPO MOV",
                "type": "varchar",
                "selected": false
            },
            "TOTAL IMPOSTOS NF": {
                "desc": "TOTAL IMPOSTOS NF",
                "type": "numeric",
                "selected": false
            },
            "TOTAL LIQUIDO APOS ABAT": {
                "desc": "TOTAL LIQUIDO APOS ABAT",
                "type": "numeric",
                "selected": false
            },
            "VALOR BAIXADO": {
                "desc": "VALOR BAIXADO",
                "type": "numeric",
                "selected": false
            },
            "VALOR BRUTO NF": {
                "desc": "VALOR BRUTO NF",
                "type": "numeric",
                "selected": false
            },
            "DIA$": {
                "desc": "DIA$",
                "type": "varchar",
                "selected": false
            },
            "CODIGODODESCONTO": {
                "desc": "CODIGODODESCONTO",
                "type": "varchar",
                "selected": false
            },
            "DATADODESCONTO": {
                "desc": "DATADODESCONTO",
                "type": "varchar",
                "selected": false
            },
            "VALORDODESCONTO": {
                "desc": "VALORDODESCONTO",
                "type": "varchar",
                "selected": false
            },
            "NUMMOV$": {
                "desc": "NUMMOV$",
                "type": "varchar",
                "selected": false
            },
            "CAMPOLIVRE": {
                "desc": "CAMPOLIVRE",
                "type": "varchar",
                "selected": false
            },
            "CODTBORCAMENTO": {
                "desc": "CODTBORCAMENTO",
                "type": "varchar",
                "selected": false
            },
            "INATIVO": {
                "desc": "INATIVO",
                "type": "int",
                "selected": false
            },
            "NAOPERMITETRANSF": {
                "desc": "NAOPERMITETRANSF",
                "type": "int",
                "selected": false
            },
            "NATUREZA": {
                "desc": "NATUREZA",
                "type": "int",
                "selected": false
            },
            "SINTETICOANALITICO": {
                "desc": "SINTETICOANALITICO",
                "type": "int",
                "selected": false
            }
        }
    },
    GCOLIGADA: {
        "code": "GCOLIGADA",
        "desc": "Coligadas (Cadastro de Empresas)",
        "priority": 9,
        "joinCondition": "PFUNC.CODCOLIGADA = GCOLIGADA.CODCOLIGADA",
        "fields": {
            "CODCOLIGADA": {
                "desc": "Código da Coligada",
                "type": "smallint",
                "selected": true
            },
            "NOME": {
                "desc": "Razão Social / Nome da Coligada",
                "type": "varchar",
                "selected": true
            },
            "CGC": {
                "desc": "CNPJ da Coligada",
                "type": "varchar",
                "selected": true
            },
            "INATIVO": {
                "desc": "Coligada Inativa (0/1)",
                "type": "smallint",
                "selected": false
            },
            "AGENCIA / CODIGO CEDENTE": {
                "desc": "AGENCIA / CODIGO CEDENTE",
                "type": "varchar",
                "selected": false
            },
            "CEP CIDADE ESTADO PGTO": {
                "desc": "CEP CIDADE ESTADO PGTO",
                "type": "varchar",
                "selected": false
            },
            "EMAIL_COLIGADA": {
                "desc": "EMAIL_COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "ENDERECO_COLIGADA": {
                "desc": "ENDERECO_COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "IDBOLETO": {
                "desc": "IDBOLETO",
                "type": "varchar",
                "selected": false
            },
            "JUROS": {
                "desc": "JUROS",
                "type": "varchar",
                "selected": false
            },
            "MULTA": {
                "desc": "MULTA",
                "type": "varchar",
                "selected": false
            },
            "NOME_COLIGADA": {
                "desc": "NOME_COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "NOSSONUMEROBRADESCO": {
                "desc": "NOSSONUMEROBRADESCO",
                "type": "varchar",
                "selected": false
            },
            "RUA BAIRRO PGTO": {
                "desc": "RUA BAIRRO PGTO",
                "type": "varchar",
                "selected": false
            },
            "TELEFONE_COLIGADA": {
                "desc": "TELEFONE_COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "CLIENTE": {
                "desc": "CLIENTE",
                "type": "varchar",
                "selected": false
            },
            "DATAVENCIMENTO": {
                "desc": "DATAVENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "IDLAN": {
                "desc": "IDLAN",
                "type": "int",
                "selected": false
            },
            "CLIENTE_FORNECEDOR": {
                "desc": "CLIENTE_FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "DOCUMENTO": {
                "desc": "DOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "EMISSAO": {
                "desc": "EMISSAO",
                "type": "varchar",
                "selected": false
            },
            "PAGAR": {
                "desc": "PAGAR",
                "type": "varchar",
                "selected": false
            },
            "RECEBER": {
                "desc": "RECEBER",
                "type": "varchar",
                "selected": false
            },
            "TIPO_DOC": {
                "desc": "TIPO_DOC",
                "type": "varchar",
                "selected": false
            },
            "VENCIMENTO": {
                "desc": "VENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "OBRA": {
                "desc": "OBRA",
                "type": "varchar",
                "selected": false
            },
            "ANO VENDA": {
                "desc": "ANO VENDA",
                "type": "varchar",
                "selected": false
            },
            "CELULAR": {
                "desc": "CELULAR",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_CLIENTE": {
                "desc": "CODIGO_CLIENTE",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_COLIGADA": {
                "desc": "CODIGO_COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "COLIGADA_CLIENTE": {
                "desc": "COLIGADA_CLIENTE",
                "type": "varchar",
                "selected": false
            },
            "COMPRADORATUAL": {
                "desc": "COMPRADORATUAL",
                "type": "varchar",
                "selected": false
            },
            "CPFCNPJCOMPRADORATUAL": {
                "desc": "CPFCNPJCOMPRADORATUAL",
                "type": "varchar",
                "selected": false
            },
            "DATA VENDA": {
                "desc": "DATA VENDA",
                "type": "varchar",
                "selected": false
            },
            "EMAIL": {
                "desc": "EMAIL",
                "type": "varchar",
                "selected": false
            },
            "EMPREENDIMENTO": {
                "desc": "EMPREENDIMENTO",
                "type": "varchar",
                "selected": false
            },
            "LOTE": {
                "desc": "LOTE",
                "type": "varchar",
                "selected": false
            },
            "MES VENDA": {
                "desc": "MES VENDA",
                "type": "varchar",
                "selected": false
            },
            "METRAGEM": {
                "desc": "METRAGEM",
                "type": "varchar",
                "selected": false
            },
            "NUM_VENDA": {
                "desc": "NUM_VENDA",
                "type": "varchar",
                "selected": false
            },
            "OCORREU_CESSAO_TRANSF.": {
                "desc": "OCORREU_CESSAO_TRANSF.",
                "type": "varchar",
                "selected": false
            },
            "PRECO_LOTE": {
                "desc": "PRECO_LOTE",
                "type": "varchar",
                "selected": false
            },
            "QTDPARCELASATRASADAS": {
                "desc": "QTDPARCELASATRASADAS",
                "type": "varchar",
                "selected": false
            },
            "QTDPARCELASEMABERTO": {
                "desc": "QTDPARCELASEMABERTO",
                "type": "varchar",
                "selected": false
            },
            "QTDPARCELASPAGAS": {
                "desc": "QTDPARCELASPAGAS",
                "type": "varchar",
                "selected": false
            },
            "QUADRA": {
                "desc": "QUADRA",
                "type": "varchar",
                "selected": false
            },
            "SALDODEVEDORCOMPARCIAL": {
                "desc": "SALDODEVEDORCOMPARCIAL",
                "type": "varchar",
                "selected": false
            },
            "SITUAÇÃO DA VENDA": {
                "desc": "SITUAÇÃO DA VENDA",
                "type": "varchar",
                "selected": false
            },
            "TABELA_PRECO": {
                "desc": "TABELA_PRECO",
                "type": "varchar",
                "selected": false
            },
            "TELEFONE": {
                "desc": "TELEFONE",
                "type": "varchar",
                "selected": false
            },
            "TOTALPAGO": {
                "desc": "TOTALPAGO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_DISTRATO": {
                "desc": "VALOR_DISTRATO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_LIQUIDO_DISTRATO": {
                "desc": "VALOR_LIQUIDO_DISTRATO",
                "type": "varchar",
                "selected": false
            },
            "VALORVENDA": {
                "desc": "VALORVENDA",
                "type": "varchar",
                "selected": false
            },
            "ANOCOMPENSACAO": {
                "desc": "ANOCOMPENSACAO",
                "type": "varchar",
                "selected": false
            },
            "ANODIGITACAO": {
                "desc": "ANODIGITACAO",
                "type": "varchar",
                "selected": false
            },
            "ANOEMISSAO": {
                "desc": "ANOEMISSAO",
                "type": "varchar",
                "selected": false
            },
            "CC_NV1": {
                "desc": "CC_NV1",
                "type": "varchar",
                "selected": false
            },
            "CC_NV2": {
                "desc": "CC_NV2",
                "type": "varchar",
                "selected": false
            },
            "CC_NV3": {
                "desc": "CC_NV3",
                "type": "varchar",
                "selected": false
            },
            "CLIENTE/FORNECEDOR": {
                "desc": "CLIENTE/FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "COD. COLIGADA": {
                "desc": "COD. COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "COLIGADA": {
                "desc": "COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "CONTA-CAIXA PGTO": {
                "desc": "CONTA-CAIXA PGTO",
                "type": "varchar",
                "selected": false
            },
            "DATACOMPENSACAO": {
                "desc": "DATACOMPENSACAO",
                "type": "varchar",
                "selected": false
            },
            "DATADIGITACAO": {
                "desc": "DATADIGITACAO",
                "type": "varchar",
                "selected": false
            },
            "DATAEMISSAO": {
                "desc": "DATAEMISSAO",
                "type": "varchar",
                "selected": false
            },
            "DIACOMPENSACAO": {
                "desc": "DIACOMPENSACAO",
                "type": "varchar",
                "selected": false
            },
            "DIADIGITACAO": {
                "desc": "DIADIGITACAO",
                "type": "varchar",
                "selected": false
            },
            "DIAEMISSAO": {
                "desc": "DIAEMISSAO",
                "type": "varchar",
                "selected": false
            },
            "FORMAPGTO": {
                "desc": "FORMAPGTO",
                "type": "varchar",
                "selected": false
            },
            "HISTORICO": {
                "desc": "HISTORICO",
                "type": "varchar",
                "selected": false
            },
            "MESCOMPENSACAO": {
                "desc": "MESCOMPENSACAO",
                "type": "varchar",
                "selected": false
            },
            "MESDIGITACAO": {
                "desc": "MESDIGITACAO",
                "type": "varchar",
                "selected": false
            },
            "MESEMISSAO": {
                "desc": "MESEMISSAO",
                "type": "varchar",
                "selected": false
            },
            "NT_NV1": {
                "desc": "NT_NV1",
                "type": "varchar",
                "selected": false
            },
            "NT_NV2": {
                "desc": "NT_NV2",
                "type": "varchar",
                "selected": false
            },
            "NUMERODOCUMENTO": {
                "desc": "NUMERODOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "ORIGEM": {
                "desc": "ORIGEM",
                "type": "varchar",
                "selected": false
            },
            "PAGAR OU RECEBER": {
                "desc": "PAGAR ou RECEBER",
                "type": "varchar",
                "selected": false
            },
            "PERCENTUALRATEIO": {
                "desc": "PERCENTUALRATEIO",
                "type": "varchar",
                "selected": false
            },
            "REFERENCIA_EXTRATO": {
                "desc": "REFERENCIA_EXTRATO",
                "type": "varchar",
                "selected": false
            },
            "REFERENCIA_LANCTO": {
                "desc": "REFERENCIA_LANCTO",
                "type": "varchar",
                "selected": false
            },
            "STATUS BAIXA DO LANÇAMENTO": {
                "desc": "STATUS BAIXA DO LANÇAMENTO",
                "type": "varchar",
                "selected": false
            },
            "STATUS LANÇAMENTO": {
                "desc": "STATUS LANÇAMENTO",
                "type": "varchar",
                "selected": false
            },
            "TIPO DE DOCUMENTO": {
                "desc": "TIPO DE DOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "VALOR": {
                "desc": "VALOR",
                "type": "varchar",
                "selected": false
            },
            "IMAGEM": {
                "desc": "IMAGEM",
                "type": "varchar",
                "selected": false
            },
            "BAIXADO": {
                "desc": "BAIXADO",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_TIPO_DOCUMENTO": {
                "desc": "CODIGO_TIPO_DOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "COLIGADA_NOME": {
                "desc": "COLIGADA_NOME",
                "type": "varchar",
                "selected": false
            },
            "DATA_BAIXA": {
                "desc": "DATA_BAIXA",
                "type": "varchar",
                "selected": false
            },
            "DATACRIACAO": {
                "desc": "DATACRIACAO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO_TIPO_DOCUMENTO": {
                "desc": "DESCRICAO_TIPO_DOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "FILIAL": {
                "desc": "FILIAL",
                "type": "varchar",
                "selected": false
            },
            "FILIAL_NOME": {
                "desc": "FILIAL_NOME",
                "type": "varchar",
                "selected": false
            },
            "PAGAR_OU_RECEBER": {
                "desc": "PAGAR_OU_RECEBER",
                "type": "varchar",
                "selected": false
            },
            "REF_LANCAMENTO": {
                "desc": "REF_LANCAMENTO",
                "type": "varchar",
                "selected": false
            },
            "SALDO": {
                "desc": "SALDO",
                "type": "varchar",
                "selected": false
            },
            "VALORORIGINAL": {
                "desc": "VALORORIGINAL",
                "type": "varchar",
                "selected": false
            },
            "LOGO_COLIGADA": {
                "desc": "LOGO_COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "CENTROCUSTO": {
                "desc": "CENTROCUSTO",
                "type": "varchar",
                "selected": false
            },
            "FORNECEDOR": {
                "desc": "FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "TIPODOCUMENTO": {
                "desc": "TIPODOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "USUARIO": {
                "desc": "USUARIO",
                "type": "varchar",
                "selected": false
            },
            "DATABAIXA": {
                "desc": "DATABAIXA",
                "type": "varchar",
                "selected": false
            },
            "NOMECLIFOR": {
                "desc": "NOMECLIFOR",
                "type": "varchar",
                "selected": false
            },
            "PARTICIPACAO": {
                "desc": "PARTICIPACAO",
                "type": "varchar",
                "selected": false
            },
            "VALORPAGO": {
                "desc": "VALORPAGO",
                "type": "varchar",
                "selected": false
            },
            "BOLETODATAVENCIMENTO": {
                "desc": "BOLETODATAVENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "BOLETOLINHADIGITAVEL": {
                "desc": "BOLETOLINHADIGITAVEL",
                "type": "varchar",
                "selected": false
            },
            "BOLETONOSSONUMERO": {
                "desc": "BOLETONOSSONUMERO",
                "type": "varchar",
                "selected": false
            },
            "BOLETOVALOR": {
                "desc": "BOLETOVALOR",
                "type": "numeric",
                "selected": false
            },
            "CLIENTECELULAR": {
                "desc": "CLIENTECELULAR",
                "type": "varchar",
                "selected": false
            },
            "CLIENTECPFCNPJ": {
                "desc": "CLIENTECPFCNPJ",
                "type": "varchar",
                "selected": false
            },
            "CLIENTEEMAIL": {
                "desc": "CLIENTEEMAIL",
                "type": "varchar",
                "selected": false
            },
            "CLIENTENOME": {
                "desc": "CLIENTENOME",
                "type": "varchar",
                "selected": false
            },
            "EMPRESACNPJ": {
                "desc": "EMPRESACNPJ",
                "type": "varchar",
                "selected": false
            },
            "EMPRESANOME": {
                "desc": "EMPRESANOME",
                "type": "varchar",
                "selected": false
            },
            "CCUSTO": {
                "desc": "CCUSTO",
                "type": "varchar",
                "selected": false
            },
            "CODCCUSTO": {
                "desc": "CODCCUSTO",
                "type": "varchar",
                "selected": false
            },
            "CODCFO": {
                "desc": "CODCFO",
                "type": "varchar",
                "selected": false
            },
            "CODCXA": {
                "desc": "CODCXA",
                "type": "varchar",
                "selected": false
            },
            "CODIGOCOLIGADA": {
                "desc": "CODIGOCOLIGADA",
                "type": "varchar",
                "selected": false
            },
            "CONTACAIXA": {
                "desc": "CONTACAIXA",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO": {
                "desc": "DESCRICAO",
                "type": "varchar",
                "selected": false
            },
            "NOMECLIFOR1": {
                "desc": "NOMECLIFOR1",
                "type": "varchar",
                "selected": false
            },
            "PARCELA": {
                "desc": "PARCELA",
                "type": "varchar",
                "selected": false
            },
            "TIPO_RECEITA_DESPESA": {
                "desc": "TIPO_RECEITA_DESPESA",
                "type": "varchar",
                "selected": false
            },
            "USUARIO_CRIACAO": {
                "desc": "USUARIO_CRIACAO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_ORIGINAL": {
                "desc": "VALOR_ORIGINAL",
                "type": "varchar",
                "selected": false
            },
            "CONVENIO": {
                "desc": "CONVENIO",
                "type": "varchar",
                "selected": false
            },
            "DATA_CRIACAO": {
                "desc": "DATA_CRIACAO",
                "type": "varchar",
                "selected": false
            },
            "DATAEMISSAO_BOLETO": {
                "desc": "DATAEMISSAO_BOLETO",
                "type": "varchar",
                "selected": false
            },
            "DATAVENCIMENTO_BOLETO": {
                "desc": "DATAVENCIMENTO_BOLETO",
                "type": "varchar",
                "selected": false
            },
            "HORARIO_CRIACAO": {
                "desc": "HORARIO_CRIACAO",
                "type": "varchar",
                "selected": false
            },
            "NOSSONUMERO": {
                "desc": "NOSSONUMERO",
                "type": "varchar",
                "selected": false
            },
            "STATUS_BOLETO": {
                "desc": "STATUS_BOLETO",
                "type": "varchar",
                "selected": false
            },
            "STATUS_REMESSA_BOLETO": {
                "desc": "STATUS_REMESSA_BOLETO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_BOLETO": {
                "desc": "VALOR_BOLETO",
                "type": "varchar",
                "selected": false
            },
            "CLASSIFICACAO": {
                "desc": "CLASSIFICACAO",
                "type": "varchar",
                "selected": false
            },
            "COD_PRODUTO": {
                "desc": "COD_PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "CODFILIAL": {
                "desc": "CODFILIAL",
                "type": "varchar",
                "selected": false
            },
            "CODLOC": {
                "desc": "CODLOC",
                "type": "varchar",
                "selected": false
            },
            "CODTMV": {
                "desc": "CODTMV",
                "type": "varchar",
                "selected": false
            },
            "DATAMOVIMENTO": {
                "desc": "DATAMOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "IDMOV": {
                "desc": "IDMOV",
                "type": "varchar",
                "selected": false
            },
            "NOME_CENTRO_CUSTO": {
                "desc": "NOME_CENTRO_CUSTO",
                "type": "varchar",
                "selected": false
            },
            "NOME_FANTASIA_PRODUTO": {
                "desc": "NOME_FANTASIA_PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "NOME_FCFO": {
                "desc": "NOME_FCFO",
                "type": "varchar",
                "selected": false
            },
            "NOME_FILIAL": {
                "desc": "NOME_FILIAL",
                "type": "varchar",
                "selected": false
            },
            "NOME_LOCAL": {
                "desc": "NOME_LOCAL",
                "type": "varchar",
                "selected": false
            },
            "NUMEROSEQUENCIAL": {
                "desc": "NUMEROSEQUENCIAL",
                "type": "varchar",
                "selected": false
            },
            "PRECOUNITARIO": {
                "desc": "PRECOUNITARIO",
                "type": "varchar",
                "selected": false
            },
            "QUANTIDADE": {
                "desc": "QUANTIDADE",
                "type": "varchar",
                "selected": false
            },
            "UN": {
                "desc": "UN",
                "type": "varchar",
                "selected": false
            },
            "VALORLIQUIDO": {
                "desc": "VALORLIQUIDO",
                "type": "varchar",
                "selected": false
            },
            "ANO_VENDA": {
                "desc": "ANO_VENDA",
                "type": "varchar",
                "selected": false
            },
            "COD_EMPR": {
                "desc": "COD_EMPR",
                "type": "varchar",
                "selected": false
            },
            "COMPRADOR": {
                "desc": "COMPRADOR",
                "type": "varchar",
                "selected": false
            },
            "DESC_SUB_UNIDADE": {
                "desc": "DESC_SUB_UNIDADE",
                "type": "varchar",
                "selected": false
            },
            "DIA_VENDA": {
                "desc": "DIA_VENDA",
                "type": "varchar",
                "selected": false
            },
            "DSC_LOCAL": {
                "desc": "DSC_LOCAL",
                "type": "varchar",
                "selected": false
            },
            "DSC_SIT_VENDA": {
                "desc": "DSC_SIT_VENDA",
                "type": "varchar",
                "selected": false
            },
            "DT_VENDA": {
                "desc": "DT_VENDA",
                "type": "varchar",
                "selected": false
            },
            "MES_VENDA": {
                "desc": "MES_VENDA",
                "type": "varchar",
                "selected": false
            },
            "NUM_SUB_UNID": {
                "desc": "NUM_SUB_UNID",
                "type": "varchar",
                "selected": false
            },
            "NUM_UNID": {
                "desc": "NUM_UNID",
                "type": "varchar",
                "selected": false
            },
            "SEMANA_VENDA": {
                "desc": "SEMANA_VENDA",
                "type": "varchar",
                "selected": false
            },
            "VALOR_FINANC": {
                "desc": "VALOR_FINANC",
                "type": "varchar",
                "selected": false
            },
            "VALOR_VENDA": {
                "desc": "VALOR_VENDA",
                "type": "varchar",
                "selected": false
            },
            "ANOVENCIMENTO": {
                "desc": "ANOVENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "DIAVENCIMENTO": {
                "desc": "DIAVENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "MESVENCIMENTO": {
                "desc": "MESVENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "COMPRADOR_PRINCIPAL": {
                "desc": "COMPRADOR_PRINCIPAL",
                "type": "varchar",
                "selected": false
            },
            "CPFCNPJ": {
                "desc": "CPFCNPJ",
                "type": "varchar",
                "selected": false
            },
            "JUROSPORMORA": {
                "desc": "JUROSPORMORA",
                "type": "varchar",
                "selected": false
            },
            "MULTAPORMORA": {
                "desc": "MULTAPORMORA",
                "type": "varchar",
                "selected": false
            },
            "QTDPARCELAVINCENDAS": {
                "desc": "QTDPARCELAVINCENDAS",
                "type": "varchar",
                "selected": false
            },
            "SALDODEVEDORPARCELASEMATRASO": {
                "desc": "SALDODEVEDORPARCELASEMATRASO",
                "type": "varchar",
                "selected": false
            },
            "SALDODEVEDORPARCELAVINCENDAS": {
                "desc": "SALDODEVEDORPARCELAVINCENDAS",
                "type": "varchar",
                "selected": false
            },
            "% MEDIDO": {
                "desc": "% MEDIDO",
                "type": "varchar",
                "selected": false
            },
            "% PLANEJADO": {
                "desc": "% PLANEJADO",
                "type": "varchar",
                "selected": false
            },
            "% REALIZADO": {
                "desc": "% REALIZADO",
                "type": "varchar",
                "selected": false
            },
            "COD. DA COLIGADA": {
                "desc": "COD. DA COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "COD. TAREFA": {
                "desc": "COD. TAREFA",
                "type": "varchar",
                "selected": false
            },
            "GRUPO DE CUSTO": {
                "desc": "GRUPO DE CUSTO",
                "type": "varchar",
                "selected": false
            },
            "GRUPO DNIT": {
                "desc": "GRUPO DNIT",
                "type": "varchar",
                "selected": false
            },
            "INSUMO": {
                "desc": "INSUMO",
                "type": "varchar",
                "selected": false
            },
            "PERÍODO": {
                "desc": "PERÍODO",
                "type": "varchar",
                "selected": false
            },
            "PROJETO": {
                "desc": "PROJETO",
                "type": "varchar",
                "selected": false
            },
            "QUAN. MEDIDA": {
                "desc": "QUAN. MEDIDA",
                "type": "varchar",
                "selected": false
            },
            "QUAN. PLANEJADA": {
                "desc": "QUAN. PLANEJADA",
                "type": "varchar",
                "selected": false
            },
            "QUAN. REALIZADA": {
                "desc": "QUAN. REALIZADA",
                "type": "varchar",
                "selected": false
            },
            "TAREFA": {
                "desc": "TAREFA",
                "type": "varchar",
                "selected": false
            },
            "UND. INSUMO": {
                "desc": "UND. INSUMO",
                "type": "varchar",
                "selected": false
            },
            "UND. TAREFA": {
                "desc": "UND. TAREFA",
                "type": "varchar",
                "selected": false
            },
            "VALOR TOTAL": {
                "desc": "VALOR TOTAL",
                "type": "varchar",
                "selected": false
            },
            "VALOR UNITÁRIO": {
                "desc": "VALOR UNITÁRIO",
                "type": "varchar",
                "selected": false
            },
            "ANOBAIXA": {
                "desc": "ANOBAIXA",
                "type": "int",
                "selected": false
            },
            "ANOVCTO": {
                "desc": "ANOVCTO",
                "type": "int",
                "selected": false
            },
            "CÓDIGO MOVIMENTO": {
                "desc": "CÓDIGO MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "CÓDIGO PRODUTO": {
                "desc": "CÓDIGO PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "CODTRF": {
                "desc": "CODTRF",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO CENTRO DE CUSTO": {
                "desc": "DESCRICAO CENTRO DE CUSTO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO PRODUTO": {
                "desc": "DESCRICAO PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "DIABAIXA": {
                "desc": "DIABAIXA",
                "type": "int",
                "selected": false
            },
            "DIAVCTO": {
                "desc": "DIAVCTO",
                "type": "int",
                "selected": false
            },
            "IDPRJ": {
                "desc": "IDPRJ",
                "type": "int",
                "selected": false
            },
            "IDTRF": {
                "desc": "IDTRF",
                "type": "int",
                "selected": false
            },
            "MESBAIXA": {
                "desc": "MESBAIXA",
                "type": "int",
                "selected": false
            },
            "MESVCTO": {
                "desc": "MESVCTO",
                "type": "int",
                "selected": false
            },
            "NOME MOVIMENTO": {
                "desc": "NOME MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "STATUS DA FATURA": {
                "desc": "STATUS DA FATURA",
                "type": "varchar",
                "selected": false
            },
            "TIPO": {
                "desc": "TIPO",
                "type": "varchar",
                "selected": false
            },
            "CODIGO": {
                "desc": "CODIGO",
                "type": "varchar",
                "selected": false
            },
            "CODPRJ": {
                "desc": "CODPRJ",
                "type": "varchar",
                "selected": false
            },
            "DATAPEDIDO": {
                "desc": "DATAPEDIDO",
                "type": "datetime",
                "selected": false
            },
            "FLIAL": {
                "desc": "FLIAL",
                "type": "varchar",
                "selected": false
            },
            "IDPEDIDO": {
                "desc": "IDPEDIDO",
                "type": "int",
                "selected": false
            },
            "OBSERVACAO": {
                "desc": "OBSERVACAO",
                "type": "varchar",
                "selected": false
            },
            "SOLICITANTE": {
                "desc": "SOLICITANTE",
                "type": "varchar",
                "selected": false
            },
            "ATENDIMENTO": {
                "desc": "ATENDIMENTO",
                "type": "varchar",
                "selected": false
            },
            "CGCCFO": {
                "desc": "CGCCFO",
                "type": "varchar",
                "selected": false
            },
            "CIDADECOLIGADA": {
                "desc": "CIDADECOLIGADA",
                "type": "varchar",
                "selected": false
            },
            "CODATENDIMENTO": {
                "desc": "CODATENDIMENTO",
                "type": "int",
                "selected": false
            },
            "CODLOCAL": {
                "desc": "CODLOCAL",
                "type": "int",
                "selected": false
            },
            "CONDPAGAMENTO": {
                "desc": "CONDPAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "HISTORICOCURTO": {
                "desc": "HISTORICOCURTO",
                "type": "varchar",
                "selected": false
            },
            "HISTORICOLONGO": {
                "desc": "HISTORICOLONGO",
                "type": "varchar",
                "selected": false
            },
            "LOCALESTOQUE": {
                "desc": "LOCALESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "NUMEROMOV": {
                "desc": "NUMEROMOV",
                "type": "varchar",
                "selected": false
            },
            "RUACOLIGADA": {
                "desc": "RUACOLIGADA",
                "type": "varchar",
                "selected": false
            },
            "SERIE": {
                "desc": "SERIE",
                "type": "varchar",
                "selected": false
            },
            "TIPOMOVIMENTO": {
                "desc": "TIPOMOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "USUARIOCRIACAO": {
                "desc": "USUARIOCRIACAO",
                "type": "varchar",
                "selected": false
            },
            "IDPEDIDOEXTRA": {
                "desc": "IDPEDIDOEXTRA",
                "type": "int",
                "selected": false
            },
            "ABERTURA": {
                "desc": "ABERTURA",
                "type": "varchar",
                "selected": false
            },
            "CLIENTE_CELULAR": {
                "desc": "CLIENTE_CELULAR",
                "type": "varchar",
                "selected": false
            },
            "CLIENTE_CPF_CNPJ": {
                "desc": "CLIENTE_CPF_CNPJ",
                "type": "varchar",
                "selected": false
            },
            "CLIENTE_EMAIL": {
                "desc": "CLIENTE_EMAIL",
                "type": "varchar",
                "selected": false
            },
            "CLIENTE_ENDERECO": {
                "desc": "CLIENTE_ENDERECO",
                "type": "varchar",
                "selected": false
            },
            "CLIENTE_TELEFONE": {
                "desc": "CLIENTE_TELEFONE",
                "type": "varchar",
                "selected": false
            },
            "COLIGADA_CNPJ": {
                "desc": "COLIGADA_CNPJ",
                "type": "varchar",
                "selected": false
            },
            "COLIGADA_ENDERECO": {
                "desc": "COLIGADA_ENDERECO",
                "type": "varchar",
                "selected": false
            },
            "DAT_VENDA": {
                "desc": "DAT_VENDA",
                "type": "varchar",
                "selected": false
            },
            "DATAASSINATURA": {
                "desc": "DATAASSINATURA",
                "type": "varchar",
                "selected": false
            },
            "FECHAMENTO": {
                "desc": "FECHAMENTO",
                "type": "varchar",
                "selected": false
            },
            "MODALIDADE_VENDA": {
                "desc": "MODALIDADE_VENDA",
                "type": "varchar",
                "selected": false
            },
            "TIPOCOBERTURA": {
                "desc": "TIPOCOBERTURA",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO FANATASIA": {
                "desc": "DESCRICAO FANATASIA",
                "type": "varchar",
                "selected": false
            },
            "PREÇO UNIT": {
                "desc": "PREÇO UNIT",
                "type": "varchar",
                "selected": false
            },
            "QTDE": {
                "desc": "QTDE",
                "type": "varchar",
                "selected": false
            },
            "VALOR CALC": {
                "desc": "VALOR CALC",
                "type": "varchar",
                "selected": false
            },
            "CHAPA": {
                "desc": "CHAPA",
                "type": "varchar",
                "selected": false
            },
            "COLIGADACNPJ": {
                "desc": "COLIGADACNPJ",
                "type": "varchar",
                "selected": false
            },
            "COLIGADANOME": {
                "desc": "COLIGADANOME",
                "type": "varchar",
                "selected": false
            },
            "DATAADMISSAO": {
                "desc": "DATAADMISSAO",
                "type": "datetime",
                "selected": false
            },
            "DIAS_EXP": {
                "desc": "DIAS_EXP",
                "type": "int",
                "selected": false
            },
            "FILIALCNPJ": {
                "desc": "FILIALCNPJ",
                "type": "varchar",
                "selected": false
            },
            "FILIALNOME": {
                "desc": "FILIALNOME",
                "type": "varchar",
                "selected": false
            },
            "FUNCAO": {
                "desc": "FUNCAO",
                "type": "varchar",
                "selected": false
            },
            "FUNCIONARIONOME": {
                "desc": "FUNCIONARIONOME",
                "type": "varchar",
                "selected": false
            },
            "LOGOCOLIGADA": {
                "desc": "LOGOCOLIGADA",
                "type": "varchar",
                "selected": false
            },
            "SECAO": {
                "desc": "SECAO",
                "type": "varchar",
                "selected": false
            },
            "ASSISTENCIA MEDICA DEPENDENTE": {
                "desc": "ASSISTENCIA MEDICA DEPENDENTE",
                "type": "varchar",
                "selected": false
            },
            "CODSECAO": {
                "desc": "CODSECAO",
                "type": "varchar",
                "selected": false
            },
            "CONTRATACAO": {
                "desc": "CONTRATACAO",
                "type": "varchar",
                "selected": false
            },
            "FUNCIONARIO": {
                "desc": "FUNCIONARIO",
                "type": "varchar",
                "selected": false
            },
            "GRAUPARENTESCO": {
                "desc": "GRAUPARENTESCO",
                "type": "varchar",
                "selected": false
            },
            "IDADE": {
                "desc": "IDADE",
                "type": "varchar",
                "selected": false
            },
            "NOMEDEPENDENTE": {
                "desc": "NOMEDEPENDENTE",
                "type": "varchar",
                "selected": false
            },
            "NRODEPEND": {
                "desc": "NRODEPEND",
                "type": "varchar",
                "selected": false
            },
            "SALARIO": {
                "desc": "SALARIO",
                "type": "varchar",
                "selected": false
            },
            "SECAO/DEPARTAMENTO": {
                "desc": "SECAO/DEPARTAMENTO",
                "type": "varchar",
                "selected": false
            },
            "SEXO": {
                "desc": "SEXO",
                "type": "varchar",
                "selected": false
            },
            "SEXODEPENDENTE": {
                "desc": "SEXODEPENDENTE",
                "type": "varchar",
                "selected": false
            },
            "SITUACAO": {
                "desc": "SITUACAO",
                "type": "varchar",
                "selected": false
            },
            "SALDOESTOQUEVALOR": {
                "desc": "SALDOESTOQUEVALOR",
                "type": "varchar",
                "selected": false
            },
            "CNPJ_INSCRICAO": {
                "desc": "CNPJ_INSCRICAO",
                "type": "varchar",
                "selected": false
            },
            "COLIGADA_COLIGADA": {
                "desc": "COLIGADA_COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "COTACA_CODIGO": {
                "desc": "COTACA_CODIGO",
                "type": "varchar",
                "selected": false
            },
            "COTACAO_DATA": {
                "desc": "COTACAO_DATA",
                "type": "varchar",
                "selected": false
            },
            "FORNECEDOR_CNPJ": {
                "desc": "FORNECEDOR_CNPJ",
                "type": "varchar",
                "selected": false
            },
            "FORNECEDOR_CODIGO": {
                "desc": "FORNECEDOR_CODIGO",
                "type": "varchar",
                "selected": false
            },
            "PRODUTO_CODIGO": {
                "desc": "PRODUTO_CODIGO",
                "type": "varchar",
                "selected": false
            },
            "PRODUTO_MARGEM_NEGOCIADA": {
                "desc": "PRODUTO_MARGEM_NEGOCIADA",
                "type": "varchar",
                "selected": false
            },
            "PRODUTO_NOME": {
                "desc": "PRODUTO_NOME",
                "type": "varchar",
                "selected": false
            },
            "PRODUTO_QUANTIDADE": {
                "desc": "PRODUTO_QUANTIDADE",
                "type": "varchar",
                "selected": false
            },
            "PRODUTO_UNIDADE": {
                "desc": "PRODUTO_UNIDADE",
                "type": "varchar",
                "selected": false
            },
            "PRODUTO_VALOR_COTADO": {
                "desc": "PRODUTO_VALOR_COTADO",
                "type": "varchar",
                "selected": false
            },
            "PRODUTO_VALOR_NEGOCIADO": {
                "desc": "PRODUTO_VALOR_NEGOCIADO",
                "type": "varchar",
                "selected": false
            },
            "TOTAL_MARGEM_NEGOCIADA": {
                "desc": "TOTAL_MARGEM_NEGOCIADA",
                "type": "varchar",
                "selected": false
            },
            "TOTAL_PRODUTO_COTADO": {
                "desc": "TOTAL_PRODUTO_COTADO",
                "type": "varchar",
                "selected": false
            },
            "TOTAL_PRODUTO_NEGOCIADO": {
                "desc": "TOTAL_PRODUTO_NEGOCIADO",
                "type": "varchar",
                "selected": false
            },
            "FORNECEDOR_NOME_CNPJ": {
                "desc": "FORNECEDOR_NOME_CNPJ",
                "type": "varchar",
                "selected": false
            },
            "CNPJ": {
                "desc": "CNPJ",
                "type": "varchar",
                "selected": false
            },
            "ENDERECO": {
                "desc": "ENDERECO",
                "type": "varchar",
                "selected": false
            },
            "IE": {
                "desc": "IE",
                "type": "varchar",
                "selected": false
            },
            "ATIVO": {
                "desc": "ATIVO",
                "type": "varchar",
                "selected": false
            },
            "BAIRRO": {
                "desc": "BAIRRO",
                "type": "varchar",
                "selected": false
            },
            "CEP": {
                "desc": "CEP",
                "type": "varchar",
                "selected": false
            },
            "CEP1": {
                "desc": "CEP1",
                "type": "varchar",
                "selected": false
            },
            "CIDADE": {
                "desc": "CIDADE",
                "type": "varchar",
                "selected": false
            },
            "CODEXTERNO": {
                "desc": "CODEXTERNO",
                "type": "varchar",
                "selected": false
            },
            "COMPLEMENTO": {
                "desc": "COMPLEMENTO",
                "type": "varchar",
                "selected": false
            },
            "CONTROLACGC": {
                "desc": "CONTROLACGC",
                "type": "varchar",
                "selected": false
            },
            "CONTROLE1": {
                "desc": "CONTROLE1",
                "type": "varchar",
                "selected": false
            },
            "CONTROLE2": {
                "desc": "CONTROLE2",
                "type": "varchar",
                "selected": false
            },
            "CONTROLE3": {
                "desc": "CONTROLE3",
                "type": "varchar",
                "selected": false
            },
            "DATALIMITELICENCAS": {
                "desc": "DATALIMITELICENCAS",
                "type": "varchar",
                "selected": false
            },
            "ESTADO": {
                "desc": "ESTADO",
                "type": "varchar",
                "selected": false
            },
            "FAX": {
                "desc": "FAX",
                "type": "varchar",
                "selected": false
            },
            "IDIMAGEM": {
                "desc": "IDIMAGEM",
                "type": "varchar",
                "selected": false
            },
            "IMPORTADA": {
                "desc": "IMPORTADA",
                "type": "varchar",
                "selected": false
            },
            "INSCRICAOESTADUAL": {
                "desc": "INSCRICAOESTADUAL",
                "type": "varchar",
                "selected": false
            },
            "NOMEFANTASIA": {
                "desc": "NOMEFANTASIA",
                "type": "varchar",
                "selected": false
            },
            "NUMERO": {
                "desc": "NUMERO",
                "type": "varchar",
                "selected": false
            },
            "PAIS": {
                "desc": "PAIS",
                "type": "varchar",
                "selected": false
            },
            "PRODUTORRURAL": {
                "desc": "PRODUTORRURAL",
                "type": "varchar",
                "selected": false
            },
            "RECCREATEDBY": {
                "desc": "RECCREATEDBY",
                "type": "varchar",
                "selected": false
            },
            "RECCREATEDON": {
                "desc": "RECCREATEDON",
                "type": "varchar",
                "selected": false
            },
            "RECMODIFIEDBY": {
                "desc": "RECMODIFIEDBY",
                "type": "varchar",
                "selected": false
            },
            "RECMODIFIEDON": {
                "desc": "RECMODIFIEDON",
                "type": "varchar",
                "selected": false
            },
            "RUA": {
                "desc": "RUA",
                "type": "varchar",
                "selected": false
            },
            "TELEFONE1": {
                "desc": "TELEFONE1",
                "type": "varchar",
                "selected": false
            },
            "TOKEN": {
                "desc": "TOKEN",
                "type": "varchar",
                "selected": false
            },
            "ALUGUEL_DATA_FIM": {
                "desc": "ALUGUEL_DATA_FIM",
                "type": "varchar",
                "selected": false
            },
            "ALUGUEL_DATA_INICIO": {
                "desc": "ALUGUEL_DATA_INICIO",
                "type": "varchar",
                "selected": false
            },
            "ALUGUEL_DIA": {
                "desc": "ALUGUEL_DIA",
                "type": "int",
                "selected": false
            },
            "ALUGUEL_PRAZO": {
                "desc": "ALUGUEL_PRAZO",
                "type": "int",
                "selected": false
            },
            "ALUGUEL_PRAZO_EXTENSO": {
                "desc": "ALUGUEL_PRAZO_EXTENSO",
                "type": "varchar",
                "selected": false
            },
            "ALUGUEL_VALOR": {
                "desc": "ALUGUEL_VALOR",
                "type": "numeric",
                "selected": false
            },
            "CENTRO_CUSTO": {
                "desc": "CENTRO_CUSTO",
                "type": "varchar",
                "selected": false
            },
            "CODIGOCONTRATO": {
                "desc": "CODIGOCONTRATO",
                "type": "varchar",
                "selected": false
            },
            "CODUND": {
                "desc": "CODUND",
                "type": "varchar",
                "selected": false
            },
            "DATACONTRATO": {
                "desc": "DATACONTRATO",
                "type": "datetime",
                "selected": false
            },
            "DATAFIM": {
                "desc": "DATAFIM",
                "type": "datetime",
                "selected": false
            },
            "DATAINICIO": {
                "desc": "DATAINICIO",
                "type": "datetime",
                "selected": false
            },
            "DATATERMINO": {
                "desc": "DATATERMINO",
                "type": "datetime",
                "selected": false
            },
            "DESCRICAO_CONTRATO_ALUGUEL": {
                "desc": "DESCRICAO_CONTRATO_ALUGUEL",
                "type": "varchar",
                "selected": false
            },
            "ENDERECO_IMOVEL": {
                "desc": "ENDERECO_IMOVEL",
                "type": "varchar",
                "selected": false
            },
            "IDCNT": {
                "desc": "IDCNT",
                "type": "int",
                "selected": false
            },
            "IDPRD": {
                "desc": "IDPRD",
                "type": "int",
                "selected": false
            },
            "LOCADOR_NOME_CPF_CNPJ": {
                "desc": "LOCADOR_NOME_CPF_CNPJ",
                "type": "varchar",
                "selected": false
            },
            "NSEQITMCNT": {
                "desc": "NSEQITMCNT",
                "type": "int",
                "selected": false
            },
            "PRODUTO": {
                "desc": "PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "CHAVE": {
                "desc": "CHAVE",
                "type": "varchar",
                "selected": false
            },
            "CÓDIGO DA COLIGADA": {
                "desc": "CÓDIGO DA COLIGADA",
                "type": "int",
                "selected": false
            },
            "CODIGO PRODUTO": {
                "desc": "CODIGO PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "DATA DE CRIAÇÃO": {
                "desc": "DATA DE CRIAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "DATA DE EMISSÃO": {
                "desc": "DATA DE EMISSÃO",
                "type": "datetime",
                "selected": false
            },
            "DESTINO LOCAL DE ESTOQUE": {
                "desc": "DESTINO LOCAL DE ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "DESTINOCENTROCUSTO": {
                "desc": "DESTINOCENTROCUSTO",
                "type": "varchar",
                "selected": false
            },
            "DESTINODATAEMISAO": {
                "desc": "DESTINODATAEMISAO",
                "type": "datetime",
                "selected": false
            },
            "DESTINOIDMOV": {
                "desc": "DESTINOIDMOV",
                "type": "int",
                "selected": false
            },
            "DESTINONUMEROMOV": {
                "desc": "DESTINONUMEROMOV",
                "type": "varchar",
                "selected": false
            },
            "DESTINOTIPOMOV": {
                "desc": "DESTINOTIPOMOV",
                "type": "varchar",
                "selected": false
            },
            "HORÁRIO DE CRIAÇÃO": {
                "desc": "HORÁRIO DE CRIAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "IDENTIFICADOR DO MOVIMENTO": {
                "desc": "IDENTIFICADOR DO MOVIMENTO",
                "type": "int",
                "selected": false
            },
            "LOCAL DE ESTOQUE": {
                "desc": "LOCAL DE ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "Nº MOVIMENTO": {
                "desc": "Nº MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "NSEQITMMOV": {
                "desc": "NSEQITMMOV",
                "type": "int",
                "selected": false
            },
            "TIPO MOVIMENTO": {
                "desc": "TIPO MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "TOTALITEM": {
                "desc": "TOTALITEM",
                "type": "numeric",
                "selected": false
            },
            "UNIDADE": {
                "desc": "UNIDADE",
                "type": "varchar",
                "selected": false
            },
            "USUÁRIO DA ULTIMA MODIFICAÇÃO": {
                "desc": "USUÁRIO DA ULTIMA MODIFICAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "USUÁRIO DE CRIAÇÃO": {
                "desc": "USUÁRIO DE CRIAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "VALORBRUOTITEM": {
                "desc": "VALORBRUOTITEM",
                "type": "numeric",
                "selected": false
            },
            "VALORUNITARIO": {
                "desc": "VALORUNITARIO",
                "type": "numeric",
                "selected": false
            },
            "STATUS_MOVIMENTO": {
                "desc": "STATUS_MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "DATAAPROVACAO": {
                "desc": "DATAAPROVACAO",
                "type": "varchar",
                "selected": false
            },
            "DATAEMISSÃO": {
                "desc": "DATAEMISSÃO",
                "type": "varchar",
                "selected": false
            },
            "LOCEST": {
                "desc": "LOCEST",
                "type": "varchar",
                "selected": false
            },
            "NOMEMOV": {
                "desc": "NOMEMOV",
                "type": "varchar",
                "selected": false
            },
            "MEDIA": {
                "desc": "MEDIA",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_LOCAL_ESTOQUE": {
                "desc": "CODIGO_LOCAL_ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_PRODUTO": {
                "desc": "CODIGO_PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "CUSTOMEDIO": {
                "desc": "CUSTOMEDIO",
                "type": "varchar",
                "selected": false
            },
            "CUSTOUNITARIO": {
                "desc": "CUSTOUNITARIO",
                "type": "varchar",
                "selected": false
            },
            "IDENTIFICADOR_PRODUTO": {
                "desc": "IDENTIFICADOR_PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "LOCAL_ESTOQUE": {
                "desc": "LOCAL_ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "SALDO_FINANCEIRO": {
                "desc": "SALDO_FINANCEIRO",
                "type": "varchar",
                "selected": false
            },
            "SALDO_FISICO": {
                "desc": "SALDO_FISICO",
                "type": "varchar",
                "selected": false
            },
            "TEXTO": {
                "desc": "TEXTO",
                "type": "varchar",
                "selected": false
            },
            "TEXTO2": {
                "desc": "TEXTO2",
                "type": "varchar",
                "selected": false
            }
        }
    },
    TITMMOV: {
        "code": "TITMMOV",
        "desc": "Itens dos Movimentos (Produtos/Serviços)",
        "priority": 5,
        "joinCondition": "TMOV.CODCOLIGADA = TITMMOV.CODCOLIGADA AND TMOV.IDMOV = TITMMOV.IDMOV",
        "fields": {
            "CODCOLIGADA": {
                "desc": "Código da Coligada",
                "type": "smallint",
                "selected": false
            },
            "IDMOV": {
                "desc": "Identificador do Movimento",
                "type": "int",
                "selected": true
            },
            "NSEQITMMOV": {
                "desc": "Sequência do Item",
                "type": "int",
                "selected": true
            },
            "IDPRD": {
                "desc": "Identificador do Produto",
                "type": "int",
                "selected": true
            },
            "QUANTIDADE": {
                "desc": "Quantidade do Item",
                "type": "numeric",
                "selected": true
            },
            "PRECOUNITARIO": {
                "desc": "Preço Unitário",
                "type": "numeric",
                "selected": true
            },
            "VALORTOTAL": {
                "desc": "Valor Total do Item",
                "type": "numeric",
                "selected": true
            },
            "CODCCUSTO": {
                "desc": "CODCCUSTO",
                "type": "varchar",
                "selected": false
            },
            "CODIGOPRD": {
                "desc": "CODIGOPRD",
                "type": "varchar",
                "selected": false
            },
            "NOME": {
                "desc": "NOME",
                "type": "varchar",
                "selected": false
            },
            "NOMEFANTASIA": {
                "desc": "NOMEFANTASIA",
                "type": "varchar",
                "selected": false
            },
            "QUANTIDADE_CONSUMIDA": {
                "desc": "QUANTIDADE_CONSUMIDA",
                "type": "varchar",
                "selected": false
            },
            "CLASSIFICACAO": {
                "desc": "CLASSIFICACAO",
                "type": "varchar",
                "selected": false
            },
            "COD_PRODUTO": {
                "desc": "COD_PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "CODCFO": {
                "desc": "CODCFO",
                "type": "varchar",
                "selected": false
            },
            "CODFILIAL": {
                "desc": "CODFILIAL",
                "type": "varchar",
                "selected": false
            },
            "CODLOC": {
                "desc": "CODLOC",
                "type": "varchar",
                "selected": false
            },
            "CODTMV": {
                "desc": "CODTMV",
                "type": "varchar",
                "selected": false
            },
            "DATAEMISSAO": {
                "desc": "DATAEMISSAO",
                "type": "varchar",
                "selected": false
            },
            "DATAMOVIMENTO": {
                "desc": "DATAMOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "NOME_CENTRO_CUSTO": {
                "desc": "NOME_CENTRO_CUSTO",
                "type": "varchar",
                "selected": false
            },
            "NOME_COLIGADA": {
                "desc": "NOME_COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "NOME_FANTASIA_PRODUTO": {
                "desc": "NOME_FANTASIA_PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "NOME_FCFO": {
                "desc": "NOME_FCFO",
                "type": "varchar",
                "selected": false
            },
            "NOME_FILIAL": {
                "desc": "NOME_FILIAL",
                "type": "varchar",
                "selected": false
            },
            "NOME_LOCAL": {
                "desc": "NOME_LOCAL",
                "type": "varchar",
                "selected": false
            },
            "NUMEROSEQUENCIAL": {
                "desc": "NUMEROSEQUENCIAL",
                "type": "varchar",
                "selected": false
            },
            "UN": {
                "desc": "UN",
                "type": "varchar",
                "selected": false
            },
            "VALORLIQUIDO": {
                "desc": "VALORLIQUIDO",
                "type": "varchar",
                "selected": false
            },
            "ANOBAIXA": {
                "desc": "ANOBAIXA",
                "type": "int",
                "selected": false
            },
            "ANOEMISSAO": {
                "desc": "ANOEMISSAO",
                "type": "int",
                "selected": false
            },
            "ANOVCTO": {
                "desc": "ANOVCTO",
                "type": "int",
                "selected": false
            },
            "CLIENTE/FORNECEDOR": {
                "desc": "CLIENTE/FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CÓDIGO MOVIMENTO": {
                "desc": "CÓDIGO MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "CÓDIGO PRODUTO": {
                "desc": "CÓDIGO PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "CODTRF": {
                "desc": "CODTRF",
                "type": "varchar",
                "selected": false
            },
            "COLIGADA": {
                "desc": "COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "DATABAIXA": {
                "desc": "DATABAIXA",
                "type": "varchar",
                "selected": false
            },
            "DATAVENCIMENTO": {
                "desc": "DATAVENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO CENTRO DE CUSTO": {
                "desc": "DESCRICAO CENTRO DE CUSTO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO PRODUTO": {
                "desc": "DESCRICAO PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "DIABAIXA": {
                "desc": "DIABAIXA",
                "type": "int",
                "selected": false
            },
            "DIAEMISSAO": {
                "desc": "DIAEMISSAO",
                "type": "int",
                "selected": false
            },
            "DIAVCTO": {
                "desc": "DIAVCTO",
                "type": "int",
                "selected": false
            },
            "HISTORICO": {
                "desc": "HISTORICO",
                "type": "varchar",
                "selected": false
            },
            "IDLAN": {
                "desc": "IDLAN",
                "type": "int",
                "selected": false
            },
            "IDPRJ": {
                "desc": "IDPRJ",
                "type": "int",
                "selected": false
            },
            "IDTRF": {
                "desc": "IDTRF",
                "type": "int",
                "selected": false
            },
            "MESBAIXA": {
                "desc": "MESBAIXA",
                "type": "int",
                "selected": false
            },
            "MESEMISSAO": {
                "desc": "MESEMISSAO",
                "type": "int",
                "selected": false
            },
            "MESVCTO": {
                "desc": "MESVCTO",
                "type": "int",
                "selected": false
            },
            "NOME MOVIMENTO": {
                "desc": "NOME MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "NUMERODOCUMENTO": {
                "desc": "NUMERODOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "PAGAR OU RECEBER": {
                "desc": "PAGAR ou RECEBER",
                "type": "varchar",
                "selected": false
            },
            "PERCENTUALRATEIO": {
                "desc": "PERCENTUALRATEIO",
                "type": "numeric",
                "selected": false
            },
            "PROJETO": {
                "desc": "PROJETO",
                "type": "varchar",
                "selected": false
            },
            "STATUS BAIXA DO LANÇAMENTO": {
                "desc": "STATUS BAIXA DO LANÇAMENTO",
                "type": "varchar",
                "selected": false
            },
            "STATUS DA FATURA": {
                "desc": "STATUS DA FATURA",
                "type": "varchar",
                "selected": false
            },
            "STATUS LANÇAMENTO": {
                "desc": "STATUS LANÇAMENTO",
                "type": "varchar",
                "selected": false
            },
            "TIPO": {
                "desc": "TIPO",
                "type": "varchar",
                "selected": false
            },
            "CODATENDIMENTO": {
                "desc": "CODATENDIMENTO",
                "type": "int",
                "selected": false
            },
            "CODLOCAL": {
                "desc": "CODLOCAL",
                "type": "int",
                "selected": false
            },
            "NATUREZA": {
                "desc": "NATUREZA",
                "type": "varchar",
                "selected": false
            },
            "PRODUTO": {
                "desc": "PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "UNIDADE": {
                "desc": "UNIDADE",
                "type": "varchar",
                "selected": false
            },
            "VALORBRUTOITEM": {
                "desc": "VALORBRUTOITEM",
                "type": "numeric",
                "selected": false
            },
            "VALORBRUTOITEMORIG": {
                "desc": "VALORBRUTOITEMORIG",
                "type": "numeric",
                "selected": false
            },
            "VALORUNITARIO": {
                "desc": "VALORUNITARIO",
                "type": "numeric",
                "selected": false
            },
            "DESCRICAO FANATASIA": {
                "desc": "DESCRICAO FANATASIA",
                "type": "varchar",
                "selected": false
            },
            "PREÇO UNIT": {
                "desc": "PREÇO UNIT",
                "type": "varchar",
                "selected": false
            },
            "QTDE": {
                "desc": "QTDE",
                "type": "varchar",
                "selected": false
            },
            "VALOR CALC": {
                "desc": "VALOR CALC",
                "type": "varchar",
                "selected": false
            },
            "TOTALPRECOUNITARIO": {
                "desc": "TOTALPRECOUNITARIO",
                "type": "varchar",
                "selected": false
            },
            "FORNECEDOR": {
                "desc": "FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "DATA_ALTERACAO": {
                "desc": "DATA_ALTERACAO",
                "type": "varchar",
                "selected": false
            },
            "DATA_CRIACAO": {
                "desc": "DATA_CRIACAO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO": {
                "desc": "DESCRICAO",
                "type": "varchar",
                "selected": false
            },
            "LOCAL_ESTOQUE_SC": {
                "desc": "LOCAL_ESTOQUE_SC",
                "type": "varchar",
                "selected": false
            },
            "QUANTIDADEARECEBER": {
                "desc": "QUANTIDADEARECEBER",
                "type": "varchar",
                "selected": false
            },
            "QUANTIDADEORIGINAL": {
                "desc": "QUANTIDADEORIGINAL",
                "type": "varchar",
                "selected": false
            },
            "SALDO_015": {
                "desc": "SALDO_015",
                "type": "varchar",
                "selected": false
            },
            "SALDO_SC": {
                "desc": "SALDO_SC",
                "type": "varchar",
                "selected": false
            },
            "USUARIO_CRIACAO": {
                "desc": "USUARIO_CRIACAO",
                "type": "varchar",
                "selected": false
            },
            "USUARIO_MODIFICACAO": {
                "desc": "USUARIO_MODIFICACAO",
                "type": "varchar",
                "selected": false
            },
            "CONTRATO": {
                "desc": "CONTRATO",
                "type": "varchar",
                "selected": false
            },
            "ORDEM": {
                "desc": "ORDEM",
                "type": "int",
                "selected": false
            },
            "RAZAOSOCIAL": {
                "desc": "RAZAOSOCIAL",
                "type": "varchar",
                "selected": false
            },
            "CENTROCUSTO": {
                "desc": "CENTROCUSTO",
                "type": "varchar",
                "selected": false
            },
            "CODIGOLOCALEST": {
                "desc": "CODIGOLOCALEST",
                "type": "varchar",
                "selected": false
            },
            "CODIGOPRODUTO": {
                "desc": "CODIGOPRODUTO",
                "type": "varchar",
                "selected": false
            },
            "DATAENTREGA": {
                "desc": "DATAENTREGA",
                "type": "varchar",
                "selected": false
            },
            "DESC_PAG": {
                "desc": "DESC_PAG",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAOPRODUTO": {
                "desc": "DESCRICAOPRODUTO",
                "type": "varchar",
                "selected": false
            },
            "END_OBRA": {
                "desc": "END_OBRA",
                "type": "varchar",
                "selected": false
            },
            "LOCALESTOQUE": {
                "desc": "LOCALESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "MOVIMENTO": {
                "desc": "MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "PAGAMENTO": {
                "desc": "PAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "PRAZOENTREGA": {
                "desc": "PRAZOENTREGA",
                "type": "varchar",
                "selected": false
            },
            "QTDEPRODUTO": {
                "desc": "QTDEPRODUTO",
                "type": "varchar",
                "selected": false
            },
            "SEQUENCIAL": {
                "desc": "SEQUENCIAL",
                "type": "varchar",
                "selected": false
            },
            "SOLICITANTE": {
                "desc": "SOLICITANTE",
                "type": "varchar",
                "selected": false
            },
            "IDCNTOP": {
                "desc": "IDCNTOP",
                "type": "varchar",
                "selected": false
            },
            "NUMEROMOV": {
                "desc": "NUMEROMOV",
                "type": "varchar",
                "selected": false
            },
            "RECCREATEDBY": {
                "desc": "RECCREATEDBY",
                "type": "varchar",
                "selected": false
            },
            "VALORBRUTO": {
                "desc": "VALORBRUTO",
                "type": "varchar",
                "selected": false
            },
            "ANOEMI": {
                "desc": "ANOEMI",
                "type": "int",
                "selected": false
            },
            "ANOEMI1": {
                "desc": "ANOEMI1",
                "type": "int",
                "selected": false
            },
            "ATUAÇÃOFORNECEDOR": {
                "desc": "ATUAÇÃOFORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CENTRO_CUSTO": {
                "desc": "CENTRO_CUSTO",
                "type": "varchar",
                "selected": false
            },
            "DATAEMISSÃO": {
                "desc": "DATAEMISSÃO",
                "type": "varchar",
                "selected": false
            },
            "DATASAIDA": {
                "desc": "DATASAIDA",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO_CENTROCUSTO": {
                "desc": "DESCRICAO_CENTROCUSTO",
                "type": "varchar",
                "selected": false
            },
            "DIAEMI": {
                "desc": "DIAEMI",
                "type": "int",
                "selected": false
            },
            "DIAEMI1": {
                "desc": "DIAEMI1",
                "type": "int",
                "selected": false
            },
            "EMPREI": {
                "desc": "EMPREI",
                "type": "varchar",
                "selected": false
            },
            "FROTA": {
                "desc": "FROTA",
                "type": "varchar",
                "selected": false
            },
            "LOCEST": {
                "desc": "LOCEST",
                "type": "varchar",
                "selected": false
            },
            "MESEMI": {
                "desc": "MESEMI",
                "type": "int",
                "selected": false
            },
            "MESEMI1": {
                "desc": "MESEMI1",
                "type": "int",
                "selected": false
            },
            "NOMECLIFOR": {
                "desc": "NOMECLIFOR",
                "type": "varchar",
                "selected": false
            },
            "NOMEMOV": {
                "desc": "NOMEMOV",
                "type": "varchar",
                "selected": false
            },
            "RECDESP": {
                "desc": "RECDESP",
                "type": "varchar",
                "selected": false
            },
            "STATUS": {
                "desc": "STATUS",
                "type": "varchar",
                "selected": false
            },
            "TIPO_MOVIMENTO": {
                "desc": "TIPO_MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "TOTALITEM": {
                "desc": "TOTALITEM",
                "type": "numeric",
                "selected": false
            },
            "USUARIOCRIACAO": {
                "desc": "USUARIOCRIACAO",
                "type": "varchar",
                "selected": false
            },
            "VALORBRUOTITEM": {
                "desc": "VALORBRUOTITEM",
                "type": "numeric",
                "selected": false
            },
            "VALORNF": {
                "desc": "VALORNF",
                "type": "numeric",
                "selected": false
            },
            "VEICULOLEVE": {
                "desc": "VEICULOLEVE",
                "type": "varchar",
                "selected": false
            },
            "CODIGOCONTRATO": {
                "desc": "CODIGOCONTRATO",
                "type": "varchar",
                "selected": false
            },
            "CONFERENCIA": {
                "desc": "CONFERENCIA",
                "type": "varchar",
                "selected": false
            },
            "ESTADO": {
                "desc": "ESTADO",
                "type": "varchar",
                "selected": false
            },
            "IDCONTRATO": {
                "desc": "IDCONTRATO",
                "type": "int",
                "selected": false
            },
            "NUMERO_MOVIMENTO_ORIGEM": {
                "desc": "NUMERO_MOVIMENTO_ORIGEM",
                "type": "varchar",
                "selected": false
            },
            "VALORNFLIQUIDO": {
                "desc": "VALORNFLIQUIDO",
                "type": "numeric",
                "selected": false
            },
            "GRUPOPRODUTO": {
                "desc": "GRUPOPRODUTO",
                "type": "varchar",
                "selected": false
            },
            "CNPJ_FORNECEDOR": {
                "desc": "CNPJ_FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_FORNECEDOR": {
                "desc": "CODIGO_FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_LOCAL_ESTOQUE": {
                "desc": "CODIGO_LOCAL_ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_UNIDADE_MEDIDA": {
                "desc": "CODIGO_UNIDADE_MEDIDA",
                "type": "varchar",
                "selected": false
            },
            "DATA_EMISSAO_NF": {
                "desc": "DATA_EMISSAO_NF",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO_LOCAL_ESTOQUE": {
                "desc": "DESCRICAO_LOCAL_ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO_PRODUTO": {
                "desc": "DESCRICAO_PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "NOME_FORNECEDOR": {
                "desc": "NOME_FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "NRO_SEQ_NF": {
                "desc": "NRO_SEQ_NF",
                "type": "varchar",
                "selected": false
            },
            "NUMERO_NF": {
                "desc": "NUMERO_NF",
                "type": "varchar",
                "selected": false
            },
            "SERIE_NF": {
                "desc": "SERIE_NF",
                "type": "varchar",
                "selected": false
            },
            "USUARIO_ALTERACAO": {
                "desc": "USUARIO_ALTERACAO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_BRUTO_NF": {
                "desc": "VALOR_BRUTO_NF",
                "type": "varchar",
                "selected": false
            },
            "VALOR_DESCONTO_NF": {
                "desc": "VALOR_DESCONTO_NF",
                "type": "varchar",
                "selected": false
            },
            "VALOR_DESPESA_NF": {
                "desc": "VALOR_DESPESA_NF",
                "type": "varchar",
                "selected": false
            },
            "VALOR_FRENTE_NF": {
                "desc": "VALOR_FRENTE_NF",
                "type": "varchar",
                "selected": false
            },
            "VALOR_LIQUIDO_NF": {
                "desc": "VALOR_LIQUIDO_NF",
                "type": "varchar",
                "selected": false
            },
            "VALORTOTALITEM": {
                "desc": "VALORTOTALITEM",
                "type": "varchar",
                "selected": false
            },
            "DADOS_SERVICO_LOCACAO_ITEM": {
                "desc": "DADOS_SERVICO_LOCACAO_ITEM",
                "type": "varchar",
                "selected": false
            },
            "HISTORICOCURTO": {
                "desc": "HISTORICOCURTO",
                "type": "varchar",
                "selected": false
            },
            "HISTORICOLONGO": {
                "desc": "HISTORICOLONGO",
                "type": "varchar",
                "selected": false
            },
            "CAMPOLIVRE": {
                "desc": "CAMPOLIVRE",
                "type": "varchar",
                "selected": false
            },
            "CONDICAO_PAGAMENTO": {
                "desc": "CONDICAO_PAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "CONTADOR": {
                "desc": "CONTADOR",
                "type": "int",
                "selected": false
            },
            "DATA_DIGITACAO": {
                "desc": "DATA_DIGITACAO",
                "type": "datetime",
                "selected": false
            },
            "DIFERENCA_EMISSAO_DIGITACAO": {
                "desc": "DIFERENCA_EMISSAO_DIGITACAO",
                "type": "int",
                "selected": false
            },
            "DIFERENCA_SAIDA_VENCIMENTO": {
                "desc": "DIFERENCA_SAIDA_VENCIMENTO",
                "type": "int",
                "selected": false
            },
            "PRIMEIRO_VENCIMENTO": {
                "desc": "PRIMEIRO_VENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "VALORBAIXADO": {
                "desc": "VALORBAIXADO",
                "type": "numeric",
                "selected": false
            },
            "CHAVE": {
                "desc": "CHAVE",
                "type": "varchar",
                "selected": false
            },
            "CÓDIGO DA COLIGADA": {
                "desc": "CÓDIGO DA COLIGADA",
                "type": "int",
                "selected": false
            },
            "CODIGO PRODUTO": {
                "desc": "CODIGO PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "DATA DE CRIAÇÃO": {
                "desc": "DATA DE CRIAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "DATA DE EMISSÃO": {
                "desc": "DATA DE EMISSÃO",
                "type": "datetime",
                "selected": false
            },
            "DESTINO LOCAL DE ESTOQUE": {
                "desc": "DESTINO LOCAL DE ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "DESTINOCENTROCUSTO": {
                "desc": "DESTINOCENTROCUSTO",
                "type": "varchar",
                "selected": false
            },
            "DESTINODATAEMISAO": {
                "desc": "DESTINODATAEMISAO",
                "type": "datetime",
                "selected": false
            },
            "DESTINOIDMOV": {
                "desc": "DESTINOIDMOV",
                "type": "int",
                "selected": false
            },
            "DESTINONUMEROMOV": {
                "desc": "DESTINONUMEROMOV",
                "type": "varchar",
                "selected": false
            },
            "DESTINOTIPOMOV": {
                "desc": "DESTINOTIPOMOV",
                "type": "varchar",
                "selected": false
            },
            "HORÁRIO DE CRIAÇÃO": {
                "desc": "HORÁRIO DE CRIAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "IDENTIFICADOR DO MOVIMENTO": {
                "desc": "IDENTIFICADOR DO MOVIMENTO",
                "type": "int",
                "selected": false
            },
            "LOCAL DE ESTOQUE": {
                "desc": "LOCAL DE ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "Nº MOVIMENTO": {
                "desc": "Nº MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "TIPO MOVIMENTO": {
                "desc": "TIPO MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "USUÁRIO DA ULTIMA MODIFICAÇÃO": {
                "desc": "USUÁRIO DA ULTIMA MODIFICAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "USUÁRIO DE CRIAÇÃO": {
                "desc": "USUÁRIO DE CRIAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "NUMERONF": {
                "desc": "NUMERONF",
                "type": "varchar",
                "selected": false
            },
            "FILIAL": {
                "desc": "FILIAL",
                "type": "varchar",
                "selected": false
            },
            "STATUS_MOVIMENTO": {
                "desc": "STATUS_MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "ADM": {
                "desc": "ADM",
                "type": "varchar",
                "selected": false
            },
            "CPFCNPJFAVORECIDO": {
                "desc": "CPFCNPJFAVORECIDO",
                "type": "varchar",
                "selected": false
            },
            "DATACONTRATO": {
                "desc": "DATACONTRATO",
                "type": "datetime",
                "selected": false
            },
            "DATAFIM": {
                "desc": "DATAFIM",
                "type": "datetime",
                "selected": false
            },
            "DATAINICIO": {
                "desc": "DATAINICIO",
                "type": "datetime",
                "selected": false
            },
            "DESCRICAOCONTRATO": {
                "desc": "DESCRICAOCONTRATO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAOFORMAPAGAMENTO": {
                "desc": "DESCRICAOFORMAPAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "DIRETOREXECUTIVO": {
                "desc": "DIRETOREXECUTIVO",
                "type": "varchar",
                "selected": false
            },
            "ENDERECO_IMOVEL": {
                "desc": "ENDERECO_IMOVEL",
                "type": "varchar",
                "selected": false
            },
            "ENGCIVIL": {
                "desc": "ENGCIVIL",
                "type": "varchar",
                "selected": false
            },
            "FAVORECIDO": {
                "desc": "FAVORECIDO",
                "type": "varchar",
                "selected": false
            },
            "HISTORICOMOVIMENTO": {
                "desc": "HISTORICOMOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "LIDERCONTRATO": {
                "desc": "LIDERCONTRATO",
                "type": "varchar",
                "selected": false
            },
            "LIQUIDO_IR": {
                "desc": "LIQUIDO_IR",
                "type": "numeric",
                "selected": false
            },
            "PROPRIETARIO_CPF_CNPJ": {
                "desc": "PROPRIETARIO_CPF_CNPJ",
                "type": "varchar",
                "selected": false
            },
            "PROPRIETARIO_DADOS_BANCARIOS": {
                "desc": "PROPRIETARIO_DADOS_BANCARIOS",
                "type": "varchar",
                "selected": false
            },
            "PROPRIETARIO_ENDERECO": {
                "desc": "PROPRIETARIO_ENDERECO",
                "type": "varchar",
                "selected": false
            },
            "PROPRIETARIO_NOME": {
                "desc": "PROPRIETARIO_NOME",
                "type": "varchar",
                "selected": false
            },
            "REVISAO": {
                "desc": "REVISAO",
                "type": "int",
                "selected": false
            },
            "TIPOFORMAPAGAMENTO": {
                "desc": "TIPOFORMAPAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "VALORDESC": {
                "desc": "VALORDESC",
                "type": "numeric",
                "selected": false
            },
            "VALORDESP": {
                "desc": "VALORDESP",
                "type": "numeric",
                "selected": false
            },
            "VALORIRRF": {
                "desc": "VALORIRRF",
                "type": "numeric",
                "selected": false
            },
            "SEQ": {
                "desc": "SEQ",
                "type": "int",
                "selected": false
            },
            "ALIQORDENACAO": {
                "desc": "ALIQORDENACAO",
                "type": "numeric",
                "selected": false
            },
            "BLOCK": {
                "desc": "BLOCK",
                "type": "int",
                "selected": false
            },
            "CHAPA": {
                "desc": "CHAPA",
                "type": "varchar",
                "selected": false
            },
            "CODBEMSIGAMNT": {
                "desc": "CODBEMSIGAMNT",
                "type": "varchar",
                "selected": false
            },
            "CODCOLMARCA": {
                "desc": "CODCOLMARCA",
                "type": "int",
                "selected": false
            },
            "CODCOLTBORCAMENTO": {
                "desc": "CODCOLTBORCAMENTO",
                "type": "int",
                "selected": false
            },
            "CODCPG": {
                "desc": "CODCPG",
                "type": "varchar",
                "selected": false
            },
            "CODDEPARTAMENTO": {
                "desc": "CODDEPARTAMENTO",
                "type": "varchar",
                "selected": false
            },
            "CODETDMUNSERV": {
                "desc": "CODETDMUNSERV",
                "type": "varchar",
                "selected": false
            },
            "CODIGOCODIF": {
                "desc": "CODIGOCODIF",
                "type": "varchar",
                "selected": false
            },
            "CODIGOSERVICO": {
                "desc": "CODIGOSERVICO",
                "type": "varchar",
                "selected": false
            },
            "CODLOCALBN": {
                "desc": "CODLOCALBN",
                "type": "varchar",
                "selected": false
            },
            "CODMEN": {
                "desc": "CODMEN",
                "type": "varchar",
                "selected": false
            },
            "CODMUNSERVICO": {
                "desc": "CODMUNSERVICO",
                "type": "varchar",
                "selected": false
            },
            "CODNAT": {
                "desc": "CODNAT",
                "type": "varchar",
                "selected": false
            },
            "CODPUBLIC": {
                "desc": "CODPUBLIC",
                "type": "int",
                "selected": false
            },
            "CODRPR": {
                "desc": "CODRPR",
                "type": "varchar",
                "selected": false
            },
            "CODTB1FAT": {
                "desc": "CODTB1FAT",
                "type": "varchar",
                "selected": false
            },
            "CODTB1FLX": {
                "desc": "CODTB1FLX",
                "type": "varchar",
                "selected": false
            },
            "CODTB2FAT": {
                "desc": "CODTB2FAT",
                "type": "varchar",
                "selected": false
            },
            "CODTB2FLX": {
                "desc": "CODTB2FLX",
                "type": "varchar",
                "selected": false
            },
            "CODTB3FAT": {
                "desc": "CODTB3FAT",
                "type": "varchar",
                "selected": false
            },
            "CODTB3FLX": {
                "desc": "CODTB3FLX",
                "type": "varchar",
                "selected": false
            },
            "CODTB4FAT": {
                "desc": "CODTB4FAT",
                "type": "varchar",
                "selected": false
            },
            "CODTB4FLX": {
                "desc": "CODTB4FLX",
                "type": "varchar",
                "selected": false
            },
            "CODTB5FAT": {
                "desc": "CODTB5FAT",
                "type": "varchar",
                "selected": false
            },
            "CODTB5FLX": {
                "desc": "CODTB5FLX",
                "type": "varchar",
                "selected": false
            },
            "CODTBGRUPOORC": {
                "desc": "CODTBGRUPOORC",
                "type": "varchar",
                "selected": false
            },
            "CODTBORCAMENTO": {
                "desc": "CODTBORCAMENTO",
                "type": "varchar",
                "selected": false
            },
            "CODTIP": {
                "desc": "CODTIP",
                "type": "varchar",
                "selected": false
            },
            "CODUND": {
                "desc": "CODUND",
                "type": "varchar",
                "selected": false
            },
            "CODVEN1": {
                "desc": "CODVEN1",
                "type": "varchar",
                "selected": false
            },
            "COMISSAOREPRES": {
                "desc": "COMISSAOREPRES",
                "type": "numeric",
                "selected": false
            },
            "CONSIGNADO": {
                "desc": "CONSIGNADO",
                "type": "int",
                "selected": false
            },
            "CST": {
                "desc": "CST",
                "type": "varchar",
                "selected": false
            },
            "CUSTOREPOSICAO": {
                "desc": "CUSTOREPOSICAO",
                "type": "numeric",
                "selected": false
            },
            "CUSTOREPOSICAOB": {
                "desc": "CUSTOREPOSICAOB",
                "type": "numeric",
                "selected": false
            },
            "DATAFATCONTRATO": {
                "desc": "DATAFATCONTRATO",
                "type": "datetime",
                "selected": false
            },
            "DATAFIMFAT": {
                "desc": "DATAFIMFAT",
                "type": "datetime",
                "selected": false
            },
            "DATAINIFAT": {
                "desc": "DATAINIFAT",
                "type": "datetime",
                "selected": false
            },
            "DATAORCAMENTO": {
                "desc": "DATAORCAMENTO",
                "type": "datetime",
                "selected": false
            },
            "DATARE": {
                "desc": "DATARE",
                "type": "datetime",
                "selected": false
            },
            "DESCRICAOPRDCFO": {
                "desc": "DESCRICAOPRDCFO",
                "type": "varchar",
                "selected": false
            },
            "FATORCONVUND": {
                "desc": "FATORCONVUND",
                "type": "numeric",
                "selected": false
            },
            "FLAG": {
                "desc": "FLAG",
                "type": "int",
                "selected": false
            },
            "FLAGEFEITOSALDO": {
                "desc": "FLAGEFEITOSALDO",
                "type": "int",
                "selected": false
            },
            "FLAGREFATURAMENTO": {
                "desc": "FLAGREFATURAMENTO",
                "type": "int",
                "selected": false
            },
            "FLAGREPASSE": {
                "desc": "FLAGREPASSE",
                "type": "int",
                "selected": false
            },
            "IDCLASSIFENERGIACOMUNIC": {
                "desc": "IDCLASSIFENERGIACOMUNIC",
                "type": "int",
                "selected": false
            },
            "IDCNT": {
                "desc": "IDCNT",
                "type": "int",
                "selected": false
            },
            "IDCNTDESTINO": {
                "desc": "IDCNTDESTINO",
                "type": "int",
                "selected": false
            },
            "IDGRD": {
                "desc": "IDGRD",
                "type": "int",
                "selected": false
            },
            "IDINTEGRACAO": {
                "desc": "IDINTEGRACAO",
                "type": "varchar",
                "selected": false
            },
            "IDITMCNT2PARCELA": {
                "desc": "IDITMCNT2PARCELA",
                "type": "int",
                "selected": false
            },
            "IDMARCA": {
                "desc": "IDMARCA",
                "type": "int",
                "selected": false
            },
            "IDMOVSOLICITACAOMNT": {
                "desc": "IDMOVSOLICITACAOMNT",
                "type": "int",
                "selected": false
            },
            "IDNAT": {
                "desc": "IDNAT",
                "type": "int",
                "selected": false
            },
            "IDOBJOFICINA": {
                "desc": "IDOBJOFICINA",
                "type": "varchar",
                "selected": false
            },
            "IDPRDCOMPOSTO": {
                "desc": "IDPRDCOMPOSTO",
                "type": "int",
                "selected": false
            },
            "IDPRDORIGEM": {
                "desc": "IDPRDORIGEM",
                "type": "int",
                "selected": false
            },
            "IDREGRATRIBUTARIA": {
                "desc": "IDREGRATRIBUTARIA",
                "type": "int",
                "selected": false
            },
            "IDTABPRECO": {
                "desc": "IDTABPRECO",
                "type": "int",
                "selected": false
            },
            "IMPRIMEMOV": {
                "desc": "IMPRIMEMOV",
                "type": "int",
                "selected": false
            },
            "INDICENCM": {
                "desc": "INDICENCM",
                "type": "varchar",
                "selected": false
            },
            "INICIO": {
                "desc": "INICIO",
                "type": "datetime",
                "selected": false
            },
            "INTEGRAAPLICACAO": {
                "desc": "INTEGRAAPLICACAO",
                "type": "varchar",
                "selected": false
            },
            "NCM": {
                "desc": "NCM",
                "type": "varchar",
                "selected": false
            },
            "NSEQITMCNT": {
                "desc": "NSEQITMCNT",
                "type": "int",
                "selected": false
            },
            "NSEQITMCNTDEST": {
                "desc": "NSEQITMCNTDEST",
                "type": "int",
                "selected": false
            },
            "NSEQITMCNTMEDICAO": {
                "desc": "NSEQITMCNTMEDICAO",
                "type": "int",
                "selected": false
            },
            "NSEQPARCELA": {
                "desc": "NSEQPARCELA",
                "type": "int",
                "selected": false
            },
            "NUMEROTRIBUTOS": {
                "desc": "NUMEROTRIBUTOS",
                "type": "int",
                "selected": false
            },
            "PERCENTCOMISSAO": {
                "desc": "PERCENTCOMISSAO",
                "type": "numeric",
                "selected": false
            },
            "PERCENTUALDEDUCAO": {
                "desc": "PERCENTUALDEDUCAO",
                "type": "numeric",
                "selected": false
            },
            "PERCENTUALDESC": {
                "desc": "PERCENTUALDESC",
                "type": "numeric",
                "selected": false
            },
            "PERCENTUALDESP": {
                "desc": "PERCENTUALDESP",
                "type": "numeric",
                "selected": false
            },
            "PERCENTUALRETENCAO": {
                "desc": "PERCENTUALRETENCAO",
                "type": "numeric",
                "selected": false
            },
            "PRATELEIRA": {
                "desc": "PRATELEIRA",
                "type": "varchar",
                "selected": false
            },
            "PRECOEDITADO": {
                "desc": "PRECOEDITADO",
                "type": "int",
                "selected": false
            },
            "PRECOTABELA": {
                "desc": "PRECOTABELA",
                "type": "numeric",
                "selected": false
            },
            "PRECOTOTALEDITADO": {
                "desc": "PRECOTOTALEDITADO",
                "type": "int",
                "selected": false
            },
            "PRECOUNITARIOSELEC": {
                "desc": "PRECOUNITARIOSELEC",
                "type": "int",
                "selected": false
            },
            "PREVINICIO": {
                "desc": "PREVINICIO",
                "type": "datetime",
                "selected": false
            },
            "PRODUTOSUBSTITUTO": {
                "desc": "PRODUTOSUBSTITUTO",
                "type": "int",
                "selected": false
            },
            "QTDEVOLUMEUNITARIO": {
                "desc": "QTDEVOLUMEUNITARIO",
                "type": "int",
                "selected": false
            },
            "QTDUNDPEDIDO": {
                "desc": "QTDUNDPEDIDO",
                "type": "numeric",
                "selected": false
            },
            "QUANTIDADECONCLUIDA": {
                "desc": "QUANTIDADECONCLUIDA",
                "type": "numeric",
                "selected": false
            },
            "QUANTIDADESEPARADA": {
                "desc": "QUANTIDADESEPARADA",
                "type": "numeric",
                "selected": false
            },
            "QUANTIDADETOTAL": {
                "desc": "QUANTIDADETOTAL",
                "type": "numeric",
                "selected": false
            },
            "QUANTIDADETRIBUTAVEL": {
                "desc": "QUANTIDADETRIBUTAVEL",
                "type": "numeric",
                "selected": false
            },
            "RATEIOCCUSTODEPTO": {
                "desc": "RATEIOCCUSTODEPTO",
                "type": "numeric",
                "selected": false
            },
            "RATEIODEDMAT": {
                "desc": "RATEIODEDMAT",
                "type": "numeric",
                "selected": false
            },
            "RATEIODEDOUT": {
                "desc": "RATEIODEDOUT",
                "type": "numeric",
                "selected": false
            },
            "RATEIODEDSUB": {
                "desc": "RATEIODEDSUB",
                "type": "numeric",
                "selected": false
            },
            "RATEIODESC": {
                "desc": "RATEIODESC",
                "type": "numeric",
                "selected": false
            },
            "RATEIODESP": {
                "desc": "RATEIODESP",
                "type": "numeric",
                "selected": false
            },
            "RATEIOEXTRA1": {
                "desc": "RATEIOEXTRA1",
                "type": "numeric",
                "selected": false
            },
            "RATEIOEXTRA2": {
                "desc": "RATEIOEXTRA2",
                "type": "numeric",
                "selected": false
            },
            "RATEIOFRETE": {
                "desc": "RATEIOFRETE",
                "type": "numeric",
                "selected": false
            },
            "RATEIOFRETECTRC": {
                "desc": "RATEIOFRETECTRC",
                "type": "numeric",
                "selected": false
            },
            "RATEIOSEGURO": {
                "desc": "RATEIOSEGURO",
                "type": "numeric",
                "selected": false
            },
            "RECCREATEDON": {
                "desc": "RECCREATEDON",
                "type": "datetime",
                "selected": false
            },
            "RECMODIFIEDBY": {
                "desc": "RECMODIFIEDBY",
                "type": "varchar",
                "selected": false
            },
            "RECMODIFIEDON": {
                "desc": "RECMODIFIEDON",
                "type": "datetime",
                "selected": false
            },
            "REGISTROEXPORTACAO": {
                "desc": "REGISTROEXPORTACAO",
                "type": "varchar",
                "selected": false
            },
            "TAXAJUROS": {
                "desc": "TAXAJUROS",
                "type": "numeric",
                "selected": false
            },
            "TERMINO": {
                "desc": "TERMINO",
                "type": "datetime",
                "selected": false
            },
            "TIPOCODIGOPRD": {
                "desc": "TIPOCODIGOPRD",
                "type": "int",
                "selected": false
            },
            "TRIBUTACAOECF": {
                "desc": "TRIBUTACAOECF",
                "type": "varchar",
                "selected": false
            },
            "VALORBASEDEPRECIACAOBEM": {
                "desc": "VALORBASEDEPRECIACAOBEM",
                "type": "numeric",
                "selected": false
            },
            "VALORBEM": {
                "desc": "VALORBEM",
                "type": "numeric",
                "selected": false
            },
            "VALORCODIGOPRD": {
                "desc": "VALORCODIGOPRD",
                "type": "varchar",
                "selected": false
            },
            "VALORCONCLUIDO": {
                "desc": "VALORCONCLUIDO",
                "type": "numeric",
                "selected": false
            },
            "VALORDEDUCAO": {
                "desc": "VALORDEDUCAO",
                "type": "numeric",
                "selected": false
            },
            "VALORDESCCONDICONALITM": {
                "desc": "VALORDESCCONDICONALITM",
                "type": "numeric",
                "selected": false
            },
            "VALORDESPCONDICIONALITM": {
                "desc": "VALORDESPCONDICIONALITM",
                "type": "numeric",
                "selected": false
            },
            "VALORESCRITURACAO": {
                "desc": "VALORESCRITURACAO",
                "type": "numeric",
                "selected": false
            },
            "VALORFINANCEIRO": {
                "desc": "VALORFINANCEIRO",
                "type": "numeric",
                "selected": false
            },
            "VALORFINANCGERENCIAL": {
                "desc": "VALORFINANCGERENCIAL",
                "type": "numeric",
                "selected": false
            },
            "VALORFINPEDIDO": {
                "desc": "VALORFINPEDIDO",
                "type": "numeric",
                "selected": false
            },
            "VALORFINTERCEIROS": {
                "desc": "VALORFINTERCEIROS",
                "type": "numeric",
                "selected": false
            },
            "VALORFRETECTRC": {
                "desc": "VALORFRETECTRC",
                "type": "numeric",
                "selected": false
            },
            "VALOROPFRM1": {
                "desc": "VALOROPFRM1",
                "type": "numeric",
                "selected": false
            },
            "VALOROPFRM2": {
                "desc": "VALOROPFRM2",
                "type": "numeric",
                "selected": false
            },
            "VALORRATEIOLAN": {
                "desc": "VALORRATEIOLAN",
                "type": "numeric",
                "selected": false
            },
            "VALORRECEBIDOFATPARC": {
                "desc": "VALORRECEBIDOFATPARC",
                "type": "numeric",
                "selected": false
            },
            "VALORRETENCAO": {
                "desc": "VALORRETENCAO",
                "type": "numeric",
                "selected": false
            },
            "VALORUNITGERENCIAL": {
                "desc": "VALORUNITGERENCIAL",
                "type": "numeric",
                "selected": false
            },
            "VALORUNTORCAMENTO": {
                "desc": "VALORUNTORCAMENTO",
                "type": "numeric",
                "selected": false
            },
            "VALSERVICONFE": {
                "desc": "VALSERVICONFE",
                "type": "numeric",
                "selected": false
            },
            "HISTORICO_ITEM": {
                "desc": "HISTORICO_ITEM",
                "type": "varchar",
                "selected": false
            },
            "HISTORICO_NF": {
                "desc": "HISTORICO_NF",
                "type": "varchar",
                "selected": false
            },
            "Nº DO CONTRATO": {
                "desc": "Nº DO CONTRATO",
                "type": "varchar",
                "selected": false
            },
            "VALOR TOTAL DE DESCONTO SOBRE": {
                "desc": "VALOR TOTAL DE DESCONTO SOBRE A NF (NÃO",
                "type": "varchar",
                "selected": false
            },
            "FORNECEDOR CONTRATO": {
                "desc": "FORNECEDOR CONTRATO",
                "type": "varchar",
                "selected": false
            },
            "PERIODO_MEDICAO": {
                "desc": "PERIODO_MEDICAO",
                "type": "varchar",
                "selected": false
            },
            "SALDO": {
                "desc": "SALDO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_RETIDO_MEDICAO": {
                "desc": "VALOR_RETIDO_MEDICAO",
                "type": "varchar",
                "selected": false
            },
            "DATAAPROVACAO": {
                "desc": "DATAAPROVACAO",
                "type": "varchar",
                "selected": false
            },
            "DATA_EMISSAO_RECEBIDA": {
                "desc": "DATA_EMISSAO_RECEBIDA",
                "type": "varchar",
                "selected": false
            },
            "DATA_EMISSAO_SOLICITACAO": {
                "desc": "DATA_EMISSAO_SOLICITACAO",
                "type": "varchar",
                "selected": false
            },
            "DATA_ENTEGA": {
                "desc": "DATA_ENTEGA",
                "type": "varchar",
                "selected": false
            },
            "LOCAL_ESTOQUE": {
                "desc": "LOCAL_ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "NUMERO_ORDEM_COMPRA": {
                "desc": "NUMERO_ORDEM_COMPRA",
                "type": "varchar",
                "selected": false
            },
            "NUMERO_SOLICITACAO": {
                "desc": "NUMERO_SOLICITACAO",
                "type": "varchar",
                "selected": false
            },
            "QUANTIDADE_DIAS_SOLICITACAO_PA": {
                "desc": "QUANTIDADE_DIAS_SOLICITACAO_PARA_ORDEM_D",
                "type": "varchar",
                "selected": false
            },
            "QUANTIDADE_RECEBIDA": {
                "desc": "QUANTIDADE_RECEBIDA",
                "type": "varchar",
                "selected": false
            },
            "USUARIO_COMPRADOR": {
                "desc": "USUARIO_COMPRADOR",
                "type": "varchar",
                "selected": false
            },
            "USUARIO_SOLICITANTE": {
                "desc": "USUARIO_SOLICITANTE",
                "type": "varchar",
                "selected": false
            },
            "MEDIA": {
                "desc": "MEDIA",
                "type": "varchar",
                "selected": false
            },
            "ANO EMISSAO NF": {
                "desc": "ANO EMISSAO NF",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_PRODUTO": {
                "desc": "CODIGO_PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "DATA DE EMISSÃO NF": {
                "desc": "DATA DE EMISSÃO NF",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO_FROTA": {
                "desc": "DESCRICAO_FROTA",
                "type": "varchar",
                "selected": false
            },
            "IDENTIFICADOR_MOVIMENTO": {
                "desc": "IDENTIFICADOR_MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "MES EMISSAO NF": {
                "desc": "MES EMISSAO NF",
                "type": "varchar",
                "selected": false
            },
            "NUMERO_SEQUENCIAL_ITEM_NF": {
                "desc": "NUMERO_SEQUENCIAL_ITEM_NF",
                "type": "varchar",
                "selected": false
            },
            "CONTRATO_FORNECEDOR": {
                "desc": "CONTRATO_FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "DESCONTO_ALIMENTACAO": {
                "desc": "DESCONTO_ALIMENTACAO",
                "type": "varchar",
                "selected": false
            },
            "LIQUIDO": {
                "desc": "LIQUIDO",
                "type": "varchar",
                "selected": false
            },
            "PERCENTUAL_LIQUIDO%": {
                "desc": "PERCENTUAL_LIQUIDO%",
                "type": "varchar",
                "selected": false
            },
            "TOTALMEDICAO": {
                "desc": "TOTALMEDICAO",
                "type": "varchar",
                "selected": false
            },
            "MENOR_PRECO": {
                "desc": "MENOR_PRECO",
                "type": "varchar",
                "selected": false
            },
            "ULTIMA_DATA_COMPRA": {
                "desc": "ULTIMA_DATA_COMPRA",
                "type": "varchar",
                "selected": false
            },
            "CNPJFORNECEDOR": {
                "desc": "CNPJFORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CODIGOCENTROCUSTO": {
                "desc": "CODIGOCENTROCUSTO",
                "type": "varchar",
                "selected": false
            },
            "CODLOCALESTOQUE": {
                "desc": "CODLOCALESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "CODMOVIMENTO": {
                "desc": "CODMOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "DATACRIACAO": {
                "desc": "DATACRIACAO",
                "type": "datetime",
                "selected": false
            },
            "DESCRIÇÃO TAREFA": {
                "desc": "DESCRIÇÃO TAREFA",
                "type": "varchar",
                "selected": false
            },
            "GRUPO DE CUSTO": {
                "desc": "GRUPO DE CUSTO",
                "type": "varchar",
                "selected": false
            },
            "IDPRJ1": {
                "desc": "IDPRJ1",
                "type": "int",
                "selected": false
            },
            "QUANTIDADE ORÇADA": {
                "desc": "QUANTIDADE ORÇADA",
                "type": "numeric",
                "selected": false
            },
            "QUANTIDADE PEDIDO EXTRA": {
                "desc": "QUANTIDADE PEDIDO EXTRA",
                "type": "numeric",
                "selected": false
            },
            "QUANTIDADE SOLICITADA": {
                "desc": "QUANTIDADE SOLICITADA",
                "type": "numeric",
                "selected": false
            },
            "RECURSO": {
                "desc": "RECURSO",
                "type": "varchar",
                "selected": false
            },
            "SALDO QTD GERAL": {
                "desc": "SALDO QTD GERAL",
                "type": "numeric",
                "selected": false
            },
            "SALDO QTD SOLICITAÇÃO": {
                "desc": "SALDO QTD SOLICITAÇÃO",
                "type": "numeric",
                "selected": false
            },
            "QTO": {
                "desc": "QTO",
                "type": "varchar",
                "selected": false
            },
            "VALOR": {
                "desc": "VALOR",
                "type": "varchar",
                "selected": false
            },
            "PRECO": {
                "desc": "PRECO",
                "type": "varchar",
                "selected": false
            },
            "BASE": {
                "desc": "BASE",
                "type": "varchar",
                "selected": false
            },
            "BASEDECALCULO": {
                "desc": "BASEDECALCULO",
                "type": "varchar",
                "selected": false
            },
            "ALIQUOTA": {
                "desc": "ALIQUOTA",
                "type": "varchar",
                "selected": false
            },
            "CFOP": {
                "desc": "CFOP",
                "type": "varchar",
                "selected": false
            },
            "ICMSALIQUOTA": {
                "desc": "ICMSALIQUOTA",
                "type": "numeric",
                "selected": false
            },
            "ICMSBASE": {
                "desc": "ICMSBASE",
                "type": "numeric",
                "selected": false
            },
            "ICMSVALOR": {
                "desc": "ICMSVALOR",
                "type": "numeric",
                "selected": false
            },
            "IPIALIQUOTA": {
                "desc": "IPIALIQUOTA",
                "type": "numeric",
                "selected": false
            },
            "IPIBASE": {
                "desc": "IPIBASE",
                "type": "numeric",
                "selected": false
            },
            "IPIVALOR": {
                "desc": "IPIVALOR",
                "type": "numeric",
                "selected": false
            },
            "NOMEPRODUTO": {
                "desc": "NOMEPRODUTO",
                "type": "varchar",
                "selected": false
            },
            "NUMEROCCF": {
                "desc": "NUMEROCCF",
                "type": "varchar",
                "selected": false
            },
            "SITTRIBUTARIA": {
                "desc": "SITTRIBUTARIA",
                "type": "varchar",
                "selected": false
            },
            "CODPRD": {
                "desc": "CODPRD",
                "type": "varchar",
                "selected": false
            },
            "VALORRATCCU": {
                "desc": "VALORRATCCU",
                "type": "varchar",
                "selected": false
            }
        }
    },
    GCCUSTO: {
        "code": "GCCUSTO",
        "desc": "Centros de Custo (Estrutura Organizacional)",
        "priority": 6,
        "joinCondition": "PFUNC.CODCOLIGADA = GCCUSTO.CODCOLIGADA",
        "fields": {
            "CODCOLIGADA": {
                "desc": "Código da Coligada",
                "type": "smallint",
                "selected": false
            },
            "CODCCUSTO": {
                "desc": "Código do Centro de Custo",
                "type": "varchar",
                "selected": true
            },
            "NOME": {
                "desc": "Nome do Centro de Custo",
                "type": "varchar",
                "selected": true
            },
            "ATIVO": {
                "desc": "Centro de Custo Ativo (0/1)",
                "type": "smallint",
                "selected": true
            },
            "CODNATFINANCEIRA": {
                "desc": "CODNATFINANCEIRA",
                "type": "varchar",
                "selected": false
            },
            "NATORCAMENTARIA": {
                "desc": "NATORCAMENTARIA",
                "type": "varchar",
                "selected": false
            },
            "PAGAR": {
                "desc": "PAGAR",
                "type": "varchar",
                "selected": false
            },
            "RECEBER": {
                "desc": "RECEBER",
                "type": "varchar",
                "selected": false
            },
            "CODIGOPRD": {
                "desc": "CODIGOPRD",
                "type": "varchar",
                "selected": false
            },
            "PRODUTO": {
                "desc": "PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "QUANTIDADE": {
                "desc": "QUANTIDADE",
                "type": "numeric",
                "selected": false
            },
            "SEQ": {
                "desc": "SEQ",
                "type": "int",
                "selected": false
            },
            "TOTAL": {
                "desc": "TOTAL",
                "type": "numeric",
                "selected": false
            },
            "UND": {
                "desc": "UND",
                "type": "varchar",
                "selected": false
            },
            "UNITARIO": {
                "desc": "UNITARIO",
                "type": "numeric",
                "selected": false
            },
            "ANOCOMPENSACAO": {
                "desc": "ANOCOMPENSACAO",
                "type": "varchar",
                "selected": false
            },
            "ANODIGITACAO": {
                "desc": "ANODIGITACAO",
                "type": "varchar",
                "selected": false
            },
            "ANOEMISSAO": {
                "desc": "ANOEMISSAO",
                "type": "varchar",
                "selected": false
            },
            "CC_NV1": {
                "desc": "CC_NV1",
                "type": "varchar",
                "selected": false
            },
            "CC_NV2": {
                "desc": "CC_NV2",
                "type": "varchar",
                "selected": false
            },
            "CC_NV3": {
                "desc": "CC_NV3",
                "type": "varchar",
                "selected": false
            },
            "CLIENTE/FORNECEDOR": {
                "desc": "CLIENTE/FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "COD. COLIGADA": {
                "desc": "COD. COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "COLIGADA": {
                "desc": "COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "CONTA-CAIXA PGTO": {
                "desc": "CONTA-CAIXA PGTO",
                "type": "varchar",
                "selected": false
            },
            "DATACOMPENSACAO": {
                "desc": "DATACOMPENSACAO",
                "type": "varchar",
                "selected": false
            },
            "DATADIGITACAO": {
                "desc": "DATADIGITACAO",
                "type": "varchar",
                "selected": false
            },
            "DATAEMISSAO": {
                "desc": "DATAEMISSAO",
                "type": "varchar",
                "selected": false
            },
            "DIACOMPENSACAO": {
                "desc": "DIACOMPENSACAO",
                "type": "varchar",
                "selected": false
            },
            "DIADIGITACAO": {
                "desc": "DIADIGITACAO",
                "type": "varchar",
                "selected": false
            },
            "DIAEMISSAO": {
                "desc": "DIAEMISSAO",
                "type": "varchar",
                "selected": false
            },
            "FORMAPGTO": {
                "desc": "FORMAPGTO",
                "type": "varchar",
                "selected": false
            },
            "HISTORICO": {
                "desc": "HISTORICO",
                "type": "varchar",
                "selected": false
            },
            "MESCOMPENSACAO": {
                "desc": "MESCOMPENSACAO",
                "type": "varchar",
                "selected": false
            },
            "MESDIGITACAO": {
                "desc": "MESDIGITACAO",
                "type": "varchar",
                "selected": false
            },
            "MESEMISSAO": {
                "desc": "MESEMISSAO",
                "type": "varchar",
                "selected": false
            },
            "NT_NV1": {
                "desc": "NT_NV1",
                "type": "varchar",
                "selected": false
            },
            "NT_NV2": {
                "desc": "NT_NV2",
                "type": "varchar",
                "selected": false
            },
            "NUMERODOCUMENTO": {
                "desc": "NUMERODOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "ORIGEM": {
                "desc": "ORIGEM",
                "type": "varchar",
                "selected": false
            },
            "PAGAR OU RECEBER": {
                "desc": "PAGAR ou RECEBER",
                "type": "varchar",
                "selected": false
            },
            "PERCENTUALRATEIO": {
                "desc": "PERCENTUALRATEIO",
                "type": "varchar",
                "selected": false
            },
            "REFERENCIA_EXTRATO": {
                "desc": "REFERENCIA_EXTRATO",
                "type": "varchar",
                "selected": false
            },
            "REFERENCIA_LANCTO": {
                "desc": "REFERENCIA_LANCTO",
                "type": "varchar",
                "selected": false
            },
            "STATUS BAIXA DO LANÇAMENTO": {
                "desc": "STATUS BAIXA DO LANÇAMENTO",
                "type": "varchar",
                "selected": false
            },
            "STATUS LANÇAMENTO": {
                "desc": "STATUS LANÇAMENTO",
                "type": "varchar",
                "selected": false
            },
            "TIPO DE DOCUMENTO": {
                "desc": "TIPO DE DOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "VALOR": {
                "desc": "VALOR",
                "type": "varchar",
                "selected": false
            },
            "CLASSFIN": {
                "desc": "CLASSFIN",
                "type": "varchar",
                "selected": false
            },
            "CODCFO": {
                "desc": "CODCFO",
                "type": "varchar",
                "selected": false
            },
            "CODCLASSFIN": {
                "desc": "CODCLASSFIN",
                "type": "varchar",
                "selected": false
            },
            "CODCXA": {
                "desc": "CODCXA",
                "type": "varchar",
                "selected": false
            },
            "CONTACAIXA": {
                "desc": "CONTACAIXA",
                "type": "varchar",
                "selected": false
            },
            "DATABAIXA": {
                "desc": "DATABAIXA",
                "type": "varchar",
                "selected": false
            },
            "IDLAN": {
                "desc": "IDLAN",
                "type": "varchar",
                "selected": false
            },
            "NOMECLIFOR": {
                "desc": "NOMECLIFOR",
                "type": "varchar",
                "selected": false
            },
            "VALORBAIXA": {
                "desc": "VALORBAIXA",
                "type": "varchar",
                "selected": false
            },
            "COD_NATORCAMENTARIA": {
                "desc": "COD_NATORCAMENTARIA",
                "type": "varchar",
                "selected": false
            },
            "VALORRATEIO": {
                "desc": "VALORRATEIO",
                "type": "varchar",
                "selected": false
            },
            "CENTROCUSTO": {
                "desc": "CENTROCUSTO",
                "type": "varchar",
                "selected": false
            },
            "FORNECEDOR": {
                "desc": "FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "TIPODOCUMENTO": {
                "desc": "TIPODOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "USUARIO": {
                "desc": "USUARIO",
                "type": "varchar",
                "selected": false
            },
            "CLIENTEFORNECEDOR": {
                "desc": "CLIENTEFORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CODFILIAL": {
                "desc": "CODFILIAL",
                "type": "int",
                "selected": false
            },
            "DATAVENCIMENTO": {
                "desc": "DATAVENCIMENTO",
                "type": "datetime",
                "selected": false
            },
            "MOVIMENTO": {
                "desc": "MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "STATUS_LANCAMENTO": {
                "desc": "STATUS_LANCAMENTO",
                "type": "varchar",
                "selected": false
            },
            "TIPO": {
                "desc": "TIPO",
                "type": "varchar",
                "selected": false
            },
            "TIPODOC": {
                "desc": "TIPODOC",
                "type": "varchar",
                "selected": false
            },
            "USUARIOCRIACAO": {
                "desc": "USUARIOCRIACAO",
                "type": "varchar",
                "selected": false
            },
            "USUARIOCRIACAOORIGEM": {
                "desc": "USUARIOCRIACAOORIGEM",
                "type": "varchar",
                "selected": false
            },
            "VALORORIGINAL": {
                "desc": "VALORORIGINAL",
                "type": "numeric",
                "selected": false
            },
            "VALORORIGINAL1": {
                "desc": "VALORORIGINAL1",
                "type": "numeric",
                "selected": false
            },
            "TIPO_RECEITA_DESPESA": {
                "desc": "TIPO_RECEITA_DESPESA",
                "type": "varchar",
                "selected": false
            },
            "PARTICIPACAO": {
                "desc": "PARTICIPACAO",
                "type": "varchar",
                "selected": false
            },
            "VALORPAGO": {
                "desc": "VALORPAGO",
                "type": "varchar",
                "selected": false
            },
            "DIFERENCA_ORIGINAL_BAIXA": {
                "desc": "DIFERENCA_ORIGINAL_BAIXA",
                "type": "varchar",
                "selected": false
            },
            "CODIGOCOLIGADA": {
                "desc": "CODIGOCOLIGADA",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO": {
                "desc": "DESCRICAO",
                "type": "varchar",
                "selected": false
            },
            "NOMECLIFOR1": {
                "desc": "NOMECLIFOR1",
                "type": "varchar",
                "selected": false
            },
            "PARCELA": {
                "desc": "PARCELA",
                "type": "varchar",
                "selected": false
            },
            "USUARIO_CRIACAO": {
                "desc": "USUARIO_CRIACAO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_ORIGINAL": {
                "desc": "VALOR_ORIGINAL",
                "type": "varchar",
                "selected": false
            },
            "COMP": {
                "desc": "COMP",
                "type": "varchar",
                "selected": false
            },
            "VR_ACUMULADO": {
                "desc": "VR_ACUMULADO",
                "type": "varchar",
                "selected": false
            },
            "VR_COMP": {
                "desc": "VR_COMP",
                "type": "varchar",
                "selected": false
            },
            "NOMEFANTASIA": {
                "desc": "NOMEFANTASIA",
                "type": "varchar",
                "selected": false
            },
            "QUANTIDADE_CONSUMIDA": {
                "desc": "QUANTIDADE_CONSUMIDA",
                "type": "varchar",
                "selected": false
            },
            "CLASSIFICACAO": {
                "desc": "CLASSIFICACAO",
                "type": "varchar",
                "selected": false
            },
            "COD_PRODUTO": {
                "desc": "COD_PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "CODLOC": {
                "desc": "CODLOC",
                "type": "varchar",
                "selected": false
            },
            "CODTMV": {
                "desc": "CODTMV",
                "type": "varchar",
                "selected": false
            },
            "DATAMOVIMENTO": {
                "desc": "DATAMOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "IDMOV": {
                "desc": "IDMOV",
                "type": "varchar",
                "selected": false
            },
            "NOME_CENTRO_CUSTO": {
                "desc": "NOME_CENTRO_CUSTO",
                "type": "varchar",
                "selected": false
            },
            "NOME_COLIGADA": {
                "desc": "NOME_COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "NOME_FANTASIA_PRODUTO": {
                "desc": "NOME_FANTASIA_PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "NOME_FCFO": {
                "desc": "NOME_FCFO",
                "type": "varchar",
                "selected": false
            },
            "NOME_FILIAL": {
                "desc": "NOME_FILIAL",
                "type": "varchar",
                "selected": false
            },
            "NOME_LOCAL": {
                "desc": "NOME_LOCAL",
                "type": "varchar",
                "selected": false
            },
            "NUMEROSEQUENCIAL": {
                "desc": "NUMEROSEQUENCIAL",
                "type": "varchar",
                "selected": false
            },
            "PRECOUNITARIO": {
                "desc": "PRECOUNITARIO",
                "type": "varchar",
                "selected": false
            },
            "UN": {
                "desc": "UN",
                "type": "varchar",
                "selected": false
            },
            "VALORLIQUIDO": {
                "desc": "VALORLIQUIDO",
                "type": "varchar",
                "selected": false
            },
            "ANOVENCIMENTO": {
                "desc": "ANOVENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "DIAVENCIMENTO": {
                "desc": "DIAVENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "MESVENCIMENTO": {
                "desc": "MESVENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "ANOBAIXA": {
                "desc": "ANOBAIXA",
                "type": "varchar",
                "selected": false
            },
            "MESBAIXA": {
                "desc": "MESBAIXA",
                "type": "varchar",
                "selected": false
            },
            "ANOVCTO": {
                "desc": "ANOVCTO",
                "type": "int",
                "selected": false
            },
            "CÓDIGO MOVIMENTO": {
                "desc": "CÓDIGO MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "CÓDIGO PRODUTO": {
                "desc": "CÓDIGO PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "CODTRF": {
                "desc": "CODTRF",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO CENTRO DE CUSTO": {
                "desc": "DESCRICAO CENTRO DE CUSTO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO PRODUTO": {
                "desc": "DESCRICAO PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "DIABAIXA": {
                "desc": "DIABAIXA",
                "type": "int",
                "selected": false
            },
            "DIAVCTO": {
                "desc": "DIAVCTO",
                "type": "int",
                "selected": false
            },
            "IDPRJ": {
                "desc": "IDPRJ",
                "type": "int",
                "selected": false
            },
            "IDTRF": {
                "desc": "IDTRF",
                "type": "int",
                "selected": false
            },
            "MESVCTO": {
                "desc": "MESVCTO",
                "type": "int",
                "selected": false
            },
            "NOME MOVIMENTO": {
                "desc": "NOME MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "PROJETO": {
                "desc": "PROJETO",
                "type": "varchar",
                "selected": false
            },
            "STATUS DA FATURA": {
                "desc": "STATUS DA FATURA",
                "type": "varchar",
                "selected": false
            },
            "ATENDIMENTO": {
                "desc": "ATENDIMENTO",
                "type": "varchar",
                "selected": false
            },
            "CGCCFO": {
                "desc": "CGCCFO",
                "type": "varchar",
                "selected": false
            },
            "CIDADECOLIGADA": {
                "desc": "CIDADECOLIGADA",
                "type": "varchar",
                "selected": false
            },
            "CODATENDIMENTO": {
                "desc": "CODATENDIMENTO",
                "type": "int",
                "selected": false
            },
            "CODLOCAL": {
                "desc": "CODLOCAL",
                "type": "int",
                "selected": false
            },
            "CONDPAGAMENTO": {
                "desc": "CONDPAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "DATACRIACAO": {
                "desc": "DATACRIACAO",
                "type": "datetime",
                "selected": false
            },
            "FILIAL": {
                "desc": "FILIAL",
                "type": "varchar",
                "selected": false
            },
            "HISTORICOCURTO": {
                "desc": "HISTORICOCURTO",
                "type": "varchar",
                "selected": false
            },
            "HISTORICOLONGO": {
                "desc": "HISTORICOLONGO",
                "type": "varchar",
                "selected": false
            },
            "IMAGEM": {
                "desc": "IMAGEM",
                "type": "varchar",
                "selected": false
            },
            "LOCALESTOQUE": {
                "desc": "LOCALESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "NUMEROMOV": {
                "desc": "NUMEROMOV",
                "type": "varchar",
                "selected": false
            },
            "RUACOLIGADA": {
                "desc": "RUACOLIGADA",
                "type": "varchar",
                "selected": false
            },
            "SERIE": {
                "desc": "SERIE",
                "type": "varchar",
                "selected": false
            },
            "TIPOMOVIMENTO": {
                "desc": "TIPOMOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO FANATASIA": {
                "desc": "DESCRICAO FANATASIA",
                "type": "varchar",
                "selected": false
            },
            "PREÇO UNIT": {
                "desc": "PREÇO UNIT",
                "type": "varchar",
                "selected": false
            },
            "QTDE": {
                "desc": "QTDE",
                "type": "varchar",
                "selected": false
            },
            "VALOR CALC": {
                "desc": "VALOR CALC",
                "type": "varchar",
                "selected": false
            },
            "BAIRRO": {
                "desc": "BAIRRO",
                "type": "varchar",
                "selected": false
            },
            "CELULAR": {
                "desc": "CELULAR",
                "type": "varchar",
                "selected": false
            },
            "CEP": {
                "desc": "CEP",
                "type": "varchar",
                "selected": false
            },
            "CIDADE": {
                "desc": "CIDADE",
                "type": "varchar",
                "selected": false
            },
            "CNH": {
                "desc": "CNH",
                "type": "varchar",
                "selected": false
            },
            "CNHLETRA": {
                "desc": "CNHLETRA",
                "type": "varchar",
                "selected": false
            },
            "CODIGOCLIENTEFORNECEDOR": {
                "desc": "CODIGOCLIENTEFORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CPF": {
                "desc": "CPF",
                "type": "varchar",
                "selected": false
            },
            "DATAADMISSAO": {
                "desc": "DATAADMISSAO",
                "type": "datetime",
                "selected": false
            },
            "DATADEMISSAO": {
                "desc": "DATADEMISSAO",
                "type": "datetime",
                "selected": false
            },
            "DATANASCIMENTO": {
                "desc": "DATANASCIMENTO",
                "type": "datetime",
                "selected": false
            },
            "DATAVENCIMENTOCNH": {
                "desc": "DATAVENCIMENTOCNH",
                "type": "datetime",
                "selected": false
            },
            "DTULTIMAALTERACAO": {
                "desc": "DTULTIMAALTERACAO",
                "type": "datetime",
                "selected": false
            },
            "EMAIL": {
                "desc": "EMAIL",
                "type": "varchar",
                "selected": false
            },
            "ESTADO": {
                "desc": "ESTADO",
                "type": "varchar",
                "selected": false
            },
            "FUNCAO": {
                "desc": "FUNCAO",
                "type": "varchar",
                "selected": false
            },
            "LOGRADOURO": {
                "desc": "LOGRADOURO",
                "type": "varchar",
                "selected": false
            },
            "MATRICULA": {
                "desc": "MATRICULA",
                "type": "varchar",
                "selected": false
            },
            "NUMERO": {
                "desc": "NUMERO",
                "type": "varchar",
                "selected": false
            },
            "RG": {
                "desc": "RG",
                "type": "varchar",
                "selected": false
            },
            "SEXO": {
                "desc": "SEXO",
                "type": "varchar",
                "selected": false
            },
            "TELEFONE": {
                "desc": "TELEFONE",
                "type": "varchar",
                "selected": false
            },
            "CODIGOLOCALEST": {
                "desc": "CODIGOLOCALEST",
                "type": "varchar",
                "selected": false
            },
            "CODIGOPRODUTO": {
                "desc": "CODIGOPRODUTO",
                "type": "varchar",
                "selected": false
            },
            "DATAENTREGA": {
                "desc": "DATAENTREGA",
                "type": "varchar",
                "selected": false
            },
            "DESC_PAG": {
                "desc": "DESC_PAG",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAOPRODUTO": {
                "desc": "DESCRICAOPRODUTO",
                "type": "varchar",
                "selected": false
            },
            "END_OBRA": {
                "desc": "END_OBRA",
                "type": "varchar",
                "selected": false
            },
            "PAGAMENTO": {
                "desc": "PAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "PRAZOENTREGA": {
                "desc": "PRAZOENTREGA",
                "type": "varchar",
                "selected": false
            },
            "QTDEPRODUTO": {
                "desc": "QTDEPRODUTO",
                "type": "varchar",
                "selected": false
            },
            "SEQUENCIAL": {
                "desc": "SEQUENCIAL",
                "type": "varchar",
                "selected": false
            },
            "SOLICITANTE": {
                "desc": "SOLICITANTE",
                "type": "varchar",
                "selected": false
            },
            "ANOEMI": {
                "desc": "ANOEMI",
                "type": "int",
                "selected": false
            },
            "ANOEMI1": {
                "desc": "ANOEMI1",
                "type": "int",
                "selected": false
            },
            "ATUAÇÃOFORNECEDOR": {
                "desc": "ATUAÇÃOFORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CENTRO_CUSTO": {
                "desc": "CENTRO_CUSTO",
                "type": "varchar",
                "selected": false
            },
            "DATAEMISSÃO": {
                "desc": "DATAEMISSÃO",
                "type": "varchar",
                "selected": false
            },
            "DATASAIDA": {
                "desc": "DATASAIDA",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO_CENTROCUSTO": {
                "desc": "DESCRICAO_CENTROCUSTO",
                "type": "varchar",
                "selected": false
            },
            "DIAEMI": {
                "desc": "DIAEMI",
                "type": "int",
                "selected": false
            },
            "DIAEMI1": {
                "desc": "DIAEMI1",
                "type": "int",
                "selected": false
            },
            "EMPREI": {
                "desc": "EMPREI",
                "type": "varchar",
                "selected": false
            },
            "FROTA": {
                "desc": "FROTA",
                "type": "varchar",
                "selected": false
            },
            "IDPRD": {
                "desc": "IDPRD",
                "type": "int",
                "selected": false
            },
            "LOCEST": {
                "desc": "LOCEST",
                "type": "varchar",
                "selected": false
            },
            "MESEMI": {
                "desc": "MESEMI",
                "type": "int",
                "selected": false
            },
            "MESEMI1": {
                "desc": "MESEMI1",
                "type": "int",
                "selected": false
            },
            "NOMEMOV": {
                "desc": "NOMEMOV",
                "type": "varchar",
                "selected": false
            },
            "RECDESP": {
                "desc": "RECDESP",
                "type": "varchar",
                "selected": false
            },
            "STATUS": {
                "desc": "STATUS",
                "type": "varchar",
                "selected": false
            },
            "TIPO_MOVIMENTO": {
                "desc": "TIPO_MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "TOTALITEM": {
                "desc": "TOTALITEM",
                "type": "numeric",
                "selected": false
            },
            "UNIDADE": {
                "desc": "UNIDADE",
                "type": "varchar",
                "selected": false
            },
            "VALORBRUOTITEM": {
                "desc": "VALORBRUOTITEM",
                "type": "numeric",
                "selected": false
            },
            "VALORNF": {
                "desc": "VALORNF",
                "type": "numeric",
                "selected": false
            },
            "VALORUNITARIO": {
                "desc": "VALORUNITARIO",
                "type": "numeric",
                "selected": false
            },
            "VEICULOLEVE": {
                "desc": "VEICULOLEVE",
                "type": "varchar",
                "selected": false
            },
            "CODIGOCONTRATO": {
                "desc": "CODIGOCONTRATO",
                "type": "varchar",
                "selected": false
            },
            "CONFERENCIA": {
                "desc": "CONFERENCIA",
                "type": "varchar",
                "selected": false
            },
            "IDCONTRATO": {
                "desc": "IDCONTRATO",
                "type": "int",
                "selected": false
            },
            "NUMERO_MOVIMENTO_ORIGEM": {
                "desc": "NUMERO_MOVIMENTO_ORIGEM",
                "type": "varchar",
                "selected": false
            },
            "VALORNFLIQUIDO": {
                "desc": "VALORNFLIQUIDO",
                "type": "numeric",
                "selected": false
            },
            "GRUPOPRODUTO": {
                "desc": "GRUPOPRODUTO",
                "type": "varchar",
                "selected": false
            },
            "ID_PROJECT_1": {
                "desc": "ID_PROJECT_1",
                "type": "int",
                "selected": false
            },
            "ID_PROJECT_4": {
                "desc": "ID_PROJECT_4",
                "type": "int",
                "selected": false
            },
            "VALORTOTAL": {
                "desc": "VALORTOTAL",
                "type": "numeric",
                "selected": false
            },
            "CAMPOLIVRE": {
                "desc": "CAMPOLIVRE",
                "type": "varchar",
                "selected": false
            },
            "CONDICAO_PAGAMENTO": {
                "desc": "CONDICAO_PAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "CONTADOR": {
                "desc": "CONTADOR",
                "type": "int",
                "selected": false
            },
            "DATA_DIGITACAO": {
                "desc": "DATA_DIGITACAO",
                "type": "datetime",
                "selected": false
            },
            "DIFERENCA_EMISSAO_DIGITACAO": {
                "desc": "DIFERENCA_EMISSAO_DIGITACAO",
                "type": "int",
                "selected": false
            },
            "DIFERENCA_SAIDA_VENCIMENTO": {
                "desc": "DIFERENCA_SAIDA_VENCIMENTO",
                "type": "int",
                "selected": false
            },
            "PRIMEIRO_VENCIMENTO": {
                "desc": "PRIMEIRO_VENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "ALUGUEL_DATA_FIM": {
                "desc": "ALUGUEL_DATA_FIM",
                "type": "varchar",
                "selected": false
            },
            "ALUGUEL_DATA_INICIO": {
                "desc": "ALUGUEL_DATA_INICIO",
                "type": "varchar",
                "selected": false
            },
            "ALUGUEL_DIA": {
                "desc": "ALUGUEL_DIA",
                "type": "int",
                "selected": false
            },
            "ALUGUEL_PRAZO": {
                "desc": "ALUGUEL_PRAZO",
                "type": "int",
                "selected": false
            },
            "ALUGUEL_PRAZO_EXTENSO": {
                "desc": "ALUGUEL_PRAZO_EXTENSO",
                "type": "varchar",
                "selected": false
            },
            "ALUGUEL_VALOR": {
                "desc": "ALUGUEL_VALOR",
                "type": "numeric",
                "selected": false
            },
            "CODUND": {
                "desc": "CODUND",
                "type": "varchar",
                "selected": false
            },
            "COLIGADA_NOME": {
                "desc": "COLIGADA_NOME",
                "type": "varchar",
                "selected": false
            },
            "DATACONTRATO": {
                "desc": "DATACONTRATO",
                "type": "datetime",
                "selected": false
            },
            "DATAFIM": {
                "desc": "DATAFIM",
                "type": "datetime",
                "selected": false
            },
            "DATAINICIO": {
                "desc": "DATAINICIO",
                "type": "datetime",
                "selected": false
            },
            "DATATERMINO": {
                "desc": "DATATERMINO",
                "type": "datetime",
                "selected": false
            },
            "DESCRICAO_CONTRATO_ALUGUEL": {
                "desc": "DESCRICAO_CONTRATO_ALUGUEL",
                "type": "varchar",
                "selected": false
            },
            "ENDERECO_IMOVEL": {
                "desc": "ENDERECO_IMOVEL",
                "type": "varchar",
                "selected": false
            },
            "IDCNT": {
                "desc": "IDCNT",
                "type": "int",
                "selected": false
            },
            "LOCADOR_NOME_CPF_CNPJ": {
                "desc": "LOCADOR_NOME_CPF_CNPJ",
                "type": "varchar",
                "selected": false
            },
            "NSEQITMCNT": {
                "desc": "NSEQITMCNT",
                "type": "int",
                "selected": false
            },
            "CHAVE": {
                "desc": "CHAVE",
                "type": "varchar",
                "selected": false
            },
            "CÓDIGO DA COLIGADA": {
                "desc": "CÓDIGO DA COLIGADA",
                "type": "int",
                "selected": false
            },
            "CODIGO PRODUTO": {
                "desc": "CODIGO PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "DATA DE CRIAÇÃO": {
                "desc": "DATA DE CRIAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "DATA DE EMISSÃO": {
                "desc": "DATA DE EMISSÃO",
                "type": "datetime",
                "selected": false
            },
            "DESTINO LOCAL DE ESTOQUE": {
                "desc": "DESTINO LOCAL DE ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "DESTINOCENTROCUSTO": {
                "desc": "DESTINOCENTROCUSTO",
                "type": "varchar",
                "selected": false
            },
            "DESTINODATAEMISAO": {
                "desc": "DESTINODATAEMISAO",
                "type": "datetime",
                "selected": false
            },
            "DESTINOIDMOV": {
                "desc": "DESTINOIDMOV",
                "type": "int",
                "selected": false
            },
            "DESTINONUMEROMOV": {
                "desc": "DESTINONUMEROMOV",
                "type": "varchar",
                "selected": false
            },
            "DESTINOTIPOMOV": {
                "desc": "DESTINOTIPOMOV",
                "type": "varchar",
                "selected": false
            },
            "HORÁRIO DE CRIAÇÃO": {
                "desc": "HORÁRIO DE CRIAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "IDENTIFICADOR DO MOVIMENTO": {
                "desc": "IDENTIFICADOR DO MOVIMENTO",
                "type": "int",
                "selected": false
            },
            "LOCAL DE ESTOQUE": {
                "desc": "LOCAL DE ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "Nº MOVIMENTO": {
                "desc": "Nº MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "NSEQITMMOV": {
                "desc": "NSEQITMMOV",
                "type": "int",
                "selected": false
            },
            "TIPO MOVIMENTO": {
                "desc": "TIPO MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "USUÁRIO DA ULTIMA MODIFICAÇÃO": {
                "desc": "USUÁRIO DA ULTIMA MODIFICAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "USUÁRIO DE CRIAÇÃO": {
                "desc": "USUÁRIO DE CRIAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "NUMERONF": {
                "desc": "NUMERONF",
                "type": "varchar",
                "selected": false
            },
            "TOTAL_NF_DIGITADAS": {
                "desc": "TOTAL_NF_DIGITADAS",
                "type": "varchar",
                "selected": false
            },
            "STATUS_MOVIMENTO": {
                "desc": "STATUS_MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "ADM": {
                "desc": "ADM",
                "type": "varchar",
                "selected": false
            },
            "CPFCNPJFAVORECIDO": {
                "desc": "CPFCNPJFAVORECIDO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAOCONTRATO": {
                "desc": "DESCRICAOCONTRATO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAOFORMAPAGAMENTO": {
                "desc": "DESCRICAOFORMAPAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "DIRETOREXECUTIVO": {
                "desc": "DIRETOREXECUTIVO",
                "type": "varchar",
                "selected": false
            },
            "ENGCIVIL": {
                "desc": "ENGCIVIL",
                "type": "varchar",
                "selected": false
            },
            "FAVORECIDO": {
                "desc": "FAVORECIDO",
                "type": "varchar",
                "selected": false
            },
            "HISTORICOMOVIMENTO": {
                "desc": "HISTORICOMOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "LIDERCONTRATO": {
                "desc": "LIDERCONTRATO",
                "type": "varchar",
                "selected": false
            },
            "LIQUIDO_IR": {
                "desc": "LIQUIDO_IR",
                "type": "numeric",
                "selected": false
            },
            "PROPRIETARIO_CPF_CNPJ": {
                "desc": "PROPRIETARIO_CPF_CNPJ",
                "type": "varchar",
                "selected": false
            },
            "PROPRIETARIO_DADOS_BANCARIOS": {
                "desc": "PROPRIETARIO_DADOS_BANCARIOS",
                "type": "varchar",
                "selected": false
            },
            "PROPRIETARIO_ENDERECO": {
                "desc": "PROPRIETARIO_ENDERECO",
                "type": "varchar",
                "selected": false
            },
            "PROPRIETARIO_NOME": {
                "desc": "PROPRIETARIO_NOME",
                "type": "varchar",
                "selected": false
            },
            "REVISAO": {
                "desc": "REVISAO",
                "type": "int",
                "selected": false
            },
            "TIPOFORMAPAGAMENTO": {
                "desc": "TIPOFORMAPAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "VALORBRUTO": {
                "desc": "VALORBRUTO",
                "type": "numeric",
                "selected": false
            },
            "VALORDESC": {
                "desc": "VALORDESC",
                "type": "numeric",
                "selected": false
            },
            "VALORDESP": {
                "desc": "VALORDESP",
                "type": "numeric",
                "selected": false
            },
            "VALORIRRF": {
                "desc": "VALORIRRF",
                "type": "numeric",
                "selected": false
            },
            "QUANTIDADEORIGINAL": {
                "desc": "QUANTIDADEORIGINAL",
                "type": "numeric",
                "selected": false
            },
            "VALORBRUTOITEMORIG": {
                "desc": "VALORBRUTOITEMORIG",
                "type": "numeric",
                "selected": false
            },
            "HISTORICO_ITEM": {
                "desc": "HISTORICO_ITEM",
                "type": "varchar",
                "selected": false
            },
            "HISTORICO_NF": {
                "desc": "HISTORICO_NF",
                "type": "varchar",
                "selected": false
            },
            "Nº DO CONTRATO": {
                "desc": "Nº DO CONTRATO",
                "type": "varchar",
                "selected": false
            },
            "VALOR TOTAL DE DESCONTO SOBRE": {
                "desc": "VALOR TOTAL DE DESCONTO SOBRE A NF (NÃO",
                "type": "varchar",
                "selected": false
            },
            "FORNECEDOR CONTRATO": {
                "desc": "FORNECEDOR CONTRATO",
                "type": "varchar",
                "selected": false
            },
            "PERIODO_MEDICAO": {
                "desc": "PERIODO_MEDICAO",
                "type": "varchar",
                "selected": false
            },
            "SALDO": {
                "desc": "SALDO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_RETIDO_MEDICAO": {
                "desc": "VALOR_RETIDO_MEDICAO",
                "type": "varchar",
                "selected": false
            },
            "DATAAPROVACAO": {
                "desc": "DATAAPROVACAO",
                "type": "varchar",
                "selected": false
            },
            "MEDIA": {
                "desc": "MEDIA",
                "type": "varchar",
                "selected": false
            },
            "ANO EMISSAO NF": {
                "desc": "ANO EMISSAO NF",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_PRODUTO": {
                "desc": "CODIGO_PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "DATA DE EMISSÃO NF": {
                "desc": "DATA DE EMISSÃO NF",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO_FROTA": {
                "desc": "DESCRICAO_FROTA",
                "type": "varchar",
                "selected": false
            },
            "IDENTIFICADOR_MOVIMENTO": {
                "desc": "IDENTIFICADOR_MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "MES EMISSAO NF": {
                "desc": "MES EMISSAO NF",
                "type": "varchar",
                "selected": false
            },
            "NUMERO_SEQUENCIAL_ITEM_NF": {
                "desc": "NUMERO_SEQUENCIAL_ITEM_NF",
                "type": "varchar",
                "selected": false
            },
            "ALIQUOTA INSS": {
                "desc": "ALIQUOTA INSS",
                "type": "numeric",
                "selected": false
            },
            "ANO EMISSAO": {
                "desc": "ANO EMISSAO",
                "type": "varchar",
                "selected": false
            },
            "CENTRO CUSTO": {
                "desc": "CENTRO CUSTO",
                "type": "varchar",
                "selected": false
            },
            "CÓD. COL.": {
                "desc": "CÓD. COL.",
                "type": "int",
                "selected": false
            },
            "COFIRF": {
                "desc": "COFIRF",
                "type": "numeric",
                "selected": false
            },
            "CSLLRF": {
                "desc": "CSLLRF",
                "type": "numeric",
                "selected": false
            },
            "DATA BAIXA": {
                "desc": "DATA BAIXA",
                "type": "varchar",
                "selected": false
            },
            "DATA VENCIMENTO": {
                "desc": "DATA VENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "DT EMISSAO NF": {
                "desc": "DT EMISSAO NF",
                "type": "varchar",
                "selected": false
            },
            "ID MOV": {
                "desc": "ID MOV",
                "type": "int",
                "selected": false
            },
            "INSS": {
                "desc": "INSS",
                "type": "numeric",
                "selected": false
            },
            "IRRF": {
                "desc": "IRRF",
                "type": "numeric",
                "selected": false
            },
            "ISSRET": {
                "desc": "ISSRET",
                "type": "numeric",
                "selected": false
            },
            "LINHA": {
                "desc": "LINHA",
                "type": "int",
                "selected": false
            },
            "MES EMISSAO": {
                "desc": "MES EMISSAO",
                "type": "varchar",
                "selected": false
            },
            "Nº NF": {
                "desc": "Nº NF",
                "type": "varchar",
                "selected": false
            },
            "PISRF": {
                "desc": "PISRF",
                "type": "numeric",
                "selected": false
            },
            "STATUS NF": {
                "desc": "STATUS NF",
                "type": "varchar",
                "selected": false
            },
            "TIPO MOV": {
                "desc": "TIPO MOV",
                "type": "varchar",
                "selected": false
            },
            "TOTAL IMPOSTOS NF": {
                "desc": "TOTAL IMPOSTOS NF",
                "type": "numeric",
                "selected": false
            },
            "TOTAL LIQUIDO APOS ABAT": {
                "desc": "TOTAL LIQUIDO APOS ABAT",
                "type": "numeric",
                "selected": false
            },
            "VALOR BAIXADO": {
                "desc": "VALOR BAIXADO",
                "type": "numeric",
                "selected": false
            },
            "VALOR BRUTO NF": {
                "desc": "VALOR BRUTO NF",
                "type": "numeric",
                "selected": false
            },
            "CONTRATO_FORNECEDOR": {
                "desc": "CONTRATO_FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "DESCONTO_ALIMENTACAO": {
                "desc": "DESCONTO_ALIMENTACAO",
                "type": "varchar",
                "selected": false
            },
            "LIQUIDO": {
                "desc": "LIQUIDO",
                "type": "varchar",
                "selected": false
            },
            "PERCENTUAL_LIQUIDO%": {
                "desc": "PERCENTUAL_LIQUIDO%",
                "type": "varchar",
                "selected": false
            },
            "TOTALMEDICAO": {
                "desc": "TOTALMEDICAO",
                "type": "varchar",
                "selected": false
            },
            "MENOR_PRECO": {
                "desc": "MENOR_PRECO",
                "type": "varchar",
                "selected": false
            },
            "ULTIMA_DATA_COMPRA": {
                "desc": "ULTIMA_DATA_COMPRA",
                "type": "varchar",
                "selected": false
            },
            "CNPJFORNECEDOR": {
                "desc": "CNPJFORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CODIGOCENTROCUSTO": {
                "desc": "CODIGOCENTROCUSTO",
                "type": "varchar",
                "selected": false
            },
            "CODLOCALESTOQUE": {
                "desc": "CODLOCALESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "CODMOVIMENTO": {
                "desc": "CODMOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "VALORTOTALITEM": {
                "desc": "VALORTOTALITEM",
                "type": "numeric",
                "selected": false
            },
            "CODPRD": {
                "desc": "CODPRD",
                "type": "varchar",
                "selected": false
            },
            "VALORRATCCU": {
                "desc": "VALORRATCCU",
                "type": "varchar",
                "selected": false
            }
        }
    },
    TPRD: {
        "code": "TPRD",
        "desc": "Produtos / Serviços (Cadastro Geral)",
        "priority": 6,
        "joinCondition": "PFUNC.CODCOLIGADA = TPRD.CODCOLIGADA",
        "fields": {
            "CODCOLIGADA": {
                "desc": "Código da Coligada",
                "type": "smallint",
                "selected": false
            },
            "IDPRD": {
                "desc": "Identificador do Produto",
                "type": "int",
                "selected": true
            },
            "CODIGOPRD": {
                "desc": "Código do Produto",
                "type": "varchar",
                "selected": true
            },
            "NOMEFANTASIA": {
                "desc": "Nome Fantasia / Descrição",
                "type": "varchar",
                "selected": true
            },
            "CODIGOBARRA": {
                "desc": "Código de Barras",
                "type": "varchar",
                "selected": false
            },
            "INATIVO": {
                "desc": "Produto Inativo (0/1)",
                "type": "smallint",
                "selected": false
            },
            "CODCCUSTO": {
                "desc": "CODCCUSTO",
                "type": "varchar",
                "selected": false
            },
            "NOME": {
                "desc": "NOME",
                "type": "varchar",
                "selected": false
            },
            "QUANTIDADE_CONSUMIDA": {
                "desc": "QUANTIDADE_CONSUMIDA",
                "type": "varchar",
                "selected": false
            },
            "CODUNDCONTROLE": {
                "desc": "CODUNDCONTROLE",
                "type": "varchar",
                "selected": false
            },
            "PRODUTO": {
                "desc": "PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "QTDEPEDIDA": {
                "desc": "QTDEPEDIDA",
                "type": "numeric",
                "selected": false
            },
            "TAREFA": {
                "desc": "TAREFA",
                "type": "varchar",
                "selected": false
            },
            "%_APROPRIADO": {
                "desc": "%_APROPRIADO",
                "type": "varchar",
                "selected": false
            },
            "%_EXTRA": {
                "desc": "%_EXTRA",
                "type": "varchar",
                "selected": false
            },
            "CODGIS": {
                "desc": "CODGIS",
                "type": "varchar",
                "selected": false
            },
            "CODISM": {
                "desc": "CODISM",
                "type": "varchar",
                "selected": false
            },
            "CODPRJ": {
                "desc": "CODPRJ",
                "type": "varchar",
                "selected": false
            },
            "CODUND": {
                "desc": "CODUND",
                "type": "varchar",
                "selected": false
            },
            "DESCISM": {
                "desc": "DESCISM",
                "type": "varchar",
                "selected": false
            },
            "IDPRJ": {
                "desc": "IDPRJ",
                "type": "varchar",
                "selected": false
            },
            "QTD_APROPRIADA": {
                "desc": "QTD_APROPRIADA",
                "type": "varchar",
                "selected": false
            },
            "QTD_PREVISTO": {
                "desc": "QTD_PREVISTO",
                "type": "varchar",
                "selected": false
            },
            "QUANTIDADE_REALIZADO": {
                "desc": "QUANTIDADE_REALIZADO",
                "type": "varchar",
                "selected": false
            },
            "REVISAO": {
                "desc": "REVISAO",
                "type": "varchar",
                "selected": false
            },
            "SALDO_ESTOQUE": {
                "desc": "SALDO_ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "VALIDACAO": {
                "desc": "VALIDACAO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_APROPRIADO": {
                "desc": "VALOR_APROPRIADO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_PREVISTO": {
                "desc": "VALOR_PREVISTO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_RERALIZADO": {
                "desc": "VALOR_RERALIZADO",
                "type": "varchar",
                "selected": false
            },
            "VARICAO_FINANCEIRA": {
                "desc": "VARICAO_FINANCEIRA",
                "type": "varchar",
                "selected": false
            },
            "CENTROCUSTO": {
                "desc": "CENTROCUSTO",
                "type": "varchar",
                "selected": false
            },
            "CODIGOLOCALEST": {
                "desc": "CODIGOLOCALEST",
                "type": "varchar",
                "selected": false
            },
            "CODIGOPRODUTO": {
                "desc": "CODIGOPRODUTO",
                "type": "varchar",
                "selected": false
            },
            "DATAEMISSAO": {
                "desc": "DATAEMISSAO",
                "type": "varchar",
                "selected": false
            },
            "DATAENTREGA": {
                "desc": "DATAENTREGA",
                "type": "varchar",
                "selected": false
            },
            "DESC_PAG": {
                "desc": "DESC_PAG",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAOPRODUTO": {
                "desc": "DESCRICAOPRODUTO",
                "type": "varchar",
                "selected": false
            },
            "END_OBRA": {
                "desc": "END_OBRA",
                "type": "varchar",
                "selected": false
            },
            "IDMOV": {
                "desc": "IDMOV",
                "type": "varchar",
                "selected": false
            },
            "LOCALESTOQUE": {
                "desc": "LOCALESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "MOVIMENTO": {
                "desc": "MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "PAGAMENTO": {
                "desc": "PAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "PRAZOENTREGA": {
                "desc": "PRAZOENTREGA",
                "type": "varchar",
                "selected": false
            },
            "PRECOUNITARIO": {
                "desc": "PRECOUNITARIO",
                "type": "varchar",
                "selected": false
            },
            "QTDEPRODUTO": {
                "desc": "QTDEPRODUTO",
                "type": "varchar",
                "selected": false
            },
            "SEQUENCIAL": {
                "desc": "SEQUENCIAL",
                "type": "varchar",
                "selected": false
            },
            "SOLICITANTE": {
                "desc": "SOLICITANTE",
                "type": "varchar",
                "selected": false
            },
            "ANOEMI": {
                "desc": "ANOEMI",
                "type": "int",
                "selected": false
            },
            "ANOEMI1": {
                "desc": "ANOEMI1",
                "type": "int",
                "selected": false
            },
            "ATUAÇÃOFORNECEDOR": {
                "desc": "ATUAÇÃOFORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CENTRO_CUSTO": {
                "desc": "CENTRO_CUSTO",
                "type": "varchar",
                "selected": false
            },
            "CODCFO": {
                "desc": "CODCFO",
                "type": "varchar",
                "selected": false
            },
            "CODLOC": {
                "desc": "CODLOC",
                "type": "varchar",
                "selected": false
            },
            "CODTMV": {
                "desc": "CODTMV",
                "type": "varchar",
                "selected": false
            },
            "DATAEMISSÃO": {
                "desc": "DATAEMISSÃO",
                "type": "varchar",
                "selected": false
            },
            "DATASAIDA": {
                "desc": "DATASAIDA",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO": {
                "desc": "DESCRICAO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO_CENTROCUSTO": {
                "desc": "DESCRICAO_CENTROCUSTO",
                "type": "varchar",
                "selected": false
            },
            "DIAEMI": {
                "desc": "DIAEMI",
                "type": "int",
                "selected": false
            },
            "DIAEMI1": {
                "desc": "DIAEMI1",
                "type": "int",
                "selected": false
            },
            "EMPREI": {
                "desc": "EMPREI",
                "type": "varchar",
                "selected": false
            },
            "FROTA": {
                "desc": "FROTA",
                "type": "varchar",
                "selected": false
            },
            "HISTORICO": {
                "desc": "HISTORICO",
                "type": "varchar",
                "selected": false
            },
            "LOCEST": {
                "desc": "LOCEST",
                "type": "varchar",
                "selected": false
            },
            "MESEMI": {
                "desc": "MESEMI",
                "type": "int",
                "selected": false
            },
            "MESEMI1": {
                "desc": "MESEMI1",
                "type": "int",
                "selected": false
            },
            "NOMECLIFOR": {
                "desc": "NOMECLIFOR",
                "type": "varchar",
                "selected": false
            },
            "NOMEMOV": {
                "desc": "NOMEMOV",
                "type": "varchar",
                "selected": false
            },
            "NUMEROMOV": {
                "desc": "NUMEROMOV",
                "type": "varchar",
                "selected": false
            },
            "QUANTIDADE": {
                "desc": "QUANTIDADE",
                "type": "numeric",
                "selected": false
            },
            "RECDESP": {
                "desc": "RECDESP",
                "type": "varchar",
                "selected": false
            },
            "STATUS": {
                "desc": "STATUS",
                "type": "varchar",
                "selected": false
            },
            "TIPO_MOVIMENTO": {
                "desc": "TIPO_MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "TOTALITEM": {
                "desc": "TOTALITEM",
                "type": "numeric",
                "selected": false
            },
            "UNIDADE": {
                "desc": "UNIDADE",
                "type": "varchar",
                "selected": false
            },
            "USUARIOCRIACAO": {
                "desc": "USUARIOCRIACAO",
                "type": "varchar",
                "selected": false
            },
            "VALORBRUOTITEM": {
                "desc": "VALORBRUOTITEM",
                "type": "numeric",
                "selected": false
            },
            "VALORNF": {
                "desc": "VALORNF",
                "type": "numeric",
                "selected": false
            },
            "VALORUNITARIO": {
                "desc": "VALORUNITARIO",
                "type": "numeric",
                "selected": false
            },
            "VEICULOLEVE": {
                "desc": "VEICULOLEVE",
                "type": "varchar",
                "selected": false
            },
            "VALORNFLIQUIDO": {
                "desc": "VALORNFLIQUIDO",
                "type": "numeric",
                "selected": false
            },
            "VALORTOTAL": {
                "desc": "VALORTOTAL",
                "type": "numeric",
                "selected": false
            },
            "CHAVE": {
                "desc": "CHAVE",
                "type": "varchar",
                "selected": false
            },
            "CÓDIGO DA COLIGADA": {
                "desc": "CÓDIGO DA COLIGADA",
                "type": "int",
                "selected": false
            },
            "CODIGO PRODUTO": {
                "desc": "CODIGO PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "COLIGADA": {
                "desc": "COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "DATA DE CRIAÇÃO": {
                "desc": "DATA DE CRIAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "DATA DE EMISSÃO": {
                "desc": "DATA DE EMISSÃO",
                "type": "datetime",
                "selected": false
            },
            "DESTINO LOCAL DE ESTOQUE": {
                "desc": "DESTINO LOCAL DE ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "DESTINOCENTROCUSTO": {
                "desc": "DESTINOCENTROCUSTO",
                "type": "varchar",
                "selected": false
            },
            "DESTINODATAEMISAO": {
                "desc": "DESTINODATAEMISAO",
                "type": "datetime",
                "selected": false
            },
            "DESTINOIDMOV": {
                "desc": "DESTINOIDMOV",
                "type": "int",
                "selected": false
            },
            "DESTINONUMEROMOV": {
                "desc": "DESTINONUMEROMOV",
                "type": "varchar",
                "selected": false
            },
            "DESTINOTIPOMOV": {
                "desc": "DESTINOTIPOMOV",
                "type": "varchar",
                "selected": false
            },
            "HORÁRIO DE CRIAÇÃO": {
                "desc": "HORÁRIO DE CRIAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "IDENTIFICADOR DO MOVIMENTO": {
                "desc": "IDENTIFICADOR DO MOVIMENTO",
                "type": "int",
                "selected": false
            },
            "LOCAL DE ESTOQUE": {
                "desc": "LOCAL DE ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "Nº MOVIMENTO": {
                "desc": "Nº MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "NSEQITMMOV": {
                "desc": "NSEQITMMOV",
                "type": "int",
                "selected": false
            },
            "TIPO MOVIMENTO": {
                "desc": "TIPO MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "USUÁRIO DA ULTIMA MODIFICAÇÃO": {
                "desc": "USUÁRIO DA ULTIMA MODIFICAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "USUÁRIO DE CRIAÇÃO": {
                "desc": "USUÁRIO DE CRIAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "NUMERONF": {
                "desc": "NUMERONF",
                "type": "varchar",
                "selected": false
            },
            "FILIAL": {
                "desc": "FILIAL",
                "type": "varchar",
                "selected": false
            },
            "STATUS_MOVIMENTO": {
                "desc": "STATUS_MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "HISTORICO_ITEM": {
                "desc": "HISTORICO_ITEM",
                "type": "varchar",
                "selected": false
            },
            "HISTORICO_NF": {
                "desc": "HISTORICO_NF",
                "type": "varchar",
                "selected": false
            },
            "FORNECEDOR": {
                "desc": "FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "Nº DO CONTRATO": {
                "desc": "Nº DO CONTRATO",
                "type": "varchar",
                "selected": false
            },
            "PROJETO": {
                "desc": "PROJETO",
                "type": "varchar",
                "selected": false
            },
            "VALOR TOTAL DE DESCONTO SOBRE": {
                "desc": "VALOR TOTAL DE DESCONTO SOBRE A NF (NÃO",
                "type": "varchar",
                "selected": false
            },
            "FORNECEDOR CONTRATO": {
                "desc": "FORNECEDOR CONTRATO",
                "type": "varchar",
                "selected": false
            },
            "PERIODO_MEDICAO": {
                "desc": "PERIODO_MEDICAO",
                "type": "varchar",
                "selected": false
            },
            "SALDO": {
                "desc": "SALDO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_RETIDO_MEDICAO": {
                "desc": "VALOR_RETIDO_MEDICAO",
                "type": "varchar",
                "selected": false
            },
            "DATAAPROVACAO": {
                "desc": "DATAAPROVACAO",
                "type": "varchar",
                "selected": false
            },
            "DATA_EMISSAO_RECEBIDA": {
                "desc": "DATA_EMISSAO_RECEBIDA",
                "type": "varchar",
                "selected": false
            },
            "DATA_EMISSAO_SOLICITACAO": {
                "desc": "DATA_EMISSAO_SOLICITACAO",
                "type": "varchar",
                "selected": false
            },
            "DATA_ENTEGA": {
                "desc": "DATA_ENTEGA",
                "type": "varchar",
                "selected": false
            },
            "LOCAL_ESTOQUE": {
                "desc": "LOCAL_ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "NUMERO_ORDEM_COMPRA": {
                "desc": "NUMERO_ORDEM_COMPRA",
                "type": "varchar",
                "selected": false
            },
            "NUMERO_SOLICITACAO": {
                "desc": "NUMERO_SOLICITACAO",
                "type": "varchar",
                "selected": false
            },
            "QUANTIDADE_DIAS_SOLICITACAO_PA": {
                "desc": "QUANTIDADE_DIAS_SOLICITACAO_PARA_ORDEM_D",
                "type": "varchar",
                "selected": false
            },
            "QUANTIDADE_RECEBIDA": {
                "desc": "QUANTIDADE_RECEBIDA",
                "type": "varchar",
                "selected": false
            },
            "QUANTIDADEORIGINAL": {
                "desc": "QUANTIDADEORIGINAL",
                "type": "varchar",
                "selected": false
            },
            "USUARIO_COMPRADOR": {
                "desc": "USUARIO_COMPRADOR",
                "type": "varchar",
                "selected": false
            },
            "USUARIO_SOLICITANTE": {
                "desc": "USUARIO_SOLICITANTE",
                "type": "varchar",
                "selected": false
            },
            "MEDIA": {
                "desc": "MEDIA",
                "type": "varchar",
                "selected": false
            },
            "CODFILIAL": {
                "desc": "CODFILIAL",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_COLIGADA": {
                "desc": "CODIGO_COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_LOCAL_ESTOQUE": {
                "desc": "CODIGO_LOCAL_ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_PRODUTO": {
                "desc": "CODIGO_PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "CUSTOMEDIO": {
                "desc": "CUSTOMEDIO",
                "type": "varchar",
                "selected": false
            },
            "CUSTOUNITARIO": {
                "desc": "CUSTOUNITARIO",
                "type": "varchar",
                "selected": false
            },
            "IDENTIFICADOR_PRODUTO": {
                "desc": "IDENTIFICADOR_PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "SALDO_FINANCEIRO": {
                "desc": "SALDO_FINANCEIRO",
                "type": "varchar",
                "selected": false
            },
            "SALDO_FISICO": {
                "desc": "SALDO_FISICO",
                "type": "varchar",
                "selected": false
            },
            "ANO EMISSAO NF": {
                "desc": "ANO EMISSAO NF",
                "type": "varchar",
                "selected": false
            },
            "DATA DE EMISSÃO NF": {
                "desc": "DATA DE EMISSÃO NF",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO_FROTA": {
                "desc": "DESCRICAO_FROTA",
                "type": "varchar",
                "selected": false
            },
            "IDENTIFICADOR_MOVIMENTO": {
                "desc": "IDENTIFICADOR_MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "MES EMISSAO NF": {
                "desc": "MES EMISSAO NF",
                "type": "varchar",
                "selected": false
            },
            "NUMERO_SEQUENCIAL_ITEM_NF": {
                "desc": "NUMERO_SEQUENCIAL_ITEM_NF",
                "type": "varchar",
                "selected": false
            },
            "CODTRF": {
                "desc": "CODTRF",
                "type": "varchar",
                "selected": false
            },
            "DESCRIÇÃO TAREFA": {
                "desc": "DESCRIÇÃO TAREFA",
                "type": "varchar",
                "selected": false
            },
            "GRUPO DE CUSTO": {
                "desc": "GRUPO DE CUSTO",
                "type": "varchar",
                "selected": false
            },
            "IDPRJ1": {
                "desc": "IDPRJ1",
                "type": "int",
                "selected": false
            },
            "IDTRF": {
                "desc": "IDTRF",
                "type": "int",
                "selected": false
            },
            "QUANTIDADE ORÇADA": {
                "desc": "QUANTIDADE ORÇADA",
                "type": "numeric",
                "selected": false
            },
            "QUANTIDADE PEDIDO EXTRA": {
                "desc": "QUANTIDADE PEDIDO EXTRA",
                "type": "numeric",
                "selected": false
            },
            "QUANTIDADE SOLICITADA": {
                "desc": "QUANTIDADE SOLICITADA",
                "type": "numeric",
                "selected": false
            },
            "RECURSO": {
                "desc": "RECURSO",
                "type": "varchar",
                "selected": false
            },
            "SALDO QTD GERAL": {
                "desc": "SALDO QTD GERAL",
                "type": "numeric",
                "selected": false
            },
            "SALDO QTD SOLICITAÇÃO": {
                "desc": "SALDO QTD SOLICITAÇÃO",
                "type": "numeric",
                "selected": false
            },
            "QTD": {
                "desc": "QTD",
                "type": "varchar",
                "selected": false
            },
            "TOT": {
                "desc": "TOT",
                "type": "varchar",
                "selected": false
            },
            "CODIGO": {
                "desc": "CODIGO",
                "type": "varchar",
                "selected": false
            },
            "COLUMN1": {
                "desc": "Column1",
                "type": "varchar",
                "selected": false
            },
            "COLUMN2": {
                "desc": "Column2",
                "type": "varchar",
                "selected": false
            },
            "COLUMN3": {
                "desc": "Column3",
                "type": "varchar",
                "selected": false
            },
            "CODPRD": {
                "desc": "CODPRD",
                "type": "varchar",
                "selected": false
            },
            "UN": {
                "desc": "UN",
                "type": "varchar",
                "selected": false
            },
            "VALORRATCCU": {
                "desc": "VALORRATCCU",
                "type": "varchar",
                "selected": false
            }
        }
    },
    FBOLETO: {
        "code": "FBOLETO",
        "desc": "Boletos Bancários (Cobrança)",
        "priority": 3,
        "joinCondition": "PFUNC.CODCOLIGADA = FBOLETO.CODCOLIGADA",
        "fields": {
            "CODCOLIGADA": {
                "desc": "Código da Coligada",
                "type": "smallint",
                "selected": false
            },
            "IDBOLETO": {
                "desc": "Identificador do Boleto",
                "type": "int",
                "selected": true
            },
            "NOSSONUMERO": {
                "desc": "Nosso Número",
                "type": "varchar",
                "selected": true
            },
            "VALOR": {
                "desc": "Valor do Boleto",
                "type": "numeric",
                "selected": true
            },
            "DATAVENCIMENTO": {
                "desc": "Data de Vencimento",
                "type": "datetime",
                "selected": true
            },
            "DTLIMITEDESCONTO": {
                "desc": "DTLIMITEDESCONTO",
                "type": "varchar",
                "selected": false
            },
            "TIPODESCONTO": {
                "desc": "TIPODESCONTO",
                "type": "int",
                "selected": false
            },
            "VALORDESCONTO": {
                "desc": "VALORDESCONTO",
                "type": "numeric",
                "selected": false
            },
            "VALORDESCONTOPERCENTUAL": {
                "desc": "VALORDESCONTOPERCENTUAL",
                "type": "varchar",
                "selected": false
            },
            "PERCENTUAL_ATE_DATA": {
                "desc": "PERCENTUAL_ATE_DATA",
                "type": "varchar",
                "selected": false
            },
            "VALOR_JUROS_AO_DIA": {
                "desc": "VALOR_JUROS_AO_DIA",
                "type": "varchar",
                "selected": false
            },
            "PERCENTUALMULTAMORA": {
                "desc": "PERCENTUALMULTAMORA",
                "type": "int",
                "selected": false
            },
            "VENCIMENTO_BOLETO_DESCONTO": {
                "desc": "VENCIMENTO_BOLETO_DESCONTO",
                "type": "varchar",
                "selected": false
            },
            "VENCIMENTO_BOLETO_MULTA": {
                "desc": "VENCIMENTO_BOLETO_MULTA",
                "type": "varchar",
                "selected": false
            },
            "VCTOMULTABBONLINE": {
                "desc": "VCTOMULTABBONLINE",
                "type": "varchar",
                "selected": false
            },
            "JUROS": {
                "desc": "JUROS",
                "type": "varchar",
                "selected": false
            },
            "MULTA": {
                "desc": "MULTA",
                "type": "varchar",
                "selected": false
            },
            "AGENCIA / CODIGO CEDENTE": {
                "desc": "AGENCIA / CODIGO CEDENTE",
                "type": "varchar",
                "selected": false
            },
            "CEP CIDADE ESTADO PGTO": {
                "desc": "CEP CIDADE ESTADO PGTO",
                "type": "varchar",
                "selected": false
            },
            "EMAIL_COLIGADA": {
                "desc": "EMAIL_COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "ENDERECO_COLIGADA": {
                "desc": "ENDERECO_COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "NOME_COLIGADA": {
                "desc": "NOME_COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "NOSSONUMEROBRADESCO": {
                "desc": "NOSSONUMEROBRADESCO",
                "type": "varchar",
                "selected": false
            },
            "RUA BAIRRO PGTO": {
                "desc": "RUA BAIRRO PGTO",
                "type": "varchar",
                "selected": false
            },
            "TELEFONE_COLIGADA": {
                "desc": "TELEFONE_COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "AGENCIACODIGOBENEFICIARIOCEF": {
                "desc": "AGENCIACODIGOBENEFICIARIOCEF",
                "type": "varchar",
                "selected": false
            },
            "NOSSONUMEROCEF": {
                "desc": "NOSSONUMEROCEF",
                "type": "varchar",
                "selected": false
            },
            "INSTRUCAO_DIAS_PROTESTO_BOLETO": {
                "desc": "INSTRUCAO_DIAS_PROTESTO_BOLETO",
                "type": "varchar",
                "selected": false
            },
            "HISTORICO_LANCAMENTO": {
                "desc": "HISTORICO_LANCAMENTO",
                "type": "varchar",
                "selected": false
            },
            "DADOS_PARCELA": {
                "desc": "DADOS_PARCELA",
                "type": "varchar",
                "selected": false
            },
            "CLIENTE": {
                "desc": "CLIENTE",
                "type": "varchar",
                "selected": false
            },
            "VENCIMENTO": {
                "desc": "VENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "BOLETODATAVENCIMENTO": {
                "desc": "BOLETODATAVENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "BOLETOLINHADIGITAVEL": {
                "desc": "BOLETOLINHADIGITAVEL",
                "type": "varchar",
                "selected": false
            },
            "BOLETONOSSONUMERO": {
                "desc": "BOLETONOSSONUMERO",
                "type": "varchar",
                "selected": false
            },
            "BOLETOVALOR": {
                "desc": "BOLETOVALOR",
                "type": "numeric",
                "selected": false
            },
            "CLIENTECELULAR": {
                "desc": "CLIENTECELULAR",
                "type": "varchar",
                "selected": false
            },
            "CLIENTECPFCNPJ": {
                "desc": "CLIENTECPFCNPJ",
                "type": "varchar",
                "selected": false
            },
            "CLIENTEEMAIL": {
                "desc": "CLIENTEEMAIL",
                "type": "varchar",
                "selected": false
            },
            "CLIENTENOME": {
                "desc": "CLIENTENOME",
                "type": "varchar",
                "selected": false
            },
            "EMPRESACNPJ": {
                "desc": "EMPRESACNPJ",
                "type": "varchar",
                "selected": false
            },
            "EMPRESANOME": {
                "desc": "EMPRESANOME",
                "type": "varchar",
                "selected": false
            },
            "BOLETOPARCIAL": {
                "desc": "BOLETOPARCIAL",
                "type": "int",
                "selected": false
            },
            "CAMPOALFAOP1": {
                "desc": "CAMPOALFAOP1",
                "type": "varchar",
                "selected": false
            },
            "CAMPOALFAOP2": {
                "desc": "CAMPOALFAOP2",
                "type": "varchar",
                "selected": false
            },
            "CAMPOALFAOP3": {
                "desc": "CAMPOALFAOP3",
                "type": "varchar",
                "selected": false
            },
            "CARENCIAJUROS": {
                "desc": "CARENCIAJUROS",
                "type": "int",
                "selected": false
            },
            "CNABACEITE": {
                "desc": "CNABACEITE",
                "type": "int",
                "selected": false
            },
            "CNABCOMANDO": {
                "desc": "CNABCOMANDO",
                "type": "int",
                "selected": false
            },
            "CNABINSTRUCAO1": {
                "desc": "CNABINSTRUCAO1",
                "type": "int",
                "selected": false
            },
            "CNABINSTRUCAO2": {
                "desc": "CNABINSTRUCAO2",
                "type": "int",
                "selected": false
            },
            "CNABINSTRUCAO3": {
                "desc": "CNABINSTRUCAO3",
                "type": "int",
                "selected": false
            },
            "CNABSTATUS": {
                "desc": "CNABSTATUS",
                "type": "int",
                "selected": false
            },
            "CNABSTATUSPIX": {
                "desc": "CNABSTATUSPIX",
                "type": "int",
                "selected": false
            },
            "CODCOLFORMAPAGAMENTO": {
                "desc": "CODCOLFORMAPAGAMENTO",
                "type": "int",
                "selected": false
            },
            "CODCOLSACADO": {
                "desc": "CODCOLSACADO",
                "type": "int",
                "selected": false
            },
            "CODFILIAL": {
                "desc": "CODFILIAL",
                "type": "int",
                "selected": false
            },
            "CODIGOBARRA": {
                "desc": "CODIGOBARRA",
                "type": "varchar",
                "selected": false
            },
            "CONTRAAPRESENTACAO": {
                "desc": "CONTRAAPRESENTACAO",
                "type": "int",
                "selected": false
            },
            "DADOSREGISTRO": {
                "desc": "DADOSREGISTRO",
                "type": "varchar",
                "selected": false
            },
            "DADOSREGISTROASSINADO": {
                "desc": "DADOSREGISTROASSINADO",
                "type": "varchar",
                "selected": false
            },
            "DATAEMISSAO": {
                "desc": "DATAEMISSAO",
                "type": "datetime",
                "selected": false
            },
            "DATAINSTRUCAO1": {
                "desc": "DATAINSTRUCAO1",
                "type": "datetime",
                "selected": false
            },
            "DATAINSTRUCAO2": {
                "desc": "DATAINSTRUCAO2",
                "type": "datetime",
                "selected": false
            },
            "DATAINSTRUCAO3": {
                "desc": "DATAINSTRUCAO3",
                "type": "datetime",
                "selected": false
            },
            "DATAREGISTROONLINE": {
                "desc": "DATAREGISTROONLINE",
                "type": "datetime",
                "selected": false
            },
            "DESCONTO": {
                "desc": "DESCONTO",
                "type": "numeric",
                "selected": false
            },
            "EMAILSTATUS": {
                "desc": "EMAILSTATUS",
                "type": "int",
                "selected": false
            },
            "ESPECIECNAB": {
                "desc": "ESPECIECNAB",
                "type": "varchar",
                "selected": false
            },
            "FORMAPAGAMENTO": {
                "desc": "FORMAPAGAMENTO",
                "type": "int",
                "selected": false
            },
            "IDCONVENIO": {
                "desc": "IDCONVENIO",
                "type": "int",
                "selected": false
            },
            "IDREGISTROONLINE": {
                "desc": "IDREGISTROONLINE",
                "type": "varchar",
                "selected": false
            },
            "IPTE": {
                "desc": "IPTE",
                "type": "varchar",
                "selected": false
            },
            "JUROSAODIA": {
                "desc": "JUROSAODIA",
                "type": "numeric",
                "selected": false
            },
            "LINKPIX": {
                "desc": "LINKPIX",
                "type": "varchar",
                "selected": false
            },
            "MOTIVORECUSAREGISTROONLINE": {
                "desc": "MOTIVORECUSAREGISTROONLINE",
                "type": "varchar",
                "selected": false
            },
            "MULTADIA": {
                "desc": "MULTADIA",
                "type": "numeric",
                "selected": false
            },
            "NUMERODOCUMENTO": {
                "desc": "NUMERODOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "QRCODEPIX": {
                "desc": "QRCODEPIX",
                "type": "varchar",
                "selected": false
            },
            "QTDEDIASINSTRUCAO1": {
                "desc": "QTDEDIASINSTRUCAO1",
                "type": "int",
                "selected": false
            },
            "QTDEDIASINSTRUCAO2": {
                "desc": "QTDEDIASINSTRUCAO2",
                "type": "int",
                "selected": false
            },
            "QTDEDIASINSTRUCAO3": {
                "desc": "QTDEDIASINSTRUCAO3",
                "type": "int",
                "selected": false
            },
            "RECCREATEDBY": {
                "desc": "RECCREATEDBY",
                "type": "varchar",
                "selected": false
            },
            "RECCREATEDON": {
                "desc": "RECCREATEDON",
                "type": "datetime",
                "selected": false
            },
            "RECMODIFIEDBY": {
                "desc": "RECMODIFIEDBY",
                "type": "varchar",
                "selected": false
            },
            "RECMODIFIEDON": {
                "desc": "RECMODIFIEDON",
                "type": "datetime",
                "selected": false
            },
            "SACADO": {
                "desc": "SACADO",
                "type": "varchar",
                "selected": false
            },
            "SEQSIACC": {
                "desc": "SEQSIACC",
                "type": "int",
                "selected": false
            },
            "STATUS": {
                "desc": "STATUS",
                "type": "int",
                "selected": false
            },
            "TIPO": {
                "desc": "TIPO",
                "type": "int",
                "selected": false
            },
            "TIPOJUROSDIA": {
                "desc": "TIPOJUROSDIA",
                "type": "int",
                "selected": false
            },
            "PARTILHADO": {
                "desc": "PARTILHADO",
                "type": "int",
                "selected": false
            },
            "CODIGO_COLIGADA": {
                "desc": "CODIGO_COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "COLIGADA": {
                "desc": "COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "CONVENIO": {
                "desc": "CONVENIO",
                "type": "varchar",
                "selected": false
            },
            "DATA_CRIACAO": {
                "desc": "DATA_CRIACAO",
                "type": "varchar",
                "selected": false
            },
            "DATAEMISSAO_BOLETO": {
                "desc": "DATAEMISSAO_BOLETO",
                "type": "varchar",
                "selected": false
            },
            "DATAVENCIMENTO_BOLETO": {
                "desc": "DATAVENCIMENTO_BOLETO",
                "type": "varchar",
                "selected": false
            },
            "EMPREENDIMENTO": {
                "desc": "EMPREENDIMENTO",
                "type": "varchar",
                "selected": false
            },
            "HORARIO_CRIACAO": {
                "desc": "HORARIO_CRIACAO",
                "type": "varchar",
                "selected": false
            },
            "PARCELA": {
                "desc": "PARCELA",
                "type": "varchar",
                "selected": false
            },
            "STATUS_BOLETO": {
                "desc": "STATUS_BOLETO",
                "type": "varchar",
                "selected": false
            },
            "STATUS_REMESSA_BOLETO": {
                "desc": "STATUS_REMESSA_BOLETO",
                "type": "varchar",
                "selected": false
            },
            "USUARIO_CRIACAO": {
                "desc": "USUARIO_CRIACAO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_BOLETO": {
                "desc": "VALOR_BOLETO",
                "type": "varchar",
                "selected": false
            },
            "TIPOINSCRICAOEMPRESA": {
                "desc": "TIPOINSCRICAOEMPRESA",
                "type": "varchar",
                "selected": false
            },
            "CODIGODODESCONTO": {
                "desc": "CODIGODODESCONTO",
                "type": "varchar",
                "selected": false
            },
            "DATADODESCONTO": {
                "desc": "DATADODESCONTO",
                "type": "varchar",
                "selected": false
            },
            "VALORDODESCONTO": {
                "desc": "VALORDODESCONTO",
                "type": "varchar",
                "selected": false
            }
        }
    },
    TTMV: {
        "code": "TTMV",
        "desc": "Parâmetros / Tipos de Movimentos",
        "priority": 3,
        "joinCondition": "PFUNC.CODCOLIGADA = TTMV.CODCOLIGADA",
        "fields": {
            "CODCOLIGADA": {
                "desc": "Código da Coligada",
                "type": "smallint",
                "selected": false
            },
            "CODTMV": {
                "desc": "Tipo de Movimento",
                "type": "varchar",
                "selected": true
            },
            "NOME": {
                "desc": "Nome do Tipo de Movimento",
                "type": "varchar",
                "selected": true
            },
            "CODCCUSTO": {
                "desc": "CODCCUSTO",
                "type": "varchar",
                "selected": false
            },
            "CODIGOPRD": {
                "desc": "CODIGOPRD",
                "type": "varchar",
                "selected": false
            },
            "NOMEFANTASIA": {
                "desc": "NOMEFANTASIA",
                "type": "varchar",
                "selected": false
            },
            "QUANTIDADE_CONSUMIDA": {
                "desc": "QUANTIDADE_CONSUMIDA",
                "type": "varchar",
                "selected": false
            },
            "CLASSIFICACAO": {
                "desc": "CLASSIFICACAO",
                "type": "varchar",
                "selected": false
            },
            "COD_PRODUTO": {
                "desc": "COD_PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "CODCFO": {
                "desc": "CODCFO",
                "type": "varchar",
                "selected": false
            },
            "CODFILIAL": {
                "desc": "CODFILIAL",
                "type": "varchar",
                "selected": false
            },
            "CODLOC": {
                "desc": "CODLOC",
                "type": "varchar",
                "selected": false
            },
            "DATAEMISSAO": {
                "desc": "DATAEMISSAO",
                "type": "varchar",
                "selected": false
            },
            "DATAMOVIMENTO": {
                "desc": "DATAMOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "IDMOV": {
                "desc": "IDMOV",
                "type": "varchar",
                "selected": false
            },
            "NOME_CENTRO_CUSTO": {
                "desc": "NOME_CENTRO_CUSTO",
                "type": "varchar",
                "selected": false
            },
            "NOME_COLIGADA": {
                "desc": "NOME_COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "NOME_FANTASIA_PRODUTO": {
                "desc": "NOME_FANTASIA_PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "NOME_FCFO": {
                "desc": "NOME_FCFO",
                "type": "varchar",
                "selected": false
            },
            "NOME_FILIAL": {
                "desc": "NOME_FILIAL",
                "type": "varchar",
                "selected": false
            },
            "NOME_LOCAL": {
                "desc": "NOME_LOCAL",
                "type": "varchar",
                "selected": false
            },
            "NUMEROSEQUENCIAL": {
                "desc": "NUMEROSEQUENCIAL",
                "type": "varchar",
                "selected": false
            },
            "PRECOUNITARIO": {
                "desc": "PRECOUNITARIO",
                "type": "varchar",
                "selected": false
            },
            "QUANTIDADE": {
                "desc": "QUANTIDADE",
                "type": "varchar",
                "selected": false
            },
            "UN": {
                "desc": "UN",
                "type": "varchar",
                "selected": false
            },
            "VALORLIQUIDO": {
                "desc": "VALORLIQUIDO",
                "type": "varchar",
                "selected": false
            },
            "ANOBAIXA": {
                "desc": "ANOBAIXA",
                "type": "int",
                "selected": false
            },
            "ANOEMISSAO": {
                "desc": "ANOEMISSAO",
                "type": "int",
                "selected": false
            },
            "ANOVCTO": {
                "desc": "ANOVCTO",
                "type": "int",
                "selected": false
            },
            "CLIENTE/FORNECEDOR": {
                "desc": "CLIENTE/FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CÓDIGO MOVIMENTO": {
                "desc": "CÓDIGO MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "CÓDIGO PRODUTO": {
                "desc": "CÓDIGO PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "CODTRF": {
                "desc": "CODTRF",
                "type": "varchar",
                "selected": false
            },
            "COLIGADA": {
                "desc": "COLIGADA",
                "type": "varchar",
                "selected": false
            },
            "DATABAIXA": {
                "desc": "DATABAIXA",
                "type": "varchar",
                "selected": false
            },
            "DATAVENCIMENTO": {
                "desc": "DATAVENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO CENTRO DE CUSTO": {
                "desc": "DESCRICAO CENTRO DE CUSTO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO PRODUTO": {
                "desc": "DESCRICAO PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "DIABAIXA": {
                "desc": "DIABAIXA",
                "type": "int",
                "selected": false
            },
            "DIAEMISSAO": {
                "desc": "DIAEMISSAO",
                "type": "int",
                "selected": false
            },
            "DIAVCTO": {
                "desc": "DIAVCTO",
                "type": "int",
                "selected": false
            },
            "HISTORICO": {
                "desc": "HISTORICO",
                "type": "varchar",
                "selected": false
            },
            "IDLAN": {
                "desc": "IDLAN",
                "type": "int",
                "selected": false
            },
            "IDPRJ": {
                "desc": "IDPRJ",
                "type": "int",
                "selected": false
            },
            "IDTRF": {
                "desc": "IDTRF",
                "type": "int",
                "selected": false
            },
            "MESBAIXA": {
                "desc": "MESBAIXA",
                "type": "int",
                "selected": false
            },
            "MESEMISSAO": {
                "desc": "MESEMISSAO",
                "type": "int",
                "selected": false
            },
            "MESVCTO": {
                "desc": "MESVCTO",
                "type": "int",
                "selected": false
            },
            "NOME MOVIMENTO": {
                "desc": "NOME MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "NUMERODOCUMENTO": {
                "desc": "NUMERODOCUMENTO",
                "type": "varchar",
                "selected": false
            },
            "PAGAR OU RECEBER": {
                "desc": "PAGAR ou RECEBER",
                "type": "varchar",
                "selected": false
            },
            "PERCENTUALRATEIO": {
                "desc": "PERCENTUALRATEIO",
                "type": "numeric",
                "selected": false
            },
            "PROJETO": {
                "desc": "PROJETO",
                "type": "varchar",
                "selected": false
            },
            "STATUS BAIXA DO LANÇAMENTO": {
                "desc": "STATUS BAIXA DO LANÇAMENTO",
                "type": "varchar",
                "selected": false
            },
            "STATUS DA FATURA": {
                "desc": "STATUS DA FATURA",
                "type": "varchar",
                "selected": false
            },
            "STATUS LANÇAMENTO": {
                "desc": "STATUS LANÇAMENTO",
                "type": "varchar",
                "selected": false
            },
            "TIPO": {
                "desc": "TIPO",
                "type": "varchar",
                "selected": false
            },
            "ATENDIMENTO": {
                "desc": "ATENDIMENTO",
                "type": "varchar",
                "selected": false
            },
            "CENTROCUSTO": {
                "desc": "CENTROCUSTO",
                "type": "varchar",
                "selected": false
            },
            "CGCCFO": {
                "desc": "CGCCFO",
                "type": "varchar",
                "selected": false
            },
            "CIDADECOLIGADA": {
                "desc": "CIDADECOLIGADA",
                "type": "varchar",
                "selected": false
            },
            "CODATENDIMENTO": {
                "desc": "CODATENDIMENTO",
                "type": "int",
                "selected": false
            },
            "CODLOCAL": {
                "desc": "CODLOCAL",
                "type": "int",
                "selected": false
            },
            "CONDPAGAMENTO": {
                "desc": "CONDPAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "DATACRIACAO": {
                "desc": "DATACRIACAO",
                "type": "datetime",
                "selected": false
            },
            "FILIAL": {
                "desc": "FILIAL",
                "type": "varchar",
                "selected": false
            },
            "FORNECEDOR": {
                "desc": "FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "HISTORICOCURTO": {
                "desc": "HISTORICOCURTO",
                "type": "varchar",
                "selected": false
            },
            "HISTORICOLONGO": {
                "desc": "HISTORICOLONGO",
                "type": "varchar",
                "selected": false
            },
            "IMAGEM": {
                "desc": "IMAGEM",
                "type": "varchar",
                "selected": false
            },
            "LOCALESTOQUE": {
                "desc": "LOCALESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "NUMEROMOV": {
                "desc": "NUMEROMOV",
                "type": "varchar",
                "selected": false
            },
            "RUACOLIGADA": {
                "desc": "RUACOLIGADA",
                "type": "varchar",
                "selected": false
            },
            "SERIE": {
                "desc": "SERIE",
                "type": "varchar",
                "selected": false
            },
            "TIPOMOVIMENTO": {
                "desc": "TIPOMOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "USUARIOCRIACAO": {
                "desc": "USUARIOCRIACAO",
                "type": "varchar",
                "selected": false
            },
            "VALOR": {
                "desc": "VALOR",
                "type": "numeric",
                "selected": false
            },
            "CCUSTO": {
                "desc": "CCUSTO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO FANATASIA": {
                "desc": "DESCRICAO FANATASIA",
                "type": "varchar",
                "selected": false
            },
            "PREÇO UNIT": {
                "desc": "PREÇO UNIT",
                "type": "varchar",
                "selected": false
            },
            "QTDE": {
                "desc": "QTDE",
                "type": "varchar",
                "selected": false
            },
            "VALOR CALC": {
                "desc": "VALOR CALC",
                "type": "varchar",
                "selected": false
            },
            "ANOEMI": {
                "desc": "ANOEMI",
                "type": "int",
                "selected": false
            },
            "ANOEMI1": {
                "desc": "ANOEMI1",
                "type": "int",
                "selected": false
            },
            "ATUAÇÃOFORNECEDOR": {
                "desc": "ATUAÇÃOFORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CENTRO_CUSTO": {
                "desc": "CENTRO_CUSTO",
                "type": "varchar",
                "selected": false
            },
            "DATAEMISSÃO": {
                "desc": "DATAEMISSÃO",
                "type": "varchar",
                "selected": false
            },
            "DATASAIDA": {
                "desc": "DATASAIDA",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO": {
                "desc": "DESCRICAO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO_CENTROCUSTO": {
                "desc": "DESCRICAO_CENTROCUSTO",
                "type": "varchar",
                "selected": false
            },
            "DIAEMI": {
                "desc": "DIAEMI",
                "type": "int",
                "selected": false
            },
            "DIAEMI1": {
                "desc": "DIAEMI1",
                "type": "int",
                "selected": false
            },
            "EMPREI": {
                "desc": "EMPREI",
                "type": "varchar",
                "selected": false
            },
            "FROTA": {
                "desc": "FROTA",
                "type": "varchar",
                "selected": false
            },
            "IDPRD": {
                "desc": "IDPRD",
                "type": "int",
                "selected": false
            },
            "LOCEST": {
                "desc": "LOCEST",
                "type": "varchar",
                "selected": false
            },
            "MESEMI": {
                "desc": "MESEMI",
                "type": "int",
                "selected": false
            },
            "MESEMI1": {
                "desc": "MESEMI1",
                "type": "int",
                "selected": false
            },
            "NOMECLIFOR": {
                "desc": "NOMECLIFOR",
                "type": "varchar",
                "selected": false
            },
            "NOMEMOV": {
                "desc": "NOMEMOV",
                "type": "varchar",
                "selected": false
            },
            "RECDESP": {
                "desc": "RECDESP",
                "type": "varchar",
                "selected": false
            },
            "STATUS": {
                "desc": "STATUS",
                "type": "varchar",
                "selected": false
            },
            "TIPO_MOVIMENTO": {
                "desc": "TIPO_MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "TOTALITEM": {
                "desc": "TOTALITEM",
                "type": "numeric",
                "selected": false
            },
            "UNIDADE": {
                "desc": "UNIDADE",
                "type": "varchar",
                "selected": false
            },
            "VALORBRUOTITEM": {
                "desc": "VALORBRUOTITEM",
                "type": "numeric",
                "selected": false
            },
            "VALORNF": {
                "desc": "VALORNF",
                "type": "numeric",
                "selected": false
            },
            "VALORUNITARIO": {
                "desc": "VALORUNITARIO",
                "type": "numeric",
                "selected": false
            },
            "VEICULOLEVE": {
                "desc": "VEICULOLEVE",
                "type": "varchar",
                "selected": false
            },
            "CODIGOCONTRATO": {
                "desc": "CODIGOCONTRATO",
                "type": "varchar",
                "selected": false
            },
            "CONFERENCIA": {
                "desc": "CONFERENCIA",
                "type": "varchar",
                "selected": false
            },
            "ESTADO": {
                "desc": "ESTADO",
                "type": "varchar",
                "selected": false
            },
            "IDCONTRATO": {
                "desc": "IDCONTRATO",
                "type": "int",
                "selected": false
            },
            "NUMERO_MOVIMENTO_ORIGEM": {
                "desc": "NUMERO_MOVIMENTO_ORIGEM",
                "type": "varchar",
                "selected": false
            },
            "VALORNFLIQUIDO": {
                "desc": "VALORNFLIQUIDO",
                "type": "numeric",
                "selected": false
            },
            "GRUPOPRODUTO": {
                "desc": "GRUPOPRODUTO",
                "type": "varchar",
                "selected": false
            },
            "PRODUTO": {
                "desc": "PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "CNPJ_FORNECEDOR": {
                "desc": "CNPJ_FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_FORNECEDOR": {
                "desc": "CODIGO_FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_LOCAL_ESTOQUE": {
                "desc": "CODIGO_LOCAL_ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_UNIDADE_MEDIDA": {
                "desc": "CODIGO_UNIDADE_MEDIDA",
                "type": "varchar",
                "selected": false
            },
            "DATA_ALTERACAO": {
                "desc": "DATA_ALTERACAO",
                "type": "varchar",
                "selected": false
            },
            "DATA_CRIACAO": {
                "desc": "DATA_CRIACAO",
                "type": "varchar",
                "selected": false
            },
            "DATA_EMISSAO_NF": {
                "desc": "DATA_EMISSAO_NF",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO_LOCAL_ESTOQUE": {
                "desc": "DESCRICAO_LOCAL_ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO_PRODUTO": {
                "desc": "DESCRICAO_PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "NOME_FORNECEDOR": {
                "desc": "NOME_FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "NRO_SEQ_NF": {
                "desc": "NRO_SEQ_NF",
                "type": "varchar",
                "selected": false
            },
            "NUMERO_NF": {
                "desc": "NUMERO_NF",
                "type": "varchar",
                "selected": false
            },
            "SERIE_NF": {
                "desc": "SERIE_NF",
                "type": "varchar",
                "selected": false
            },
            "USUARIO_ALTERACAO": {
                "desc": "USUARIO_ALTERACAO",
                "type": "varchar",
                "selected": false
            },
            "USUARIO_CRIACAO": {
                "desc": "USUARIO_CRIACAO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_BRUTO_NF": {
                "desc": "VALOR_BRUTO_NF",
                "type": "varchar",
                "selected": false
            },
            "VALOR_DESCONTO_NF": {
                "desc": "VALOR_DESCONTO_NF",
                "type": "varchar",
                "selected": false
            },
            "VALOR_DESPESA_NF": {
                "desc": "VALOR_DESPESA_NF",
                "type": "varchar",
                "selected": false
            },
            "VALOR_FRENTE_NF": {
                "desc": "VALOR_FRENTE_NF",
                "type": "varchar",
                "selected": false
            },
            "VALOR_LIQUIDO_NF": {
                "desc": "VALOR_LIQUIDO_NF",
                "type": "varchar",
                "selected": false
            },
            "VALORTOTALITEM": {
                "desc": "VALORTOTALITEM",
                "type": "varchar",
                "selected": false
            },
            "VALORTOTAL": {
                "desc": "VALORTOTAL",
                "type": "numeric",
                "selected": false
            },
            "CAMPOLIVRE": {
                "desc": "CAMPOLIVRE",
                "type": "varchar",
                "selected": false
            },
            "CONDICAO_PAGAMENTO": {
                "desc": "CONDICAO_PAGAMENTO",
                "type": "varchar",
                "selected": false
            },
            "CONTADOR": {
                "desc": "CONTADOR",
                "type": "int",
                "selected": false
            },
            "DATA_DIGITACAO": {
                "desc": "DATA_DIGITACAO",
                "type": "datetime",
                "selected": false
            },
            "DIFERENCA_EMISSAO_DIGITACAO": {
                "desc": "DIFERENCA_EMISSAO_DIGITACAO",
                "type": "int",
                "selected": false
            },
            "DIFERENCA_SAIDA_VENCIMENTO": {
                "desc": "DIFERENCA_SAIDA_VENCIMENTO",
                "type": "int",
                "selected": false
            },
            "PRIMEIRO_VENCIMENTO": {
                "desc": "PRIMEIRO_VENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "CHAVE": {
                "desc": "CHAVE",
                "type": "varchar",
                "selected": false
            },
            "CÓDIGO DA COLIGADA": {
                "desc": "CÓDIGO DA COLIGADA",
                "type": "int",
                "selected": false
            },
            "CODIGO PRODUTO": {
                "desc": "CODIGO PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "DATA DE CRIAÇÃO": {
                "desc": "DATA DE CRIAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "DATA DE EMISSÃO": {
                "desc": "DATA DE EMISSÃO",
                "type": "datetime",
                "selected": false
            },
            "DESTINO LOCAL DE ESTOQUE": {
                "desc": "DESTINO LOCAL DE ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "DESTINOCENTROCUSTO": {
                "desc": "DESTINOCENTROCUSTO",
                "type": "varchar",
                "selected": false
            },
            "DESTINODATAEMISAO": {
                "desc": "DESTINODATAEMISAO",
                "type": "datetime",
                "selected": false
            },
            "DESTINOIDMOV": {
                "desc": "DESTINOIDMOV",
                "type": "int",
                "selected": false
            },
            "DESTINONUMEROMOV": {
                "desc": "DESTINONUMEROMOV",
                "type": "varchar",
                "selected": false
            },
            "DESTINOTIPOMOV": {
                "desc": "DESTINOTIPOMOV",
                "type": "varchar",
                "selected": false
            },
            "HORÁRIO DE CRIAÇÃO": {
                "desc": "HORÁRIO DE CRIAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "IDENTIFICADOR DO MOVIMENTO": {
                "desc": "IDENTIFICADOR DO MOVIMENTO",
                "type": "int",
                "selected": false
            },
            "LOCAL DE ESTOQUE": {
                "desc": "LOCAL DE ESTOQUE",
                "type": "varchar",
                "selected": false
            },
            "Nº MOVIMENTO": {
                "desc": "Nº MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "NSEQITMMOV": {
                "desc": "NSEQITMMOV",
                "type": "int",
                "selected": false
            },
            "SOLICITANTE": {
                "desc": "SOLICITANTE",
                "type": "varchar",
                "selected": false
            },
            "TIPO MOVIMENTO": {
                "desc": "TIPO MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "USUÁRIO DA ULTIMA MODIFICAÇÃO": {
                "desc": "USUÁRIO DA ULTIMA MODIFICAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "USUÁRIO DE CRIAÇÃO": {
                "desc": "USUÁRIO DE CRIAÇÃO",
                "type": "varchar",
                "selected": false
            },
            "NUMERONF": {
                "desc": "NUMERONF",
                "type": "varchar",
                "selected": false
            },
            "TOTAL_NF_DIGITADAS": {
                "desc": "TOTAL_NF_DIGITADAS",
                "type": "varchar",
                "selected": false
            },
            "STATUS_MOVIMENTO": {
                "desc": "STATUS_MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "HISTORICO_ITEM": {
                "desc": "HISTORICO_ITEM",
                "type": "varchar",
                "selected": false
            },
            "HISTORICO_NF": {
                "desc": "HISTORICO_NF",
                "type": "varchar",
                "selected": false
            },
            "Nº DO CONTRATO": {
                "desc": "Nº DO CONTRATO",
                "type": "varchar",
                "selected": false
            },
            "VALOR TOTAL DE DESCONTO SOBRE": {
                "desc": "VALOR TOTAL DE DESCONTO SOBRE A NF (NÃO",
                "type": "varchar",
                "selected": false
            },
            "FORNECEDOR CONTRATO": {
                "desc": "FORNECEDOR CONTRATO",
                "type": "varchar",
                "selected": false
            },
            "PERIODO_MEDICAO": {
                "desc": "PERIODO_MEDICAO",
                "type": "varchar",
                "selected": false
            },
            "SALDO": {
                "desc": "SALDO",
                "type": "varchar",
                "selected": false
            },
            "VALOR_RETIDO_MEDICAO": {
                "desc": "VALOR_RETIDO_MEDICAO",
                "type": "varchar",
                "selected": false
            },
            "DATAAPROVACAO": {
                "desc": "DATAAPROVACAO",
                "type": "varchar",
                "selected": false
            },
            "MEDIA": {
                "desc": "MEDIA",
                "type": "varchar",
                "selected": false
            },
            "ANO EMISSAO NF": {
                "desc": "ANO EMISSAO NF",
                "type": "varchar",
                "selected": false
            },
            "CODIGO_PRODUTO": {
                "desc": "CODIGO_PRODUTO",
                "type": "varchar",
                "selected": false
            },
            "DATA DE EMISSÃO NF": {
                "desc": "DATA DE EMISSÃO NF",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO_FROTA": {
                "desc": "DESCRICAO_FROTA",
                "type": "varchar",
                "selected": false
            },
            "IDENTIFICADOR_MOVIMENTO": {
                "desc": "IDENTIFICADOR_MOVIMENTO",
                "type": "varchar",
                "selected": false
            },
            "MES EMISSAO NF": {
                "desc": "MES EMISSAO NF",
                "type": "varchar",
                "selected": false
            },
            "NUMERO_SEQUENCIAL_ITEM_NF": {
                "desc": "NUMERO_SEQUENCIAL_ITEM_NF",
                "type": "varchar",
                "selected": false
            },
            "CODPRD": {
                "desc": "CODPRD",
                "type": "varchar",
                "selected": false
            },
            "VALORRATCCU": {
                "desc": "VALORRATCCU",
                "type": "varchar",
                "selected": false
            }
        }
    },
    TTRBMOV: {
        "code": "TTRBMOV",
        "desc": "Tributos e Impostos dos Movimentos",
        "priority": 3,
        "joinCondition": "PFUNC.CODCOLIGADA = TTRBMOV.CODCOLIGADA",
        "fields": {
            "CODCOLIGADA": {
                "desc": "Código da Coligada",
                "type": "smallint",
                "selected": false
            },
            "IDMOV": {
                "desc": "Identificador do Movimento",
                "type": "int",
                "selected": true
            },
            "CODTRB": {
                "desc": "Código do Tributo (Ex: ISS, ICMS)",
                "type": "varchar",
                "selected": true
            },
            "VALOR": {
                "desc": "Valor do Tributo",
                "type": "numeric",
                "selected": true
            },
            "ALIQUOTA": {
                "desc": "Alíquota Aplicada (%)",
                "type": "numeric",
                "selected": false
            },
            "ALIQUOTA INSS": {
                "desc": "ALIQUOTA INSS",
                "type": "numeric",
                "selected": false
            },
            "ANO EMISSAO": {
                "desc": "ANO EMISSAO",
                "type": "varchar",
                "selected": false
            },
            "CENTRO CUSTO": {
                "desc": "CENTRO CUSTO",
                "type": "varchar",
                "selected": false
            },
            "CÓD. COL.": {
                "desc": "CÓD. COL.",
                "type": "int",
                "selected": false
            },
            "COFIRF": {
                "desc": "COFIRF",
                "type": "numeric",
                "selected": false
            },
            "CSLLRF": {
                "desc": "CSLLRF",
                "type": "numeric",
                "selected": false
            },
            "DATA BAIXA": {
                "desc": "DATA BAIXA",
                "type": "varchar",
                "selected": false
            },
            "DATA VENCIMENTO": {
                "desc": "DATA VENCIMENTO",
                "type": "varchar",
                "selected": false
            },
            "DT EMISSAO NF": {
                "desc": "DT EMISSAO NF",
                "type": "varchar",
                "selected": false
            },
            "FORNECEDOR": {
                "desc": "FORNECEDOR",
                "type": "varchar",
                "selected": false
            },
            "ID MOV": {
                "desc": "ID MOV",
                "type": "int",
                "selected": false
            },
            "INSS": {
                "desc": "INSS",
                "type": "numeric",
                "selected": false
            },
            "IRRF": {
                "desc": "IRRF",
                "type": "numeric",
                "selected": false
            },
            "ISSRET": {
                "desc": "ISSRET",
                "type": "numeric",
                "selected": false
            },
            "LINHA": {
                "desc": "LINHA",
                "type": "int",
                "selected": false
            },
            "MES EMISSAO": {
                "desc": "MES EMISSAO",
                "type": "varchar",
                "selected": false
            },
            "Nº NF": {
                "desc": "Nº NF",
                "type": "varchar",
                "selected": false
            },
            "PISRF": {
                "desc": "PISRF",
                "type": "numeric",
                "selected": false
            },
            "STATUS NF": {
                "desc": "STATUS NF",
                "type": "varchar",
                "selected": false
            },
            "TIPO MOV": {
                "desc": "TIPO MOV",
                "type": "varchar",
                "selected": false
            },
            "TOTAL IMPOSTOS NF": {
                "desc": "TOTAL IMPOSTOS NF",
                "type": "numeric",
                "selected": false
            },
            "TOTAL LIQUIDO APOS ABAT": {
                "desc": "TOTAL LIQUIDO APOS ABAT",
                "type": "numeric",
                "selected": false
            },
            "VALOR BAIXADO": {
                "desc": "VALOR BAIXADO",
                "type": "numeric",
                "selected": false
            },
            "VALOR BRUTO NF": {
                "desc": "VALOR BRUTO NF",
                "type": "numeric",
                "selected": false
            },
            "COLUMN1": {
                "desc": "Column1",
                "type": "varchar",
                "selected": false
            },
            "COLUMN2": {
                "desc": "Column2",
                "type": "varchar",
                "selected": false
            },
            "BASEDECALCULO": {
                "desc": "BASEDECALCULO",
                "type": "varchar",
                "selected": false
            },
            "BASE": {
                "desc": "BASE",
                "type": "varchar",
                "selected": false
            },
            "TEXTO": {
                "desc": "TEXTO",
                "type": "varchar",
                "selected": false
            },
            "TEXTO2": {
                "desc": "TEXTO2",
                "type": "varchar",
                "selected": false
            },
            "CFOP": {
                "desc": "CFOP",
                "type": "varchar",
                "selected": false
            },
            "CODIGOPRD": {
                "desc": "CODIGOPRD",
                "type": "varchar",
                "selected": false
            },
            "CODUND": {
                "desc": "CODUND",
                "type": "varchar",
                "selected": false
            },
            "CST": {
                "desc": "CST",
                "type": "varchar",
                "selected": false
            },
            "ICMSALIQUOTA": {
                "desc": "ICMSALIQUOTA",
                "type": "numeric",
                "selected": false
            },
            "ICMSBASE": {
                "desc": "ICMSBASE",
                "type": "numeric",
                "selected": false
            },
            "ICMSVALOR": {
                "desc": "ICMSVALOR",
                "type": "numeric",
                "selected": false
            },
            "IPIALIQUOTA": {
                "desc": "IPIALIQUOTA",
                "type": "numeric",
                "selected": false
            },
            "IPIBASE": {
                "desc": "IPIBASE",
                "type": "numeric",
                "selected": false
            },
            "IPIVALOR": {
                "desc": "IPIVALOR",
                "type": "numeric",
                "selected": false
            },
            "NOMEPRODUTO": {
                "desc": "NOMEPRODUTO",
                "type": "varchar",
                "selected": false
            },
            "NUMEROCCF": {
                "desc": "NUMEROCCF",
                "type": "varchar",
                "selected": false
            },
            "PRECOUNITARIO": {
                "desc": "PRECOUNITARIO",
                "type": "numeric",
                "selected": false
            },
            "QUANTIDADE": {
                "desc": "QUANTIDADE",
                "type": "numeric",
                "selected": false
            },
            "SITTRIBUTARIA": {
                "desc": "SITTRIBUTARIA",
                "type": "varchar",
                "selected": false
            },
            "VALORTOTAL": {
                "desc": "VALORTOTAL",
                "type": "numeric",
                "selected": false
            },
            "ALIQUOTAISS": {
                "desc": "ALIQUOTAISS",
                "type": "numeric",
                "selected": false
            },
            "ALIQUOTAISSOUTROS": {
                "desc": "ALIQUOTAISSOUTROS",
                "type": "numeric",
                "selected": false
            },
            "ALIQUOTAISSRF": {
                "desc": "ALIQUOTAISSRF",
                "type": "numeric",
                "selected": false
            },
            "BAIRROCLIENTE": {
                "desc": "BAIRROCLIENTE",
                "type": "varchar",
                "selected": false
            },
            "BAIRROCOLETA": {
                "desc": "BAIRROCOLETA",
                "type": "varchar",
                "selected": false
            },
            "BAIRROENTREGA": {
                "desc": "BAIRROENTREGA",
                "type": "varchar",
                "selected": false
            },
            "BAIRROFILIAL": {
                "desc": "BAIRROFILIAL",
                "type": "varchar",
                "selected": false
            },
            "BASEICMS": {
                "desc": "BASEICMS",
                "type": "numeric",
                "selected": false
            },
            "BASEICMSST": {
                "desc": "BASEICMSST",
                "type": "numeric",
                "selected": false
            },
            "BASETRBIPI": {
                "desc": "BASETRBIPI",
                "type": "numeric",
                "selected": false
            },
            "BASETRBISS": {
                "desc": "BASETRBISS",
                "type": "numeric",
                "selected": false
            },
            "BASETRBISSOUTROS": {
                "desc": "BASETRBISSOUTROS",
                "type": "numeric",
                "selected": false
            },
            "BASETRBISSRF": {
                "desc": "BASETRBISSRF",
                "type": "numeric",
                "selected": false
            },
            "CEPCLIENTE": {
                "desc": "CEPCLIENTE",
                "type": "varchar",
                "selected": false
            },
            "CEPCOLETA": {
                "desc": "CEPCOLETA",
                "type": "varchar",
                "selected": false
            },
            "CEPENTREGA": {
                "desc": "CEPENTREGA",
                "type": "varchar",
                "selected": false
            },
            "CEPFILIAL": {
                "desc": "CEPFILIAL",
                "type": "varchar",
                "selected": false
            },
            "CHAVEACESSO": {
                "desc": "CHAVEACESSO",
                "type": "varchar",
                "selected": false
            },
            "CHAVEACESSONFE": {
                "desc": "CHAVEACESSONFE",
                "type": "varchar",
                "selected": false
            },
            "CIDADECLIENTE": {
                "desc": "CIDADECLIENTE",
                "type": "varchar",
                "selected": false
            },
            "CIDADEFILIAL": {
                "desc": "CIDADEFILIAL",
                "type": "varchar",
                "selected": false
            },
            "CIDADETRANSP": {
                "desc": "CIDADETRANSP",
                "type": "varchar",
                "selected": false
            },
            "CNPJCLIENTE": {
                "desc": "CNPJCLIENTE",
                "type": "varchar",
                "selected": false
            },
            "CNPJCPFCOLETA": {
                "desc": "CNPJCPFCOLETA",
                "type": "varchar",
                "selected": false
            },
            "CNPJCPFENTREGA": {
                "desc": "CNPJCPFENTREGA",
                "type": "varchar",
                "selected": false
            },
            "CNPJFILIAL": {
                "desc": "CNPJFILIAL",
                "type": "varchar",
                "selected": false
            },
            "CNPJTRANSP": {
                "desc": "CNPJTRANSP",
                "type": "varchar",
                "selected": false
            },
            "CODETDCOLETA": {
                "desc": "CODETDCOLETA",
                "type": "varchar",
                "selected": false
            },
            "CODETDENTREGA": {
                "desc": "CODETDENTREGA",
                "type": "varchar",
                "selected": false
            },
            "CODIGOSERVICO": {
                "desc": "CODIGOSERVICO",
                "type": "varchar",
                "selected": false
            },
            "CODNAT": {
                "desc": "CODNAT",
                "type": "varchar",
                "selected": false
            },
            "COMPLEMENTOCLIENTE": {
                "desc": "COMPLEMENTOCLIENTE",
                "type": "varchar",
                "selected": false
            },
            "COMPLEMENTOFILIAL": {
                "desc": "COMPLEMENTOFILIAL",
                "type": "varchar",
                "selected": false
            },
            "DATAEMISSAO": {
                "desc": "DATAEMISSAO",
                "type": "datetime",
                "selected": false
            },
            "DATASAIDA": {
                "desc": "DATASAIDA",
                "type": "datetime",
                "selected": false
            },
            "ENDCOLETA": {
                "desc": "ENDCOLETA",
                "type": "varchar",
                "selected": false
            },
            "ENDENTREGA": {
                "desc": "ENDENTREGA",
                "type": "varchar",
                "selected": false
            },
            "ENDTRANSP": {
                "desc": "ENDTRANSP",
                "type": "varchar",
                "selected": false
            },
            "ESTADOCLIENTE": {
                "desc": "ESTADOCLIENTE",
                "type": "varchar",
                "selected": false
            },
            "ESTADOFILIAL": {
                "desc": "ESTADOFILIAL",
                "type": "varchar",
                "selected": false
            },
            "ESTADOTRANSP": {
                "desc": "ESTADOTRANSP",
                "type": "varchar",
                "selected": false
            },
            "HISTORICOLONGO": {
                "desc": "HISTORICOLONGO",
                "type": "varchar",
                "selected": false
            },
            "IDMOV1": {
                "desc": "IDMOV1",
                "type": "int",
                "selected": false
            },
            "IMAGEM": {
                "desc": "IMAGEM",
                "type": "varchar",
                "selected": false
            },
            "INFCOMPLCONTRIBUINTE": {
                "desc": "INFCOMPLCONTRIBUINTE",
                "type": "varchar",
                "selected": false
            },
            "INSCREESTADUALTRANSP": {
                "desc": "INSCREESTADUALTRANSP",
                "type": "varchar",
                "selected": false
            },
            "INSCRESTCOLETA": {
                "desc": "INSCRESTCOLETA",
                "type": "varchar",
                "selected": false
            },
            "INSCRESTENTREGA": {
                "desc": "INSCRESTENTREGA",
                "type": "varchar",
                "selected": false
            },
            "INSCRICAOESTADUALCLIENTE": {
                "desc": "INSCRICAOESTADUALCLIENTE",
                "type": "varchar",
                "selected": false
            },
            "INSCRICAOESTADUALFILIAL": {
                "desc": "INSCRICAOESTADUALFILIAL",
                "type": "varchar",
                "selected": false
            },
            "INSCRICAOMUNICIAL": {
                "desc": "INSCRICAOMUNICIAL",
                "type": "varchar",
                "selected": false
            },
            "INSCRICAOMUNICIPALCLIENTE": {
                "desc": "INSCRICAOMUNICIPALCLIENTE",
                "type": "varchar",
                "selected": false
            },
            "MENSAGEM": {
                "desc": "MENSAGEM",
                "type": "varchar",
                "selected": false
            },
            "MUNICIPIOCOLETA": {
                "desc": "MUNICIPIOCOLETA",
                "type": "varchar",
                "selected": false
            },
            "MUNICIPIOENTREGA": {
                "desc": "MUNICIPIOENTREGA",
                "type": "varchar",
                "selected": false
            },
            "MUNICIPIOSERV": {
                "desc": "MUNICIPIOSERV",
                "type": "varchar",
                "selected": false
            },
            "NOMECFOP": {
                "desc": "NOMECFOP",
                "type": "varchar",
                "selected": false
            },
            "NOMECLIENTE": {
                "desc": "NOMECLIENTE",
                "type": "varchar",
                "selected": false
            },
            "NOMECOLETA": {
                "desc": "NOMECOLETA",
                "type": "varchar",
                "selected": false
            },
            "NOMEENTREGA": {
                "desc": "NOMEENTREGA",
                "type": "varchar",
                "selected": false
            },
            "NOMEFILIAL": {
                "desc": "NOMEFILIAL",
                "type": "varchar",
                "selected": false
            },
            "NOMETRANSP": {
                "desc": "NOMETRANSP",
                "type": "varchar",
                "selected": false
            },
            "NUMEROCLIENTE": {
                "desc": "NUMEROCLIENTE",
                "type": "varchar",
                "selected": false
            },
            "NUMEROFILIAL": {
                "desc": "NUMEROFILIAL",
                "type": "varchar",
                "selected": false
            },
            "NUMEROMOV": {
                "desc": "NUMEROMOV",
                "type": "varchar",
                "selected": false
            },
            "PESOBRUTO": {
                "desc": "PESOBRUTO",
                "type": "numeric",
                "selected": false
            },
            "RUACLIENTE": {
                "desc": "RUACLIENTE",
                "type": "varchar",
                "selected": false
            },
            "RUAFILIAL": {
                "desc": "RUAFILIAL",
                "type": "varchar",
                "selected": false
            },
            "SERIE": {
                "desc": "SERIE",
                "type": "varchar",
                "selected": false
            },
            "TELEFONECLIENTE": {
                "desc": "TELEFONECLIENTE",
                "type": "varchar",
                "selected": false
            },
            "TELEFONEFILIAL": {
                "desc": "TELEFONEFILIAL",
                "type": "varchar",
                "selected": false
            },
            "TIPOFRETE": {
                "desc": "TIPOFRETE",
                "type": "varchar",
                "selected": false
            },
            "VALORBRUTO": {
                "desc": "VALORBRUTO",
                "type": "numeric",
                "selected": false
            },
            "VALORBRUTOORIG": {
                "desc": "VALORBRUTOORIG",
                "type": "numeric",
                "selected": false
            },
            "VALORCOFINS": {
                "desc": "VALORCOFINS",
                "type": "numeric",
                "selected": false
            },
            "VALORCSLL": {
                "desc": "VALORCSLL",
                "type": "numeric",
                "selected": false
            },
            "VALORDESC": {
                "desc": "VALORDESC",
                "type": "numeric",
                "selected": false
            },
            "VALORDESP": {
                "desc": "VALORDESP",
                "type": "numeric",
                "selected": false
            },
            "VALORFRETE": {
                "desc": "VALORFRETE",
                "type": "numeric",
                "selected": false
            },
            "VALORICMS": {
                "desc": "VALORICMS",
                "type": "numeric",
                "selected": false
            },
            "VALORICMSST": {
                "desc": "VALORICMSST",
                "type": "numeric",
                "selected": false
            },
            "VALORINSS": {
                "desc": "VALORINSS",
                "type": "numeric",
                "selected": false
            },
            "VALORIRRF": {
                "desc": "VALORIRRF",
                "type": "numeric",
                "selected": false
            },
            "VALORLIQUIDO": {
                "desc": "VALORLIQUIDO",
                "type": "numeric",
                "selected": false
            },
            "VALORPIS": {
                "desc": "VALORPIS",
                "type": "numeric",
                "selected": false
            },
            "VALORSEGURO": {
                "desc": "VALORSEGURO",
                "type": "numeric",
                "selected": false
            },
            "VALORSERVICO": {
                "desc": "VALORSERVICO",
                "type": "numeric",
                "selected": false
            },
            "VALORTRBIPI": {
                "desc": "VALORTRBIPI",
                "type": "numeric",
                "selected": false
            },
            "VALORTRBISS": {
                "desc": "VALORTRBISS",
                "type": "numeric",
                "selected": false
            },
            "VALORTRBISSOUTROS": {
                "desc": "VALORTRBISSOUTROS",
                "type": "numeric",
                "selected": false
            },
            "VALORTRBISSRF": {
                "desc": "VALORTRBISSRF",
                "type": "numeric",
                "selected": false
            },
            "VOLUME": {
                "desc": "VOLUME",
                "type": "numeric",
                "selected": false
            }
        }
    },
    PFHSTFER: {
        "code": "PFHSTFER",
        "desc": "Histórico de Férias Tiradas",
        "priority": 3,
        "joinCondition": "PFUNC.CODCOLIGADA = PFHSTFER.CODCOLIGADA AND PFUNC.CHAPA = PFHSTFER.CHAPA",
        "fields": {
            "CODCOLIGADA": {
                "desc": "Código da Coligada",
                "type": "smallint",
                "selected": false
            },
            "CHAPA": {
                "desc": "Chapa / Matrícula",
                "type": "varchar",
                "selected": false
            },
            "DTFIMPERAQUIS": {
                "desc": "Fim do Período Aquisitivo",
                "type": "datetime",
                "selected": true
            },
            "DTINIGOZO": {
                "desc": "Data de Início do Gozo",
                "type": "datetime",
                "selected": true
            },
            "DTFIMGOZO": {
                "desc": "Data de Término do Gozo",
                "type": "datetime",
                "selected": true
            }
        }
    },
    PFUFERIASRECIBO: {
        "code": "PFUFERIASRECIBO",
        "desc": "Recibos de Pagamento de Férias",
        "priority": 3,
        "joinCondition": "PFUNC.CODCOLIGADA = PFUFERIASRECIBO.CODCOLIGADA AND PFUNC.CHAPA = PFUFERIASRECIBO.CHAPA",
        "fields": {
            "CODCOLIGADA": {
                "desc": "Código da Coligada",
                "type": "smallint",
                "selected": false
            },
            "CHAPA": {
                "desc": "Chapa / Matrícula",
                "type": "varchar",
                "selected": false
            },
            "FIMPERAQUIS": {
                "desc": "Fim do Período Aquisitivo",
                "type": "datetime",
                "selected": true
            },
            "IRRF": {
                "desc": "Imposto Retido (R$)",
                "type": "numeric",
                "selected": true
            },
            "DATAPAGTO": {
                "desc": "Data do Pagamento",
                "type": "datetime",
                "selected": true
            },
            "LIQUIDO": {
                "desc": "Valor Líquido Recebido (R$)",
                "type": "numeric",
                "selected": true
            }
        }
    },
    PFFINANC: {
        "code": "PFFINANC",
        "desc": "Ficha Financeira Acumulada (Histórico)",
        "priority": 5,
        "joinCondition": "PFUNC.CODCOLIGADA = PFFINANC.CODCOLIGADA AND PFUNC.CHAPA = PFFINANC.CHAPA",
        "fields": {
            "CODCOLIGADA": {
                "desc": "Código da Coligada",
                "type": "smallint",
                "selected": false
            },
            "CHAPA": {
                "desc": "Chapa / Matrícula",
                "type": "varchar",
                "selected": false
            },
            "ANOCOMP": {
                "desc": "Ano de Competência",
                "type": "smallint",
                "selected": true
            },
            "MESCOMP": {
                "desc": "Mês de Competência",
                "type": "smallint",
                "selected": true
            },
            "NROPEDIDO": {
                "desc": "Número do Pedido/Período",
                "type": "smallint",
                "selected": true
            },
            "CODEVENTO": {
                "desc": "Código do Evento",
                "type": "varchar",
                "selected": true
            },
            "VALOR": {
                "desc": "Valor Calculado (R$)",
                "type": "numeric",
                "selected": true
            },
            "REF": {
                "desc": "Referência (Horas/Dias)",
                "type": "numeric",
                "selected": true
            },
            "CODFILIAL": {
                "desc": "CODFILIAL",
                "type": "varchar",
                "selected": false
            },
            "CODSITUACAO": {
                "desc": "CODSITUACAO",
                "type": "varchar",
                "selected": false
            },
            "CODTIPO": {
                "desc": "CODTIPO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO": {
                "desc": "DESCRICAO",
                "type": "varchar",
                "selected": false
            },
            "DESCRICAO1": {
                "desc": "DESCRICAO1",
                "type": "varchar",
                "selected": false
            },
            "NOME": {
                "desc": "NOME",
                "type": "varchar",
                "selected": false
            },
            "NROCENCUSTOCONT": {
                "desc": "NROCENCUSTOCONT",
                "type": "varchar",
                "selected": false
            },
            "NROPERIODO": {
                "desc": "NROPERIODO",
                "type": "varchar",
                "selected": false
            },
            "NROPERIODO1": {
                "desc": "NROPERIODO1",
                "type": "varchar",
                "selected": false
            },
            "PROVDESCBASE": {
                "desc": "PROVDESCBASE",
                "type": "varchar",
                "selected": false
            },
            "QTDE": {
                "desc": "QTDE",
                "type": "int",
                "selected": false
            },
            "SEXO": {
                "desc": "SEXO",
                "type": "varchar",
                "selected": false
            },
            "CODCOTACAO": {
                "desc": "CODCOTACAO",
                "type": "varchar",
                "selected": false
            },
            "CARTEIRATRAB": {
                "desc": "CARTEIRATRAB",
                "type": "varchar",
                "selected": false
            },
            "CCUSTO": {
                "desc": "CCUSTO",
                "type": "varchar",
                "selected": false
            },
            "CEI": {
                "desc": "CEI",
                "type": "varchar",
                "selected": false
            },
            "CODIGO": {
                "desc": "CODIGO",
                "type": "varchar",
                "selected": false
            },
            "CODPESSOA": {
                "desc": "CODPESSOA",
                "type": "int",
                "selected": false
            },
            "CODRECEBIMENTO": {
                "desc": "CODRECEBIMENTO",
                "type": "varchar",
                "selected": false
            },
            "CODSECAO": {
                "desc": "CODSECAO",
                "type": "varchar",
                "selected": false
            },
            "CPF": {
                "desc": "CPF",
                "type": "varchar",
                "selected": false
            },
            "DATAADMISSAO": {
                "desc": "DATAADMISSAO",
                "type": "datetime",
                "selected": false
            },
            "DATADEMISSAO": {
                "desc": "DATADEMISSAO",
                "type": "datetime",
                "selected": false
            },
            "DTPAGTO": {
                "desc": "DTPAGTO",
                "type": "datetime",
                "selected": false
            },
            "ESTADO": {
                "desc": "ESTADO",
                "type": "varchar",
                "selected": false
            },
            "FUNCAO": {
                "desc": "FUNCAO",
                "type": "varchar",
                "selected": false
            },
            "HORA": {
                "desc": "HORA",
                "type": "int",
                "selected": false
            },
            "HORA_FORMAT": {
                "desc": "HORA_FORMAT",
                "type": "varchar",
                "selected": false
            },
            "INCFGTS": {
                "desc": "INCFGTS",
                "type": "int",
                "selected": false
            },
            "INCFGTS13": {
                "desc": "INCFGTS13",
                "type": "int",
                "selected": false
            },
            "INCINFREND": {
                "desc": "INCINFREND",
                "type": "int",
                "selected": false
            },
            "INCINSS": {
                "desc": "INCINSS",
                "type": "int",
                "selected": false
            },
            "INCINSS13": {
                "desc": "INCINSS13",
                "type": "int",
                "selected": false
            },
            "INCIRRF": {
                "desc": "INCIRRF",
                "type": "int",
                "selected": false
            },
            "INCIRRF13": {
                "desc": "INCIRRF13",
                "type": "int",
                "selected": false
            },
            "INCIRRFFERIAS": {
                "desc": "INCIRRFFERIAS",
                "type": "int",
                "selected": false
            },
            "SALARIO": {
                "desc": "SALARIO",
                "type": "numeric",
                "selected": false
            },
            "SERIECARTTRAB": {
                "desc": "SERIECARTTRAB",
                "type": "varchar",
                "selected": false
            },
            "TIPODEMISSAO": {
                "desc": "TIPODEMISSAO",
                "type": "varchar",
                "selected": false
            },
            "UFCARTTRAB": {
                "desc": "UFCARTTRAB",
                "type": "varchar",
                "selected": false
            },
            "LIQUIDO": {
                "desc": "LIQUIDO",
                "type": "varchar",
                "selected": false
            },
            "NOME1": {
                "desc": "NOME1",
                "type": "varchar",
                "selected": false
            },
            "VALE": {
                "desc": "VALE",
                "type": "varchar",
                "selected": false
            },
            "CODSITUACAO1": {
                "desc": "CODSITUACAO1",
                "type": "varchar",
                "selected": false
            },
            "COLUMN1": {
                "desc": "Column1",
                "type": "numeric",
                "selected": false
            },
            "DESCONTO": {
                "desc": "DESCONTO",
                "type": "varchar",
                "selected": false
            },
            "MESCOMP1": {
                "desc": "MESCOMP1",
                "type": "varchar",
                "selected": false
            },
            "NOME_EVENTO": {
                "desc": "NOME_EVENTO",
                "type": "varchar",
                "selected": false
            },
            "PROVENTO": {
                "desc": "PROVENTO",
                "type": "varchar",
                "selected": false
            }
        }
    }
};

// 2. PRE-BUILT TEMPLATES LIBRARY
const sqlTemplates = [
{
            "id": "pfvalorforcado-consulta",
            "title": "Consulta Valor Forcado com Situacao Ativa",
            "desc": "Consulta da tabela PFVALORFORCADO cruzando com funcionarios ativos e a descricao do evento.",
            "tables": [
                "PFVALORFORCADO",
                "PFUNC",
                "PEVENTO"
            ],
            "selectedFields": {
                "PFVALORFORCADO": [
                    "CODEVENTO",
                    "VALOR"
                ],
                "PFUNC": [
                    "CHAPA",
                    "NOME"
                ],
                "PEVENTO": [
                    "DESCRICAO"
                ]
            },
            "filters": [
                {
                    "table": "PFVALORFORCADO",
                    "field": "NROPERIODO",
                    "op": "=",
                    "value": "'1'",
                    "type": "custom"
                },
                {
                    "table": "PFVALORFORCADO",
                    "field": "MESCOMP",
                    "op": "=",
                    "value": "'6'",
                    "type": "custom"
                },
                {
                    "table": "PFVALORFORCADO",
                    "field": "ANOCOMP",
                    "op": "=",
                    "value": "'2026'",
                    "type": "custom"
                }
            ],
            "activeFilters": {
                "active": true,
                "coligada": false,
                "chapa": false
            },
            "customSQL": "SELECT \n    V.CHAPA,\n    F.NOME,\n    V.CODEVENTO,\n    E.DESCRICAO AS DESCRICAO_EVENTO,\n    V.VALOR\nFROM PFVALORFORCADO V\nINNER JOIN PFUNC F \n    ON V.CODCOLIGADA = F.CODCOLIGADA \n    AND V.CHAPA = F.CHAPA\nINNER JOIN PEVENTO E\n    ON V.CODCOLIGADA = E.CODCOLIGADA\n    AND V.CODEVENTO = E.CODIGO\nWHERE V.CODCOLIGADA = 1\n  AND V.NROPERIODO = 1\n  AND V.MESCOMP = 6\n  AND V.ANOCOMP = 2026\n  AND F.CODSITUACAO = 'A';"
        },
{
            "id": "ferias-aquisitivo",
            "title": "Controle de Férias (Período Aquisitivo)",
            "desc": "Histórico detalhado do gozo de férias confrontado com o período aquisitivo correspondente. Excelente para controle de saldos.",
            "tables": [
                "PFUNC",
                "PFHSTFER"
            ],
            "selectedFields": {
                "PFUNC": [
                    "CODCOLIGADA",
                    "CHAPA",
                    "NOME",
                    "DATAADMISSAO"
                ],
                "PFHSTFER": [
                    "DTFIMPERAQUIS",
                    "DTINIGOZO",
                    "DTFIMGOZO"
                ]
            },
            "filters": [
                {
                    "table": "PFUNC",
                    "field": "CODSITUACAO",
                    "op": "IN",
                    "value": "('a','f','v')",
                    "type": "static"
                },
                {
                    "table": "PFUNC",
                    "field": "CODTIPO",
                    "op": "=",
                    "value": "'N'",
                    "type": "static"
                }
            ],
            "activeFilters": {
                "active": false,
                "coligada": true,
                "chapa": false
            }
        },
        {
            "id": "bases-conferencia",
            "title": "Bases de Conclusão da Folha",
            "desc": "Relatório completo de auditoria das bases de cálculo de INSS, FGTS e IRRF calculados por funcionário e centro de custo.",
            "tables": [
                "PFUNC",
                "PPESSOA",
                "PSECAO",
                "GCCUSTO",
                "PFPERFF"
            ],
            "selectedFields": {
                "PFUNC": [
                    "CODCOLIGADA",
                    "CHAPA",
                    "CODSITUACAO",
                    "CODTIPO"
                ],
                "PPESSOA": [
                    "NOME",
                    "CPF"
                ],
                "PSECAO": [
                    "CODSECAO",
                    "DESCRICAO"
                ],
                "GCCUSTO": [
                    "NOME"
                ],
                "PFPERFF": [
                    "MESCOMP",
                    "ANOCOMP",
                    "LIQUIDO",
                    "BASEFGTS",
                    "BASEINSS",
                    "BASEIRRF"
                ]
            },
            "filters": [
                {
                    "table": "PFPERFF",
                    "field": "ANOCOMP",
                    "op": ">=",
                    "value": "'2025'",
                    "type": "custom"
                },
                {
                    "table": "PFPERFF",
                    "field": "MESCOMP",
                    "op": ">=",
                    "value": "'01'",
                    "type": "custom"
                }
            ],
            "activeFilters": {
                "active": false,
                "coligada": true,
                "chapa": false
            }
        },
        {
            "id": "ferias-calculadas",
            "title": "Férias Calculadas (Histórico e Valores)",
            "desc": "Retorna o histórico de recibos de férias calculados e pagos para conferência financeira de líquidos e impostos retidos.",
            "tables": [
                "PFUNC",
                "PSECAO",
                "GCCUSTO",
                "PFUFERIASRECIBO"
            ],
            "selectedFields": {
                "PFUNC": [
                    "CHAPA",
                    "NOME"
                ],
                "PSECAO": [
                    "DESCRICAO"
                ],
                "GCCUSTO": [
                    "NOME"
                ],
                "PFUFERIASRECIBO": [
                    "CODCOLIGADA",
                    "IRRF",
                    "DATAPAGTO",
                    "LIQUIDO"
                ]
            },
            "filters": [
                {
                    "table": "PFUFERIASRECIBO",
                    "field": "DATAPAGTO",
                    "op": ">=",
                    "value": "'2025-01-01'",
                    "type": "custom"
                }
            ],
            "activeFilters": {
                "active": false,
                "coligada": true,
                "chapa": false
            }
        },
        {
            "id": "contas-salario",
            "title": "Contas Bancárias de Folha",
            "desc": "Mapeamento completo das contas bancárias (Conta Salário e Conta Destino) ativas dos funcionários com nomes dos bancos.",
            "tables": [
                "PFUNC",
                "PPESSOA"
            ],
            "selectedFields": {
                "PFUNC": [
                    "CODCOLIGADA",
                    "CHAPA",
                    "DATAADMISSAO",
                    "NOME",
                    "CODBANCOPAGTO2",
                    "CONTAPAGAMENTO2"
                ],
                "PPESSOA": [
                    "CPF"
                ]
            },
            "filters": [
                {
                    "table": "PFUNC",
                    "field": "CODSITUACAO",
                    "op": "NOT IN",
                    "value": "('D', 'I', 'P')",
                    "type": "static"
                }
            ],
            "activeFilters": {
                "active": false,
                "coligada": true,
                "chapa": false
            }
        },
        {
            "id": "aniversariantes-mes",
            "title": "Aniversariantes do Mês",
            "desc": "Lista de funcionários aniversariantes do mês atual, com data de nascimento, seção e centro de custo associados.",
            "tables": [
                "PFUNC",
                "PPESSOA",
                "PSECAO",
                "GCCUSTO"
            ],
            "selectedFields": {
                "PFUNC": [
                    "CODCOLIGADA",
                    "NOME",
                    "CODSITUACAO"
                ],
                "PPESSOA": [
                    "DTNASCIMENTO"
                ],
                "PSECAO": [
                    "DESCRICAO"
                ],
                "GCCUSTO": [
                    "NOME"
                ]
            },
            "filters": [
                {
                    "table": "PPESSOA",
                    "field": "DTNASCIMENTO",
                    "op": "=",
                    "value": ":MES_S",
                    "type": "static"
                },
                {
                    "table": "PFUNC",
                    "field": "CODSITUACAO",
                    "op": "IN",
                    "value": "('A','F','V','E')",
                    "type": "static"
                }
            ],
            "activeFilters": {
                "active": false,
                "coligada": true,
                "chapa": false
            }
        },
        {
            "id": "custo-he",
            "title": "Custo de Horas Extras por Centro de Custo",
            "desc": "Relatório executivo contendo o resumo dos custos mensais acumulados de Horas Extras e adicionais por Centro de Custo.",
            "tables": [
                "PFUNC",
                "PSECAO",
                "GCCUSTO",
                "PFFINANC"
            ],
            "selectedFields": {
                "PFUNC": [
                    "CODCOLIGADA",
                    "CHAPA"
                ],
                "PSECAO": [
                    "DESCRICAO"
                ],
                "GCCUSTO": [
                    "NOME"
                ],
                "PFFINANC": [
                    "MESCOMP",
                    "ANOCOMP",
                    "VALOR",
                    "REF"
                ]
            },
            "filters": [
                {
                    "table": "PFFINANC",
                    "field": "ANOCOMP",
                    "op": "=",
                    "value": "'2024'",
                    "type": "custom"
                },
                {
                    "table": "PFFINANC",
                    "field": "CODEVENTO",
                    "op": "IN",
                    "value": "('1051','1055','1056','1057','1058','1059','1061')",
                    "type": "custom"
                }
            ],
            "activeFilters": {
                "active": false,
                "coligada": true,
                "chapa": false
            }
        },
    {
        id: "ativos-salario",
        title: "Relação de Funcionários Ativos",
        desc: "Lista de funcionários contratados ativos com salário, seção e cargo. Inclui dados pessoais integrados da tabela PPESSOA.",
        tables: ["PFUNC", "PPESSOA", "PSECAO", "PFUNCAO"],
        selectedFields: {
            PFUNC: ["CODCOLIGADA", "CHAPA", "CODSITUACAO", "SALARIO", "DATAADMISSAO"],
            PPESSOA: ["NOME", "CPF", "EMAIL"],
            PSECAO: ["CODIGO", "DESCRICAO"],
            PFUNCAO: ["NOME", "CBO"]
        },
        filters: [
            { table: "PFUNC", field: "CODSITUACAO", op: "<>", value: "'D'", type: "static" },
            { table: "PFUNC", field: "CODCOLIGADA", op: "=", value: ":PLN_CODCOLIGADA", type: "static" }
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
    },
    {
        id: "espelho-ponto",
        title: "Espelho de Ponto (Movimentação Diária)",
        desc: "Retorna o movimento diário apurado do ponto com faltas, atrasos e horas extras calculadas por funcionário.",
        tables: ["PFUNC", "PPESSOA", "AMOVFUN"],
        selectedFields: {
            PFUNC: ["CODCOLIGADA", "CHAPA"],
            PPESSOA: ["NOME"],
            AMOVFUN: ["DATA", "FALTA", "ATRASO", "EXTRA"]
        },
        filters: [
            { table: "AMOVFUN", field: "DATA", op: ">=", value: "'2026-05-01'", type: "custom" },
            { table: "AMOVFUN", field: "DATA", op: "<=", value: "'2026-05-31'", type: "custom" }
        ],
        activeFilters: { active: true, coligada: true, chapa: false }
    },
    {
        id: "historico-horarios",
        title: "Histórico de Horários e Escalas",
        desc: "Lista as mudanças históricas de horário de trabalho e escalas dos funcionários, vinculadas ao cadastro de horários.",
        tables: ["PFUNC", "PPESSOA", "PFHSTHOR", "AHORARIO"],
        selectedFields: {
            PFUNC: ["CODCOLIGADA", "CHAPA"],
            PPESSOA: ["NOME"],
            PFHSTHOR: ["DTMUDANCA", "CODHORARIO"],
            AHORARIO: ["DESCRICAO", "MINUTOSJORNADA"]
        },
        filters: [],
        activeFilters: { active: true, coligada: true, chapa: false }
    },
    {
        id: "extrato-banco-horas",
        title: "Extrato de Banco de Horas",
        desc: "Retorna o histórico de lançamentos e saldos acumulados de banco de horas por funcionário.",
        tables: ["PFUNC", "PPESSOA", "ABANCOHORAS"],
        selectedFields: {
            PFUNC: ["CODCOLIGADA", "CHAPA"],
            PPESSOA: ["NOME"],
            ABANCOHORAS: ["DATA", "SALDO", "SALDOANTERIOR"]
        },
        filters: [],
        activeFilters: { active: true, coligada: true, chapa: false }
    },
    {
        id: "criticas-ponto",
        title: "Críticas e Alertas de Ponto",
        desc: "Mapeia todas as ocorrências e críticas de ponto (como violação de interjornada, excesso de horas ou marcações ímpares).",
        tables: ["PFUNC", "PPESSOA", "AAVISOCALCULADO"],
        selectedFields: {
            PFUNC: ["CODCOLIGADA", "CHAPA"],
            PPESSOA: ["NOME"],
            AAVISOCALCULADO: ["DATAREFERENCIA", "CODAVISO"]
        },
        filters: [
            { table: "AAVISOCALCULADO", field: "CODAVISO", op: "IN", value: "(1, 2, 5)", type: "custom" }
        ],
        activeFilters: { active: true, coligada: true, chapa: false }
    },
    {
        id: "ficha-ponto-diaria",
        title: "Ficha de Ponto Diária Calculada",
        desc: "Lista a jornada diária calculada com minutos de trabalho, extras autorizados, atrasos e faltas consolidadas.",
        tables: ["PFUNC", "PPESSOA", "AAFHTFUN"],
        selectedFields: {
            PFUNC: ["CODCOLIGADA", "CHAPA"],
            PPESSOA: ["NOME"],
            AAFHTFUN: ["DATA", "BASE", "HTRAB", "EXTRAAUTORIZADO", "ATRASO", "FALTA"]
        },
        filters: [
            { table: "AAFHTFUN", field: "DATA", op: ">=", value: "'2026-05-01'", type: "custom" },
            { table: "AAFHTFUN", field: "DATA", op: "<=", value: "'2026-05-31'", type: "custom" }
        ],
        activeFilters: { active: true, coligada: true, chapa: false }
    },
    {
        id: "auditoria-eventos-diarios",
        title: "Movimentação de Eventos Diários",
        desc: "Apurada diária de eventos específicos do ponto (ex: DSR, horas extras, faltas) associados às verbas do colaborador.",
        tables: ["PFUNC", "PPESSOA", "AMOVFUNDIA"],
        selectedFields: {
            PFUNC: ["CODCOLIGADA", "CHAPA"],
            PPESSOA: ["NOME"],
            AMOVFUNDIA: ["DATA", "CODEVE", "NUMHORAS"]
        },
        filters: [],
        activeFilters: { active: true, coligada: true, chapa: false }
    },
    {
        id: "batidas-previstas",
        title: "Escalas e Batidas Previstas",
        desc: "Cruza o cadastro de horários dos colaboradores com o quadro de batidas de entrada/saída planejadas para auditoria de escalas.",
        tables: ["PFUNC", "PFHSTHOR", "AHORARIO", "AJORHOR"],
        selectedFields: {
            PFUNC: ["CODCOLIGADA", "CHAPA"],
            AHORARIO: ["CODIGO", "DESCRICAO"],
            AJORHOR: ["BATINICIO", "INDINICIO"]
        },
        filters: [],
        activeFilters: { active: true, coligada: true, chapa: false }
    },
    {
        id: "ferias-vencidas-alerta",
        title: "Alerta de Dobra de Férias",
        desc: "Mapeia períodos aquisitivos abertos com saldo de dias de férias cuja data limite de gozo está próxima do vencimento, ajudando a evitar multas de dobra.",
        tables: ["PFUNC", "PPESSOA", "PFUFERIAS"],
        selectedFields: {
            PFUNC: ["CODCOLIGADA", "CHAPA"],
            PPESSOA: ["NOME"],
            PFUFERIAS: ["INICIOPERAQUIS", "FIMPERAQUIS", "SALDO", "PERIODOABERTO"]
        },
        filters: [
            { table: "PFUFERIAS", field: "SALDO", op: ">", value: "0", type: "custom" },
            { table: "PFUFERIAS", field: "PERIODOABERTO", op: "=", value: "1", type: "custom" }
        ],
        activeFilters: { active: true, coligada: true, chapa: false }
    },
    {
        id: "historico-ferias-gozos",
        title: "Controle de Gozos de Férias",
        desc: "Relatório detalhado contendo a programação e histórico de gozos efetivos de férias por colaborador (início, fim e dias gozados).",
        tables: ["PFUNC", "PPESSOA", "PFERIAS"],
        selectedFields: {
            PFUNC: ["CODCOLIGADA", "CHAPA"],
            PPESSOA: ["NOME"],
            PFERIAS: ["INICIOGOZO", "FIMGOZO", "DIASGOZO", "FIMPERAQUIS"]
        },
        filters: [
            { table: "PFERIAS", field: "INICIOGOZO", op: ">=", value: "'2026-01-01'", type: "custom" }
        ],
        activeFilters: { active: true, coligada: true, chapa: false }
    },
    {
        id: "provisao-saldos-ferias",
        title: "Provisão e Saldos de Férias",
        desc: "Listagem consolidada do saldo de dias de férias de direito adquiridos por colaborador em todos os períodos aquisitivos em aberto.",
        tables: ["PFUNC", "PPESSOA", "PSECAO", "PFUFERIAS"],
        selectedFields: {
            PFUNC: ["CODCOLIGADA", "CHAPA"],
            PPESSOA: ["NOME"],
            PSECAO: ["DESCRICAO"],
            PFUFERIAS: ["FIMPERAQUIS", "SALDO", "PERIODOABERTO"]
        },
        filters: [
            { table: "PFUFERIAS", field: "SALDO", op: ">", value: "0", type: "custom" }
        ],
        activeFilters: { active: true, coligada: true, chapa: false }
    },
    {
        id: "acompanhamento-ponto",
        title: "Acompanhamento do Ponto Diário",
        desc: "Relatório avançado de acompanhamento do ponto diário. Consolida jornada, faltas, atrasos, banco de horas, críticas de interjornada, trabalho acima de 10h, repouso de refeição e folga de 7 dias.",
        tables: ["PFUNC", "PSECAO", "ABATFUN", "AMOVFUN", "ABANCOHORAS", "PEVENTOS", "AAFHTFUN", "AAVISOCALCULADO", "ABANCOHORFUN", "AMOVFUNDIA", "AJORNADAFUN", "AHORARIOJORNADA", "AJORHOR", "AOCORRENCIACALCULADA", "PSUBSTSUP", "PSUBSTCHEFE"],
        selectedFields: {
            PFUNC: ["CODCOLIGADA", "CHAPA", "NOME", "DATAADMISSAO", "CODTIPO", "CODSECAO"],
            PSECAO: ["DESCRICAO"],
            AAFHTFUN: ["DATA", "BASE", "HTRAB", "EXTRAAUTORIZADO", "ATRASO", "FALTA", "ADICIONAL"]
        },
        filters: [],
        activeFilters: { active: false, coligada: true, chapa: false },
        customSQL: `DECLARE @CODCOLIGADA INT = :$CODCOLIGADA
DECLARE @DTINICIO DATETIME = :PLN_$B$1_D
DECLARE @DTFIM DATETIME = :PLN_$B$2_D
DECLARE @CRITICA VARCHAR(1) = :PLN_$B$3_S;

WITH cte_HISTHOR AS
	(
	SELECT
		PFHSTHOR.CODCOLIGADA,
		PFHSTHOR.CHAPA,
		PFHSTHOR.DTMUDANCA,
		PFHSTHOR.CODHORARIO,
		'H' TIPO
	FROM PFHSTHOR
	WHERE
		PFHSTHOR.CODCOLIGADA = @CODCOLIGADA AND
		PFHSTHOR.DTMUDANCA <= @DTFIM
		
	UNION ALL
	
	SELECT
		AJORNADAFUN.CODCOLIGADA,
		AJORNADAFUN.CHAPA,
		AJORNADAFUN.DATAMUDANCA DTMUDANCA,
		AJORNADAFUN.CODHORARIO,
		'J' TIPO
	FROM AJORNADAFUN
	WHERE
		AJORNADAFUN.CODCOLIGADA = @CODCOLIGADA AND
		AJORNADAFUN.DATAMUDANCA <= @DTFIM
	),
	cte_BATIDAS AS
	(
	SELECT
		T.CODCOLIGADA,
		T.CHAPA,
		T.DATAREFERENCIA,
		T.BATIDA
	FROM
	(
	SELECT
		ABATFUN.CODCOLIGADA,
		ABATFUN.CHAPA,
		ABATFUN.DATAREFERENCIA,
		ABATFUN.BATIDA,
		ROW_NUMBER() OVER(PARTITION BY ABATFUN.CODCOLIGADA, ABATFUN.CHAPA, ABATFUN.DATAREFERENCIA ORDER BY ABATFUN.DATA, ABATFUN.BATIDA) SEQ
	FROM ABATFUN
	WHERE
		ABATFUN.CODCOLIGADA = @CODCOLIGADA
	) T
	WHERE
		SEQ = 1
	),

	cte_HORARIO AS
	(
	SELECT
		AHORARIO.CODCOLIGADA,
		AHORARIO.CODIGO AS CODHORARIO,
		AHORARIO.DESCRICAO AS HORARIO,
		(SELECT TOP 1
			AJORHOR.BATINICIO
		FROM AJORHOR
		WHERE
			AJORHOR.CODCOLIGADA = AHORARIO.CODCOLIGADA AND
			AJORHOR.CODHORARIO = AHORARIO.CODIGO 
		ORDER BY
			AJORHOR.INDINICIO,
			AJORHOR.BATINICIO
		) HORINICIO,
		'H' TIPO
	FROM AHORARIO
	WHERE
		AHORARIO.CODCOLIGADA = @CODCOLIGADA
		
	UNION ALL
	
	SELECT
		AHORARIOJORNADA.CODCOLIGADA,
		AHORARIOJORNADA.CODHORARIO,
		AHORARIOJORNADA.DESCRICAO AS HORARIO,
		'' HORAINICIO,
		'J' TIPO
	FROM AHORARIOJORNADA
	WHERE
		AHORARIOJORNADA.CODCOLIGADA = @CODCOLIGADA
	),
		
	cte_PERIODO AS
	(
	SELECT
		AAFHTFUN.CODCOLIGADA,
		AAFHTFUN.CHAPA,
		AAFHTFUN.DATA,
		CASE
			WHEN DATEPART(dw, AAFHTFUN.DATA) = 1 THEN 'DOM'
			WHEN DATEPART(dw, AAFHTFUN.DATA) = 2 THEN 'SEG'
			WHEN DATEPART(dw, AAFHTFUN.DATA) = 3 THEN 'TER'
			WHEN DATEPART(dw, AAFHTFUN.DATA) = 4 THEN 'QUA'
			WHEN DATEPART(dw, AAFHTFUN.DATA) = 5 THEN 'QUI'
			WHEN DATEPART(dw, AAFHTFUN.DATA) = 6 THEN 'SEX'
			WHEN DATEPART(dw, AAFHTFUN.DATA) = 7 THEN 'SAB'
		END DIA,
		CASE 
			WHEN AAFHTFUN.FERIADO > 0 THEN 'Feriado'
			WHEN AAFHTFUN.COMPENSADO > 0 THEN 'Compensado'
			WHEN AAFHTFUN.DESCANSO > 0 THEN 'Descanso'
			ELSE 'Normal'
		END TIPO,
		AAFHTFUN.BASE,
		AAFHTFUN.HTRAB,
		AAFHTFUN.EXTRAAUTORIZADO,
		AAFHTFUN.ATRASO,
		AAFHTFUN.FALTA,
		AAFHTFUN.ADICIONAL,
		(SELECT TOP 1
			DATEDIFF(mi, AOCORRENCIACALCULADA.INICIO,AOCORRENCIACALCULADA.FIM)+ISNULL(DATEDIFF(mi, AUX.INICIO,AUX.FIM),0)
		FROM AOCORRENCIACALCULADA(nolock)
		LEFT JOIN AOCORRENCIACALCULADA AUX(nolock) ON
			AUX.CODCOLIGADA = AOCORRENCIACALCULADA.CODCOLIGADA AND
			AUX.CHAPA = AOCORRENCIACALCULADA.CHAPA AND
			AUX.DATAREFERENCIA = AOCORRENCIACALCULADA.DATAREFERENCIA AND
			AUX.FIM = AOCORRENCIACALCULADA.INICIO AND
			AUX.TIPOOCORRENCIA IN ('EA')
		WHERE
			AOCORRENCIACALCULADA.CODCOLIGADA = AAFHTFUN.CODCOLIGADA AND
			AOCORRENCIACALCULADA.CHAPA = AAFHTFUN.CHAPA AND
			AOCORRENCIACALCULADA.DATAREFERENCIA = AAFHTFUN.DATA AND
			AOCORRENCIACALCULADA.TIPOOCORRENCIA = 'T'
		ORDER BY
			AOCORRENCIACALCULADA.INICIO
		) TRABINICIO,
		ISNULL(
		(SELECT
			SUM(DATEDIFF(mi, AOCORRENCIACALCULADA.INICIO,AOCORRENCIACALCULADA.FIM))
		FROM AOCORRENCIACALCULADA(nolock)
		WHERE
			AOCORRENCIACALCULADA.CODCOLIGADA = AAFHTFUN.CODCOLIGADA AND
			AOCORRENCIACALCULADA.CHAPA = AAFHTFUN.CHAPA AND
			AOCORRENCIACALCULADA.DATAREFERENCIA = AAFHTFUN.DATA AND
			AOCORRENCIACALCULADA.TIPOOCORRENCIA = 'AREF' AND
			(
			EXISTS (SELECT 1
					FROM ABATFUN
					WHERE
						ABATFUN.CODCOLIGADA = AAFHTFUN.CODCOLIGADA AND
						ABATFUN.CHAPA = AAFHTFUN.CHAPA AND
						ISNULL(ABATFUN.DATAREFERENCIA,ABATFUN.BATIDA) = AOCORRENCIACALCULADA.DATAREFERENCIA AND
						ABATFUN.BATIDA = (DATEPART(HH,AOCORRENCIACALCULADA.INICIO)*60)+DATEPART(mi,AOCORRENCIACALCULADA.INICIO)
						) AND
			EXISTS (SELECT 1
					FROM ABATFUN
					WHERE
						ABATFUN.CODCOLIGADA = AAFHTFUN.CODCOLIGADA AND
						ABATFUN.CHAPA = AAFHTFUN.CHAPA AND
						ISNULL(ABATFUN.DATAREFERENCIA,ABATFUN.BATIDA) = AOCORRENCIACALCULADA.DATAREFERENCIA AND
						ABATFUN.BATIDA >= (DATEPART(HH,AOCORRENCIACALCULADA.FIM)*60)+DATEPART(mi,AOCORRENCIACALCULADA.FIM)
					)
				)
			),
			(SELECT
				MAX(CASE WHEN SEQ = 3 THEN BATIDA ELSE 0 END) -
				MAX(CASE WHEN SEQ = 2 THEN BATIDA ELSE 0 END)
			FROM
			(SELECT
				ABATFUN.DATAREFERENCIA,
				ABATFUN.BATIDA,
				ROW_NUMBER() OVER(ORDER BY ISNULL(ABATFUN.DATAREFERENCIA,ABATFUN.DATA), ABATFUN.BATIDA) SEQ
			FROM ABATFUN
			WHERE
				ABATFUN.CODCOLIGADA = AAFHTFUN.CODCOLIGADA AND
				ABATFUN.CHAPA = AAFHTFUN.CHAPA AND
				ISNULL(ABATFUN.DATAREFERENCIA,ABATFUN.DATA) = AAFHTFUN.DATA
			) T
			WHERE
				SEQ IN (2,3)
			HAVING
				(MAX(CASE WHEN SEQ = 3 THEN BATIDA ELSE 0 END) -
				MAX(CASE WHEN SEQ = 2 THEN BATIDA ELSE 0 END)) > 0
			)
			) AS REF,
			ISNULL(
			(SELECT TOP 1
				0
			FROM AAFHTFUN AS AUX
			WHERE
				AUX.CODCOLIGADA = AAFHTFUN.CODCOLIGADA AND
				AUX.CHAPA = AAFHTFUN.CHAPA AND
				AUX.DATA BETWEEN DATEADD(DAY, -6, AAFHTFUN.DATA) AND AAFHTFUN.DATA AND
				AUX.HTRAB = 0
			),1) AS FOLGA7DIAS,
			CASE 
				WHEN AAFHTFUN.DATA = EOMONTH(AAFHTFUN.DATA) THEN
					ISNULL(
					(SELECT TOP 1
						0
					FROM AAFHTFUN AS AUX
					WHERE
						AUX.CODCOLIGADA = AAFHTFUN.CODCOLIGADA AND
						AUX.CHAPA = AAFHTFUN.CHAPA AND
						MONTH(AUX.DATA) = MONTH(AAFHTFUN.DATA) AND
						YEAR(AUX.DATA) = YEAR(AAFHTFUN.DATA) AND
						DATEPART(dw, AUX.DATA) = 1 AND
						AUX.HTRAB = 0 
					),1)
			END AS FOLGADOMINGO
		
	FROM AAFHTFUN
	WHERE
		AAFHTFUN.CODCOLIGADA = @CODCOLIGADA AND
		AAFHTFUN.DATA BETWEEN @DTINICIO AND @DTFIM
	),
	cte_CRITICAS AS
	(
	SELECT
		T.CODCOLIGADA,
		T.CHAPA,
		T.DATA,
		MAX(T.CRITICAINTERJORNADA) AS CRITICAINTERJORNADA,
		MAX(T.CRITICAMAIS10H) AS CRITICAMAIS10H,
		MAX(T.CRITICABATSEMPAR) AS CRITICABATSEMPAR
	FROM
	(
	SELECT
		AAVISOCALCULADO.CODCOLIGADA,
		AAVISOCALCULADO.CHAPA,
		AAVISOCALCULADO.DATAREFERENCIA AS DATA,
		CASE WHEN AAVISOCALCULADO.CODAVISO = 1 THEN 1 ELSE 0 END AS CRITICAINTERJORNADA,
		CASE WHEN AAVISOCALCULADO.CODAVISO = 2 THEN 1 ELSE 0 END AS CRITICAMAIS10H,
		CASE WHEN AAVISOCALCULADO.CODAVISO = 5 THEN 1 ELSE 0 END AS CRITICABATSEMPAR
	
	FROM AAVISOCALCULADO
	WHERE
		AAVISOCALCULADO.CODCOLIGADA = @CODCOLIGADA AND
		AAVISOCALCULADO.DATAREFERENCIA BETWEEN @DTINICIO AND @DTFIM AND
		AAVISOCALCULADO.CODAVISO IN (1,2,5)
		
	) T
	GROUP BY
		T.CODCOLIGADA,
		T.CHAPA,
		T.DATA
	),
	
	cte_BANCO AS
	(
	SELECT
		ABANCOHORFUN.CODCOLIGADA,
		ABANCOHORFUN.CHAPA,
		ABANCOHORFUN.DATA,
		SUM(ABANCOHORFUN.EXTRAFAIXA1+ABANCOHORFUN.EXTRAFAIXA2+ABANCOHORFUN.EXTRAFAIXA3+ABANCOHORFUN.EXTRAFAIXA4+ABANCOHORFUN.EXTRAFAIXA5+ABANCOHORFUN.EXTRADESC1+ABANCOHORFUN.EXTRADESC2+ABANCOHORFUN.EXTRAFER1+ABANCOHORFUN.EXTRAFER2+ABANCOHORFUN.EXTRACOMP1+ABANCOHORFUN.EXTRACOMP2)-SUM(ABANCOHORFUN.FALTA+ABANCOHORFUN.ATRASO) AS HORAS
	FROM ABANCOHORFUN
	WHERE
		ABANCOHORFUN.CODCOLIGADA = @CODCOLIGADA AND
		ABANCOHORFUN.DATA BETWEEN @DTINICIO AND @DTFIM
	GROUP BY
		ABANCOHORFUN.CODCOLIGADA,
		ABANCOHORFUN.CHAPA,
		ABANCOHORFUN.DATA
	),
	cte_EXTRAS AS
	(
	SELECT
		AMOVFUNDIA.CODCOLIGADA,
		AMOVFUNDIA.CHAPA,
		AMOVFUNDIA.DATA,
		SUM(AMOVFUNDIA.NUMHORAS) AS HORAS
	FROM AMOVFUNDIA
	JOIN PEVENTO ON
		PEVENTO.CODCOLIGADA = AMOVFUNDIA.CODCOLIGADA AND
		PEVENTO.CODIGO = AMOVFUNDIA.CODEVE AND
		PEVENTO.PORCINCID > 1 AND
		PEVENTO.VALHORDIAREF = 'H' 
	WHERE
		AMOVFUNDIA.CODCOLIGADA = @CODCOLIGADA AND
		AMOVFUNDIA.DATA BETWEEN @DTINICIO AND @DTFIM
	GROUP BY
		AMOVFUNDIA.CODCOLIGADA,
		AMOVFUNDIA.CHAPA,
		AMOVFUNDIA.DATA
		
	),
	
	cte_FUNC AS
	(
	SELECT
		PFUNC.CODCOLIGADA,
		PFUNC.CHAPA,
		PFUNC.NOME,
		PFUNC.DATAADMISSAO,
		PFUNC.DTTRANSFERENCIA,
		PFUNC.CODTIPO,
		PFUNC.CODSECAO,
		PSECAO.DESCRICAO SECAO,
		isnull(
		(SELECT TOP 1
			AUX.NOME
		FROM PSUBSTSUP
		JOIN PFUNC AUX ON
			AUX.CODCOLIGADA = PSUBSTSUP.CODCOLIGADA AND
			AUX.CHAPA = PSUBSTSUP.CHAPASUBST
		WHERE
			PSUBSTSUP.CODCOLIGADA = PFUNC.CODCOLIGADA AND
			PSUBSTSUP.CODSECAO = PFUNC.CODSECAO AND
			PSUBSTSUP.CODEQUIPE = PFUNC.CODEQUIPE AND
			PSUBSTSUP.CHAPASUBST <> PFUNC.CHAPA AND
			PSUBSTSUP.DATAINICIO <= CONVERT(DATE, GETDATE()) AND
			PSUBSTSUP.DATAFIM IS NULL
		),
		(SELECT TOP 1
			AUX.NOME
		FROM PSUBSTCHEFE
		JOIN PFUNC AUX ON
			AUX.CODCOLIGADA = PSUBSTCHEFE.CODCOLSUBST AND
			AUX.CHAPA = PSUBSTCHEFE.CHAPASUBST
		WHERE
			PSUBSTCHEFE.CODCOLIGADA = PFUNC.CODCOLIGADA AND
			PSUBSTCHEFE.CODSECAO = SUBSTRING(PFUNC.CODSECAO, 1, LEN(PSUBSTCHEFE.CODSECAO)) AND
			PSUBSTCHEFE.CHAPASUBST <> PFUNC.CHAPA AND
			PSUBSTCHEFE.DATAINICIO <= CONVERT(DATE, GETDATE()) AND
			PSUBSTCHEFE.DATAFIM IS NULL
		ORDER BY
			LEN(PSUBSTCHEFE.CODSECAO) DESC,
			PSUBSTCHEFE.DATAINICIO
		)) CHEFEDIRETO
	
	FROM PFUNC
	JOIN PSECAO ON
		PSECAO.CODCOLIGADA = PFUNC.CODCOLIGADA AND
		PSECAO.CODIGO = PFUNC.CODSECAO
	WHERE
		PFUNC.CODCOLIGADA = @CODCOLIGADA AND
		PFUNC.DATAADMISSAO <= @DTFIM AND
		(PFUNC.DATADEMISSAO IS NULL OR PFUNC.DATADEMISSAO >= @DTINICIO)
	)

SELECT
	CODCOLIGADA 'Col',
	CHAPA 'Chapa',
	NOME 'Nome',
	DATAADMISSAO 'Dt Admissão',
	DATA 'Data',
	DIA 'Dia Sem',
	TIPO 'Tipo Dia',
	HORARIO 'Horario',
	CODHORARIO 'Cód Horário',
	CRITICAREF 'Refeição',
	CASE WHEN CRITICAINTERJORNADA = 1 THEN 'Sim' ELSE 'Não' END 'Interjornada',
	CASE WHEN CRITICABATSEMPAR = 1 THEN 'Sim' ELSE 'Não' END 'Batida sem par',
	CASE WHEN CRITICAPAUSA = 1 THEN 'Sim' ELSE 'Não' END 'Pausa > 6h',
	CASE WHEN CRITICAMAIS10H = 1 THEN 'Sim' ELSE 'Não' END 'Trabalho > 10h',
	CASE WHEN FOLGA7DIAS = 1 THEN 'Sim' ELSE 'Não' END 'Sem Folga 7 dias',
	CASE WHEN FOLGADOMINGO = 1 THEN 'Sim' ELSE 'Não' END 'Folta Domingo',
	CODTIPO 'Cód Tipo',
	CODSECAO ' Cód Seção',
	SECAO 'Seção',
	CHEFEDIRETO 'Nome do Chefe Direto'
FROM
(
SELECT
	FUNC.CODCOLIGADA,
	FUNC.CHAPA,
	FUNC.NOME,
	FUNC.DATAADMISSAO,
	PERIODO.DATA,
	PERIODO.DIA,
	PERIODO.TIPO,
	PERIODO.BASE,
	PERIODO.HTRAB,
	PERIODO.EXTRAAUTORIZADO,
	PERIODO.ATRASO,
	PERIODO.FALTA,
	PERIODO.ADICIONAL,
	EXTRAS.HORAS AS EXTRAS,
	PERIODO.REF,
	BANCO.HORAS AS BANCO,
	FUNC.CODTIPO,
	FUNC.CODSECAO,
	FUNC.SECAO,
	FUNC.CHEFEDIRETO,
	CRITICAS.CRITICAINTERJORNADA,
	CRITICAS.CRITICABATSEMPAR,
	CASE WHEN PERIODO.TRABINICIO > (6 * 60) THEN 1 END CRITICAPAUSA,
	CRITICAS.CRITICAMAIS10H,
	PERIODO.FOLGA7DIAS,
	PERIODO.FOLGADOMINGO,
	CASE 
		WHEN PERIODO.BASE > 0 AND PERIODO.BASE > (6*60) AND PERIODO.HTRAB > 0  AND PERIODO.REF = 0 THEN 'Sem Pausa'
		WHEN PERIODO.BASE = 0 AND PERIODO.HTRAB > (6*60) AND PERIODO.HTRAB > 0  AND PERIODO.REF = 0 THEN 'Sem Pausa'
		
		WHEN PERIODO.BASE > 0 AND PERIODO.BASE > (6*60) AND PERIODO.HTRAB > 0  AND PERIODO.REF < 60 THEN 'Menor 60min'
		WHEN PERIODO.BASE = 0 AND PERIODO.HTRAB > (6*60) AND PERIODO.HTRAB > 0  AND PERIODO.REF = 0 THEN 'Menor 60min'
		
		WHEN PERIODO.BASE > 0 AND PERIODO.BASE > (4*60) AND PERIODO.HTRAB > 0  AND PERIODO.REF < 15 THEN 'Menor 15min'
	END CRITICAREF,
	HORARIO.CODHORARIO,
	HORARIO.HORARIO,
	HORARIO.HORINICIO
	
FROM cte_PERIODO AS PERIODO
JOIN cte_FUNC AS FUNC ON
	FUNC.CODCOLIGADA = PERIODO.CODCOLIGADA AND
	FUNC.CHAPA = PERIODO.CHAPA AND
	(FUNC.DTTRANSFERENCIA IS NULL OR FUNC.DTTRANSFERENCIA <= PERIODO.DATA)
LEFT JOIN cte_EXTRAS AS EXTRAS ON
	EXTRAS.CODCOLIGADA = PERIODO.CODCOLIGADA AND
	EXTRAS.CHAPA = PERIODO.CHAPA AND
	EXTRAS.DATA = PERIODO.DATA
LEFT JOIN cte_BANCO AS BANCO ON
	BANCO.CODCOLIGADA = PERIODO.CODCOLIGADA AND
	BANCO.CHAPA = PERIODO.CHAPA AND
	BANCO.DATA = PERIODO.DATA
LEFT JOIN cte_CRITICAS AS CRITICAS ON
	CRITICAS.CODCOLIGADA = PERIODO.CODCOLIGADA AND
	CRITICAS.CHAPA = PERIODO.CHAPA AND
	CRITICAS.DATA = PERIODO.DATA
OUTER APPLY 
	(
	SELECT TOP 1
		cte_HISTHOR.DTMUDANCA,
		cte_HISTHOR.CODHORARIO,
		cte_HISTHOR.TIPO
	FROM cte_HISTHOR
	WHERE
		cte_HISTHOR.CODCOLIGADA = FUNC.CODCOLIGADA AND
		cte_HISTHOR.CHAPA = FUNC.CHAPA
ORDER BY
	cte_HISTHOR.DTMUDANCA DESC
	) HSTHOR
LEFT JOIN cte_HORARIO AS HORARIO ON
	HORARIO.CODCOLIGADA = FUNC.CODCOLIGADA AND
	HORARIO.CODHORARIO = HSTHOR.CODHORARIO AND
	HORARIO.TIPO = HSTHOR.TIPO
) T
WHERE
	(
	@CRITICA <> 'S' OR
	(@CRITICA = 'S' AND 
		(
		EXTRAAUTORIZADO > 0 OR 
		ATRASO > 0 OR 
		FALTA > 0 OR 
		EXTRAS > 0 OR 
		BANCO > 0 OR 
		ADICIONAL > 0 OR
		isnull(CRITICAREF,'') <> '' OR 
	   	isnull(CRITICAINTERJORNADA,0) <> 0 OR 
	   	isnull(CRITICABATSEMPAR,0) <> 0 OR 
	   	isnull(CRITICAPAUSA,0) <> '' OR 
	   	isnull(CRITICAMAIS10H,0) <> 0 OR 
	   	isnull(FOLGA7DIAS,0) <> 0 OR 
   		isnull(FOLGADOMINGO,0) <> 0
		)
	)
	)
ORDER BY
	CODCOLIGADA,
	CHAPA,
	DATA`
    }
];

// State variables
let activeTables = new Set();
let activeDialect = "sqlserver";
let customFilters = [];
let queryXmlCode = "LABORE.SQL001";
let queryXmlTitle = "Consulta Customizada RM Labore";
let loadedCustomSQL = null;

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
                loadedCustomSQL = null; // Revert to dynamic SQL on edit
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
    loadedCustomSQL = null; // Revert to dynamic SQL on edit
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
                condition = "PFUNC.CODCOLIGADA = PSECAO.CODCOLIGADA AND PFUNC.CODSECAO = PSECAO.CODIGO";
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
        else if (table === "PFUFERIAS") {
            if (selectedTables.has("PFUNC")) {
                condition = "PFUNC.CODCOLIGADA = PFUFERIAS.CODCOLIGADA AND PFUNC.CHAPA = PFUFERIAS.CHAPA";
            }
        }
        else if (table === "PFUFERIASPER") {
            if (selectedTables.has("PFUFERIAS")) {
                condition = "PFUFERIAS.CODCOLIGADA = PFUFERIASPER.CODCOLIGADA AND PFUFERIAS.CHAPA = PFUFERIASPER.CHAPA AND PFUFERIAS.FIMPERAQUIS = PFUFERIASPER.FIMPERAQUIS";
            } else if (selectedTables.has("PFUNC")) {
                condition = "PFUNC.CODCOLIGADA = PFUFERIASPER.CODCOLIGADA AND PFUNC.CHAPA = PFUFERIASPER.CHAPA";
            }
        }
        else if (table === "PFHSTHOR") {
            if (selectedTables.has("PFUNC")) {
                condition = "PFUNC.CODCOLIGADA = PFHSTHOR.CODCOLIGADA AND PFUNC.CHAPA = PFHSTHOR.CHAPA";
            }
        }
        else if (table === "AHORARIO") {
            if (selectedTables.has("PFHSTHOR")) {
                condition = "PFHSTHOR.CODCOLIGADA = AHORARIO.CODCOLIGADA AND PFHSTHOR.CODHORARIO = AHORARIO.CODIGO";
            } else if (selectedTables.has("PFUNC")) {
                condition = "PFUNC.CODCOLIGADA = AHORARIO.CODCOLIGADA";
            }
        }
        else if (table === "ABATFUN") {
            if (selectedTables.has("PFUNC")) {
                condition = "PFUNC.CODCOLIGADA = ABATFUN.CODCOLIGADA AND PFUNC.CHAPA = ABATFUN.CHAPA";
            }
        }
        else if (table === "AMOVFUN") {
            if (selectedTables.has("PFUNC")) {
                condition = "PFUNC.CODCOLIGADA = AMOVFUN.CODCOLIGADA AND PFUNC.CHAPA = AMOVFUN.CHAPA";
            }
        }
        else if (table === "AAFHTFUN") {
            if (selectedTables.has("PFUNC")) {
                condition = "PFUNC.CODCOLIGADA = AAFHTFUN.CODCOLIGADA AND PFUNC.CHAPA = AAFHTFUN.CHAPA";
            }
        }
        else if (table === "AAVISOCALCULADO") {
            if (selectedTables.has("PFUNC")) {
                condition = "PFUNC.CODCOLIGADA = AAVISOCALCULADO.CODCOLIGADA AND PFUNC.CHAPA = AAVISOCALCULADO.CHAPA";
            }
        }
        else if (table === "ABANCOHORFUN") {
            if (selectedTables.has("PFUNC")) {
                condition = "PFUNC.CODCOLIGADA = ABANCOHORFUN.CODCOLIGADA AND PFUNC.CHAPA = ABANCOHORFUN.CHAPA";
            }
        }
        else if (table === "AMOVFUNDIA") {
            if (selectedTables.has("PFUNC")) {
                condition = "PFUNC.CODCOLIGADA = AMOVFUNDIA.CODCOLIGADA AND PFUNC.CHAPA = AMOVFUNDIA.CHAPA";
            }
        }
        else if (table === "AJORNADAFUN") {
            if (selectedTables.has("PFUNC")) {
                condition = "PFUNC.CODCOLIGADA = AJORNADAFUN.CODCOLIGADA AND PFUNC.CHAPA = AJORNADAFUN.CHAPA";
            }
        }
        else if (table === "AHORARIOJORNADA") {
            if (selectedTables.has("AJORNADAFUN")) {
                condition = "AJORNADAFUN.CODCOLIGADA = AHORARIOJORNADA.CODCOLIGADA AND AJORNADAFUN.CODHORARIO = AHORARIOJORNADA.CODHORARIO";
            }
        }
        else if (table === "AJORHOR") {
            if (selectedTables.has("AHORARIO")) {
                condition = "AHORARIO.CODCOLIGADA = AJORHOR.CODCOLIGADA AND AHORARIO.CODIGO = AJORHOR.CODHORARIO";
            }
        }
        else if (table === "AOCORRENCIACALCULADA") {
            if (selectedTables.has("PFUNC")) {
                condition = "PFUNC.CODCOLIGADA = AOCORRENCIACALCULADA.CODCOLIGADA AND PFUNC.CHAPA = AOCORRENCIACALCULADA.CHAPA";
            }
        }
        else if (table === "PSUBSTSUP") {
            if (selectedTables.has("PFUNC")) {
                condition = "PFUNC.CODCOLIGADA = PSUBSTSUP.CODCOLIGADA AND PFUNC.CHAPA = PSUBSTSUP.CHAPASUBST";
            }
        }
        else if (table === "PSUBSTCHEFE") {
            if (selectedTables.has("PFUNC")) {
                condition = "PFUNC.CODCOLIGADA = PSUBSTCHEFE.CODCOLIGADA AND PFUNC.CHAPA = PSUBSTCHEFE.CHAPASUBST";
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
            if (rmSchema[tKey] && rmSchema[tKey].fields && rmSchema[tKey].fields[fKey]) {
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
    if (tpl.filters && tpl.filters.length > 0) {
        tpl.filters.forEach(f => {
            customFilters.push({
                table: f.table,
                field: f.field,
                op: f.op,
                value: f.value
            });
        });
    }
    
    // 5. Update XML form text
    xmlQueryCodeInput.value = `LABORE.${tpl.id.toUpperCase().replace("-", "_")}`;
    xmlQueryTitleInput.value = tpl.title;
    queryXmlCode = xmlQueryCodeInput.value;
    queryXmlTitle = xmlQueryTitleInput.value;
    
    // Set custom SQL if defined
    loadedCustomSQL = tpl.customSQL || null;
    
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
    
    if (loadedCustomSQL) {
        params.push({
            name: ":$CODCOLIGADA",
            type: "Numérico (Coligada)",
            desc: "Identifica a Coligada ativa no contexto de execução do RM."
        }, {
            name: ":PLN_$B$1_D",
            type: "Data/Hora",
            desc: "Data de Início do período apurado (associada à célula B1 da Planilha .NET)."
        }, {
            name: ":PLN_$B$2_D",
            type: "Data/Hora",
            desc: "Data de Término do período apurado (associada à célula B2 da Planilha .NET)."
        }, {
            name: ":PLN_$B$3_S",
            type: "Alfanumérico (Texto)",
            desc: "Filtro de Críticas/Ocorrências: 'S' para mostrar apenas dias com inconsistências, 'N' para tudo (célula B3)."
        });
    } else {
        if (cbFilterColigada.checked) {
            params.push({
                name: ":CODCOLIGADA_N",
                type: "Numérico (Coligada)",
                desc: "Identifica a Coligada ativa (ex: associar à célula A1 da Planilha .NET)."
            });
        }
        
        if (cbFilterChapa.checked && (activeTables.has("PFUNC") || activeTables.has("PFHSTHOR") || activeTables.has("ABATFUN") || activeTables.has("AMOVFUN") || activeTables.has("ABANCOHORAS") || activeTables.has("PFERIAS") || activeTables.has("PFUFERIAS"))) {
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
    }
    
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
    if (loadedCustomSQL) {
        sqlRawTextarea.value = loadedCustomSQL;
        sqlHighlighted.innerHTML = highlightSQL(loadedCustomSQL);
        updatePlanilhaNetMapping();
        return;
    }
    
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
        } else if (activeTables.has("PFHSTHOR")) {
            whereClauses.push(`PFHSTHOR.CODCOLIGADA = ${colParam}`);
        } else if (activeTables.has("AHORARIO")) {
            whereClauses.push(`AHORARIO.CODCOLIGADA = ${colParam}`);
        } else if (activeTables.has("ABATFUN")) {
            whereClauses.push(`ABATFUN.CODCOLIGADA = ${colParam}`);
        } else if (activeTables.has("AMOVFUN")) {
            whereClauses.push(`AMOVFUN.CODCOLIGADA = ${colParam}`);
        } else if (activeTables.has("ABANCOHORAS")) {
            whereClauses.push(`ABANCOHORAS.CODCOLIGADA = ${colParam}`);
        } else if (activeTables.has("PFERIAS")) {
            whereClauses.push(`PFERIAS.CODCOLIGADA = ${colParam}`);
        } else if (activeTables.has("PFUFERIAS")) {
            whereClauses.push(`PFUFERIAS.CODCOLIGADA = ${colParam}`);
        }
    }
    
    // Chapa parameter
    if (cbFilterChapa.checked) {
        const chapaParam = modePlanilhaNet.checked ? ":CHAPA_S" : ":PLN_CHAPA";
        if (activeTables.has("PFUNC")) {
            whereClauses.push(`PFUNC.CHAPA = ${chapaParam}`);
        } else if (activeTables.has("PFHSTHOR")) {
            whereClauses.push(`PFHSTHOR.CHAPA = ${chapaParam}`);
        } else if (activeTables.has("ABATFUN")) {
            whereClauses.push(`ABATFUN.CHAPA = ${chapaParam}`);
        } else if (activeTables.has("AMOVFUN")) {
            whereClauses.push(`AMOVFUN.CHAPA = ${chapaParam}`);
        } else if (activeTables.has("ABANCOHORAS")) {
            whereClauses.push(`ABANCOHORAS.CHAPA = ${chapaParam}`);
        } else if (activeTables.has("PFERIAS")) {
            whereClauses.push(`PFERIAS.CHAPA = ${chapaParam}`);
        } else if (activeTables.has("PFUFERIAS")) {
            whereClauses.push(`PFUFERIAS.CHAPA = ${chapaParam}`);
        }
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
cbFilterActive.addEventListener("change", () => {
    loadedCustomSQL = null;
    generateSQL();
});
cbFilterColigada.addEventListener("change", () => {
    loadedCustomSQL = null;
    generateSQL();
});
cbFilterChapa.addEventListener("change", () => {
    loadedCustomSQL = null;
    generateSQL();
});
cbAutoJoin.addEventListener("change", (e) => {
    loadedCustomSQL = null;
    updateActiveTablesUI();
    generateSQL();
});

modePlanilhaNet.addEventListener("change", (e) => {
    loadedCustomSQL = null;
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

async function loadCustomSchemas() {
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

    // Try to load custom_schema.json if populated by sync_schema.ps1
    try {
        const response = await fetch("custom_schema.json");
        if (response.ok) {
            const jsonSchema = await response.json();
            Object.keys(jsonSchema).forEach(tKey => {
                if (!rmSchema[tKey]) {
                    rmSchema[tKey] = jsonSchema[tKey];
                } else {
                    // Merge fields
                    Object.keys(jsonSchema[tKey].fields).forEach(fKey => {
                        if (!rmSchema[tKey].fields[fKey]) {
                            rmSchema[tKey].fields[fKey] = jsonSchema[tKey].fields[fKey];
                        }
                    });
                }
            });
            // Re-render accordions
            if (typeof initTablesAccordion === "function") initTablesAccordion();
            if (typeof updateActiveTablesUI === "function") updateActiveTablesUI();
            if (typeof generateSQL === "function") generateSQL();
            console.log("Dicionário customizado custom_schema.json carregado com sucesso!");
        }
    } catch(e) {
        // Quietly catch if custom_schema.json does not exist yet
    }
}


// ==========================================================================
// 11. DATABASE LIVE CONNECTION & INTERACTIVE QUERY EXECUTION
// ==========================================================================

// DOM Elements
const dbHostInput = document.getElementById("db-host");
const dbPortInput = document.getElementById("db-port");
const dbNameInput = document.getElementById("db-name");
const dbAuthTypeSelect = document.getElementById("db-auth-type");
const dbDomainInput = document.getElementById("db-domain");
const dbUserInput = document.getElementById("db-user");
const dbPassInput = document.getElementById("db-pass");
const btnDbConnect = document.getElementById("btn-db-connect");
const btnDbSyncSchema = document.getElementById("btn-db-sync-schema");
const btnDbExecute = document.getElementById("btn-db-execute");
const btnExportCsv = document.getElementById("btn-export-csv");
const btnCloseResults = document.getElementById("btn-close-results");
const dbStatusBadge = document.getElementById("db-status-badge");
const queryResultsPanel = document.getElementById("query-results-panel");
const resultsRowCountBadge = document.getElementById("results-row-count");
const resultsTableContainer = document.getElementById("results-table-container");
const groupDbDomain = document.getElementById("group-db-domain");

// Toggle domain input based on auth type
if (dbAuthTypeSelect) {
    dbAuthTypeSelect.addEventListener("change", () => {
        if (dbAuthTypeSelect.value === "windows") {
            groupDbDomain.style.display = "flex";
        } else {
            groupDbDomain.style.display = "none";
        }
    });
}

// Save last execution result
let lastQueryResultData = null;

// Connect to Database
if (btnDbConnect) {
    btnDbConnect.addEventListener("click", async () => {
        const server = dbHostInput.value.trim();
        const port = dbPortInput.value.trim();
        const database = dbNameInput.value.trim();
        const authType = dbAuthTypeSelect.value;
        const domain = dbDomainInput.value.trim();
        const user = dbUserInput.value.trim();
        const password = dbPassInput.value;

        if (!server || !database) {
            showToast("Preencha o Servidor e o Banco de Dados!", "info");
            return;
        }

        btnDbConnect.disabled = true;
        btnDbConnect.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Conectando...';

        try {
            const response = await fetch("/api/connect", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ server, port, database, authType, domain, user, password })
            });

            const result = await response.json();

            if (result.success) {
                showToast("Banco de dados conectado com sucesso!", "success");
                updateConnectionUI(true, result.connection);
                
                // Save settings to localStorage (excluding password)
                localStorage.setItem("rm_db_config", JSON.stringify({
                    server, port, database, authType, domain, user
                }));
            } else {
                showToast(result.message || "Erro desconhecido ao conectar.", "info");
                updateConnectionUI(false);
            }
        } catch (err) {
            console.error("Connection error:", err);
            showToast("Falha na chamada ao servidor local. Certifique-se de que o backend está rodando.", "info");
            updateConnectionUI(false);
        } finally {
            btnDbConnect.disabled = false;
            btnDbConnect.innerHTML = '<i class="fa-solid fa-plug"></i> Conectar';
        }
    });
}

// Sync Schema dictionary
if (btnDbSyncSchema) {
    btnDbSyncSchema.addEventListener("click", async () => {
        btnDbSyncSchema.disabled = true;
        btnDbSyncSchema.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sincronizando...';

        try {
            const response = await fetch("/api/schema", {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            });

            const result = await response.json();

            if (result.success && result.schema) {
                // Merge custom columns and live DB columns to rmSchema
                let countMerged = 0;
                Object.keys(result.schema).forEach(tableKey => {
                    if (!rmSchema[tableKey]) {
                        // It is a completely new table found in DB
                        rmSchema[tableKey] = {
                            code: tableKey,
                            desc: result.schema[tableKey].desc,
                            priority: result.schema[tableKey].priority,
                            joinCondition: getAutoJoinCondition(tableKey),
                            fields: result.schema[tableKey].fields
                        };
                        countMerged++;
                    } else {
                        // Update fields
                        Object.keys(result.schema[tableKey].fields).forEach(fieldKey => {
                            if (!rmSchema[tableKey].fields[fieldKey]) {
                                rmSchema[tableKey].fields[fieldKey] = result.schema[tableKey].fields[fieldKey];
                                countMerged++;
                            }
                        });
                    }
                });

                // Save to localStorage for custom schemas
                localStorage.setItem("rm_custom_schemas", JSON.stringify(rmSchema));

                // Refresh UI
                initTablesAccordion();
                updateActiveTablesUI();
                generateSQL();

                showToast(`Sincronização concluída! ${countMerged} novos campos/tabelas mapeados do seu banco de dados.`, "success");
            } else {
                showToast("Erro ao obter o dicionário do banco de dados.", "info");
            }
        } catch (err) {
            console.error("Schema sync error:", err);
            showToast("Erro na sincronização. Verifique o servidor backend.", "info");
        } finally {
            btnDbSyncSchema.disabled = false;
            btnDbSyncSchema.innerHTML = '<i class="fa-solid fa-arrows-rotate"></i> Sincronizar Dicionário';
        }
    });
}

// Helper for dynamic join conditions when a new table is scanned
function getAutoJoinCondition(tableName) {
    if (tableName === "PPESSOA") return "PFUNC.CODPESSOA = PPESSOA.CODIGO";
    if (tableName === "PSECAO") return "PFUNC.CODCOLIGADA = PSECAO.CODCOLIGADA AND PFUNC.CODSECAO = PSECAO.CODIGO";
    if (tableName === "PFUNCAO") return "PFUNC.CODCOLIGADA = PFUNCAO.CODCOLIGADA AND PFUNC.CODFUNCAO = PFUNCAO.CODFUNCAO";
    if (tableName === "PFUFERIAS") return "PFUNC.CODCOLIGADA = PFUFERIAS.CODCOLIGADA AND PFUNC.CHAPA = PFUFERIAS.CHAPA";
    if (tableName === "PFUFERIASPER") return "PFUNC.CODCOLIGADA = PFUFERIASPER.CODCOLIGADA AND PFUNC.CHAPA = PFUFERIASPER.CHAPA AND PFUFERIAS.FIMPERAQUIS = PFUFERIASPER.FIMPERAQUIS";
    if (tableName === "PFERIAS") return "PFUNC.CODCOLIGADA = PFERIAS.CODCOLIGADA AND PFUNC.CHAPA = PFERIAS.CHAPA AND PFUFERIAS.FIMPERAQUIS = PFERIAS.FIMPERAQUIS";
    // General fallback
    return `PFUNC.CODCOLIGADA = ${tableName}.CODCOLIGADA AND PFUNC.CHAPA = ${tableName}.CHAPA`;
}

// Execute Query Live
if (btnDbExecute) {
    btnDbExecute.addEventListener("click", async () => {
        const rawSqlText = sqlRawTextarea.value.trim();
        if (!rawSqlText || rawSqlText.startsWith("-- Selecione")) {
            showToast("Nenhuma consulta SQL gerada para executar.", "info");
            return;
        }

        queryResultsPanel.style.display = "flex";
        resultsTableContainer.innerHTML = `
            <div class="spinner-wrapper">
                <i class="fa-solid fa-circle-notch spinner-icon"></i>
                <p>Executando consulta no SQL Server... (limite de 200 linhas para performance)</p>
            </div>
        `;
        resultsRowCountBadge.textContent = "executando...";
        
        // Smooth scroll down to results panel
        queryResultsPanel.scrollIntoView({ behavior: "smooth" });

        try {
            const response = await fetch("/api/execute", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query: rawSqlText })
            });

            const result = await response.json();

            if (result.success) {
                lastQueryResultData = result.data;
                resultsRowCountBadge.textContent = `${result.rowsCount} registros`;
                renderResultsGrid(result.columns, result.data);
            } else {
                resultsRowCountBadge.textContent = "erro";
                resultsTableContainer.innerHTML = `
                    <div style="padding: 20px; border-left: 4px solid var(--accent-red); background: rgba(239, 68, 68, 0.05); border-radius: 6px; margin: 15px;">
                        <h4 style="color: var(--accent-red); font-size: 0.9rem; margin-bottom: 8px; font-weight: 700;">
                            <i class="fa-solid fa-triangle-exclamation"></i> Falha na Execução do Banco de Dados
                        </h4>
                        <p style="font-family: var(--font-mono); font-size: 0.78rem; line-height: 1.5; color: var(--text-main); white-space: pre-wrap; word-break: break-all;">${escapeHtml(result.message)}</p>
                    </div>
                `;
            }
        } catch (err) {
            console.error("Execution error:", err);
            resultsRowCountBadge.textContent = "erro";
            showToast("Falha ao comunicar com o servidor backend.", "info");
        }
    });
}

// Render Results HTML Table
function renderResultsGrid(columns, rows) {
    if (!rows || rows.length === 0) {
        resultsTableContainer.innerHTML = `
            <p class="empty-state-text secondary" style="padding: 30px;">
                <i class="fa-solid fa-circle-info"></i> A consulta retornou com sucesso, mas nenhum registro atendeu aos filtros.
            </p>
        `;
        return;
    }

    let tableHtml = `<div class="results-table-wrapper"><table class="results-table"><thead><tr>`;
    
    // Header columns
    columns.forEach(col => {
        tableHtml += `<th>${escapeHtml(col)}</th>`;
    });
    tableHtml += `</tr></thead><tbody>`;

    // Row records
    rows.forEach(row => {
        tableHtml += `<tr>`;
        columns.forEach(col => {
            const val = row[col];
            if (val === null || val === undefined) {
                tableHtml += `<td class="null-value">NULL</td>`;
            } else if (typeof val === "number") {
                tableHtml += `<td class="number-value">${val}</td>`;
            } else if (typeof val === "string" && val.match(/^\d{4}-\d{2}-\d{2}/)) {
                // Formatting dates nicely
                const d = new Date(val);
                const formatted = d.toLocaleDateString("pt-BR") + " " + d.toLocaleTimeString("pt-BR", {hour: '2-digit', minute:'2-digit'});
                tableHtml += `<td class="date-value" title="${val}">${formatted}</td>`;
            } else {
                tableHtml += `<td>${escapeHtml(String(val))}</td>`;
            }
        });
        tableHtml += `</tr>`;
    });

    tableHtml += `</tbody></table></div>`;
    resultsTableContainer.innerHTML = tableHtml;
}

// Export CSV Function
if (btnExportCsv) {
    btnExportCsv.addEventListener("click", () => {
        if (!lastQueryResultData || lastQueryResultData.length === 0) {
            showToast("Nenhum dado disponível para exportação.", "info");
            return;
        }

        try {
            const columns = Object.keys(lastQueryResultData[0]);
            let csvContent = "\ufeff"; // BOM for Excel encoding UTF-8
            
            // Header
            csvContent += columns.map(c => `"${c.replace(/"/g, '""')}"`).join(";") + "\n";

            // Rows
            lastQueryResultData.forEach(row => {
                csvContent += columns.map(col => {
                    let val = row[col];
                    if (val === null || val === undefined) return '""';
                    return `"${String(val).replace(/"/g, '""')}"`;
                }).join(";") + "\n";
            });

            const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.setAttribute("href", url);
            link.setAttribute("download", `RM_Query_Result_${new Date().toISOString().slice(0, 10)}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showToast("Resultados exportados para CSV com sucesso!", "success");
        } catch (err) {
            console.error("Export CSV error:", err);
            showToast("Erro ao exportar CSV.", "info");
        }
    });
}

// Close Results panel
if (btnCloseResults) {
    btnCloseResults.addEventListener("click", () => {
        queryResultsPanel.style.display = "none";
    });
}

// Escape HTML strings safely
function escapeHtml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Update connection UI state
function updateConnectionUI(isConnected, conn = null) {
    if (!dbStatusBadge) return;
    if (isConnected) {
        dbStatusBadge.className = "connection-status-indicator online";
        dbStatusBadge.querySelector(".status-text").textContent = `Conectado: ${conn ? conn.database : "SQL Server"}`;
        if (btnDbSyncSchema) btnDbSyncSchema.removeAttribute("disabled");
        if (btnDbExecute) btnDbExecute.removeAttribute("disabled");
    } else {
        dbStatusBadge.className = "connection-status-indicator offline";
        dbStatusBadge.querySelector(".status-text").textContent = "Sem Conexão";
        if (btnDbSyncSchema) btnDbSyncSchema.setAttribute("disabled", "true");
        if (btnDbExecute) btnDbExecute.setAttribute("disabled", "true");
    }
}

// Load saved config on startup
function restoreDbSettings() {
    if (!dbHostInput) return;
    const saved = localStorage.getItem("rm_db_config");
    if (saved) {
        try {
            const config = JSON.parse(saved);
            dbHostInput.value = config.server || "localhost";
            dbPortInput.value = config.port || "1433";
            dbNameInput.value = config.database || "CorporeRM";
            dbAuthTypeSelect.value = config.authType || "sql";
            dbDomainInput.value = config.domain || "";
            dbUserInput.value = config.user || "rm";
            
            if (config.authType === "windows") {
                groupDbDomain.style.display = "flex";
            } else {
                groupDbDomain.style.display = "none";
            }
        } catch (e) {
            console.error("Error restoring database settings:", e);
        }
    }
}

// Check server status in background
async function checkDbServerStatus() {
    try {
        const response = await fetch("/api/status");
        const status = await response.json();
        if (status.connected) {
            updateConnectionUI(true, status.connection);
        } else {
            updateConnectionUI(false);
        }
    } catch (e) {
        // Silent catch: server is just not running or accessible
        updateConnectionUI(false);
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
    
    // Restore saved settings and check active DB connection
    restoreDbSettings();
    checkDbServerStatus();
}

// Launch app
init();
