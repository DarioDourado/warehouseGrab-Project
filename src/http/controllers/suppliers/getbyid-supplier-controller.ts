import { PrismaSuppliersRepository } from "@/repositories/prisma/prisma-supliers-repository";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';

export async function getSupplierByIdController(request: FastifyRequest, reply: FastifyReply) {

    const getSupplierParamsSchema = z.object({
        id: z.string().uuid()
    })
    const supplierRepository = new PrismaSuppliersRepository
    const { id } = getSupplierParamsSchema.parse(request.params)

    try {
        const supplier = await supplierRepository.findSupplierById(id)

        return reply.status(200).send(supplier);
    } catch (error) {
        console.error("Error in getSuppliersByIdController:", error);
        return reply.status(409).send({ error: "Internal Server Error" });
    }
}
