# Architecture Overview

## Project Structure

```
Landing-Page/
├── 📁 app/                        # Next.js app directory (App Router)
│   ├── 📁 api/
│   │   └── 📁 signup/
│   │       └── route.ts           # POST /api/signup - Beta signup handler
│   ├── layout.tsx                 # Root layout with metadata
│   ├── page.tsx                   # "/" - Landing page
│   ├── globals.css                # Global styles & CSS variables
│   └── favicon.ico
│
├── 📁 components/                 # React components
│   ├── BetaModal.tsx             # Beta signup modal component (client-side)
│   ├── BetaModal.module.css       # Modal styles
│   └── Home.module.css            # Landing page styles
│
├── 📁 lib/                        # Utility functions & clients
│   └── db.ts                      # Prisma client singleton
│
├── 📁 prisma/                     # Database configuration
│   ├── schema.prisma              # Database schema definition
│   ├── seed.ts                    # Database seed script
│   └── migrations/                # Migration files (auto-generated)
│
├── 📁 public/                     # Static assets
│   ├── favicon.svg
│   ├── logo.svg
│   └── logo-black.svg
│
├── 📄 package.json                # NPM dependencies
├── 📄 next.config.js              # Next.js configuration
├── 📄 tsconfig.json               # TypeScript configuration
├── 📄 .env.local                  # Environment variables (git-ignored)
├── 📄 .env.local.example          # Environment template
├── 📄 .gitignore                  # Git ignore rules
├── 📄 README.md                   # Main documentation
└── 📄 MIGRATION.md                # Migration guide
```

## Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Frontend** | React | 18.2.0 |
| **Framework** | Next.js | 14.0.0 |
| **Language** | TypeScript | 5.x |
| **Database** | PostgreSQL | 12+ |
| **ORM** | Prisma | 5.7.0 |
| **Styling** | CSS Modules | - |
| **Package Manager** | npm/yarn/pnpm | - |

## Data Flow

### User Signs Up for Beta
```
1. User fills form in BetaModal component
   ↓
2. Form submit triggers API call to /api/signup
   ↓
3. Backend validation (TypeScript/Prisma)
   ↓
4. Data inserted into PostgreSQL via Prisma
   ↓
5. Response sent back to client with success/error
   ↓
6. User sees confirmation message
```

### Database Schema
```prisma
BetaSignup {
  id        Int       (primary key, auto-increment)
  name      String    (required)
  email     String    (required, unique)
  company   String?   (optional)
  role      String?   (optional)
  message   String?   (optional)
  createdAt DateTime  (auto set)
  updatedAt DateTime  (auto update)
}
```

## API Routes

### `POST /api/signup`

**Request:**
```
Content-Type: application/x-www-form-urlencoded

name=John Doe
email=john@example.com
company=Acme Corp
role=Product Manager
message=Looking to improve team efficiency
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Welcome to the beta! Check your email for next steps.",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "company": "Acme Corp",
    "role": "Product Manager",
    "message": "Looking to improve team efficiency",
    "createdAt": "2026-05-01T10:30:00Z",
    "updatedAt": "2026-05-01T10:30:00Z"
  }
}
```

**Error Response (400+):**
```json
{
  "success": false,
  "message": "Email is already registered for beta access"
}
```

## Component Hierarchy

```
<RootLayout>
  <Home>
    <header>Navigation</header>
    <main>
      <HeroSection/>
      <FeaturesSection/>
      <HowItWorksSection/>
      <IntegrationsSection/>
      <CTASection/>
    </main>
    <footer/>
    <BetaModal/>
  </Home>
</RootLayout>
```

## Development Workflow

### 1. Local Development
```bash
npm run dev
# Runs on http://localhost:3000
# Hot module reloading enabled
# Database updates via Prisma
```

### 2. Database Changes
```bash
# Edit prisma/schema.prisma
npx prisma migrate dev --name feature_name
# Creates migration file automatically
```

### 3. Build & Deploy
```bash
npm run build
npm start
```

## Deployment Architecture

```
┌─────────────────┐
│   Your Domain   │
└────────┬────────┘
         ↓
┌─────────────────────────────┐
│  Next.js Application        │
│  - Frontend (React)         │
│  - API Routes (Node.js)     │
│  - Static Assets            │
└────────┬────────────────────┘
         ↓
┌─────────────────────────────┐
│  PostgreSQL Database        │
│  - beta_signups table       │
│  - Full ACID compliance     │
└─────────────────────────────┘
```

## Performance Considerations

- **Server Components**: Used by default for better performance
- **Client Components**: Only `BetaModal` and form interactions
- **CSS Modules**: Scoped styles, no conflicts
- **Prisma**: Generates optimized SQL queries
- **Static Generation**: Home page can be pre-built

## Security Features

- ✅ Input validation (email format, required fields)
- ✅ Unique email constraint (database level)
- ✅ Error messages don't leak sensitive data
- ✅ Environment variables not exposed to client
- ✅ CSRF protection ready (can add middleware)
- ⏳ Rate limiting (recommended to add)

## Scalability Path

### Phase 1: Current
- Single Next.js instance
- Shared PostgreSQL

### Phase 2: Production
- Multiple Next.js instances (load balanced)
- PostgreSQL with replication
- Redis cache (optional)
- CDN for static assets

### Phase 3: Enterprise
- Database sharding
- API gateway
- Microservices (optional)
- Admin dashboard
- Email/SMS integration

## Next Milestones

- [ ] Email notifications on signup
- [ ] Admin dashboard to view signups
- [ ] Automated email verification
- [ ] Rate limiting on signup endpoint
- [ ] Analytics tracking
- [ ] User authentication system
- [ ] Advanced features

---

**This architecture is designed to be scalable, maintainable, and developer-friendly.**
