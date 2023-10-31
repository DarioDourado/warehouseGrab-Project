import { Prisma, UserTeste } from "@prisma/client"

export interface UserstesteRepository {
    findByEmail(email: string): Promise<UserTeste | null>
    create(data: Prisma.UserTesteCreateInput): Promise<UserTeste>
}