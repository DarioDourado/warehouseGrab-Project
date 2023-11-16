import { FastifyInstance } from "fastify";
import { getAllUsersController } from "./getAllUsers";
import { userRegister } from "./userRegister";



export async function usersRoutes(app: FastifyInstance) {

    app.post('/usersregister', userRegister)
        
    app.get('/users', getAllUsersController);

}