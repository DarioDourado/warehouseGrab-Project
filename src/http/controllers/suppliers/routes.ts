import { FastifyInstance } from "fastify";
import { getAllSuppliersController } from "./getAllSuppliersController";
import { supplierRegister } from "./supplierRegister";

export async function suppliersRoutes(app: FastifyInstance) {



    app.post('/supplierregister', supplierRegister)

    app.get('/suppliers', getAllSuppliersController);
}