import { prisma } from "@/lib/prisma"

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
}