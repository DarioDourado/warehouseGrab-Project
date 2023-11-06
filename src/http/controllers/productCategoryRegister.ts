
import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function productCategoryRegister(request: FastifyRequest, reply: FastifyReply) {

    const productCategoryRegisterBodySchema = z.object({
      productCategory: z.string(),
    })

    const { 
      productCategory
      } = productCategoryRegisterBodySchema.parse(request.body)

    await prisma.productCategory.create({
      data: {
        productCategory
      }
    })

    return reply.status(201).send()
}
