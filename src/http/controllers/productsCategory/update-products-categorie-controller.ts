
import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function productCategoryUpdaterController(request: FastifyRequest, reply: FastifyReply) {

    const getProductCategoryParamsSchema = z.object({
        id: z.string().uuid()
    })

    const {
        id
    } = getProductCategoryParamsSchema.parse(request.params);

    const productCategoryBodySchema = z.object({
        productCategory: z.string(),
      
    });

    const {
        productCategory,

    } = productCategoryBodySchema.parse(request.body);

    const idUd = id
    const newProductCategory = productCategory

    try {
        
        const producCategoryt = await prisma.productCategory.update({
            where: {id: id},
            data: {    
                productCategory: newProductCategory
       
            },
        })

        return reply.status(201).send("Product Category UPDATED Successfully");
    } catch (error) {
        return reply.status(409).send("Product Category not UPDATED Successfully" );
    }
}