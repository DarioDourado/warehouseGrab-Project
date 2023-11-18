import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function supplierDeleteController(request: FastifyRequest, reply: FastifyReply) {

    const getSupplierParamsSchema = z.object({
        id: z.string()
    })

    const {
        id
    } = getSupplierParamsSchema.parse(request.params);

    const supplierDelete = await prisma.supplier.delete({
        where: { id },
    })
}