# Nuxt 3 boilerplate

- Code format : Eslint /   Lint
- Pre commit with linter-stage & Husky
- Agnostic ORM Database : Prisma
- Client / Server communication protocol : tRPC
- Shared type first and front/back validation : Zog 

## Fixtures & exemples

- Simple tRPC Crud
- Pre-commit linter & test

## Setup

```bash
pnpm i
npx prisma migrate dev --name init
pnpm run dev
```

## Database

```bash
npx prisma studio
```
