# TastyBoard API — Revisão Completa (NestJS + Prisma + PostgreSQL)

Correções aplicadas para evitar erros de módulos, tipagem e mapeamento de banco.

## ✅ O que foi revisado
- `package.json` com **todas as dependências** necessárias (Nest/TS/Prisma).
- `tsconfig.json` e `tsconfig.build.json` ajustados (decorators/metadata).
- `PrismaModule` global para **injeção do PrismaService** sem duplicar providers.
- `PrismaService` usa **process.on('beforeExit')** (evita erro TS de tipo).
- DTOs com `@nestjs/mapped-types` e validações com `class-validator`.
- `schema.prisma` com **snake_case** (tabelas/colunas via `@map`/`@@map`).

## 🚀 Como rodar
```bash
docker compose up -d
npm install
npm run prisma:generate
npm run prisma:migrate
npm run db:seed
npm run dev
# http://localhost:3001
```

## 🔗 Endpoints
- GET /users
- GET /categories
- GET /recipes
- GET /recipes/:id
- POST /recipes
- PATCH /recipes/:id
- DELETE /recipes/:id
