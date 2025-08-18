# TastyBoard — Next.js + TypeScript (demo inicial)

Lista responsiva de receitas com **busca client-side** usando **Next.js 14 (App Router)** e **TypeScript**.

## 🚀 Rodando localmente
```bash
# 1) Instalar dependências
npm install

# 2) Rodar em desenvolvimento
npm run dev

# 3) Abrir no navegador
http://localhost:3000
```

## 📂 Estrutura
```
app/
  layout.tsx        # layout raiz + import dos estilos
  page.tsx          # página inicial com busca e grid
  globals.css       # estilos globais (grid responsivo, tema)
  components/
    data.ts         # dados mockados e tipo Recipe
    RecipeCard.tsx  # componente de card
```

## 🧠 Observações
- Para simplificar a demo, usamos `<img>` ao invés de `next/image` (evita configurar domínios externos).
- Os dados estão mockados em `components/data.ts`. Futuramente, você pode trocar por **fetch** em uma API (NestJS).
- A UI é *mobile-first*, com **grid responsivo** (cards 100% → 2 colunas → 3+ colunas conforme a largura).
