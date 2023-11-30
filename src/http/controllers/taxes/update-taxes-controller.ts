
import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function taxUpdaterController(request: FastifyRequest, reply: FastifyReply) {

    const getTaxParamsSchema = z.object({
        id: z.string().uuid()
    })

    const {
        id
    } = getTaxParamsSchema.parse(request.params);

    const taxBodySchema = z.object({
        taxValue: z.string(),
        description: z.string(),
      
    });

    const {
        taxValue,
        description,

    } = taxBodySchema.parse(request.body);

    const idUd = id
    const newTaxValue = taxValue
    const newDescription = description

try {
    
    const producCategoryt = await prisma.tax.update({
        where: {id: id},
        data: {    
            taxValue: newTaxValue,
            description: newDescription
        },
    })
    return reply.status(201).send("Tax info was UPDATED Successfully");
} catch (error) {
    return reply.status(409).send("Tax info was NOT UPDATED Successfully");
}
}