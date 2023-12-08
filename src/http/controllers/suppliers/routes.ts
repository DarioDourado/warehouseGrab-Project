import { FastifyInstance } from "fastify";
import { supplierRegister } from "./add-supplier-register-controller";
import { supplierDeleteController } from "./delete-supplier-controller";
import { getAllSuppliersController } from "./getAll-Suppliers-controller-controller";
import { getSupplierByIdController } from "./getbyid-supplier-controller";
import { supplierUpdaterController } from "./upgrade-supplier-controller";


export async function suppliersRoutes(app: FastifyInstance) {

    app.post('/supplierregister', supplierRegister)

    app.get('/suppliers', getAllSuppliersController);
    app.get('/supplier/:id', getSupplierByIdController)

    app.put('/supplier-update/:id', supplierUpdaterController)

    app.delete('/supplier-delete/:id', supplierDeleteController)
}