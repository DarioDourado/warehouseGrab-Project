import { FastifyInstance } from "fastify";
import { userTesteRegister } from "./controllers/userTesteRegister";

export async function appRoutes(app: FastifyInstance) {
    app.post('/usersteste', userTesteRegister)
}