import { PrismaStorageLocationRepository } from "@/repositories/prisma/prisma-storage-location-repository";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';

export async function getLocalStorageByNameController(request: FastifyRequest, reply: FastifyReply) {

    const getnameParamsSchema = z.object({
        name: z.string()
    })
    const localStorageRepository = new PrismaStorageLocationRepository
    const { name } = getnameParamsSchema.parse(request.params)

    try {
        const localStorage = await localStorageRepository.findLocalStorageByName(name)

        return reply.status(200).send(localStorage);
    } catch (error) {

        console.error("Error in getProductByNameController:", error);
        return reply.status(409).send({ error: "Internal Server Error" });
    }
}
