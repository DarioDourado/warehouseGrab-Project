// import { prisma } from "@/lib/prisma";
// import { UserstesteRepository } from "@/repositories/usersTeste-repository";
// import { Prisma } from "@prisma/client";



// export class PrismaUsersTesteRepository implements UserstesteRepository {
//     async findByEmail(email: string) {
//         const userTeste = await prisma.userTeste.findUnique({
//             where: {
//                 email,
//             },
//         })

//         return userTeste
//     }

//     async create (data: Prisma.UserTesteCreateInput) {
//         const userTeste = await prisma.userTeste.create( { data } )
//         return userTeste
//     }
// }