import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { UserstesteRepository } from "./usersTeste-repository";


export class PrismaUsersTesteRepository implements UserstesteRepository {
    async findByEmail(email: string) {
        const userTeste = await prisma.userTeste.findUnique({
            where: {
                email,
            },
        })

        return userTeste
    }

    async create (data: Prisma.UserTesteCreateInput) {
        const userTeste = await prisma.userTeste.create( { data } )
        return userTeste
    }
}