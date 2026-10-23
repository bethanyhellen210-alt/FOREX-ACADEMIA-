# Forex Academia

A Next.js App Router application for a trading-education academy. The project includes educational landing and course pages, membership information, a marketplace, account page mockups, admin screens, and a Prisma schema for PostgreSQL.

## Requirements

- Node.js 20 or newer
- npm
- PostgreSQL for database-backed functionality

## Local development

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env` and set `DATABASE_URL` to a PostgreSQL connection string.
3. Generate the Prisma client: `npx prisma generate`
4. Start the development server: `npm run dev`
5. Open http://localhost:3000

## Deploy to Vercel

1. Import this GitHub repository into Vercel.
2. Select Next.js as the framework and keep the root directory at `.`.
3. Add `DATABASE_URL` in Vercel Project Settings → Environment Variables for the environments that need database access.
4. Deploy. The build script generates Prisma Client before running `next build`.

The database schema is in `prisma/schema.prisma`. Apply schema changes intentionally to your PostgreSQL database with `npx prisma db push` or use a migration workflow before relying on database-backed features.

## Important current limitations

The current login, registration, marketplace checkout, and admin forms are UI scaffolding; they do not yet implement complete authentication, payment processing, secure admin authorization, or file uploads. Do not use these screens as production security controls until those workflows are implemented and tested.

Never commit real credentials or production database URLs to Git.
