import { PrismaTaxesRepository } from "@/repositories/prisma/prisma-tax-repository";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';

export async function getTaxByIdController(request: FastifyRequest, reply: FastifyReply) {

    const getIdParamsSchema = z.object({
        id: z.string().uuid()
    })
    const taxRepository = new PrismaTaxesRepository
    const { id } = getIdParamsSchema.parse(request.params)

    try {
        const tax = await taxRepository.findTaxById(id)

        return reply.status(200).send(tax);
    } catch (error) {

        console.error("Error in getProductCategoryByIdController:", error);
        return reply.status(409).send({ error: "Internal Server Error" });
    }
}
