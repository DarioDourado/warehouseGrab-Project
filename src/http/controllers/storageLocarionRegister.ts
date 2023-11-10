import { PrismaStorageLocationRepository } from "@/repositories/storageLocation-repository";
import { StorageLocationRegisterUseCase } from "@/use-cases/localStorage-use-case";
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

        const localStorageRepository = new PrismaStorageLocationRepository()


        const localStorageRegister = new StorageLocationRegisterUseCase(localStorageRepository)
                
        await localStorageRegister.execute({
          name,
          description
        })


     } catch {
        return reply.status(409).send('Tax Register n Passou')
     }
 
    return reply.status(201).send()
}
