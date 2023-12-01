
import { PrismaStockControlRepository } from "@/repositories/prisma/prisma-stock-control-repository";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getQtGroupByStockController(request: FastifyRequest, reply: FastifyReply) {
    const stockControlRepository = new PrismaStockControlRepository

    try {
        const stockCountControl = await stockControlRepository.getAllStockGroupBy()

        console.log(stockCountControl);

        reply.status(200).send({stockCountControl});
    } catch (error) {
        reply.status(409).send('Não foi possivel encontrar qualquer stock');
    }
}