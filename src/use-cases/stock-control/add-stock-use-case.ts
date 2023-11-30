import { PrismaProductsRepository } from "@/repositories/prisma/prisma-product-repository";
import { ProductsRepository } from "@/repositories/product-repository";
import { StockControlRepository } from "@/repositories/stock-control-repository";
import { UPCDoNotExist } from "../errors/productError";


interface AddStockUseCaseRequest {
    productUPC: string
    quantity: number
    isOut: boolean
    stockLocal: string
}

// interface AddStockUseCaseResponse {
//     user: Product;
// }

export class StockControlUseCase {

    constructor(private stockControlRepository: StockControlRepository,
                private productRepository: ProductsRepository  ) {} 

    async execute({
        productUPC,
        quantity,
        isOut,
        stockLocal,
    }: AddStockUseCaseRequest) {
        const productsRepository = new PrismaProductsRepository

        const getProductsByUPC = await productsRepository.findByUPC(productUPC)
    
        if (!getProductsByUPC) {
            throw UPCDoNotExist
        }
    
        const newQuantity = await isOut ? quantity : quantity*-1 

        await this.stockControlRepository.createStock({
      
            productUPC,
            quantity: newQuantity,
            isOut,
            stockLocal: {
                connect: {
                    name: stockLocal
                }
            }
            
        });
    }
}
