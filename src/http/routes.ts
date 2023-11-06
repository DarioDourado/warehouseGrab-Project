import { FastifyInstance } from "fastify";
import { productCategoryRegister } from "./controllers/productCategoryRegister";
import { productRegister } from "./controllers/productRegister";
import { localStorageRegister } from "./controllers/storageLocarionRegister";
import { supplierRegister } from "./controllers/supplierRegister";
import { taxRegister } from "./controllers/taxRegister";
import { userRegister } from "./controllers/userRegister";
import { userTesteRegister } from "./controllers/userTesteRegister";

export async function appRoutes(app: FastifyInstance) {
    app.post('/usersteste', userTesteRegister)
    app.post('/usersregister', userRegister)
    app.post('/taxregister', taxRegister)
    app.post('/supplierregister', supplierRegister)
    app.post('/productcategoryregister', productCategoryRegister)
    app.post('/localstorage', localStorageRegister)
    app.post('/productregister', productRegister)
}