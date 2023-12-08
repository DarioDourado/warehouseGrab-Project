import { PrismaStockControlRepository } from "@/repositories/prisma/prisma-stock-control-repository";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';

export async function getStockRegisterByIdController(request: FastifyRequest, reply: FastifyReply) {

    const getIdParamsSchema = z.object({
        id: z.string().uuid()
    })
    const stockControlRepository = new PrismaStockControlRepository
    const { id } = getIdParamsSchema.parse(request.params)

    try {
        const stockControl = await stockControlRepository.findByIdStockRegister(id)

        return reply.status(200).send(stockControl);
    } catch (error) {

        console.error("Error in getProductCategoryByIdController:", error);
        return reply.status(409).send({ error: "Internal Server Error" });
    }
}
