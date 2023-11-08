import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { UsersRepository } from "../user-repository";


// depois de termos um interface comum, podemos e devemos de "implementar" na nossa class.
// NOTA: os mesmos métodos isados em interface tem de ser usados
export class PrismaUsersRepository implements UsersRepository{

    async findByEmail(email: string) {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        })

        return user
    }

    async create (data: Prisma.UserCreateInput) {
        const user = await prisma.user.create(  {data}  )
        console.log(' prisma repository, USERS')
        return user
 
    }
}