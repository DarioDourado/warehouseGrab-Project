
import { TaxNameError } from "@/use-cases/errors/taxErrors";
import { makeGetTaxesUseCase } from "@/use-cases/factories/make-taxes-use-case";
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

     try {

        const taxRegister = makeGetTaxesUseCase()

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
