import { SuppliersRepository } from "@/repositories/supplier-repository";
import { UserAlreadyExistsError } from "../errors/user-already-exist-error";



interface SupplierRegisterUseCaseRequest {
    name: string
    taxNumber: string
    street: string
    addressLocalCode: string
    addressLocalZone: string
    addressLocal: string
    country: string
    phone1: string
    phone2: string
    email: string
    paymentCondTerm: number
}

export class SupplierRegisterUseCase {

    constructor( private supplierRpository: SuppliersRepository ){}
    async execute({ 

       name,
       taxNumber,
       street,addressLocalCode,addressLocalZone,addressLocal,country,phone1,phone2,email,paymentCondTerm
      

    }: SupplierRegisterUseCaseRequest) {

        const supplierWithSameEmail = await this.supplierRpository.findSupplierByEmail(email)

        if (supplierWithSameEmail) {
            throw new UserAlreadyExistsError
        } 
         
        await this.supplierRpository.createSupplier({
            name,
            taxNumber,
            street,
            addressLocalCode,
            addressLocalZone,
            addressLocal,
            country,
            phone1,
            phone2,
            email,
            paymentCondTerm,
        })
    

    }

}    