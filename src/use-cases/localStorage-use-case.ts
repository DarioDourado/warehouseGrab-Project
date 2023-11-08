import { StorageLocationRepository } from "@/repositories/prisma/prisma-localStorage-repository"





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

        const localStorageWithSameEmail = await this.localStorageRepository.findLocalStorageByName(name)

        if (localStorageWithSameEmail) {
        throw Error('Please Choose a diferente value')
        }

        await this.localStorageRepository.createLocalStorages({
            name,
            description
        })
        console.log(' TaxRegisterusecase, a seguir ao create')
    
    }

}    
