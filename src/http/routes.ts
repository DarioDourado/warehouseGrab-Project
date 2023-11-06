import { FastifyInstance } from "fastify";
import { userRegister } from "./controllers/userRegister";
import { userTesteRegister } from "./controllers/userTesteRegister";

export async function appRoutes(app: FastifyInstance) {
    app.post('/usersteste', userTesteRegister)
    app.post('/users', userRegister)
}