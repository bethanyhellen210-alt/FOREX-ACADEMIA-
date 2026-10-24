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


## Paystack payments

The membership checkout uses Paystack's server-side transaction initialization and verification APIs. A successful browser redirect alone does not grant membership; the server verifies transaction status, reference, amount, currency, and email. A signed webhook endpoint is available at `/api/payments/webhook`.

### Required Vercel environment variables

- `DATABASE_URL`: PostgreSQL connection string.
- `PAYSTACK_SECRET_KEY`: Paystack test secret key for testing, then live secret key when ready. Keep it server-only.
- `PAYSTACK_CURRENCY`: currency enabled for your Paystack account.
- `PAYSTACK_MONTHLY_AMOUNT` and `PAYSTACK_YEARLY_AMOUNT`: prices in the currency's smallest unit.
- `NEXT_PUBLIC_SITE_URL`: deployed site origin, for example `https://your-project.vercel.app`.

After adding the `Payment` model, apply the schema to the configured PostgreSQL database using `npx prisma db push` (or your migration workflow), then redeploy. Set the Paystack dashboard webhook URL to `https://YOUR-DOMAIN/api/payments/webhook`.

Test in Paystack test mode first. Do not put secret keys in `NEXT_PUBLIC_*` variables or commit them to Git. Account registration and login use salted scrypt password hashes and an HTTP-only signed session cookie. A payment must use the email on the account; successful verification updates that user's membership plan. The current checkout is a one-time payment for a monthly/yearly access term; it does not automatically renew subscriptions. Review the application and complete end-to-end testing before production launch.
