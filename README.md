# PIV - Projetos de Desenvolvimento Web

Este repositório contém uma coleção de projetos e exercícios práticos focados no desenvolvimento web, abrangendo HTML, CSS, JavaScript e TypeScript. Os projetos estão organizados por tecnologia e nível de complexidade.

## 📁 Estrutura do Repositório

```
piv/
├── html/                    # Projetos em HTML/CSS
├── js/                      # Projetos em JavaScript
├── ts/                      # Projetos em TypeScript
└── README.md               # Este arquivo
```

## 🌐 Projetos HTML/CSS

### 📂 `html/aula01/`
Exercícios básicos de HTML e CSS para iniciantes.
- **Arquivos**: `index.html`, `style.css`, `exemplo01.html`
- **Objetivo**: Fundamentos de estruturação HTML e estilização CSS

### 📂 `html/exemplo01/`
Projeto exemplo com estrutura organizada.
- **Estrutura**: HTML, CSS e JS separados em pastas
- **Objetivo**: Demonstrar organização de arquivos em projetos web

### 📂 `html/meu-curriculo/`
Currículo pessoal básico em HTML.
- **Arquivos**: `index.html`, `style.css`, pasta `media/`
- **Objetivo**: Criar um currículo simples com HTML semântico

### 📂 `html/meu-curriculo-semantico/`
Versão aprimorada do currículo usando HTML5 semântico.
- **Arquivos**: `index.html`, `style.css`
- **Tecnologias**: HTML5 semântico, CSS3
- **Objetivo**: Demonstrar uso correto de tags semânticas (`header`, `main`, `section`, `article`, `footer`)

## 🚀 Projetos JavaScript

### 📂 `js/meu-curriculo-javascript/`
Currículo interativo com JavaScript.
- **Arquivos**: `index.html`, `script.js`, `style.css`
- **Funcionalidades**: Interatividade, navegação dinâmica
- **Objetivo**: Adicionar comportamento dinâmico ao currículo

## 📘 Projetos TypeScript

### 📂 `ts/tarefas-dia-ts/`
Aplicação de gerenciamento de tarefas diárias.
- **Tecnologias**: TypeScript, Vite, HTML5, CSS3
- **Funcionalidades**:
  - Adicionar/remover tarefas
  - Marcar tarefas como concluídas
  - Persistência com LocalStorage
  - Organização por data
- **Como executar**:
  ```bash
  cd ts/tarefas-dia-ts
  npm install
  npm run dev
  ```

### 📂 `ts/migracao-js-ts-aluno/`
Projeto base para aprender migração de JavaScript para TypeScript.
- **Objetivo**: Demonstrar o processo de migração JS → TS
- **Conteúdo**: Versão inicial em JavaScript para ser migrada

### 📂 `ts/migracao-js-ts-professor/`
Versão completa da migração JavaScript para TypeScript.
- **Tecnologias**: TypeScript, Node.js
- **Funcionalidades**: Projeto compilado e configurado com TypeScript
- **Como executar**:
  ```bash
  cd ts/migracao-js-ts-professor
  npm install
  npm run build
  ```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estruturação semântica de páginas
- **CSS3**: Estilização e layout responsivo
- **JavaScript**: Interatividade e comportamento dinâmico
- **TypeScript**: Tipagem estática e desenvolvimento escalável
- **Vite**: Build tool e servidor de desenvolvimento
- **Node.js**: Ambiente de execução JavaScript

## 🚀 Como Executar os Projetos

### Projetos HTML/CSS/JS Puros
```bash
# Navegue até a pasta do projeto
cd html/nome-do-projeto

# Abra o index.html no navegador ou use um servidor local
npx serve .
# ou
python3 -m http.server 8080
```

### Projetos TypeScript
```bash
# Navegue até a pasta do projeto
cd ts/nome-do-projeto

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev

# Para build de produção
npm run build
```

## 📚 Objetivos de Aprendizado

Este repositório foi criado para demonstrar:

1. **Progressão de Aprendizado**: Do HTML básico ao TypeScript avançado
2. **Boas Práticas**: Organização de código, estrutura de projetos
3. **HTML Semântico**: Uso correto de tags HTML5
4. **JavaScript Moderno**: ES6+, manipulação do DOM, LocalStorage
5. **TypeScript**: Tipagem, interfaces, compilação
6. **Ferramentas Modernas**: Vite, npm, build tools

## 🤝 Contribuição

Este é um repositório educacional. Sinta-se à vontade para:
- Fazer fork do projeto
- Sugerir melhorias
- Reportar issues
- Adicionar novos exemplos

## 📄 Licença

Este projeto é de uso educacional e está disponível sob licença MIT.

---

**Desenvolvido para fins educacionais** 📖✨
