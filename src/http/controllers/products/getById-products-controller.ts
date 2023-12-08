import { PrismaProductsRepository } from "@/repositories/prisma/prisma-product-repository";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';

export async function getProductByIdController(request: FastifyRequest, reply: FastifyReply) {

    const getProductParamsSchema = z.object({
        id: z.string().uuid()
    })
    const productsRepository = new PrismaProductsRepository
    const { id } = getProductParamsSchema.parse(request.params)

    try {
        const product = await productsRepository.getProductsById(id)

        return reply.status(200).send(product);
    } catch (error) {

        console.error("Error in getProductByIdController:", error);
        return reply.status(409).send({ error: "Internal Server Error" });
    }
}
