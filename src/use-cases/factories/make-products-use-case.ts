import { PrismaProductsRepository } from "@/repositories/prisma/prisma-product-repository"
import { ProductUseCase } from "../products/add-product-use-case"



export function makeGetProductsUseCase() {
    const productsRegisterRepository = new PrismaProductsRepository
    const productRegisterUseCase = new ProductUseCase(productsRegisterRepository)

    return productRegisterUseCase
}