import { TaxesRepository } from "@/repositories/tax-repository"



interface TaxRegisterUseCaseRequest {
    taxValue: number
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
        throw Error('Please Choose a diferente value')
        }
        console.log(' taxRegister usecase')
        await this.taxRpository.createTax({
            taxValue,
            description
        })

    
    }

}    
