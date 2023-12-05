import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-user-repository';
import { describe, expect, it } from 'vitest';
import { AuthenticateUseCase } from '../auth/authenticate-use-case';
import { InvalidCredentialsError } from '../errors/invalid-credentials-error';


describe('Authenticate Use case'), () => {

    it('should to able to authenticate'), async () => {
        const usersRepository = new InMemoryUsersRepository()
        const sut = new AuthenticateUseCase(usersRepository)

        await usersRepository.createUser({
            name: 'Tony Mecânico',
            email: 'tonydostestes@gmail.com',
            passwordHash: '123456',
            isAdmin: false,
            colabStatus: 'Ativo',
            street: 'Rua Aparo',
            addressLocalCode: '8150',
            addressLocalZone: '156',
            addressLocal: 'Faro',
            phone: '937372716'
        })

        const { user } = await sut.execute({

            email: 'tonydostestes@gmail.com',
            password: '123456',
        })

        expect(user.id).toEqual(expect.any(String))
    }

    it('should to able to authenticate with wrong email'), async () => {
        const usersRepository = new InMemoryUsersRepository()
        const sut = new AuthenticateUseCase(usersRepository)

        
        await expect(() => sut.execute({
            email: 'tonydostestes@gmail.com', password: '123456'
            }),
        ).rejects.toBeInstanceOf(InvalidCredentialsError)
    }

    it('should to able to authenticate with wrong password'), async () => {
        const usersRepository = new InMemoryUsersRepository()
        const sut = new AuthenticateUseCase(usersRepository)

        await usersRepository.createUser({
            name: 'Tony Mecânico',
            email: 'tonydostestes@gmail.com',
            passwordHash: '123456',
            isAdmin: false,
            colabStatus: 'Ativo',
            street: 'Rua Aparo',
            addressLocalCode: '8150',
            addressLocalZone: '156',
            addressLocal: 'Faro',
            phone: '937372716'
        })


        await expect(() => sut.execute({
            email: 'tonydostestes@gmail.com', password: '1222222'
            }),
        ).rejects.toBeInstanceOf(InvalidCredentialsError)
    }
    
}

