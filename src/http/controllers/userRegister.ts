
import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

interface userRegister {
    name: string;
    email: string;
    password: string;
    role: string;
}


export async function userRegister(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
        role: z.enum(['ADMIN', 'USER'])
    })

    const { name, email, password, role } = registerBodySchema.parse(request.body)

    const passwordHash = await hash(password, 6)

    await prisma.user.create({
        data: {
        name,
        email,
        passwordHash,
        role,
        }
    })

    return reply.status(201).send()
}