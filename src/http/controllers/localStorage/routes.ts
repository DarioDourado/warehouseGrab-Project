import { FastifyInstance } from "fastify";
import { localStorageRegister } from "./storageLocationRegister";


export async function localStorageRoutes(app: FastifyInstance) {

    app.post('/localstorage', localStorageRegister)

    

}