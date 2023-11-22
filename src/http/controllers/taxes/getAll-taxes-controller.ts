import { PrismaTaxesRepository } from "@/repositories/prisma/prisma-tax-repository";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getAllTaxesController(request: FastifyRequest, reply: FastifyReply) {
    const taxesRepository = new PrismaTaxesRepository()

    try {
        const taxes = await taxesRepository.getAllTaxes()
        reply.send(taxes);
    } catch (error) {
        reply.status(409).send({ error: 'Internal Server Error' });
    }
}