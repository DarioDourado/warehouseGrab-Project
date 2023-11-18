import { ProductsUpdateRepository } from "@/repositories/productUpdate-repository";

export interface ProductUpdateUseCaseRequest {
    id: string;
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

export class ProductUpdateUseCase {

    constructor(private productsUpdateRepository: ProductsUpdateRepository) {}
    
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
    }: ProductUpdateUseCaseRequest) {


        await this.productsUpdateRepository.createProductUpdate ({
            
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