import { faker } from '@faker-js/faker';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

function main() {
    Array.from({ length: 10}).map(async (_, i) => {
        await prisma.product.create({
            data: {
                upc: faker.phone.imei(),
                sku: faker.phone.imei(),
                name: faker.commerce.product(),
                description: faker.commerce.productDescription(),
                tax: "23",
                price: faker.commerce.price(),
                photo: faker.image.urlPicsumPhotos(),
                isPack: faker.datatype.boolean(),
                packUnQt: 100,
                expirationDate: "2026",
                stockRecQt: faker.number.int({
                    min: 50, max: 100
                }),
                alert1:faker.number.int({
                    min: 50, max: 100
                }) ,
                alert2: faker.number.int({
                    min: 50, max: 100
                }) ,
            }
        })

    })
}

main()