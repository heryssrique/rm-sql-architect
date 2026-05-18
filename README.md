# RM SQL Architect - Manual de Instruções

O **RM SQL Architect** é uma ferramenta interativa premium desenvolvida para acelerar a criação, validação e formatação de consultas SQL destinadas ao módulo de Folha de Pagamento **TOTVS RM Labore**. 

Esta ferramenta resolve um dos maiores desafios de desenvolvedores e analistas de RH que trabalham com a linha de produtos RM: a necessidade de memorizar chaves de junção (JOINs) criptografadas e a estrutura de campos das tabelas do banco de dados (que usam nomes históricos simplificados).

---

## 🚀 Como Iniciar a Aplicação

Para abrir e utilizar a interface gráfica interativa do programa:

1. **Abra o arquivo local `index.html` em qualquer navegador web de sua preferência** (Chrome, Edge, Firefox, etc.).
2. **Nenhuma instalação ou dependência de servidor local é necessária!** Todo o processamento de geração do SQL, formatação, filtros e renderização do XML é feito de forma cliente (client-side) rápida e isolada.

---

## 🛠️ Funcionalidades Principais

* **Montador de Consultas Dinâmico (Interactive Query Builder):** Escolha quais tabelas deseja relacionar (`PFUNC`, `PPESSOA`, `PSECAO`, `PFUNCAO`, etc.) marcando a caixa de seleção correspondente. Expanda as tabelas para marcar ou desmarcar campos específicos na sua projeção `SELECT`.
* **Junções Inteligentes (Smart Automatic JOINs):** O construtor detecta quais tabelas você selecionou e monta automaticamente as cláusulas `INNER JOIN` corretas usando as chaves de ligação de metadados do RM (por exemplo, associando `CODPESSOA` a `CODIGO`, ou chaves compostas por `CODCOLIGADA` e `CODSECAO`).
* **Suporte a Melhores Práticas RM (NOLOCK):** O gerador aplica automaticamente a dica de tabela `(NOLOCK)` em todas as tabelas no dialeto SQL Server, evitando travamento de tabelas críticas da folha de pagamento durante o cálculo de processos.
* **Filtros e Parâmetros Específicos do Contexto RM:**
  * **Apenas Ativos:** Filtra automaticamente por `CODSITUACAO <> 'D'` para ignorar funcionários demitidos.
  * **Filtro de Coligada do Contexto:** Vincula a consulta à coligada atual através do parâmetro nativo do RM `:PLN_CODCOLIGADA`.
  * **Filtro de Chapa do Contexto:** Vincula ao funcionário selecionado em execução no relatório através de `:PLN_CHAPA`.
* **Biblioteca de Modelos Prontos (Templates Library):** Contém 6 relatórios prontos que cobrem 90% das requisições corporativas comuns (Folha Calculada, Admissões, Rescisões, Dependentes de IRRF, Histórico de Reajustes Salariais, etc.).
* **Filtros Personalizados (Dynamic WHERE Clause):** Adicione filtros infinitos combinando campos, operadores lógicos (`=`, `<>`, `LIKE`, `IN`, `IS NULL`, etc.) e parâmetros específicos.
* **Exportação XML para Importação Direta no RM:** Gera um arquivo XML que mapeia diretamente os metadados para o DataServer `GlbConsultaSQLData` da TOTVS, permitindo importar a query em lote sem precisar redigitar nada na tela do RM.

---

## 📂 Dicionário de Tabelas RM Labore Inclusas

