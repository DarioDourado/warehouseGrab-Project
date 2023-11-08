
// import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
// import { RegisterUseCase } from "@/use-cases/register-use-case";
// import { FastifyReply, FastifyRequest } from "fastify";

// import { z } from "zod";

// export async function userRegister(request: FastifyRequest, reply: FastifyReply) {

//     const userRegisterBodySchema = z.object({
//         name: z.string(),
//         email: z.string().email(),
//         password: z.string().min(6),
//         role: z.enum(['ADMIN', 'USER']),
//         colabStatus: z.string(),
//         street: z.string(),
//         addressLocalCode: z.string(),
//         addressLocalZone: z.string(),
//         addressLocal: z.string(),
//         phone: z.string()
//     })

//     // vamos destruturar a nosso obj userRegisterBodySchema
//     const { 
//         name, 
//         email, 
//         password, 
//         role,
//         colabStatus,
//         street,
//         addressLocalCode,
//         addressLocalZone,
//         addressLocal,
//         phone,
//       } = userRegisterBodySchema.parse(request.body)

//       console.log(' Passa pelo controller usergeristerbodyschema')
//       // vamos depois tratar 2 campos:
//       // email -> garantindo que não existe mais nenhum email igual
//       // password, garantindo que é usada a encryptação hash

//       // Podemos tratar destes 2 campos aqui no controlador ou num caso de uso.
//       // Optamos por usar um caso de uso para tratar dos campos email e password.

//       // tru catch
//       try {
//         // esperamos pela assync function registerUseCase enviando o objecto
//         console.log(' await controller, vai para register-use-case')
//         // await registerUseCase({
//         //   // Trabalhado pelo use case, definimos o obj que recebemos
//         //   name, 
//         //   email, 
//         //   password, 
//         //   role,
//         //   colabStatus,
//         //   street,
//         //   addressLocalCode,
//         //   addressLocalZone,
//         //   addressLocal,
//         //   phone,
//         // })
//         const usersRepository = new PrismaUsersRepository()
//         const registerUseCase = new RegisterUseCase(usersRepository)

//         await registerUseCase.execute({
//           name, 
//           email, 
//           password, 
//           role,
//           colabStatus,
//           street,
//           addressLocalCode,
//           addressLocalZone,
//           addressLocal,
//           phone,
//         })

//       } catch {

//         return reply.status(409).send('Erro Enviar para useCase')
//       }
//       console.log(' controller, veio de register-use-case')
//     return reply.status(201).send()
// }
