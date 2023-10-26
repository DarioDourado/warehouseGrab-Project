import { registerUseCase } from "@/use-cases/register";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';

export async function userRegister(request: FastifyRequest, reply: FastifyReply) {
    const registerUserBodySchema = z.object({
        name: z.string(),
        colabStatus: z.string(),
        street: z.string(),
        addressLocalCode: z.string(),
        addressLocalZone: z.string(),
        addressLocal: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
        phone: z.string().min(9),
        role: z.enum(['ADMIN', 'USER'])
    })

    const { name, 
        colabStatus, 
        street, 
        addressLocalCode, 
        addressLocalZone,
        addressLocal,
        email,
        password,
        phone,
        role    
    } = registerUserBodySchema.parse(request.body)

    try {
        await registerUseCase({
        name, 
        colabStatus, 
        street, 
        addressLocalCode, 
        addressLocalZone,
        addressLocal,
        email,
        password,
        phone,
        role    
        })
    } catch {
        return reply.status(409).send()
    }

    return reply.status(201).send()
}