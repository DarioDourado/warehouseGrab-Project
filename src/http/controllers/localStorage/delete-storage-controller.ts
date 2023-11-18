
import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function localStorageDeleteController(request: FastifyRequest, reply: FastifyReply) {

    const getLocalStorageParamsSchema = z.object({
        id: z.string()
    })

    const {
        id
    } = getLocalStorageParamsSchema.parse(request.params);

    const localStorageDelete = await prisma.storageLocation.delete({
        where: { id },
    })
}