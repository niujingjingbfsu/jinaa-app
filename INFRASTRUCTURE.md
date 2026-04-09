# Infrastructure Setup Guide

## Vercel (Hosting)

### One-time setup (requires board/owner action)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `niujingjingbfsu/jinaa-app` from GitHub
3. Set framework to **Next.js** and root directory to `packages/web`
4. Set build command: `cd ../.. && pnpm build --filter @jinaa/web`
5. Set install command: `pnpm install --frozen-lockfile`

### Environments

| Environment | Branch | URL |
|-------------|--------|-----|
| Production  | `main` | `jinaa-app.vercel.app` (or custom domain) |
| Preview     | All PRs | Auto-generated per PR |
| Staging     | `staging` (create when needed) | `staging.jinaa-app.vercel.app` |

### Required Environment Variables on Vercel

Set these in Vercel Dashboard → Project → Settings → Environment Variables:

```
DATABASE_URL          (production + preview)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
ANTHROPIC_API_KEY
UPSTASH_REDIS_REST_URL
UPSTASH_REDIS_REST_TOKEN
NEXT_PUBLIC_SENTRY_DSN
AXIOM_DATASET
AXIOM_TOKEN
```

See `.env.example` for the full list.

### Vercel GitHub Integration

The `vercel.json` at the repo root pre-configures:
- Build/install commands
- Security headers
- Auto-deploy on `main` branch only

---

## GitHub Actions → Vercel Deploy

For programmatic deploys (CI-triggered), add these GitHub repo secrets:
- `VERCEL_TOKEN` — from vercel.com/account/tokens
- `VERCEL_ORG_ID` — from `.vercel/project.json` after first `vercel link`
- `VERCEL_PROJECT_ID` — from `.vercel/project.json`

Then the `deploy.yml` workflow can use `amondnet/vercel-action` or `vercel deploy --prod`.
