import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function productCategoryDeleteController(request: FastifyRequest, reply: FastifyReply) {

    const getProductCategoryParamsSchema = z.object({
        id: z.string()
    })

    const {
        id
    } = getProductCategoryParamsSchema.parse(request.params);

    const productCategoryDelete = await prisma.productCategory.delete({
        where: { id },
    })
}