import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({ where: { email } });

    if(!user || (password !== user.password)){
        return NextResponse.json( { message: 'Invalid credentials '}, { status: 401});
    }else{
        return NextResponse.json( { message: "Login successful", userId: user.id});
    }
}