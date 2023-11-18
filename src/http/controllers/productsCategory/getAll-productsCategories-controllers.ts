import { PrismaProductCategoryRepository } from "@/repositories/prisma/prisma-product-category-repository";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getAllProductsCategoriesController(request: FastifyRequest, reply: FastifyReply) {
    const productsCateoriesRepository = new PrismaProductCategoryRepository()

    try {
        const productsCateories = await productsCateoriesRepository.getAllProductsCategories()
        reply.send(productsCateories);
    } catch (error) {
        reply.status(500).send({ error: 'Internal Server Error' });
    }
}