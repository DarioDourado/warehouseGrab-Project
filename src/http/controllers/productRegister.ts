import { PrismaProductsRepository } from "@/repositories/prisma/prisma-productRegister-repository";
import { ProductUseCase } from "@/use-cases/productRegister-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function productRegister(request: FastifyRequest, reply: FastifyReply) {

    const productRegisterBodySchema = z.object({
        upc: z.string(),
        sku: z.string(),
        name: z.string(),
        description: z.string(),
        price: z.number(),
        tax: z.string(),
        photo: z.string(),
        isPack: z.boolean(),
        packUnQt: z.number(),
        expirationDate: z.string().optional(),
        productCategory: z.string().optional(),
        stockRecQt: z.number().optional(),
        alert1: z.number().optional(),
        alert2: z.number().optional(),
    });

    const {
        upc,
        sku,
        name,
        description,
        price,
        tax,
        photo,
        isPack,
        packUnQt,
        expirationDate,
        productCategory,
        stockRecQt,
        alert1,
        alert2
    } = productRegisterBodySchema.parse(request.body);

    // Adicione validação adicional para tax e productCategory
    try {
        const productsRegisterRepository = new PrismaProductsRepository
        const productRegisterUseCase = new ProductUseCase(productsRegisterRepository)

        await productRegisterUseCase.execute({
            upc,
            sku,
            name,
            description,
            price,
            tax,
            photo,
            isPack,
            packUnQt,
            expirationDate,
            productCategory,
            stockRecQt,
            alert1,
            alert2
        });
    } catch (error) {
        console.error(error);
        return reply.status(409).send("Error creating product");
    }

    return reply.status(201).send("Product created successfully");
}
