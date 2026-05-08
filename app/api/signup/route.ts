import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const company = formData.get('company') as string || null
    const role = formData.get('role') as string || null
    const message = formData.get('message') as string || null

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existingSignup = await prisma.betaSignup.findUnique({
      where: { email }
    })

    if (existingSignup) {
      return NextResponse.json(
        { success: false, message: 'This email is already registered for beta access' },
        { status: 409 }
      )
    }

    // Create new signup
    const signup = await prisma.betaSignup.create({
      data: {
        name,
        email,
        company,
        role,
        message
      }
    })

    // TODO: Send welcome email here using nodemailer, SendGrid, or similar

    return NextResponse.json(
      { 
        success: true, 
        message: 'Sign up successful. We will notify you once cucumbu is available in beta.',
        data: signup
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Beta signup error:', error)
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
