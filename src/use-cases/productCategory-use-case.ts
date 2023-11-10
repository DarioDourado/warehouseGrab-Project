import { ProductsCategoryRepository } from "@/repositories/productCategory-repository"



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
            throw Error('Please Choose a diferente product category name')
        }

        await this.productCategoryRpository.createProductCategory({
            productCategory
        })

    
    }

}    
