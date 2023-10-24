import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    // if (process.env.NODE_ENV !== 'dev') {
    //     return;
    // }

    // await prisma.user.deleteMany();
    // await prisma.suppliers.deleteMany();

    // for (let i = 0; i < 35; i++) {
    // await prisma.user.create({
    //     data: {
    //                 name: faker.person.firstName(),
    //                 colabStatus: faker.person.jobTitle(),
    //                 address: faker.location.streetAddress(),
    //                 addressLocalCode: faker.location.state(),
    //                 addressLocalZones: faker.location.countryCode(),
    //                 addressLocal: faker.location.city(),
    //                 email: faker.internet.email(),
    //                 phone: 'fakephone',
    //                 role: 'USER'
    //             }
    //     })
    // }

    // for (let i = 0; i < 25; i++) {
    //     await prisma.suppliers.create({
    //         data: {
    //             name: faker.person.firstName(),
    //             taxNumber: faker.number.int(),
    //             address: faker.location.streetAddress(),
    //             addressLocalCode: faker.location.state(),
    //             addressLocalZones: faker.location.countryCode(),
    //             addressLocal: faker.location.city(),
    //             country: faker.location.country(),
    //             phone1: 'fakephone1',
    //             phone2: 'fakephone2',
    //             email: faker.internet.email(),
    //             paymentCond: faker.number.int({
    //                 min: 0,
    //                 max: 120
    //             })
    //         }
    //     })
    // }

    // for (let i = 0; i < 150; i++) {
    //     await prisma.products.create({
    //         data: {
    //             upc: faker.commerce.isbn(),
    //             sku: faker.commerce.isbn(),
    //             name: faker.commerce.productName(),
    //             description: faker.commerce.productDescription(),
    //             price: faker.commerce.price({ 
    //                 min: 100, 
    //                 max: 200, 
    //                 dec: 0,
    //                 symbol: '€'
    //             }),
    //             photo: faker.internet.avatar(),
    //             tax: faker.number.int({
    //                 min: 0,
    //                 max: 23
    //             })

    //         }
    //     })
    // }
}