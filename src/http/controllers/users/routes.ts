import { verifyJwt } from "@/http/middlewares/verify-jwt";
import { FastifyInstance } from "fastify";
import { authenticate } from "../authenticate";
import { userRegister } from "./add-user-controller";
import { userDeleteController } from "./delete-users-controller";
import { getAllUsersController } from "./getAll-users-controllers";
import { getProfile } from "./profilie-controller";
import { userUpdaterController } from "./update-users-controller";




export async function usersRoutes(app: FastifyInstance) {

    app.post('/usersregister', userRegister)
    app.post('/sessions', authenticate)
    app.post('/myprofile',{ onRequest: [verifyJwt]}, getProfile)
        
    app.get('/users', getAllUsersController);

    app.put('/users-update/:id', userUpdaterController)

    app.delete('/users-delete/:id', userDeleteController)

}