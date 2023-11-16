
import { makeGetProductsCategorieUseCase } from "@/use-cases/factories/make-products-categorie-use-case";
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

      const productCategoryRegister = makeGetProductsCategorieUseCase()

      await productCategoryRegister.execute({
        productCategory
      })

    } catch {
      return reply.status(409).send('Tax Register n Passou')
   }

    return reply.status(201).send()
}
