import { ProductsCategoryRepository } from "@/repositories/product-category-repository"
import { ProductCategoryAlreadyExistsError } from "./errors/productError"



interface ProductCategoryRegisterUseCaseRequest {
    productCategory: string
}

export class ProductCategoryRegisterUseCase {

    constructor( private productCategoryRpository: ProductsCategoryRepository ){}
    async execute({ 
        productCategory
    }: ProductCategoryRegisterUseCaseRequest) {

        const productCategoryValueWithSameName = await this.productCategoryRpository.findProductCategoryByName(productCategory)

        if (productCategoryValueWithSameName) {
            throw ProductCategoryAlreadyExistsError
        }

        await this.productCategoryRpository.createProductCategory({
            productCategory
        })

    
    }

}    
