import { ProductsRepository } from "@/repositories/product-repository";
import { UPCAlreadyExistsError, SKUAlreadyExistsError, TaxValueAlreadyExistsError, ProductCategoryAlreadyExistsError } from "../errors/productError";


interface ProductUseCaseRequest {
    upc: string;
    sku: string;
    name: string;
    description: string;
    price: number;
    tax: string;
    photo: string;
    isPack: boolean;
    packUnQt: number;
    expirationDate?: string;
    productCategory?: string;
    stockRecQt?: number;
    alert1?: number;
    alert2?: number;
}

// interface ProductUseCaseResponse {
//     user: Product;
// }

export class ProductUseCase {

    constructor(private productsRepository: ProductsRepository) {}


    async execute({
        upc,
        sku,
        name,
        description,
        price,
        tax,
        photo,
        isPack,
        packUnQt,
        expirationDate,
        productCategory,
        stockRecQt,
        alert1,
        alert2,
    }: ProductUseCaseRequest) {
        
        const existUPC = await this.productsRepository.findByUPC(upc)
        if (existUPC) {
            throw new UPCAlreadyExistsError;
        }
        const existSKU = await this.productsRepository.findBySKU(sku)
        if (existSKU) {
            throw new SKUAlreadyExistsError;
        }

        const existingTax = await this.productsRepository.findTax(tax)
        if (!existingTax) {
            throw new TaxValueAlreadyExistsError;
        }
        const existingProductCategory = await this.productsRepository.findByCategory(productCategory)

        if (!existingProductCategory) {
            throw new ProductCategoryAlreadyExistsError;
        }

        await this.productsRepository.createProduct({
            sku,
            upc,
            name,
            description,
            price,
            photo,
            isPack,
            packUnQt,
            expirationDate,
            stockRecQt,
            alert1,
            alert2,
            tax: {
                connect: {
                    taxValue: tax,
                },
            },
            productCategory: {
                connect: {
                    productCategory,
                },
            },
            
        })
        
    }
}