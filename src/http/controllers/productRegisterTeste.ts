import { PrismaProductsRepository } from "@/repositories/prisma/prisma-productRegister-repository";
import { ProductUseCase } from "@/use-cases/productRegister-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

//TODO:  Adicionar Produtos
export async function productRegisterTest(request: FastifyRequest, reply: FastifyReply) {

    const productRegisterBodySchema = z.object({
        upc: z.string(),
        sku: z.string(),
        name: z.string(),
        description: z.string(),
        price: z.number(),
        tax: z.string(),
        photo: z.string(),
        packOrUn: z.enum(['PACK', 'UNIT']),
        packUnQt: z.number(),
        expirationDate: z.string(),
        productCategory: z.string().optional(),
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
        tax,
        photo,
        packOrUn,
        packUnQt,
        expirationDate,
        productCategory,
        stockRecQt,
        alert1,
        alert2
    } = productRegisterBodySchema.parse(request.body)
    
    console.log('vai para o try')
    try {
        
        const productsRegister = new PrismaProductsRepository()
        const registProduct = new ProductUseCase(productsRegister)

        console.log('vai para o execute')
        
        await registProduct.execute({
            sku,
            upc,
            name,
            description,
            price,
            tax,
            photo,
            packOrUn,
            packUnQt,
            expirationDate,
            productCategory,
            stockRecQt,
            alert1,
            alert2,
        })
        console.log('registProduct.execute')

    } catch {

        return reply.status(409).send('registProduct catch')
    }
    
    return reply.status(201).send()
}