

import { PrismaProductsRepository } from "@/repositories/prisma/prisma-product-repository";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';

export async function getProductByUPCController(request: FastifyRequest, reply: FastifyReply) {

    const getProductParamsSchema = z.object({
        upc: z.string()
    })
    const productsRepository = new PrismaProductsRepository
    const { upc } = getProductParamsSchema.parse(request.params)

    try {
        const product = await productsRepository.findByUPC(upc)

        return reply.status(200).send(product);
    } catch (error) {

        console.error("Error in getProductByIdController:", error);
        return reply.status(409).send({ error: "Internal Server Error" });
    }
}
