
export class InMemoryUsersRepository {

    // base teste para InMemoryRepository
     public user: any[] = []

     async create(data: any) {
        this.user = data
     }
    }