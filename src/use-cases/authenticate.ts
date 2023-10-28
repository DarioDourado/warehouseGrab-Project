import { hash } from 'bcryptjs';
import { UserAlreadyExistsError } from './errors/user-already-exists-error';
import { constructor } from 'fastify';
import { string } from 'zod';

// Definir types
AuthenticateUseCaseRequest {
    email: string;
    password: string;
}

// Testing
interfaAuthenticateUseCaseResponse {
    user: User
}

// Criamos e exportamos a class responsavel por todo o registo 
export claAuthenticateUseCase{

    constructor(private usersRepository: UsersRepository) {}

    async execute({email, password}: AuthenticateCaseRequest): Promise<RegisterUseCaseResponse> {
        const userWithSameEmail = await this.usersRepository.findByEmail(email)
        
        if (userWithSameEmail) {
            throw new UserAlreadyExistsError
        }
    
        const passwordHash = await hash(password, 6)

        const user = await this.usersRepository.create({ 
        name, 
        email, 
        passwordHash,
    })

        return {
            user,
        }
    }
}
