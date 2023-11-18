
import { PrismaSuppliersRepository } from "@/repositories/prisma/suppliers/prisma-supliers-repository";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getAllSuppliersController(request: FastifyRequest, reply: FastifyReply) {
    const suppliersRepository = new PrismaSuppliersRepository()

    try {
        const suppliers = await suppliersRepository.getAllSuppliers()
        reply.send(suppliers);
    } catch (error) {
        reply.status(500).send({ error: 'Internal Server Error' });
    }
}