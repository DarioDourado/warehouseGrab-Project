import { Prisma, User } from "@prisma/client";
import { UsersRepository } from "../user-repository";

export class InMemoryUsersRepository implements UsersRepository {
  // Criar lugar em memória
  public items: User[] = [];

  async createUser(data: Prisma.UserCreateInput) {
    const user: User = {
      id: this.generateUniqueId(),
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
    };

    this.items.push(user);

    return user;
  }

  async findByEmail(email: string) {
    const userWithSameEmail = this.items.findIndex((item) => item.email === email);

    if (userWithSameEmail === -1) {
      return null;
    }

    return this.items[userWithSameEmail];
  }

  private generateUniqueId(): string {
    return `id-${Date.now()}`;
  }
}
