
import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { getQtResumeStockController } from "./count-resume-stock-controllers";

export async function getQtResumeSumStockController(request: FastifyRequest, reply: FastifyReply) {
    
    
    
    const sumControlRepository = getQtResumeStockController

    try {
        const sumControl = await prisma.sumControlRepository.groupBy()

        reply.status(200).send(sumControl);
    } catch (error) {
        reply.status(409).send('Não foi possivel encontrar qualquer stock');
    }
}