import { UserstesteRepository } from "@/repositories/usersTeste-repository";
import { hash } from "bcryptjs";

//TypeScript 
interface userTesteUseCaseRequest {
    name: string,
    email: string,
    password: string
}

// 1ª Fase
// exportamos a função userTesteUseCase (export async)
// export async function userTesteUseCase({name, email, password} : userTesteUseCaseRequest) {
//     // Email verification
//     const userTesteWithSameEmail = await prisma.userTeste.findUnique({
//         where: { 
//             email, 
//         },
//     })

//     if (userTesteWithSameEmail) {
//         throw new Error('Email Already Exists')
//     }

//     // Passowrd hashing
//     const passwordHash = await hash(password, 6)

//     //vai usar o prisma-userTest-repository
//     const prismaUsersTesteRepository = new PrismaUsersTesteRepository()
//     await prismaUsersTesteRepository.create({
//         name, email, passwordHash
//     })
// }

// exportamos a função userTesteUseCase (export Class)

// 2ª Fase
// export class UserTesteRegisterUseCase {

//     async execute ({name, email, password} : userTesteUseCaseRequest) {
//         // Email verification
//         const userTesteWithSameEmail = await prisma.userTeste.findUnique({
//             where: { 
//                 email, 
//             },
//         })
    
//         if (userTesteWithSameEmail) {
//             throw new Error('Email Already Exists')
//         }
    
//         // Passowrd hashing
//         const passwordHash = await hash(password, 6)
    
//         //vai usar o prisma-userTest-repository
//         const prismaUsersTesteRepository = new PrismaUsersTesteRepository()
//         await prismaUsersTesteRepository.create({
//             name, email, passwordHash
//         })


//     }
// }

// 3ª Fase
export class UserTesteRegisterUseCase {

    // nosso contrutor usa o usersTeste-repository
    constructor(private userstesteRepository: UserstesteRepository) {}

    async execute ({name, email, password} : userTesteUseCaseRequest) {
        // Email verification
        const userTesteWithSameEmail = await this.userstesteRepository.findByEmail(email); 
    
        if (userTesteWithSameEmail) {
            throw new Error('Email Already Exists')
        }
    
        // Passowrd hashing
        const passwordHash = await hash(password, 6)
    
        // Deixamos de ter a responsabilidade de prisma e passamo-la para o register no controlador
        //vai usar o prisma-userTest-repository
        // const prismaUsersTesteRepository = new PrismaUsersTesteRepository()
        // await prismaUsersTesteRepository.create({
        //     name, email, passwordHash
        // })

        await this.userstesteRepository.create({
            name, email, passwordHash
        })

    }
}