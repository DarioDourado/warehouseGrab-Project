
import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { UserAlreadyExistsError } from "@/use-cases/errors/user-already-exist-error";
import { RegisterUseCase } from "@/use-cases/userRegister-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

import { z } from "zod";

export async function userRegister(request: FastifyRequest, reply: FastifyReply) {

    const userRegisterBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
        role: z.enum(['ADMIN', 'USER']),
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
        role,
        colabStatus,
        street,
        addressLocalCode,
        addressLocalZone,
        addressLocal,
        phone,
      } = userRegisterBodySchema.parse(request.body)

      try {

        const usersRepository = new PrismaUsersRepository()
        const registerUseCase = new RegisterUseCase(usersRepository)

        await registerUseCase.execute({
          name, 
          email, 
          password, 
          role,
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
