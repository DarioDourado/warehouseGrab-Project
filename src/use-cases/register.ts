import { UsersRepository } from '@/repositories/users-repository';
import { User } from '@prisma/client';
import { hash } from 'bcryptjs';
import { UserAlreadyExistsError } from './errors/user-already-exists-error';

// Definir types
interface RegisterUseCaseRequest {
    name: string;
    email: string;
    password: string;
}

// Testing
interface RegisterUseCaseResponse {
    user: User
}

// Criamos e exportamos a class responsavel por todo o registo 
export class RegisterUseCase{

    constructor(private usersRepository: UsersRepository) {}

    async execute({name, email, password}: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
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