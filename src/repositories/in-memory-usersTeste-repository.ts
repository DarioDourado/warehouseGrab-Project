export class InMemoryUsersTesteRepository {
    public usersTeste: any[] = []

    async create(data: any) {
        this.usersTeste.push(data)
    }
}