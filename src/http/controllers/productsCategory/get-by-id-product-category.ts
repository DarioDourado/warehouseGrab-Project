import { PrismaProductCategoryRepository } from "@/repositories/prisma/prisma-product-category-repository";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';

export async function getProductCategoryByIdController(request: FastifyRequest, reply: FastifyReply) {

    const getIdParamsSchema = z.object({
        id: z.string().uuid()
    })
    const productCategoryRepository = new PrismaProductCategoryRepository
    const { id } = getIdParamsSchema.parse(request.params)

    try {
        const productCategory = await productCategoryRepository.findProductCategoryById(id)

        return reply.status(200).send(productCategory);
    } catch (error) {

        console.error("Error in getProductCategoryByIdController:", error);
        return reply.status(409).send({ error: "Internal Server Error" });
    }
}
