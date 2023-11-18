import { FastifyInstance } from "fastify";
import { taxRegister } from "./add-tax-controller";
import { getAllTaxesController } from "./getAll-taxes-controller";

export async function taxesRoutes(app: FastifyInstance) {

    app.post('/taxregister', taxRegister)

    app.get('/taxes', getAllTaxesController);

}