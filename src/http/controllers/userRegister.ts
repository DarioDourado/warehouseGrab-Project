import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function userRegister(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6)
    })

    const { name, email, password } = registerBodySchema.parse(request.body)


    const userTesteWithSameEmail = await prisma.userTeste.findUnique({
        where: { 
            email, 
        },
    })

    if (userTesteWithSameEmail) {
        return reply.status(409).send()
    }


    const passwordHash = await hash(password, 6)

    await prisma.userTeste.create({
       data: {
        name,
        email,
        passwordHash
       }
    })

    return reply.status(201).send()
}