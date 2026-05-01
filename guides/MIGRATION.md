# Migration Guide: PHP to Next.js

## Summary of Changes

Your Landing Page has been successfully migrated from a PHP backend to a modern Next.js + TypeScript + Prisma stack.

## What Changed

### Backend
- ❌ **Removed**: PHP files and Composer dependencies
- ✅ **Added**: Next.js API routes with TypeScript
- ✅ **Added**: Prisma ORM for type-safe database queries
- ✅ **Added**: Automated database migrations

### Frontend
- 📄 `index.html` → 🔵 `app/page.tsx` (React component)
- 🎨 `styles.css` → 📦 `components/Home.module.css` (CSS Modules)
- 🔧 Inline scripts → 💾 `components/BetaModal.tsx` (React component)

### Database
- 📋 Schema now defined in `prisma/schema.prisma`
- 🚀 Automatic migrations with `prisma migrate`
- 🗺️ Type-safe database access with Prisma Client
- 🔄 Easy schema evolution with migrations

## Installation & First Run

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Environment Setup
```bash
cp .env.local.example .env.local
# Edit .env.local and add your PostgreSQL connection string
```

### Step 3: Initialize Database
```bash
npx prisma migrate dev --name init
```

This command:
1. Creates the `beta_signups` table in PostgreSQL
2. Generates Prisma client files
3. Ready for production data

### Step 4: Start Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

## Key Improvements

| Aspect | Before | After |
|--------|--------|-------|
| **Type Safety** | None | Full TypeScript ✅ |
| **Build Step** | None | Optimized Next.js build |
| **Database Queries** | Raw SQL strings | Prisma (type-safe) |
| **API Development** | Separate PHP files | Co-located in Next.js |
| **Development Experience** | Manual | Hot reload, better errors |
| **Production** | Manual scaling | Vercel ready |

## File Mapping Reference

### Frontend
```
Old: index.html + inline scripts
New: app/page.tsx (React component)
     components/BetaModal.tsx (Modal component)
```

### Styling
```
Old: styles.css (one monolithic file)
New: components/Home.module.css (scoped styles)
     components/BetaModal.module.css (modal styles)
     app/globals.css (global variables)
```

### Backend API
```
Old: backend/beta-signup.php
New: app/api/signup/route.ts (TypeScript)
```

### Database
```
Old: No schema file, SQL run manually
New: prisma/schema.prisma (version controlled)
     Migrations in prisma/migrations/
```

## Breaking Changes

⚠️ **API Endpoint Changed**
- Old: `backend/beta-signup.php`
- New: `/api/signup`

The new endpoint is now relative to the app root, not a separate folder. Update any external references accordingly.

## Database Connection

The app uses **PostgreSQL**. Make sure you have:

1. PostgreSQL server running
2. Database created (or use `postgres` default)
3. Connection string in `.env.local`:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/cucumbu"
   ```

## Next.js Specific Features

### File-based Routing
- `app/page.tsx` → `http://localhost:3000/`
- `app/api/signup/route.ts` → `http://localhost:3000/api/signup`

### Server & Client Components
- By default, components are **Server Components** (faster)
- Add `'use client'` when you need interactivity (already done in modals)

### API Routes
- Type-safe with TypeScript
- Full Node.js runtime available
- Automatic hot reload

## Database Workflow

### View Data
```bash
npx prisma studio
```
Opens a web UI to view and edit your database.

### Make Schema Changes
1. Edit `prisma/schema.prisma`
2. Run: `npx prisma migrate dev --name description`
3. Automatically generates migration files

### Rollback (Emergency)
```bash
npx prisma migrate resolve --rolled-back <migration_name>
```

## Deployment

### Vercel (Recommended - zero config)
```bash
npm i -g vercel
vercel
```

### Traditional Node.js Server
```bash
npm run build
npm start
```

### Docker
Create `Dockerfile` in project root (template available on request)

## Troubleshooting

### Database Connection Fails
```bash
# Test connection string
psql "postgresql://user:password@localhost:5432/cucumbu"
```

### Prisma Client Not Found
```bash
rm -rf .vercel
npx prisma generate
npm run dev
```

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001
```

## What's Maintained from Original

✅ Same landing page layout
✅ Same styling (pixel-perfect)
✅ Same form fields
✅ Same user feedback messages
✅ Same responsive design
✅ Same branding and colors

## What's Enhanced

✨ Type safety with TypeScript
✨ Better error handling
✨ Hot module reloading
✨ Version-controlled database schema
✨ Easier to scale and maintain
✨ Modern development experience

## Questions or Issues?

Check the main [README.md](./README.md) for comprehensive documentation.

---

**Happy coding! 🚀**
