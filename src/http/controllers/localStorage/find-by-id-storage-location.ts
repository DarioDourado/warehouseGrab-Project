import { PrismaStorageLocationRepository } from "@/repositories/prisma/prisma-storage-location-repository";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';

export async function getLocalStorageByIdController(request: FastifyRequest, reply: FastifyReply) {

    const getIdParamsSchema = z.object({
        id: z.string().uuid()
    })
    const localStorageRepository = new PrismaStorageLocationRepository
    const { id } = getIdParamsSchema.parse(request.params)

    try {
        const localStorage = await localStorageRepository.findLocalStorageById(id)

        return reply.status(200).send(localStorage);
    } catch (error) {

        console.error("Error in getProductByIdController:", error);
        return reply.status(409).send({ error: "Internal Server Error" });
    }
}
