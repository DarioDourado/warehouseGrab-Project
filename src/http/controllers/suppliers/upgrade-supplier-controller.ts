
import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function supplierUpdaterController(request: FastifyRequest, reply: FastifyReply) {

    const supplierParamsSchema = z.object({
        id: z.string().uuid()
    })

    const {
        id
    } = supplierParamsSchema.parse(request.params);

    const supplierBodySchema = z.object({
        name: z.string(),
        taxNumber: z.string(),
        street: z.string(),
        addressLocalCode: z.string(),
        addressLocalZone: z.string(),
        addressLocal: z.string(),
        country: z.string(),
        phone1: z.string(),
        phone2: z.string(),
        email: z.string().email(),
        paymentCondTerm: z.number()
    });

    const {
        name,
        taxNumber,
        street,
        addressLocalCode,
        addressLocalZone,
        addressLocal,
        country,
        phone1,
        phone2,
        email,
        paymentCondTerm
    } = supplierBodySchema.parse(request.body);

    const idUd = id
    const newName = name
    const newTaxNumber = taxNumber
    const newStreet = street
    const newAddressLocalCode = addressLocalCode
    const newAddressLocalZone = addressLocalZone
    const newCountry = country
    const newphone1 = phone1
    const newphone2 = phone2
    const newEmail = email
    const newPaymentConTerm = paymentCondTerm

    try {
        
        const newSupplier = await prisma.supplier.update({
            where: {id: id},
            data: {    
                name: newName,
                taxNumber: newTaxNumber,
                street: newStreet,
                addressLocalCode: newAddressLocalCode,
                addressLocalZone: newAddressLocalZone,
                country: newCountry,
                phone1: newphone1,
                phone2: newphone2,
                email: newEmail,
                paymentCondTerm: newPaymentConTerm,
                
            },
        })

        return reply.status(201).send("Supplier Info was UPDATED Successfully");
    } catch (error) {
        return reply.status(409).send("Supplier Info was NOT UPDATED Successfully");
    }

}