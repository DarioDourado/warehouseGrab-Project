import { PrismaStorageLocationRepository } from "@/repositories/storage-location-repository";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getAllLocalStorageController(request: FastifyRequest, reply: FastifyReply) {
    const storageLocationRepository = new PrismaStorageLocationRepository()

    try {
        const storageLocation = await storageLocationRepository.getAllLocalStorage()
        reply.status(200).send(storageLocation);
    } catch (error) {
        reply.status(500).send({ error: 'Internal Server Error' });
    }
}