
import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function userRegister(request: FastifyRequest, reply: FastifyReply) {

    const userRegisterBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
        role: z.enum(['ADMIN', 'USER']),
        colabStatus: z.string(),
        street: z.string(),
        addressLocalCode: z.string(),
        addressLocalZone: z.string(),
        addressLocal: z.string(),
        phone: z.string()
    })

    const { 
        name, 
        email, 
        password, 
        role,
        colabStatus,
        street,
        addressLocalCode,
        addressLocalZone,
        addressLocal,
        phone,
      } = userRegisterBodySchema.parse(request.body)

    const passwordHash = await hash(password, 6)
     


    await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        role,
        colabStatus,
        street,
        addressLocalCode,
        addressLocalZone,
        addressLocal,
        phone,
      }
    })

    return reply.status(201).send()
}
