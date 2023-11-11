import { Prisma, User } from "@prisma/client";
import { UsersRepository } from "../user-repository";


export class InMemoryUsersRepository implements UsersRepository {

    // Criar lugar em memória
    public items: User[] = []

    async createUser(data: Prisma.UserCreateInput) {
        const user = {
        id: 'id-1',
        name: data.name,
        email: data.email,
        passwordHash: data.passwordHash,
        isAdmin: data.isAdmin,
        colabStatus: data.colabStatus,
        street: data.street,
        addressLocalCode: data.addressLocalCode,
        addressLocalZone: data.addressLocalZone,
        addressLocal: data.addressLocal,
        phone: data.phone,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    
        this.items.push(user);

        return user
    }

    async findByEmail(email: string) {
        const user = this.items.find((items) => items.email === email)

        if (!user) {
            return null
        }
        return user
    }


}