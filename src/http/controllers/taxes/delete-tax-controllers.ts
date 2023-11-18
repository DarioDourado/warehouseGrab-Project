import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function taxDeleteController(request: FastifyRequest, reply: FastifyReply) {

    const getTaxParamsSchema = z.object({
        id: z.string()
    })

    const {
        id
    } = getTaxParamsSchema.parse(request.params);

    const taxDelete = await prisma.tax.delete({
        where: { id },
    })
}