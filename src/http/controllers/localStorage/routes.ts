import { FastifyInstance } from "fastify";
import { localStorageRegister } from "./add-storage-location";
import { localStorageDeleteController } from "./delete-storage-controller";
import { getLocalStorageByIdController } from "./find-by-id-storage-location";
import { getAllLocalStorageController } from "./get-all-storage-location-controller";
import { localStorageUpdaterController } from "./update-storage-location-controller";




export async function localStorageRoutes(app: FastifyInstance) {

    app.post('/localstorageregister', localStorageRegister)

    app.get('/localstorages', getAllLocalStorageController)
    app.get('/localstorage/:id', getLocalStorageByIdController)
   //  app.get('/localstorage/:name', getLocalStorageByNameController) (Em desenvolvimento)

    app.delete('/localstoragedelete/:id', localStorageDeleteController)

    app.put('/localstorage-update/:id', localStorageUpdaterController)

}