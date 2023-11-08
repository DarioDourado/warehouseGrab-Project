import { Prisma, User } from "@prisma/client";


// Interface comum,
// Assim definimos o tipo de dados por repositorio, assim apenas temos que implementar para podermos usar
export interface UsersRepository {
    findByEmail(email: string): Promise<User | null>
    create (data: Prisma.UserCreateInput): Promise<User>
}