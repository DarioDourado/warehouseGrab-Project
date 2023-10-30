import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";


export class PrismaUsersTesteRepository {

    async create (data: Prisma.UserTesteCreateInput) {
        const userTeste = await prisma.userTeste.create( { data } )
        return userTeste
    }
}