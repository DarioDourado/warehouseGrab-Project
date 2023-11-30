
import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function productUpdaterController(request: FastifyRequest, reply: FastifyReply) {

    const getProductParamsSchema = z.object({
        id: z.string().uuid()
    })

    const {
        id
    } = getProductParamsSchema.parse(request.params);

    const productRegisterBodySchema = z.object({
        upc: z.string(),
        sku: z.string(),
        name: z.string(),
        description: z.string(),
        price: z.number(),
        tax: z.string(),
        photo: z.string(),
        isPack: z.boolean(),
        packUnQt: z.number(),
        expirationDate: z.string().optional(),
        productCategory: z.string().optional(),
        stockRecQt: z.number().optional(),
        alert1: z.number().optional(),
        alert2: z.number().optional(),
    });

    const {
        upc,
        sku,
        name,
        description,
        price,
        tax,
        photo,
        isPack,
        packUnQt,
        expirationDate,
        productCategory,
        stockRecQt,
        alert1,
        alert2
    } = productRegisterBodySchema.parse(request.body);

    const idUd = id
    const newSku = sku
    const newUpc = upc
    const newName = name
    const newdescription = description
    const newPrice = price
    const newTax = tax
    const newphoto = photo
    const newisPack = isPack
    const newPackUnQtd = packUnQt
    const newExpirationDate = expirationDate
    const newProductCategory = productCategory
    const newStockRecQt = stockRecQt
    const newAlert1 = alert1
    const newAlert2 = alert2

 try {
    
     const product = await prisma.product.update({
         where: {id: id},
         data: {    
             upc: newUpc,
             sku: newSku,
             name: newName,
             description: newdescription,
             price: newPrice,
             tax: {
                 connect: {
                     taxValue: newTax
                 }
             },
             photo: newphoto,
             isPack: newisPack,
             packUnQt: newPackUnQtd,
             expirationDate: newExpirationDate,
             productCategory: {
                 connect: {
                     productCategory: newProductCategory,
                 },
             },
             stockRecQt: newStockRecQt,
             alert1: newAlert1,
             alert2: newAlert2,
             
         },
     })

     
    return reply.status(201).send("Product UPDATED Successfully");
 } catch (error) {
    return reply.status(409).send({ error: "Product not UPDATED Successfully" });
 }
}