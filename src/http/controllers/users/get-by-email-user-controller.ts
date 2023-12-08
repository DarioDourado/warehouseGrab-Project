import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';

export async function getUserByEmailController(request: FastifyRequest, reply: FastifyReply) {

    const getUserEmailParamsSchema = z.object({
        email: z.string().email()
    })
    const userRepository = new PrismaUsersRepository
    const { email } = getUserEmailParamsSchema.parse(request.params)

    try {
        const user = await userRepository.findByEmail(email)

        return reply.status(200).send(user);
    } catch (error) {
        console.error("Error in getUserByEmailController:", error);
        return reply.status(409).send({ error: "Internal Server Error" });
    }
}
