import { PrismaStorageLocationRepository } from "@/repositories/storage-location-repository"
import { StorageLocationRegisterUseCase } from "../getAll-local-storage-use-case"


export function makeGetLocalStorageUseCase() {
    const localStorageRepository = new PrismaStorageLocationRepository()
    const localStorageRegister = new StorageLocationRegisterUseCase(localStorageRepository)
  
    return localStorageRegister
  }
  