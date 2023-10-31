import { PrismaUsersTesteRepository } from "@/repositories/prisma-userTeste-repository";
import { UserTesteRegisterUseCase } from "@/use-cases/userTeste-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

// 1º Fase
// export async function userTesteRegister(request: FastifyRequest, reply: FastifyReply) {
//     const registerBodySchema = z.object({
//         name: z.string(),
//         email: z.string().email(),
//         password: z.string().min(6)
//     })

//     const { name, email, password } = registerBodySchema.parse(request.body)

//     try {
//         // Vindo do userTeste-use-case
//         await userTesteUseCase({
//             name, email, password
//         })
        
//     } catch  {
//         return reply.status(409).send()
//     }

//     return reply.status(201).send()
// }

// 2ª Fase
export async function userTesteRegister(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6)
    })

    const { name, email, password } = registerBodySchema.parse(request.body)

    try {
        
        const userstesteRepository = new PrismaUsersTesteRepository()
        const userTesteRegisterUseCase = new UserTesteRegisterUseCase(userstesteRepository)

        userTesteRegisterUseCase.execute({
            name, email, password
        })


    } catch  {
        return reply.status(409).send()
    }

    return reply.status(201).send()
}