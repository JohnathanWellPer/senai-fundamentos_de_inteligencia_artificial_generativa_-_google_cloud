<div align="center">
  <h2>PromptCraft Pro</h2>
  <p>
    <em>Generative AI Prompt Builder | SENAI - Generative AI Foundations - Google Cloud</em><br>
    <em>Construtor de Prompts Estruturados para IA | SENAI - Fundamentos de Inteligência Artificial Generativa - Google Cloud</em>
  </p>

  <p>
    <b>Choose your language:</b><br>
    <b>Escolha seu idioma:</b><br>
    <a href="#study-context">English</a> | <a href="#contexto-do-estudo">Português</a>
  </p>

  <p>
    <b>Tech Stack & Tools</b><br>
    <b>Tecnologias & Ferramentas</b>
  </p>

  <img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows" />
  <img src="https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white" alt="Google Chrome" />
  <img src="https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white" alt="Google Gemini" />
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  <img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white" alt="Markdown" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Notepad++-90E59A?style=for-the-badge&logo=notepadplusplus&logoColor=black" alt="Notepad++" />
</div>

<br/>

---

### 🇺🇸 Study Context

Project developed as a practical implementation for the "Generative AI Foundations" course (Google Cloud) by SENAI. The academic objective was to understand how Large Language Models (LLMs) operate and how to mitigate risks like "AI Hallucinations" through proper prompt engineering, transitioning from Zero-shot to Few-shot learning paradigms.

### The Application

An autonomous client-side web tool designed for professionals and teams interacting with LLMs (such as ChatGPT or Gemini). PromptCraft Pro replaces poorly structured open-text prompts by enforcing a mandatory architectural form: Persona, Objective, Context, Format, and Examples.

### Business Rules (Applied Logic)

The system's logic was built using Vanilla JavaScript to stringently enforce AI governance and prompt best practices:

1. **Context Enforcement:** The JS engine blocks prompt generation if the core 'Objective' and 'Context' fields are missing. This is a hard-coded mitigation strategy against AI hallucinations, forcing the user to ground the prompt in actual data rather than relying on the LLM's generic training weights.
​2. **Dynamic Templating:** Leverages ES6 Template Literals to systematically concatenate non-empty fields into a highly legible, sectioned text block recognized efficiently by Transformer-based architectures.
3. **Few-Shot Learning Integration:** By providing an optional 'Examples' block, the tool allows users to structurally pivot the prompt from a generic "Zero-Shot" instruction to a highly accurate "Few-Shot" pattern-matching request.
4. **Clipboard API Integration:** Native `navigator.clipboard.writeText()` API allows users to copy the engineered prompt with a single click and immediate UX feedback.

### How to Run (Local Deploy)

As a native web application, the system requires no installation of packages, dependencies, databases, or servers.

1. Clone this repository or download the files.
​2. Navigate to the folder and double-click the `index.html` file.
3. The interface will automatically open in your default web browser, fully ready for interactions and testing.

<br/>

---

### 🇧🇷 Contexto do Estudo

Projeto desenvolvido como implementação prática do curso "Fundamentos de Inteligência Artificial Generativa" (Google Cloud) do SENAI. O objetivo acadêmico foi compreender como os Modelos de Linguagem Grande (LLMs) operam e como mitigar riscos como "Alucinações da IA" por meio da engenharia de prompt adequada, transitando dos paradigmas de aprendizado Zero-shot para Few-shot.

### A Aplicação

Uma ferramenta autônoma operando no lado do cliente (Client-Side) projetada para profissionais e equipes que interagem com LLMs (como ChatGPT ou Gemini). O PromptCraft Pro substitui prompts de texto livre mal estruturados, impondo um formulário arquitetônico: Persona, Objetivo, Contexto, Formato e Exemplos.

### Regras de Negócio (Lógica Aplicada)

A lógica do sistema foi construída usando Vanilla JavaScript para impor rigorosamente a governança de IA e as melhores práticas de prompts:

1. **Aplicação de Contexto:** O motor JS bloqueia a geração do prompt se os campos centrais 'Objetivo' e 'Contexto' estiverem vazios. Esta é uma estratégia de mitigação codificada contra alucinações da IA, forçando o usuário a basear o prompt em dados reais.
​2. **Templating Dinâmico:** Utiliza Template Literals (ES6) para concatenar sistematicamente campos não vazios em um bloco de texto seccionado, altamente legível e reconhecido de forma eficiente por arquiteturas baseadas em Transformadores.
3. **Integração de Few-Shot Learning:** Ao fornecer um bloco opcional de 'Exemplos', a ferramenta permite aos usuários alterar estruturalmente o prompt de uma instrução genérica "Zero-Shot" para uma solicitação de correspondência de padrões "Few-Shot" altamente precisa.
4. **Integração da API de Clipboard:** A API nativa `navigator.clipboard.writeText()` permite que os usuários copiem o prompt engenheirado com um único clique.

### Como Executar (Deploy Local)

Por ser uma aplicação web nativa, o sistema não exige instalação de pacotes, dependências, bancos de dados ou servidores.

1. Faça o clone deste repositório ou o download dos arquivos.
​2. Navegue até a pasta e dê um duplo clique no arquivo `index.html`.
3. A interface abrirá automaticamente no seu navegador web padrão, totalmente pronta para interações e testes.

<br/>

<div align="center">
  <a href="https://github.com/JohnathanWellPer/senai-fundamentos_de_inteligencia_artificial_generativa_-_google_cloud">
    <img src="https://img.shields.io/badge/Return_to_SENAI_Root-FF0000?style=for-the-badge&logo=github&logoColor=white" alt="Return to Root" />
  </a>
</div>
