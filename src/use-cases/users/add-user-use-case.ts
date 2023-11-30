import { UsersRepository } from "@/repositories/user-repository";
import { hash } from "bcryptjs";
import { UserAlreadyExistsError } from "../errors/user-already-exist-error";



interface RegisterUseCaseRequest {
    name: string
    email: string
    password: string
    isAdmin: boolean
    colabStatus: string
    street: string
    addressLocalCode: string
    addressLocalZone: string
    addressLocal: string
    phone: string
}

// add interface de resposta
// interface RegisterUseCaseResponse {
//     user: User
// }

export class RegisterUseCase {

    constructor( private usersRpository: UsersRepository ){}
    async execute({ 
        name, 
        email, 
        password, 
        isAdmin,
        colabStatus,
        street,
        addressLocalCode,
        addressLocalZone,
        addressLocal,
        phone,
        // destrutura e adicionar a promise usecaseResponse
    }: RegisterUseCaseRequest) {

        const userWithSameEmail = await this.usersRpository.findByEmail(email)
        
        if (userWithSameEmail) {
            throw new UserAlreadyExistsError
        } 

        const passwordHash = await hash(password, 6)

        // Guardar numa variável para poder usa-la em promise
        const user = await this.usersRpository.createUser({
            name,
            email,
            passwordHash,
            isAdmin,
            colabStatus,
            street,
            addressLocalCode,
            addressLocalZone,
            addressLocal,
            phone,
        })
    

    }

}    
