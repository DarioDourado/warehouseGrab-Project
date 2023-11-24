import { prisma } from "@/lib/prisma";
import { PrismaProductsRepository } from "@/repositories/prisma/prisma-product-repository";
import { UPCDoNotExist } from "@/use-cases/errors/productError";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function addStock(request: FastifyRequest, reply: FastifyReply) {

    const getProductParamsSchema = z.object({
        productUPC: z.string(),
        quantity: z.number(),
        isOut: z.boolean(),
        stockLocal: z.string(),
    })
    

    const {
        productUPC,
        quantity,
        isOut,
        stockLocal,

    } = getProductParamsSchema.parse(request.body);

    const productsRepository = new PrismaProductsRepository

    const getProductsByUPC = await productsRepository.findByUPC(productUPC)
    if (!getProductsByUPC) {
        throw new UPCDoNotExist
    }

    const newQuantity = await isOut ? quantity : quantity * -1 

    try {
        
        const stockInput = await prisma.stockControl.create({
            data: {
                productUPC,
                quantity: newQuantity,
                isOut,
                stockLocal: {
                    connect: {
                        name: stockLocal
                    }
                }
            }
        })
      
        return reply.status(201).send("successfully");
    } catch (error) {
        console.error(error);
        return reply.status(409).send("Error creating product");
    }

}
