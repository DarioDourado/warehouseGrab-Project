
import { PrismaTaxesRepository } from "@/repositories/prisma/prisma-tax-repository";
import { TaxRegisterUseCase } from "@/use-cases/taxRegister-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function taxRegister(request: FastifyRequest, reply: FastifyReply) {

    const taxRegisterBodySchema = z.object({
        taxValue: z.number(),
        description: z.string(),
    })

    const { 

        taxValue,
        description

      } = taxRegisterBodySchema.parse(request.body)
      console.log(' Controller taxRegisterBodySchema')
     try {

        const taxesRepository = new PrismaTaxesRepository()

        const taxRegister = new TaxRegisterUseCase(taxesRepository)

        
        await taxRegister.execute({
          taxValue,
          description
        })


     } catch {
        return reply.status(409).send('Tax Register n Passou')
     }
 
    return reply.status(201).send()
}
