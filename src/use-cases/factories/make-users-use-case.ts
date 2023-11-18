import { PrismaUsersRepository } from "@/repositories/prisma/users/prisma-users-repository"
import { RegisterUseCase } from "../users-use.cases/userRegister-use-case"


export function makeGetUserUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const registerUseCase = new RegisterUseCase(usersRepository)

  return registerUseCase
}
