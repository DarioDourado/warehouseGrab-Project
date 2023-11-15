import { makeGetUserProfileUseCase } from "@/use-cases/factories/make-getUsersProfileUseCase";
import { FastifyReply, FastifyRequest } from "fastify";

export async function userProfile (request: FastifyRequest, reply: FastifyReply) {
    await request.jwtVerify()
    console.log(request.user.sub)
    const getUserProfile = makeGetUserProfileUseCase()
    const { user } = await getUserProfile.execute({
        userId: request.user.sub
    })

    return reply.status(200).send()
}