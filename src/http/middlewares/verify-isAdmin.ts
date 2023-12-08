import { makeGetUserProfileUseCase } from "@/use-cases/factories/make-get-user-profile-use.case";
import { FastifyReply, FastifyRequest } from "fastify";


export async function isProfileAdmin(request: FastifyRequest, reply: FastifyReply) {


    try {
        const getUserProfile = makeGetUserProfileUseCase()
        const { user } = await getUserProfile.execute({
            userId: request.user.sub
    
        })
        if (user.isAdmin === false) {
            return reply.status(402).send({ message: 'User NOT authenticated'})
        }    

    } catch (error) {
        return reply.status(401).send({ message: 'User not authenticated'})
    }

}
