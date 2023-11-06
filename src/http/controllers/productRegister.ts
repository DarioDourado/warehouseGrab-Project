
import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function productRegister(request: FastifyRequest, reply: FastifyReply) {

    const productRegisterBodySchema = z.object({
        upc: z.string(),
        sku: z.string(),
        name: z.string(),
        description: z.string(),
        price: z.number(),
        taxId: z.number(),
        photo: z.string(),
        packOrUn: z.enum(['PACK', 'UNIT']),
        packUnQt: z.number(),
        expirationDate: z.string().optional(),
        productCategoryId: z.number().optional(),
        stockRecQt: z.number().optional(),
        alert1: z.number().optional(),
        alert2: z.number().optional(),
    })

    const { 
        upc,
        sku,
        name,
        description,
        price,
        taxId,
        photo,
        packOrUn,
        packUnQt,
        expirationDate,
        productCategoryId,
        stockRecQt,
        alert1,
        alert2
    } = productRegisterBodySchema.parse(request.body)


    await prisma.product.create({
      data: {
        sku,
        upc,
        name,
        description,
        price,
        taxId,
        photo,
        packOrUn,
        packUnQt,
        expirationDate,
        productCategoryId,
        stockRecQt,
        alert1,
        alert2,
    }
    })
    
    return reply.status(201).send()
}