import { UsersRepository } from "@/repositories/user-repository";
import { hash } from "bcryptjs";


//TypeScript definit types
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

console.log(' usecase, a seguir ao interface')
// registerUseCase é uma função com a capacidade de exportar o que ir receber.
// Irá então receber o objecto vindo para depois poder exportar-lo.
// Recebido, destruturado
export class RegisterUseCase {
   // Para typar vamos usar o interface que exportamos do UsersRepository (interface)
    constructor( private usersRpository: UsersRepository ){}
    async execute({ 
        
        // define obj 
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
        // isola o neessário (email)
        // findUnique() usado direto
        // const userWithSameEmail = await prisma.user.findUnique({
        //     where: { 
        //         email, 
        //     },
        // })

        // Usando um interface comum deixamos lá o métodos
        const userWithSameEmail = await this.usersRpository.findByEmail(email)
    
        console.log(' usecase, a seguir ao userWithSameEmail')
        // condiciona caso haje erro, erro esse que será tratado mais tarde.
        if (userWithSameEmail) {
            throw new Error('Email already registered')
        } 
    
        // hash
        const passwordHash = await hash(password, 6)
         
        console.log(' usecase, a seguir ao passwordHash')
        // Criar / enviar objeto 
        // await prisma.user.create({
        //   data: {
        //     name,
        //     email,
        //     passwordHash,
        //     role,
        //     colabStatus,
        //     street,
        //     addressLocalCode,
        //     addressLocalZone,
        //     addressLocal,
        //     phone,
        //   }
        // })
    
        // A
        //const prismaUsersRepository = new PrismaUsersRepository()
        await this.usersRpository.create({
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
    
        console.log(' usecase, a seguir ao prisma users repository')
    }

}    
