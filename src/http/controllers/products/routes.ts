import { FastifyInstance } from "fastify";
import { productRegister } from "./add-product-controller";
import { productDeleteController } from "./delete-product-controller";
import { getProductByUPCController } from "./get-product-byupc-controller";
import { getAllProductsController } from "./getAll-products-controller";
import { getProductByIdController } from "./getById-products-controller";
import { productUpdaterController } from "./update-product-controller";


export async function productsRoutes(app: FastifyInstance) {

    app.post('/productregister', productRegister)

    app.get('/products', getAllProductsController )
    app.get('/get-product-by-upc/:upc', getProductByUPCController )
    app.get('/get-product-by-id/:id', getProductByIdController )

    app.put('/product-update/:id', productUpdaterController)

    app.delete('/product-delete/:id', productDeleteController)


}