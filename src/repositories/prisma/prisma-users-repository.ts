import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { UsersRepository } from "../user-repository";


// depois de termos um interface comum, podemos e devemos de "implementar" na nossa class.
// NOTA: os mesmos métodos isados em interface tem de ser usados
export class PrismaUsersRepository implements UsersRepository{

    // Método findByEmail 

    async findByEmail(email: string) {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        })

        return user
    }

    // Repositorie -> mediação do nosso modelo e a presistência de dados

    // Vindo do nosso use case para o repositorie
    // uma async create (data: (types geridos pelo PrismaClient ))
    // Assim cada x que necessitar de usar o repositório USER n necessito de reciar
    async create (data: Prisma.UserCreateInput) {
        const user = await prisma.user.create(  {data}  )
        console.log(' prisma repository, USERS')
        return user
 
    }
}