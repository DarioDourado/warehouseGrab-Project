import { PrismaClient } from "@prisma/client";
import fastify from "fastify";

export const app = fastify()

const prisma = new PrismaClient()

// prisma.user.create({
//     data: {
//         name: 'Dario',
//         colabStatus: 'Gerente',
//         address: 'Rua Luis Bivar, 70-A',
//         addressLocalCode: '8150',
//         addressLocalZones: '156',
//         addressLocal: 'São Bras de Alportel',
//         email: 'dario@fakemail.com',
//         phone: '937372716',
//         role: 'USER'
//     }
// }).then( () => console.log('Created Successfully') )
