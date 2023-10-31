import { prisma } from "@/lib/prisma"
import { PrismaUsersTesteRepository } from "@/repositories/prisma-userTeste-repository"
import { hash } from "bcryptjs"

//TypeScript 
interface userTesteUseCaseRequest {
    name: string,
    email: string,
    password: string
}

// exportamos a função userTesteUseCase 
export async function userTesteUseCase({name, email, password} : userTesteUseCaseRequest) {
    // Email verification
    const userTesteWithSameEmail = await prisma.userTeste.findUnique({
        where: { 
            email, 
        },
    })

    if (userTesteWithSameEmail) {
        throw new Error('Email Already Exists')
    }

    // Passowrd hashing
    const passwordHash = await hash(password, 6)

    //vai usar o prisma-userTest-repository
    const prismaUsersTesteRepository = new PrismaUsersTesteRepository()
    await prismaUsersTesteRepository.create({
        name, email, passwordHash
    })
}