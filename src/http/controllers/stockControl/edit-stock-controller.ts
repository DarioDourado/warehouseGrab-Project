
import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function editStockController(request: FastifyRequest, reply: FastifyReply) {

    const getStockIdParamsSchema = z.object({
        id: z.string().uuid()
    })

    const {
        id
    } = getStockIdParamsSchema.parse(request.params);

    const getStockParamsSchema = z.object({
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
    } = getStockParamsSchema.parse(request.body);

    const idUd = id
    const newProductUPC = productUPC
    const newQuantity = await isOut ? quantity : quantity * -1 
    const newIsOut = isOut
    const newStockLocal = stockLocal
    
    console.log(id);
    console.log(newProductUPC);
    console.log(newQuantity);
    console.log(newIsOut);
    console.log(newStockLocal);

    try {
        
        const product = await prisma.stockControl.update({
            where: {id: id},
            data: {    
                productUPC: newProductUPC,
                quantity: newQuantity,
                isOut: newIsOut,
                stockLocal: {
                    connect: {
                        name: newStockLocal
                    }
                }
                
            },
        })

        return reply.status(201).send("The StockControl was UPDATED Successfully");
    } catch (error) {
        
        return reply.status(409).send("The StockControl was NOT UPDATED Successfully");
    }

}