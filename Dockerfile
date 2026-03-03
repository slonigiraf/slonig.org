# syntax=docker.io/docker/dockerfile:1

# Next.js 16 requires Node 20.9+ (Node 18 not supported anymore)
# node:20-alpine tag tracks Node 20.x on Alpine
FROM node:20-alpine AS base

# Some native deps may need glibc compatibility on Alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app

# 1) Install dependencies
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# 2) Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Optional: disable Next telemetry during build
# ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# 3) Production runtime (standalone)
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080
ENV HOSTNAME=0.0.0.0

RUN addgroup -S -g 1001 nodejs \
 && adduser -S -u 1001 nextjs

COPY --from=builder /app/public ./public

# Requires `output: "standalone"` in next.config.js
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 8080

CMD ["node", "server.js"]