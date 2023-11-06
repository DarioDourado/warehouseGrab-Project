
import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function taxRegister(request: FastifyRequest, reply: FastifyReply) {

    const taxRegisterBodySchema = z.object({
        taxValue: z.number(),
        description: z.string(),
    })

    const { 
        taxValue,
        description
      } = taxRegisterBodySchema.parse(request.body)

    await prisma.tax.create({
      data: {
        taxValue,
        description
      }
    })

    return reply.status(201).send()
}
