import fastify from "fastify";
import { ZodError } from "zod";
import { env } from "./env";
import { appRoutes } from "./http/routes";

export const app = fastify()

app.register(appRoutes) // Recebemos todas as nossas rotas da routes.ts

app.setErrorHandler((error,_, reply) => {
    if (error instanceof ZodError) {
        return reply 
        .status(400)
        .send({ message: 'Validation error', issues: error.format() })
    } 

    if (env.NODE_ENV !== 'production') {
        console.error(error)
    } else {
        // sed error to external tool DataDog/New Relic/Sentry
    }

    return reply.status(500).send({ message: 'Internal Server Error'})
});
