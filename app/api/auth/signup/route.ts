import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // import your Prisma client (make sure it's set up)

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json({ message: 'User already exists' }, { status: 400 });
  }

  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        password
      },
    });

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error creating user' }, { status: 500 });
  }
}