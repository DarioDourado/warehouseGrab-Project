import { FastifyInstance } from "fastify";
import { taxRegister } from "./add-tax-controller";
import { taxDeleteController } from "./delete-tax-controllers";
import { getTaxByIdController } from "./get-by-id-tax-controller";
import { getAllTaxesController } from "./getAll-taxes-controller";
import { taxUpdaterController } from "./update-taxes-controller";

export async function taxesRoutes(app: FastifyInstance) {

    app.post('/taxregister', taxRegister)

    app.get('/taxes', getAllTaxesController);
    app.get('/taxe/:id', getTaxByIdController);

    app.put('/tax-update/:id', taxUpdaterController)

    app.delete('/tax-delete/:id', taxDeleteController)

}