import { UsersRepository } from "@/repositories/user-repository";
import { User } from "@prisma/client";
import { compare } from "bcryptjs";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";


interface AuthenticateUseCaseRequest {

    email: string
    password: string
   
}

// add interface de resposta
interface AuthenticateUseCaseResponse {
    user: User
}

export class AuthenticateUseCase {

    constructor( private usersRpository: UsersRepository ){}
    async execute({ 

        email, 
        password, 

        // destrutura e adicionar a promise usecaseResponse
    }: AuthenticateUseCaseRequest) : Promise<AuthenticateUseCaseResponse> {

        const user = await this.usersRpository.findByEmail(email)
        
        if (!user) {
            throw new InvalidCredentialsError()
        } 

        const doesPasswordMatches = await compare(password, user.passwordHash)

        if (!doesPasswordMatches) {

            throw new InvalidCredentialsError()
        }
    
        // Retornar um obj com o meu user
        return {
            user
        }

    }

}    
