import { FastifyInstance } from "fastify";
import { getAllProductsController } from "./getAllProductsController";
import { productRegister } from "./productRegister";

export async function productsRoutes(app: FastifyInstance) {


    app.post('/productregister', productRegister)

    app.get('/products', getAllProductsController );

}