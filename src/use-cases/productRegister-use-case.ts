import { ProductsRepository } from "@/repositories/productRegister-repository";
import { Product } from "@prisma/client";


interface ProductUseCaseRequest {
    upc: string,
    sku: string,
    name: string,
    description: string,
    price: number,
    tax: string,
    photo: string,
    packOrUn: string,
    packUnQt: number,
    expirationDate: string | undefined,
    productCategory: string | undefined,
    stockRecQt: number | undefined,
    alert1: number | undefined,
    alert2: number | undefined,
}

interface ProductUseCaseResponse {
    user: Product
}

export class ProductUseCase {

    constructor( private productsRepository: ProductsRepository ){}
    async execute({ 

        upc,
        sku,
        name,
        description,
        price,
        tax,
        photo,
        packOrUn,
        packUnQt,
        expirationDate,
        productCategory,
        stockRecQt,
        alert1,
        alert2,
    }: ProductUseCaseRequest) {


        // const upcWithSameRef = await this.productsRepository.findByUPC(upc)

        // const SkuWithSameRef = await this.productsRepository.findBySKU(sku)

        // console.log(upcWithSameRef, SkuWithSameRef)

        
        // if (upcWithSameRef || SkuWithSameRef) {
        //     throw new Error
        // } 

        console.log('passou if')
        
        await this.productsRepository.createProduct({
            upc,
            sku,
            name,
            description,
            price,
            tax,
            photo,
            packOrUn,
            packUnQt,
            expirationDate,
            productCategory,
            stockRecQt,
            alert1,
            alert2,
        })
    }
}    
