import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { RegisterUseCase } from '../users/add-user-use-case'




export function makeGetUserUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const UseCase = new RegisterUseCase(usersRepository)

  return UseCase
}
