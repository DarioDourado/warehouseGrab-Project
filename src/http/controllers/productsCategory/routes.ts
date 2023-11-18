import { FastifyInstance } from "fastify";
import { productCategoryRegister } from "./add-product-category";
import { getAllProductsCategoriesController } from "./getAll-productsCategories-controllers";


export async function productsCategiesRoutes(app: FastifyInstance) {


    app.post('/productcategoryregister', productCategoryRegister)

    app.get('/productcategories', getAllProductsCategoriesController)
}
