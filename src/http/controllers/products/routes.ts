import { FastifyInstance } from "fastify";
import { productRegister } from "./add-product-controller";
import { productDeleteController } from "./delete-product-controller";
import { getAllProductsController } from "./getAll-products-controller";
import { productUpdaterController } from "./update-product-controller";


export async function productsRoutes(app: FastifyInstance) {


    app.post('/productregister', productRegister)

    app.get('/products', getAllProductsController )

    app.put('/product-update/:id', productUpdaterController)

    app.delete('/product-delete/:id', productDeleteController)


}