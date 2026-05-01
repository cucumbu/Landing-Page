import prisma from '@/lib/db'

async function main() {
  console.log('Starting database seed...')

  // Optional: Clear existing data
  // await prisma.betaSignup.deleteMany()

  // Example: Add a test signup
  const testSignup = await prisma.betaSignup.create({
    data: {
      name: 'Test User',
      email: 'test@example.com',
      company: 'Test Company',
      role: 'Developer',
      message: 'This is a test signup',
    },
  })

  console.log('Seeded data:', testSignup)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
