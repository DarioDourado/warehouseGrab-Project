import { Prisma, UserTeste } from "@prisma/client";
import { UserstesteRepository } from '../usersTeste-repository';



export class InMemoryUsersTesteRepository implements UserstesteRepository {

        public items: UserTeste[] = [];

        async findByEmail(email: string) {
            const userTeste = this.items.find((item) => item.email === email)

            if (!userTeste) {
                return null
            }

            return userTeste
        }
            
        async create(data: Prisma.UserTesteCreateInput) {
            const userTeste = {
                id: 1,
                name: data.name,
                email: data.email,
                passwordHash: data.passwordHash,
                createdAt: new Date()
            }

            this.items.push(userTeste);

            return userTeste;
        }
    }