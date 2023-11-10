import { StorageLocationRepository } from "@/repositories/prisma/prisma-storageLocation-repository"
import { LocalStorageNameError } from "./errors/storage-errors"






interface StorageLocationRegisterUseCaseRequest {
    name: string
    description: string
}

export class StorageLocationRegisterUseCase {

    constructor( private localStorageRepository: StorageLocationRepository ){}
    async execute({ 
        name,
        description
    }: StorageLocationRegisterUseCaseRequest) {

        const localStorageWithSameName = await this.localStorageRepository.findLocalStorageByName(name)

        if (localStorageWithSameName) {
        throw LocalStorageNameError
        }

        await this.localStorageRepository.createLocalStorages({
            name,
            description
        })    
    }

}    
