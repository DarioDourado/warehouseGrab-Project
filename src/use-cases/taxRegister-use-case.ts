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
        console.log(' TaxRegisterusecase, a seguir ao taxValueWithSameValue')
        if (taxValueWithSameValue) {
        throw Error('Please Choose a diferente value')
        }

        await this.taxRpository.createTax({
            taxValue,
            description
        })
        console.log(' TaxRegisterusecase, a seguir ao create')
    
    }

}    
