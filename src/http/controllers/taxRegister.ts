
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
      console.log(' Controller PrismaTaxesRepository')
        const taxesRepository = new PrismaTaxesRepository()
        console.log(' Controller TaxRegisterUseCase')
        const taxRegister = new TaxRegisterUseCase(taxesRepository)

    
        console.log(' Controller taxRegister')
        await taxRegister.execute({
          taxValue,
          description
        })


     } catch {
        return reply.status(409).send('Tax Register n Passou')
     }
 
    return reply.status(201).send()
}
