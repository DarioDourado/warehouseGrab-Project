import { userTesteUseCase } from "@/use-cases/userTeste-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

// userTesteUseCase

export async function userRegister(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6)
    })

    const { name, email, password } = registerBodySchema.parse(request.body)

    try {
        // Vindo do userTeste-use-case
        await userTesteUseCase({
            name, email, password
        })
        
    } catch  {
        return reply.status(409).send()
    }

    return reply.status(201).send()
}