import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"
export async function POST(request: Request){
    const res = await request.json()
    const {jobTitle, companyName, status, description, userId} = res;

    console.log({res});

    const result = await prisma.application.create({
        data: {
            jobTitle,
            companyName,
            status,
            description,
            authorId: userId
        }
    })

    return NextResponse.json({result})
}