import { PrismaClient } from "@prisma/client";
import fastify from "fastify";

export const app = fastify()

const prisma = new PrismaClient()

prisma.userTeste.create({
    data: {
        name: 'Gerevázio',
        email: 'gerev@prismaexample.com',
        passwordHash: 'mySecretPassword'
    }
}).then( () => console.log('Created'))
