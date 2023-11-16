import { PrismaStorageLocationRepository } from "@/repositories/storageLocation-repository"
import { StorageLocationRegisterUseCase } from "../localStorage-use-case"

export function makeGetLocalStorageUseCase() {
    const localStorageRepository = new PrismaStorageLocationRepository()
    const localStorageRegister = new StorageLocationRegisterUseCase(localStorageRepository)
  
    return localStorageRegister
  }
  