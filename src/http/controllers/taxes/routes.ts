import { FastifyInstance } from "fastify";

import { getAllTaxesController } from "./getAllTaxes";
import { taxRegister } from "./taxRegister";

export async function taxesRoutes(app: FastifyInstance) {

    app.post('/taxregister', taxRegister)

    app.get('/taxes', getAllTaxesController);

}