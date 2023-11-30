
import { prisma } from "@/lib/prisma";
import { passWordHashed } from "@/use-cases/utils/passwordHash";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function userUpdaterController(request: FastifyRequest, reply: FastifyReply) {

    const getUserParamsSchema = z.object({
        id: z.string().uuid()
    })

    const {
        id
    } = getUserParamsSchema.parse(request.params);

    const userBodySchema = z.object({
        name: z.string().optional(),
        email: z.string().email().optional(),
        password: z.string().min(6).optional(),
        isAdmin: z.boolean().optional(),
        colabStatus: z.string().optional(),
        street: z.string().optional(),
        addressLocalCode: z.string().optional(),
        addressLocalZone: z.string().optional(),
        addressLocal: z.string().optional(),
        phone: z.string().optional(),
      
    });

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

    } = userBodySchema.parse(request.body);

    const idUd = id
    const newName = name
    const newEmail = email
    const passwordHash = await passWordHashed(password as string)
    const newPassword = passwordHash
    const newIsAdmin = isAdmin
    const newcolabStatus = colabStatus
    const newStreet = street
    const newAddressLocalCode = addressLocalCode
    const newAddressLocalZone = addressLocalZone
    const newAddressLocal= addressLocal
    const newPhone = phone

try {
    
    const user = await prisma.user.update({
        where: {id: id},
        data: {    

            name: newName,
            email: newEmail,
            isAdmin: newIsAdmin,
            passwordHash: newPassword,
            colabStatus:  newcolabStatus,
            street: newStreet,
            addressLocalCode: newAddressLocalCode,
            addressLocalZone: newAddressLocalZone,
            addressLocal: newAddressLocal,
            phone: newPhone,

        },
    })

    return reply.status(201).send("User UPDATED Successfully");
} catch (error) {
    return reply.status(409).send("User not UPDATED Successfully");
}
}