import { FastifyInstance } from "fastify";
import { userRegister } from "./controllers/userRegister";

export async function appRoutes(app: FastifyInstance) {
    app.post('/usersteste', userRegister)
}