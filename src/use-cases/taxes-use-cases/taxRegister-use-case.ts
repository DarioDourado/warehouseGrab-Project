import { TaxesRepository } from "@/repositories/taxes-repositories/tax-repository"
import { TaxValueAlreadyExistsError } from "../errors/productError"


interface TaxRegisterUseCaseRequest {
    taxValue: string
    description: string
}

export class TaxRegisterUseCase {

    constructor( private taxRpository: TaxesRepository ){}
    async execute({ 
        taxValue,
        description
    }: TaxRegisterUseCaseRequest) {

        const taxValueWithSameValue = await this.taxRpository.findTaxByValue(taxValue)

        if (taxValueWithSameValue) {
        throw TaxValueAlreadyExistsError
        }
        console.log(' taxRegister usecase')
        await this.taxRpository.createTax({
            taxValue,
            description
        })

    
    }

}    
