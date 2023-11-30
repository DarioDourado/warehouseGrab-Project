
import { PrismaStockControlRepository } from "@/repositories/prisma/prisma-stock-control-repository";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getAllStockController(request: FastifyRequest, reply: FastifyReply) {
    const stockControlRepository = new PrismaStockControlRepository

    try {
        const stockControl = await stockControlRepository.getAllStock()
        reply.status(200).send({stockControl});
    } catch (error) {
        reply.status(409).send('Não foi possivel encontrar qualquer stock');
    }
}