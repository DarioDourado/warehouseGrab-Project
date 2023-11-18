import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function userDeleteController(request: FastifyRequest, reply: FastifyReply) {

    const getUserParamsSchema = z.object({
        id: z.string()
    })

    const {
        id
    } = getUserParamsSchema.parse(request.params);

    const userDelete = await prisma.user.delete({
        where: { id },
    })
}