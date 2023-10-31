import { UserstesteRepository } from "@/repositories/usersTeste-repository";
import { UserTeste } from "@prisma/client";
import { hash } from "bcryptjs";
import { UserTesteAlreadyExistsError } from "./errors/userTeste-already-exists-error";

//TypeScript 
interface UserTesteUseCaseRequest {
    name: string,
    email: string,
    password: string
}

// Criar uma resposta para podermos usar na Promise
interface UserTesteUseCaseResponse {
    userTeste: UserTeste
}

// 1ª Fase
// exportamos a função userTesteUseCase (export async)
// export async function userTesteUseCase({name, email, password} : UserTesteUseCaseRequest) {
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

    async execute ({name, 
        email, 
        password
    } : UserTesteUseCaseRequest): Promise<UserTesteUseCaseResponse> {
        // Email verification
        const userTesteWithSameEmail = await this.userstesteRepository.findByEmail(email); 
    
        if (userTesteWithSameEmail) {
            throw new UserTesteAlreadyExistsError
        }
    
        // Passowrd hashing
        const passwordHash = await hash(password, 6)

        // await this.userstesteRepository.create({
        //     name, email, passwordHash
        // })

        //Guardamos numa variável para podermos usar nos nossos testes
        const userTeste = await this.userstesteRepository.create({
            name, email, passwordHash
        })

        return {
            userTeste
        }
    }
}