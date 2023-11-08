// //import { PrismaUsersTesteRepository } from "@/repositories/prisma-userTeste-repository";
// import { UserTesteAlreadyExistsError } from "@/use-cases/errors/userTeste-already-exists-error";
// //import { UserTesteRegisterUseCase } from "@/use-cases/userTeste-use-case";
// import { FastifyReply, FastifyRequest } from "fastify";
// import { z } from "zod";

// // 1º Fase
// // export async function userTesteRegister(request: FastifyRequest, reply: FastifyReply) {
// //     const registerBodySchema = z.object({
// //         name: z.string(),
// //         email: z.string().email(),
// //         password: z.string().min(6)
// //     })

// //     const { name, email, password } = registerBodySchema.parse(request.body)

// //     try {
// //         // Vindo do userTeste-use-case
// //         await userTesteUseCase({
// //             name, email, password
// //         })
        
// //     } catch  {
// //         return reply.status(409).send()
// //     }

// //     return reply.status(201).send()
// // }

// // 2ª Fase
// export async function userTesteRegister(request: FastifyRequest, reply: FastifyReply) {
//     const registerBodySchema = z.object({
//         name: z.string(),
//         email: z.string().email(),
//         password: z.string().min(6)
//     })

//     const { name, email, password } = registerBodySchema.parse(request.body)

//     try {
    
//         const userstesteRepository = new PrismaUsersTesteRepository() // Responsavel dados
//         const userTesteRegisterUseCase = new UserTesteRegisterUseCase(userstesteRepository) // Responsavel por validação email e passwordHash

//         // Reponsavel por executar/enviar para a base de dados
//         await userTesteRegisterUseCase.execute({
//             name, email, password
//         })


//     } catch (err)  {
//         if (err instanceof UserTesteAlreadyExistsError){
//             return reply.status(409).send()
//         }
//         return reply.status(500).send()
//     }

//     return reply.status(201).send()
// }