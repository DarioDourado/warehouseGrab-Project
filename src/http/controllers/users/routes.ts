import { isProfileAdmin } from "@/http/middlewares/verify-isAdmin";
import { verifyJwt } from "@/http/middlewares/verify-jwt";
import { FastifyInstance } from "fastify";
import { authenticate } from "../auth/authenticate";
import { userRegister } from "./add-user-controller";
import { userDeleteController } from "./delete-users-controller";
import { getUserByEmailController } from "./get-by-email-user-controller";
import { getAllUsersController } from "./getAll-users-controllers";
import { getProfile } from "./profilie-controller";
import { userUpdaterController } from "./update-users-controller";




export async function usersRoutes(app: FastifyInstance) {

    app.post('/userregister', userRegister)
    app.post('/sessions', authenticate)
    app.post('/myprofile',{ onRequest: [verifyJwt]}, getProfile)

    app.post('/myprofileAdmin',{ onRequest: [verifyJwt, isProfileAdmin]}, isProfileAdmin)
        
    app.get('/users',{ onRequest: [verifyJwt, isProfileAdmin]}, getAllUsersController);
    app.get('/user/:email', getUserByEmailController);

    app.put('/user-update/:id', userUpdaterController)

    app.delete('/user-delete/:id',{ onRequest: [verifyJwt, isProfileAdmin]}, userDeleteController)

}