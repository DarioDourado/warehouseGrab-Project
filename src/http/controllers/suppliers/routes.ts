import { FastifyInstance } from "fastify";
import { supplierRegister } from "./add-supplier-register-controller";
import { getAllSuppliersController } from "./getAll-Suppliers-controller-controller";


export async function suppliersRoutes(app: FastifyInstance) {



    app.post('/supplierregister', supplierRegister)

    app.get('/suppliers', getAllSuppliersController);
}