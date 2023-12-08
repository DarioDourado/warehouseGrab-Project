import { FastifyInstance } from "fastify";
import { productCategoryRegister } from "./add-product-category";
import { productCategoryDeleteController } from "./delete-products-categories-controller";
import { getProductCategoryByIdController } from "./get-by-id-product-category";
import { getAllProductsCategoriesController } from "./getAll-productsCategories-controllers";
import { productCategoryUpdaterController } from "./update-products-categorie-controller";


export async function productsCategiesRoutes(app: FastifyInstance) {


    app.post('/add-productcategory', productCategoryRegister)

    app.get('/get-all-productcategories', getAllProductsCategoriesController)
    app.get('/productcategory/:id', getProductCategoryByIdController )

    app.put('/productcategory-update/:id', productCategoryUpdaterController)

    app.delete('/productcategory-delete/:id', productCategoryDeleteController)
}
