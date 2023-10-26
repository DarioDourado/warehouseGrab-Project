import { productUseCase } from "@/use-cases/products";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';

export async function productRegister(request: FastifyRequest, reply: FastifyReply) {
    const productRegisterBodySchema = z.object({
        upc: z.string(),
        sku: z.string(),
        name: z.string(),
        description: z.string(),
        price: z.number(),
        tax: z.number(),
        photo: z.string(),
        packOrUn: z.enum(["Pack", "Un"]),
        packUnQt: z.number(),
        productCategory: z.string(),
        expirationDate: z.string(),
        stockRecQt: z.number(),
        alert1: z.number(),
        alert2: z.number(),
    })

    const { 
        upc,
        sku,
        name,
        description,
        price,
        tax,
        photo,
        packOrUn,
        packUnQt,
        productCategory,
        expirationDate,
        stockRecQt,
        alert1,
        alert2
    } = productRegisterBodySchema.parse(request.body)

    try {
        await productUseCase({
        upc,
        sku,
        name,
        description,
        price,
        tax,
        photo,
        packOrUn,
        packUnQt,
        productCategory,
        expirationDate,
        stockRecQt,
        alert1,
        alert2
        })
    } catch {
        return reply.status(409).send()
    }

    return reply.status(201).send()
}