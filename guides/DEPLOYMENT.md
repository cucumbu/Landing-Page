# Deployment Checklist

## Pre-Deployment

### ✅ Code Quality
- [ ] Run TypeScript check: `npx tsc --noEmit`
- [ ] Run linter: `npm run lint`
- [ ] Test form submission manually
- [ ] Test on mobile devices
- [ ] Check console for errors

### ✅ Database
- [ ] PostgreSQL connection verified
- [ ] All migrations applied: `npx prisma migrate deploy`
- [ ] Database backed up
- [ ] Connection string is secure (not hardcoded)

### ✅ Environment
- [ ] `.env.local` is in `.gitignore` ✓
- [ ] `.env.local.example` is committed with template values
- [ ] `node_modules/` is in `.gitignore` ✓
- [ ] `prisma/migrations/` is tracked in git

### ✅ Build
- [ ] Build succeeds: `npm run build`
- [ ] No build warnings
- [ ] Preview build locally: `npm start`

## Deployment to Vercel

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Migrate to Next.js"
git push origin main
```

### Step 2: Connect to Vercel
```bash
npm i -g vercel
vercel --prod
```

### Step 3: Add Environment Variables
In Vercel dashboard:
1. Go to Settings → Environment Variables
2. Add `DATABASE_URL` with production PostgreSQL URI
3. Redeploy

### Step 4: Verify Production
- [ ] Visit your domain
- [ ] Test beta signup form
- [ ] Check database for new records
- [ ] Monitor logs for errors

## Deployment to Docker

### Create Dockerfile
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Build and Run
```bash
docker build -t cucumbu-landing .
docker run -p 3000:3000 \
  -e DATABASE_URL="postgresql://user:password@host:5432/db" \
  cucumbu-landing
```

## Deployment to Traditional Server

### Prerequisites
- Node.js 18+ installed
- PostgreSQL running
- PM2 or similar for process management

### Steps
```bash
# Clone repository
git clone <repo> cucumbu-landing
cd cucumbu-landing

# Install & Build
npm install
npm run build

# Setup environment
cp .env.local.example .env.local
# Edit .env.local with production values

# Setup database
npx prisma migrate deploy

# Start with PM2
npm install -g pm2
pm2 start npm --name "cucumbu" -- start
pm2 save
pm2 startup
```

## Post-Deployment

### ✅ Health Checks
- [ ] Landing page loads
- [ ] All links work
- [ ] Video plays (if using media)
- [ ] Modal opens and closes
- [ ] Form accepts input

### ✅ Beta Signup Testing
- [ ] Submit test form with valid data
- [ ] Check database for new record: `npx prisma studio`
- [ ] Verify error handling (duplicate email, invalid email, etc.)
- [ ] Test on different browsers
- [ ] Test on mobile devices

### ✅ Performance
- [ ] Load time is acceptable (<3s)
- [ ] Lighthouse score (run `npm run build` and check)
- [ ] Database queries are optimized
- [ ] No N+1 query problems

### ✅ Security
- [ ] HTTPS enforced
- [ ] API validates all inputs
- [ ] Sensitive data not exposed in errors
- [ ] Rate limiting considered
- [ ] CORS configured if needed

### ✅ Monitoring
- [ ] Error tracking enabled (Sentry, LogRocket, etc.)
- [ ] Analytics set up
- [ ] Database monitoring active
- [ ] Uptime monitoring configured

## Rollback Plan

If issues occur after deployment:

### Quick Rollback
```bash
# On Vercel: Redeploy previous commit
vercel --prod

# On Docker: Switch to previous image tag
docker run -p 3000:3000 [...] cucumbu-landing:v1.0.0

# On Traditional: Revert code and restart
git revert <commit>
npm run build
pm2 restart cucumbu
```

### Database Issues
```bash
# Rollback last migration
npx prisma migrate resolve --rolled-back init

# Or restore from backup
psql cucumbu < backup.sql
```

## Monitoring & Maintenance

### Daily
- [ ] Check error logs
- [ ] Verify form submissions are processing
- [ ] Monitor database size

### Weekly
- [ ] Review signup metrics
- [ ] Check for security updates
- [ ] Performance analysis

### Monthly
- [ ] Database backup verification
- [ ] Dependency updates: `npm update`
- [ ] Security audit: `npm audit`

## Feature Enhancements for Production

When ready, add these features:

- [ ] Email confirmation on signup
- [ ] Admin dashboard for viewing signups
- [ ] Email list export
- [ ] Automated email notifications
- [ ] Rate limiting on API
- [ ] User authentication
- [ ] Analytics dashboard
- [ ] A/B testing framework

## Support & Troubleshooting

### Common Issues

**502 Bad Gateway**
- Check server logs
- Verify DATABASE_URL is set
- Restart application

**Database Connection Error**
- Verify PostgreSQL is running
- Check connection string
- Verify firewall rules

**Blank Page**
- Check browser console for errors
- Verify .env.local is set
- Check network requests

## Communication Plan

- [ ] Notify users of new landing page
- [ ] Send beta signup emails
- [ ] Public announcement of beta access
- [ ] Social media update

---

**Deployment Completed Successfully! 🎉**

Remember to keep backups and monitor your application regularly.
