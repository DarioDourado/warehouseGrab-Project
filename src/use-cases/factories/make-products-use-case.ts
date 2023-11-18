import { PrismaProductsRepository } from "@/repositories/prisma/prisma-product-register-repository"
import { ProductUseCase } from "../add-product-use-case"


export function makeGetProductsUseCase() {
    const productsRegisterRepository = new PrismaProductsRepository
    const productRegisterUseCase = new ProductUseCase(productsRegisterRepository)

    return productRegisterUseCase
}