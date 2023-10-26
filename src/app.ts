import { PrismaClient } from "@prisma/client";
import fastify from "fastify";

export const app = fastify()

const prisma = new PrismaClient()

prisma.user.create({
    data: {
        name: 'Gerevázio',
        email: 'gerev@prismaexample.com',
        password: 'mySecretPassword'
    }
})