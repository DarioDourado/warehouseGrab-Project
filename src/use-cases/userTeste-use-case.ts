import { prisma } from "@/lib/prisma"
import { hash } from "bcryptjs"

interface userTesteUseCaseRequest {
    name: string,
    email: string,
    password: string
}

export async function userTesteUseCase({name, email, password} : userTesteUseCaseRequest) {
    const userTesteWithSameEmail = await prisma.userTeste.findUnique({
        where: { 
            email, 
        },
    })

    if (userTesteWithSameEmail) {
        throw new Error('Email Already Exists')
    }

    const passwordHash = await hash(password, 6)

    await prisma.userTeste.create({
        data: {
            name, email, passwordHash
        }
    })
}