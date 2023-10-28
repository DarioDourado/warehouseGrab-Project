import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function userRegister(request: FastifyRequest, reply: FastifyReply) {
    const reggisterBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6)
    })

    const { name, email, password } = reggisterBodySchema.parse(request.body)

    await prisma.userTeste.create({
       data: {
        name,
        email,
        passwordHash: password
       }
    })

    return reply.status(201).send()
}