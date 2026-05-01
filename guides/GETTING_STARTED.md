# 🚀 Getting Started with Your New Next.js Project

Welcome! Your landing page has been successfully migrated from PHP to Next.js + TypeScript. Here's everything you need to know.

## ⚡ Quick Start (5 Minutes)

### Step 1: Install Dependencies
```bash
npm install
```
This installs Next.js, React, Prisma, TypeScript, and all other dependencies.

### Step 2: Configure Database
```bash
# Copy the template file
cp .env.local.example .env.local

# Edit .env.local with your PostgreSQL connection
nano .env.local  # or use your editor
```

Your `.env.local` should look like:
```
DATABASE_URL="postgresql://user:password@localhost:5432/cucumbu"
```

### Step 3: Initialize Database
```bash
npx prisma migrate dev --name init
```
This creates the `beta_signups` table in PostgreSQL.

### Step 4: Run Development Server
```bash
npm run dev
```

**Open in browser:** http://localhost:3000 ✅

## 📂 Project Structure at a Glance

```
app/                    → React components & pages
├── page.tsx           → Landing page (was index.html)
├── layout.tsx         → Root layout
├── globals.css        → Global styles
└── api/signup/        → API endpoint

components/            → Reusable React components
├── BetaModal.tsx      → Signup modal
└── *.module.css       → Scoped styles

prisma/
├── schema.prisma      → Database schema
└── seed.ts            → Sample data

lib/
└── db.ts             → Prisma client

package.json           → Dependencies (npm)
next.config.js         → Next.js config
```

## 🎯 What to Do Next

### Immediate
- [ ] Run `npm install`
- [ ] Configure `.env.local` with your PostgreSQL
- [ ] Run `npx prisma migrate dev --name init`
- [ ] Run `npm run dev` and test the site

### Short-term
- [ ] Test the beta signup form
- [ ] Check database with `npx prisma studio`
- [ ] Review `README.md` for full documentation
- [ ] Customize if needed (colors, copy, etc.)

### Before Going Live
- [ ] Prepare PostgreSQL instance (if not done)
- [ ] Review `DEPLOYMENT.md`
- [ ] Choose deployment platform (Vercel, Docker, etc.)
- [ ] Set up monitoring & error tracking

## 🔧 Common Tasks

### View Your Database
```bash
npx prisma studio
# Opens http://localhost:5555 in browser
```

### Make Database Changes
1. Edit `prisma/schema.prisma`
2. Run: `npx prisma migrate dev --name description`

### Add Environment Variables
Edit `.env.local`:
```
DATABASE_URL="..."
SENDGRID_API_KEY="..."  # optional: for emails
```

### Build for Production
```bash
npm run build
npm start
```

## 📖 Documentation

More detailed guides available:

- **README.md** - Complete project documentation
- **MIGRATION.md** - What changed from PHP version
- **ARCHITECTURE.md** - Technical design & data flow
- **DEPLOYMENT.md** - How to deploy to production
- **SUMMARY.md** - Overview of changes

## 🌍 Deployment (When Ready)

### Vercel (Fastest - 2 minutes)
```bash
npm i -g vercel
vercel --prod
```

### Docker (Flexible)
```bash
docker build -t cucumbu .
docker run -p 3000:3000 -e DATABASE_URL="..." cucumbu
```

### Traditional Server
```bash
npm run build && npm start
```

See `DEPLOYMENT.md` for step-by-step instructions.

## ❓ Troubleshooting

### "Cannot find module" Error
```bash
npm install
npm run dev
```

### Database Connection Error
- Verify PostgreSQL is running
- Check `DATABASE_URL` in `.env.local`
- Test connection: `psql "postgresql://user:password@localhost:5432/db"`

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001
```

### Build Fails
```bash
npx prisma generate
npm run build
```

## 🎓 Key Concepts

### Components
React components in `components/` and `app/`. Use `.tsx` for files with JSX.

### API Routes
TypeScript API routes in `app/api/`. They're serverless functions that handle requests.

### Database
Prisma ORM talks to PostgreSQL. Your schema is in `prisma/schema.prisma`.

### Styling
CSS Modules keep styles scoped to components. No naming conflicts!

### Environment Variables
Secrets go in `.env.local` (not in git). Access with `process.env.DATABASE_URL`.

## 📚 Learning Resources

**New to Next.js?**
- [Next.js Docs](https://nextjs.org/docs)
- [Next.js Tutorial](https://nextjs.org/learn)

**New to Prisma?**
- [Prisma Docs](https://www.prisma.io/docs/)
- [Prisma Quickstart](https://www.prisma.io/docs/getting-started/quickstart)

**New to TypeScript?**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript in 5 Minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

## ✉️ Support

**Something not working?**
1. Check error message in terminal
2. Look for similar issue in documentation files
3. Check `README.md` troubleshooting section
4. Review browser web inspector console

## 🎉 You're Ready!

Your project is set up and ready for development. The migration from PHP is complete and you now have:

✅ Modern React components
✅ Type safety with TypeScript  
✅ Professional database management with Prisma
✅ Production-ready architecture
✅ Easy deployment options

**Start developing:**
```bash
npm run dev
```

Good luck! 🚀

---

**Questions?** Open an issue or check the documentation files in your project root.
