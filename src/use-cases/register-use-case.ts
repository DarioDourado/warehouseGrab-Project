import { UsersRepository } from "@/repositories/user-repository";
import { hash } from "bcryptjs";


interface RegisterUseCaseRequest {
    name: string,
    email: string,
    password: string
    role: string | undefined
    colabStatus: string
    street: string
    addressLocalCode: string
    addressLocalZone: string
    addressLocal: string
    phone: string
}

export class RegisterUseCase {

    constructor( private usersRpository: UsersRepository ){}
    async execute({ 

        name, 
        email, 
        password, 
        role,
        colabStatus,
        street,
        addressLocalCode,
        addressLocalZone,
        addressLocal,
        phone,
        // destrutura
    }: RegisterUseCaseRequest) {

        const userWithSameEmail = await this.usersRpository.findByEmail(email)
        
        if (userWithSameEmail) {
            throw new Error('Email already registered')
        } 

        const passwordHash = await hash(password, 6)

        await this.usersRpository.createUser({
            name,
            email,
            passwordHash,
            role,
            colabStatus,
            street,
            addressLocalCode,
            addressLocalZone,
            addressLocal,
            phone,
        })
    

    }

}    
