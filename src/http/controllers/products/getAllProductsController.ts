
import { PrismaProductsRepository } from "@/repositories/prisma/products/prisma-productRegister-repository";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getAllProductsController(request: FastifyRequest, reply: FastifyReply) {
    const productsRepository = new PrismaProductsRepository()

    try {
        const products = await productsRepository.getAllProducts()
        reply.send(products);
    } catch (error) {
        reply.status(500).send({ error: 'Internal Server Error' });
    }
}