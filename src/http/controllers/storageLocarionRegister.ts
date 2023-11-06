
import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function localStorageRegister(request: FastifyRequest, reply: FastifyReply) {

    const localStorageRegisterBodySchema = z.object({
        name: z.string(),
        description: z.string(),
    })

    const { 
        name,
        description,

    } = localStorageRegisterBodySchema.parse(request.body)

    await prisma.storageLocation.create({
      data: {
        name,
        description,
    }
    })

    return reply.status(201).send()
}
