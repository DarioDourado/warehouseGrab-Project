import { prisma } from "@/lib/prisma"
import { PrismaUsersTesteRepository } from "@/repositories/prisma-userTeste-repository"
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

    console.log('a usar o userTesteUseCase')

    if (userTesteWithSameEmail) {
        throw new Error('Email Already Exists')
    }

    console.log('passou teste email')

    const passwordHash = await hash(password, 6)

    //vai usar o prisma-userTest-repository
    const prismaUsersTesteRepository = new PrismaUsersTesteRepository()
    await prismaUsersTesteRepository.create({
        name, email, passwordHash
    })
}