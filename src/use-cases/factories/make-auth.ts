import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository"
import { AuthenticateUseCase } from "../auth/authenticate-use-case"



export function makeAuthUseCase() {
    const usersRepository = new PrismaUsersRepository
        const authenticate = new AuthenticateUseCase(usersRepository)
  
    return authenticate
  }