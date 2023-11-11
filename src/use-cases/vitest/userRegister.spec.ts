import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-user-repository';
import { RegisterUseCase } from '@/use-cases/userRegister-use-case';
import { compare } from 'bcryptjs';
import { describe, expect, it } from 'vitest';


describe('userRegister Use case'), () => {

    it('should to Register'), async () => {
        const usersRepository = new InMemoryUsersRepository()
        const sut = new RegisterUseCase(usersRepository)

        const { user } = await sut.execute({
            name: "Tony Mecânico",
            email: "tonydostestes@gmail.com",
            password: "123456",
            isAdmin: false,
            colabStatus: "Ativo",
            street: "Rua Aparo",
            addressLocalCode: "8150",
            addressLocalZone: "156",
            addressLocal: "Faro",
            phone: "937372716"
        })

        expect(user.id).toEqual(expect.any(String))
    }

    it('should hash UserRegister password upon registration'), async () => {

        //const userRepository = new InMemoryUsersRepository()
        const sut = new RegisterUseCase({
            async findByEmail(email) {
                return null
            },

            async createUser(data) {
                return {
                    id: 'user-1',
                    name: data.name,
                    email: data.email,
                    passwordHash: data.passwordHash,
                    isAdmin: data.isAdmin,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    colabStatus: data.colabStatus,
                    street: data.street,
                    addressLocalCode: data.addressLocalCode,
                    addressLocalZone: data.addressLocalZone,
                    addressLocal: data.addressLocal,
                    phone: data.phone
                }
            },
        })

        const { user } = await sut.execute({
            name: "Tony",
            email: "testede31@gmail.com",
            password: "123456",
            isAdmin: false,
            colabStatus: "Colaborador",
            street: "Rua Anparo",
            addressLocalCode: "8150",
            addressLocalZone: "156",
            addressLocal: "Faro",
            phone: "937372716"
        })

        const isPasswordCorrectHashed = await compare('123456', user.passwordHash)

        expect(isPasswordCorrectHashed).toBe(true)

    }

}

