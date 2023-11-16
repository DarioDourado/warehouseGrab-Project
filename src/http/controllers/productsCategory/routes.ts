import { FastifyInstance } from "fastify";
import { getAllProductsCategoriesController } from "./getAllProductsCategories";
import { productCategoryRegister } from "./productCategoryRegister";


export async function productsCategiesRoutes(app: FastifyInstance) {


    app.post('/productcategoryregister', productCategoryRegister)

    app.get('/productcategories', getAllProductsCategoriesController)
}
