
import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function productCategoryRegister(request: FastifyRequest, reply: FastifyReply) {

    const productCategoryRegisterBodySchema = z.object({
        category: z.string(),
    })

    const { 
        category

      } = productCategoryRegisterBodySchema.parse(request.body)

    await prisma.productCategory.create({
      data: {
        category
      }
    })

    return reply.status(201).send()
}
