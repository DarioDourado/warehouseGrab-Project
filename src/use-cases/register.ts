import { prisma } from "@/lib/prisma"
import { hash } from "bcryptjs"

//
interface registerUseCaseRequest {
    name: string
    colabStatus: string
    street: string
    addressLocalCode: string
    addressLocalZone: string
    addressLocal: string
    email: string
    password: string
    phone: string

}

export async function registerUseCase({
    name, 
    colabStatus, 
    street, 
    addressLocalCode, 
    addressLocalZone,
    addressLocal,
    email,
    password,
    phone,

}: registerUseCaseRequest) {
    const userWithSameEmail = await prisma.user.findUnique({
        where: {
            email,
        },
    })

    if(userWithSameEmail) {
        throw new Error('Email Already Exist.')
    }

    const passwordHash = await hash(password, 6)

    await prisma.user.create({
        data: {
            name, 
            colabStatus, 
            street,
            addressLocalCode,
            addressLocalZone,
            addressLocal,
            email,
            passwordHash,            
            phone,           
        },
    })
}


// const prismaUsersRepository = new PismaUsersRepository()
// await prismaUsersRepository.create({
//     name, 
//     colabStatus, 
//     street, 
//     addressLocalCode, 
//     addressLocalZone,
//     addressLocal,
//     email,
//     passwordHash,
//     phone,
// })

