# 🚀 SciELO Redesign — Projeto Acadêmico

![Bootstrap](https://img.shields.io/badge/Bootstrap-v5.3-7952b3?style=for-the-badge&logo=bootstrap&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Projeto de Redesign de Interface desenvolvido para a disciplina de **Internet IV**. O objetivo principal foi reconstruir as principais páginas da plataforma **SciELO (Scientific Electronic Library Online)**, tornando a experiência de busca, leitura e gerenciamento de artigos científicos mais intuitiva, moderna, responsiva e inteligente.

---

## 🛠️ Tecnologias Utilizadas e Conceitos Bootstrap Aplicados

Para atender rigorosamente aos critérios técnicos estabelecidos, o projeto utilizou a infraestrutura nativa do **Bootstrap 5**:
* **Sistema de Grid Avançado (`row`, `col-*`):** Utilizado para a diagramação flexível do layout, permitindo que o conteúdo flua perfeitamente entre dispositivos móveis, tablets e telas desktop.
* **Classes Utilitárias de Espaçamento e Flexbox:** Controle preciso de margens (`m-*`), paddings (`p-*`) e alinhamento dinâmico via Flexbox (`d-flex`, `align-items-center`, `justify-content-between`) para evitar sobreposição de elementos.
* **Componentes Estruturais SaaS:** Implementação de componentes modernos como barras de navegação fixas (`sticky-top`), menus colapsáveis (`navbar-toggler`), janelas modais (`modal`), notificações flutuantes (`toast`) e menus laterais móveis (`offcanvas`).

---

## 📂 Organização e Estrutura do Projeto

O repositório foi organizado seguindo as boas práticas de desenvolvimento web, utilizando a padronização *kebab-case* para nomenclatura de arquivos, garantindo acessibilidade e semântica de rotas:

```text
├── index.html               # Página Inicial (Busca Centralizada e Áreas)
├── filtros-avancados.html   # Interface de Regras Lógicas de Busca
├── resultados.html          # Listagem e Filtros Avançados de Artigos
├── artigo.html              # Página de Leitura Interna do Artigo Científico
├── minha-biblioteca.html    # Painel de Controle do Usuário (Artigos Salvos)
├── components.js            # Script de Injeção Dinâmica de Componentes Globais
└── imagens/                 # Diretório contendo os assets visuais do relatório

```

---

## 📊 Relatório Visual de Usabilidade (Antes e Depois)

### 1. Página Inicial (Busca Centralizada)

* **Antes:** Relação de contraste difusa, múltiplos campos espalhados e poluição visual que dificultavam o foco principal do usuário: a barra de pesquisa.
* **Depois:** Foco minimalista inspirado em ferramentas modernas de busca (SaaS). Um ecossistema limpo com um campo de busca imersivo e cartões geométricos (`icon-box`) para categorização das áreas de conhecimento.

| Interface Original (Antes) | Nova Interface Redesenhada (Depois) |
| --- | --- |
|  |  |

> **Justificativa de UI/UX:** A aplicação de uma hierarquia tipográfica clara (`display-6`, `fw-bold`) e o isolamento do motor de busca reduzem a carga cognitiva do usuário, otimizando o fluxo de descoberta científica.

---

### 2. Filtros Avançados (Busca Lógica)

* **Antes:** Formulários densos, inputs desalinhados e falta de clareza na adição de novos parâmetros condicionais (AND, OR, NOT).
* **Depois:** Uso de linhas de grid responsivas (`row g-3 align-items-center`) organizadas em blocos semânticos (`fieldset`). Inclusão de um botão dinâmico assistido por JavaScript para inserção fluida de novas regras visuais.

| Interface Original (Antes) | Nova Interface Redesenhada (Depois) |
| --- | --- |
|  |  |

> **Justificativa de UI/UX:** Alinhamento perfeito dos campos de seleção e inputs, garantindo consistência visual e permitindo que o usuário monte buscas complexas sem perder o rastro visual dos operadores lógicos.

---

### 3. Resultado de Buscas

* **Antes:** Lista de resultados compactada, filtros laterais confusos e ausência de uma separação clara entre metadados do artigo (autores, revista, ano).
* **Depois:** Arquitetura em duas colunas através do Grid Bootstrap. À esquerda, filtros expansíveis utilizando o componente `accordion`; à direita, os resultados dispostos em cartões flutuantes (`card border-0 shadow-sm`) com amplo espaçamento interno.

| Interface Original (Antes) | Nova Interface Redesenhada (Depois) |
| --- | --- |
|  |  |

> **Justificativa de UI/UX:** Os badges coloridos utilitários (ex: `badge-open-access`) destacam o status do artigo imediatamente. A divisão por cards limpos melhora a escaneabilidade da página.

---

### 4. Página do Artigo (Leitura Imersiva)

* **Antes:** Texto corrido ocupando toda a largura da tela, prejudicando o comprimento ideal da linha de leitura. Ferramentas de citação e download escondidas.
* **Depois:** Distribuição balanceada do conteúdo em uma coluna de leitura otimizada (`col-lg-8`) e uma barra lateral fixa de utilidades (`col-lg-4`). Implementação de abas de navegação internas (`nav-tabs`) para alternar entre Resumo e Texto Completo.

| Interface Original (Antes) | Nova Interface Redesenhada (Depois) |
| --- | --- |
|  |  |

> **Justificativa de UI/UX:** Aumento do espaçamento entrelinhas (`line-height: 1.8`) para evitar a fadiga ocular. Ferramentas críticas (PDF, XML, Citar) foram promovidas para uma barra de ações rápidas no topo da página.

---

### 5. Minha Biblioteca (Área do Usuário)

* **Antes:** Falta de um painel centralizado para gerenciamento e categorização de histórico de leitura do pesquisador.
* **Depois:** Painel moderno com menu lateral de navegação estrutural. Os artigos salvos ganharam comportamento interativo via JavaScript, permitindo seleção em lote, exclusão em tempo real com atualização automática do contador e realce visual (`selected`) nos itens marcados.

| Interface Original (Antes) | Nova Interface Redesenhada (Depois) |
| --- | --- |
|  |  |

> **Justificativa de UI/UX:** Eliminação de elementos duplicados no layout e correção dos containers estruturais. O redesenho foca no controle do usuário sobre seus dados salvos através de uma lista limpa e interativa.

---

## 📱 Responsividade e Mobile-First

O layout foi testado e homologado para dispositivos móveis utilizando os breakpoints nativos do Bootstrap (`sm`, `md`, `lg`, `xl`). Elementos complexos (como menus laterais extensos) convertem-se automaticamente em gavetas móveis via componente **Offcanvas** em telas menores, garantindo navegação contínua sem quebras ou sobreposições.

---

## 🚀 Como Executar o Projeto Localmente

1. Clone este repositório em sua máquina:
```bash
git clone [https://github.com/carlabsab/scieloredesign.git](https://github.com/carlabsab/scieloredesign.git)

```

2. Navegue até a pasta do projeto.
3. Abra o arquivo `index.html` diretamente em qualquer navegador moderno.

```

```
