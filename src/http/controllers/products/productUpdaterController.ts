
import { makeGetProductsUpdateUseCase } from "@/use-cases/factories/makecGetProductsUpdate-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function productUpdaterController(request: FastifyRequest, reply: FastifyReply) {

    const getProductParamsSchema = z.object({
        id: z.string().uuid()
    });

    const { id } = getProductParamsSchema.parse(request.params);

    const productUpdateBodySchema = z.object({
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

    try {
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
        } = productUpdateBodySchema.parse(request.body);

        const productUpdateUseCase = makeGetProductsUpdateUseCase()

        await productUpdateUseCase.execute({
            id,
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

        return reply.status(200).send("Product updated successfully");
    } catch (error) {
        console.error(error);
        return reply.status(409).send("Error updating product");
    }
}
