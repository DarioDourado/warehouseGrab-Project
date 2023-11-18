import { FastifyInstance } from "fastify";
import { taxRegister } from "./add-tax-controller";
import { taxDeleteController } from "./delete-tax-controllers";
import { getAllTaxesController } from "./getAll-taxes-controller";
import { taxUpdaterController } from "./update-taxes-controller";

export async function taxesRoutes(app: FastifyInstance) {

    app.post('/taxregister', taxRegister)

    app.get('/taxes', getAllTaxesController);

    app.put('/tax-update/:id', taxUpdaterController)

    app.delete('/tax-delete/:id', taxDeleteController)

}