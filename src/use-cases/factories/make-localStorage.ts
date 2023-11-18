import { PrismaStorageLocationRepository } from "@/repositories/localStorage-repositories/storageLocation-repository"
import { StorageLocationRegisterUseCase } from "../local-storages-use-cases/localStorage-use-case"


export function makeGetLocalStorageUseCase() {
    const localStorageRepository = new PrismaStorageLocationRepository()
    const localStorageRegister = new StorageLocationRegisterUseCase(localStorageRepository)
  
    return localStorageRegister
  }
  