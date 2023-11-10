
import { PrismaProductCategoryRepository } from "@/repositories/prisma/prisma-productCategory.repository";
import { ProductCategoryRegisterUseCase } from "@/use-cases/productCategory-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function productCategoryRegister(request: FastifyRequest, reply: FastifyReply) {

    const productCategoryRegisterBodySchema = z.object({
      productCategory: z.string(),
    })

    const { 
      productCategory
      } = productCategoryRegisterBodySchema.parse(request.body)

    try {

      const productsCategoryWithSameName =  new PrismaProductCategoryRepository()
      const productCategoryRegister = new ProductCategoryRegisterUseCase(productsCategoryWithSameName)

      await productCategoryRegister.execute({
        productCategory
      })


    } catch {
      return reply.status(409).send('Tax Register n Passou')
   }

    return reply.status(201).send()
}
