import { compare } from "bcryptjs";
import { describe, expect, it } from "vitest";
import { UserTesteRegisterUseCase } from "./userTeste-use-case";

describe('userTeste Register Use Case Teste', async () => {
    // 1º Teste a Executar
    it(' Should hash user password upon registration', async () => {

        const sut = new UserTesteRegisterUseCase({
            async findByEmail(email) {
                return null
            },

            async create(data) {
                return {
                    id: 'user-1',
                    name: data.name,
                    email: data.email,
                    passwordHash: data.passwordHash,
                    createdAt: new Date()
                }
            },
        })

        const { userTeste } = await sut.execute({
            name: 'John Smith',
            email: 'johnsmith@gmail.com',
            password: '123456'
        })
    
        const isPassWordCorrectlyHashed = await compare('123456', userTeste.passwordHash)
    
        expect(isPassWordCorrectlyHashed).toBe(true)
    })


})