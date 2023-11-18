
import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function localStorageUpdaterController(request: FastifyRequest, reply: FastifyReply) {

    const getStorageParamsSchema = z.object({
        id: z.string().uuid()
    })

    const {
        id
    } = getStorageParamsSchema.parse(request.params);

    const storageBodySchema = z.object({
        name: z.string(),
        description: z.string(),
    });

    const {
        name,
        description
    } = storageBodySchema.parse(request.body);

    const idUd = id
    const newName = name
    const newdescription = description
    
    const storage = await prisma.storageLocation.update({
        where: {id: id},
        data: {    
     
            name: newName,
            description: newdescription,
          
        },
    })
}