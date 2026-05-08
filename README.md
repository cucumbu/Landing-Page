# Cucumbu Landing Page - Next.js + TypeScript Migration

This project has been migrated from PHP to a modern **Next.js 14 + TypeScript** stack with **Prisma** for database management.

## Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Styling**: CSS Modules
- **API**: Next.js App Router with API Routes

## Project Structure

```
/workspaces/Landing-Page/
├── app/
│   ├── api/
│   │   └── signup/
│   │       └── route.ts          # Beta signup API endpoint
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page
│   ├── globals.css                # Global styles
│   └── favicon.ico
├── components/
│   ├── BetaModal.tsx             # Beta signup modal component
│   ├── BetaModal.module.css       # Modal styles
│   └── Home.module.css            # Home page styles
├── lib/
│   └── db.ts                      # Prisma client singleton
├── prisma/
│   └── schema.prisma              # Database schema
├── public/
│   ├── favicon.svg
│   ├── logo.svg
│   └── logo-black.svg
├── package.json
├── next.config.js
├── tsconfig.json
└── .env.local                     # Environment variables (not in git)
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Database Connection

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Update `.env.local` with your PostgreSQL connection string:

```
DATABASE_URL="postgresql://user:password@localhost:5432/cucumbu"
```

### 3. Set Up Database

Generate Prisma client and run migrations:

```bash
# Generate Prisma client
npx prisma generate

# Create the database and run migrations
npx prisma migrate dev --name init

# Optional: Seed the database (if seed.ts exists)
# npx prisma db seed
```

To view your database in Prisma Studio:

```bash
npx prisma studio
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

### Landing Page
- Hero section with video
- Features showcase
- How it works section
- Integrations showcase
- Call-to-action section
- Fully responsive design

### Beta Signup System
- Modal form with validation
- Fields: Name, Email, Company, Role, Use Case
- Database persistence
- Error handling and user feedback
- Prevents duplicate email registrations

### API Route

**POST `/api/signup`**

Accepts form data with the following fields:
- `name` (required): User's full name
- `email` (required): User's email address
- `company` (optional): Company/organization name
- `role` (optional): User's role
- `message` (optional): Use case description

Response:
```json
{
  "success": true,
  "message": "Welcome to the beta! Check your email for next steps.",
  "data": { /* signup record */ }
}
```

## Database Schema

### BetaSignup Model

```prisma
model BetaSignup {
  id        Int     @id @default(autoincrement())
  name      String
  email     String  @unique
  company   String?
  role      String?
  message   String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## Key Files Changed

| Old File | New Location | Notes |
|----------|--------------|-------|
| `index.html` | `app/page.tsx` | Converted to React component |
| `styles.css` | `components/Home.module.css` | Converted to CSS modules |
| `backend/beta-signup.php` | `app/api/signup/route.ts` | API route in TypeScript |
| `composer.json` | `package.json` | NPM dependencies |

## Development Workflow

### Make Changes
- Edit React components in `/components` or `/app`
- Styles are colocated as CSS modules
- API routes are in `/app/api`

### Database Changes
- Update `prisma/schema.prisma`
- Create migration: `npx prisma migrate dev --name feature_name`

### Build for Production
```bash
npm run build
npm start
```

## Environment Variables

Required:
- `DATABASE_URL`: PostgreSQL connection string

Optional (for future email functionality):
- `SENDGRID_API_KEY` or `NODEMAILER_*` variables

## Next Steps

1. **Email Integration**: Add email notification on signup (SendGrid, Nodemailer, etc.)
2. **Admin Dashboard**: Create admin panel to view signups
3. **Rate Limiting**: Add rate limiting to the signup endpoint
4. **Email Validation**: Verify emails before accepting signups
5. **Deployment**: Deploy to Vercel, AWS, or your preferred hosting

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Docker
Create a `Dockerfile` for containerized deployment.

### Traditional Server
```bash
npm run build
npm start
```

## Troubleshooting

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Database Connection Error
- Verify `DATABASE_URL` in `.env.local`
- Ensure PostgreSQL server is running
- Check firewall/network settings

### Prisma Client Issues
```bash
rm -rf node_modules/.prisma
npx prisma generate
```

## API Documentation

For detailed API documentation, see [API_DOCS.md](./API_DOCS.md) (if available).

## Contributing

1. Create a feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request

## License

© 2026 Cucumbu. All rights reserved.

## Support

For issues or questions, contact: team@cucumbu.com