| Tabela | Nome no RM Labore | Função / Descrição | Chave de Ligação Comum |
| :--- | :--- | :--- | :--- |
| **`PFUNC`** | Funcionários | Dados contratuais (chapa, salário, admissão, situação, seção, função) | *Tabela Base Contratual* |
| **`PPESSOA`** | Pessoas | Cadastro de informações pessoais gerais (nome, CPF, e-mail, nascimento) | `PFUNC.CODPESSOA = PPESSOA.CODIGO` |
| **`PSECAO`** | Seções | Estrutura organizacional e hierárquica (departamentos, filiais, filiais CNPJ) | `PFUNC.CODCOLIGADA = PSECAO.CODCOLIGADA AND PFUNC.CODSECAO = PSECAO.CODSECAO` |
| **`PFUNCAO`** | Funções | Cargos oficiais dos funcionários e respectivos códigos CBO | `PFUNC.CODCOLIGADA = PFUNCAO.CODCOLIGADA AND PFUNC.CODFUNCAO = PFUNCAO.CODIGO` |
| **`PFPERFF`** | Histórico de Período | Cabeçalho e identificação de competências calculadas (Mês/Ano/Pedido) | `PFUNC.CODCOLIGADA = PFPERFF.CODCOLIGADA AND PFUNC.CHAPA = PFPERFF.CHAPA` |
| **`PVALORES`** | Lançamentos Mensais | Valores numéricos de proventos e descontos calculados em cada período | `PFPERFF` ligação por chaves de `COLIGADA`, `CHAPA`, `ANOCOMP`, `MESCOMP`, `NROPEDIDO` |
| **`PEVENTOS`** | Cadastro de Eventos | Cadastro Geral de Rubricas (proventos, descontos, bases de cálculo e informativos) | `PVALORES.CODCOLIGADA = PEVENTOS.CODCOLIGADA AND PVALORES.CODEVENTO = PEVENTOS.CODIGO` |
| **`PFDEPEND`** | Dependentes | Lista de filhos, cônjuges e parentes vinculados com flags de IRRF/Salário Família | `PFUNC.CODCOLIGADA = PFDEPEND.CODCOLIGADA AND PFUNC.CHAPA = PFDEPEND.CHAPA` |
| **`PFHSTSAL`** | Histórico Salarial | Auditoria completa de todas as alterações, reajustes e motivos de aumentos salariais | `PFUNC.CODCOLIGADA = PFHSTSAL.CODCOLIGADA AND PFUNC.CHAPA = PFHSTSAL.CHAPA` |

---

## 📥 Como Importar o Arquivo XML gerado no TOTVS RM

Para importar a consulta SQL gerada diretamente no sistema TOTVS RM, sem necessidade de digitação:

1. Gere a consulta desejada na interface e preencha os campos **Código SQL RM** e **Título/Descrição** no painel inferior.
2. Clique no botão **`Exportar XML (RM)`**. Um arquivo `.xml` correspondente será baixado automaticamente.
3. No sistema **TOTVS RM** (RM Client / Portal):
   * Acesse o menu **Serviços Globais** (ou o módulo onde deseja gerenciar a query).
   * Vá em **Integrações** (ou Administração) e selecione o painel **Consultas SQL** (Cadastro de Consultas).
   * Clique em **Processos** > **Importar Consulta SQL** (ou através da importação de estruturas XML do sistema de metadados).
   * Carregue o arquivo XML gerado por esta ferramenta e conclua o assistente.
4. A consulta estará cadastrada instantaneamente com o código, título e código SQL completo associados, pronta para ser anexada em Relatórios, Fórmulas de Cálculo, Geradores de Saída ou Cubos BI.

---

## 💡 Dicas de Execução e Otimizações de Performance

1. **Evite Produtos Cartesianos:** Ao desmarcar a opção *"Relacionar tabelas automaticamente"*, lembre-se de que é necessário adicionar filtros de junção manuais na seção de Condições Personalizadas para evitar travamento do banco por cruzamento incorreto de dados.
2. **Utilize o Filtro de Coligada (`:PLN_CODCOLIGADA`):** Em bases multi-empresas, a ausência de restrição de coligada fará com que o RM retorne dados cruzados de outras filiais, gerando inconsistências severas em relatórios.
3. **Cuidado com Históricos:** Tabelas como `PFHSTSAL` registram múltiplas linhas por funcionário. Ao fazer join direto, o funcionário aparecerá repetido para cada reajuste. Se precisar apenas do salário ativo atual, dê preferência ao campo `SALARIO` nativo da `PFUNC`.
