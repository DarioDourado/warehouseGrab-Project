import { PrismaUsersRepository } from "@/repositories/prisma/users/prisma-users-repository"
import { AuthenticateUseCase } from "../auth-use-cases/authenticate"


export function makeAuthUseCase() {
    const usersRepository = new PrismaUsersRepository()
        const authenticate = new AuthenticateUseCase(usersRepository)
  
    return authenticate
  }
  