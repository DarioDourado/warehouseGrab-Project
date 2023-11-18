
import { SupplierNameError } from "@/use-cases/errors/supplierError";
import { makeGetSuppliersUseCase } from "@/use-cases/factories/make-suppliers-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function supplierRegister(request: FastifyRequest, reply: FastifyReply) {

    const supplierRegisterBodySchema = z.object({
        name: z.string(),
        taxNumber: z.string(),
        street: z.string(),
        addressLocalCode: z.string(),
        addressLocalZone: z.string(),
        addressLocal: z.string(),
        country: z.string(),
        phone1: z.string(),
        phone2: z.string(),
        email: z.string().email(),
        paymentCondTerm: z.number()
    })

    const { 
        name,
        taxNumber,
        street,
        addressLocalCode,
        addressLocalZone,
        addressLocal,
        country,
        phone1,
        phone2,
        email,
        paymentCondTerm

      } = supplierRegisterBodySchema.parse(request.body)

      try {
        const supplierRegisterUseCase = makeGetSuppliersUseCase()

        await supplierRegisterUseCase.execute({
          name,
          taxNumber,
          street,
          addressLocalCode,
          addressLocalZone,
          addressLocal,
          country,
          phone1,
          phone2,
          email,
          paymentCondTerm
        })
      } catch (error){
        if (error instanceof SupplierNameError) {
          return reply.status(409).send()
        }
        return reply.status(500).send()

      }


    return reply.status(201).send()
}
