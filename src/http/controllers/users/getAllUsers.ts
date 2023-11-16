import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getAllUsersController(request: FastifyRequest, reply: FastifyReply) {
    const usersRepository = new PrismaUsersRepository

    try {
        const users = await usersRepository.getAllUsers()
        reply.send(users);
    } catch (error) {
        reply.status(500).send({ error: 'Internal Server Error' });
    }
}