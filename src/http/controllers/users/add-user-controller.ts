
import { UserAlreadyExistsError } from "@/use-cases/errors/user-already-exist-error";
import { makeGetUserUseCase } from "@/use-cases/factories/make-users-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

import { z } from "zod";

export async function userRegister(request: FastifyRequest, reply: FastifyReply) {

    const userRegisterBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
        isAdmin: z.boolean(),
        colabStatus: z.string(),
        street: z.string(),
        addressLocalCode: z.string(),
        addressLocalZone: z.string(),
        addressLocal: z.string(),
        phone: z.string()
    })

    const { 
        name, 
        email, 
        password, 
        isAdmin,
        colabStatus,
        street,
        addressLocalCode,
        addressLocalZone,
        addressLocal,
        phone,
      } = userRegisterBodySchema.parse(request.body)

      try {

        const registerUseCase = makeGetUserUseCase()

        await registerUseCase.execute({
          name, 
          email, 
          password, 
          isAdmin,
          colabStatus,
          street,
          addressLocalCode,
          addressLocalZone,
          addressLocal,
          phone,
        })

      } catch (error) {
        if (error instanceof UserAlreadyExistsError) {
          return reply.status(409).send()
        }
        return reply.status(500).send()
      }

    return reply.status(201).send()
}
