import { FastifyInstance } from "fastify";
import { userRegister } from "./add-user-controller";
import { userDeleteController } from "./delete-users-controller";
import { getAllUsersController } from "./getAll-users-controllers";
import { userUpdaterController } from "./update-users-controller";




export async function usersRoutes(app: FastifyInstance) {

    app.post('/usersregister', userRegister)
        
    app.get('/users', getAllUsersController);

    app.put('/users-update/:id', userUpdaterController)

    app.delete('/users-delete/:id', userDeleteController)

}