
import { PrismaTaxesRepository } from "@/repositories/prisma/prisma-tax-repository";
import { TaxNameError } from "@/use-cases/errors/taxErrors";
import { TaxRegisterUseCase } from "@/use-cases/taxRegister-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function taxRegister(request: FastifyRequest, reply: FastifyReply) {

    const taxRegisterBodySchema = z.object({
        taxValue: z.string(),
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


     } catch (error) {
        if (error instanceof TaxNameError ) {
          return reply.status(409).send()
        }
        return reply.status(500).send()
     }
 
    return reply.status(201).send()
}
