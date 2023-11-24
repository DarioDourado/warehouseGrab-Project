import fastifyJwt from "@fastify/jwt";
import fastify from "fastify";
import { ZodError } from "zod";
import { env } from "./env";
import { localStorageRoutes } from "./http/controllers/localStorage/routes";
import { productsRoutes } from "./http/controllers/products/routes";
import { productsCategiesRoutes } from "./http/controllers/productsCategory/routes";
import { stockControlRoutes } from "./http/controllers/stockControl/routes";
import { suppliersRoutes } from "./http/controllers/suppliers/routes";
import { taxesRoutes } from "./http/controllers/taxes/routes";
import { usersRoutes } from "./http/controllers/users/routes";

export const app = fastify()

app.register(fastifyJwt, {
    secret: env.JWT_SECRET,
})

app.register(usersRoutes)
app.register(localStorageRoutes)
app.register(productsRoutes)
app.register(productsCategiesRoutes)
app.register(suppliersRoutes)
app.register(taxesRoutes)
app.register(stockControlRoutes)


// ERROR´s Handling
app.setErrorHandler((error, _, reply) => {
    if (error instanceof ZodError) {
        return reply
        .status(400)
        .send({ message: 'Validation error', issues: error.format()})
    }

    if ( env.NODE_ENV !== 'production' ) {
        console.error(error)
    } else {
        // Send to external tool DataDog/New Relic/Sentry
    }
    return reply.status(500).send({ message: 'Internal server error'})
})