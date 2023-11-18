
import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function productDeleteController(request: FastifyRequest, reply: FastifyReply) {

    const getProductParamsSchema = z.object({
        id: z.string().uuid()
    })

    const {
        id
    } = getProductParamsSchema.parse(request.params);

    const productDelete = await prisma.product.delete({
        where: { id },
      
    })
}