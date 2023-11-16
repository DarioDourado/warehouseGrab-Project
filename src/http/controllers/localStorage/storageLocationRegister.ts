import { makeGetLocalStorageUseCase } from "@/use-cases/factories/make-localStorage";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function localStorageRegister(request: FastifyRequest, reply: FastifyReply) {

    const localStorageRegisterBodySchema = z.object({
        name: z.string(),
        description: z.string(),
    })

    const { 

        name,
        description

      } = localStorageRegisterBodySchema.parse(request.body)

     try {

        const localStorageRegister = makeGetLocalStorageUseCase()
                
        await localStorageRegister.execute({
          name,
          description
        })


     } catch {
        return reply.status(409).send('Tax Register n Passou')
     }
 
    return reply.status(201).send()
}
