import { InMemoryUsersTesteRepository } from "@/repositories/in-memory/in-memory-usersTeste-repository";
import { compare } from "bcryptjs";
import { describe, expect, it } from "vitest";
import { UserTesteAlreadyExistsError } from "./errors/userTeste-already-exists-error";
import { UserTesteRegisterUseCase } from "./userTeste-use-case";

describe('userTeste Register Use Case Teste', async () => {

    // Teste de presistência de dados, para n massacrar a db usamos a memória
    it('Should to Register'), async () => {
        const userTesteRepository = new InMemoryUsersTesteRepository()
        const sut = new UserTesteRegisterUseCase(userTesteRepository)
        
        const { userTeste } = await sut.execute({
            name: 'John Smith',
            email: 'johnsmith@gmail.com',
            password: '123456'
        })
        
        expect(userTeste.id).toEqual(expect.any(Number))
    }


    // Teste verificação de email
    it(' Should hash user password upon registration', async () => {

        const userTesteRepository = new InMemoryUsersTesteRepository()
        const sut = new UserTesteRegisterUseCase( userTesteRepository) // Em vez de estar a refazer codigo uso o userTesteRepository
            
        //     ({
        //     async findByEmail(email) {
        //         return null
        //     },

        //     async create(data) {
        //         return {
        //             id: 1,
        //             name: data.name,
        //             email: data.email,
        //             passwordHash: data.passwordHash,
        //             createdAt: new Date()
        //         }
        //     },
        // })

        const { userTeste } = await sut.execute({
            name: 'John Smith',
            email: 'johnsmith@gmail.com',
            password: '123456'
        })
    
        const isPassWordCorrectlyHashed = await compare('123456', userTeste.passwordHash)
    
        expect(isPassWordCorrectlyHashed).toBe(true)
    })

   
    it('Should not be able to register with same email twice', async () => {
        const userTesteRepository = new InMemoryUsersTesteRepository()
        const sut = new UserTesteRegisterUseCase(userTesteRepository)

        const email = 'johnsmith@gmail.com' 
        
        await sut.execute({
            name: 'John Smith',
            email,
            password: '123456'
        })
        
        await expect( () => 
            sut.execute({
                name: 'John Smith',
                email,
                password: '123456'
            }),
        ).rejects.toBeInstanceOf(UserTesteAlreadyExistsError)

    })

})