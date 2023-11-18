import { FastifyInstance } from "fastify";
import { localStorageRegister } from "./add-storage-location";
import { localStorageDeleteController } from "./delete-storage-controller";
import { getAllLocalStorageController } from "./get-all-storage-location-controller";
import { localStorageUpdaterController } from "./update-storage-location-controller";




export async function localStorageRoutes(app: FastifyInstance) {

    app.post('/localstorage', localStorageRegister)

    app.get('/localstorages', getAllLocalStorageController)

    app.delete('/localstoragedelete/:id', localStorageDeleteController)

    app.put('/localstorage-update/:id', localStorageUpdaterController)

}