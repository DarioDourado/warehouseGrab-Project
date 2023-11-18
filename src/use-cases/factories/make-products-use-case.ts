import { PrismaProductsRepository } from "@/repositories/prisma/products/prisma-productRegister-repository"
import { ProductUseCase } from "../products-use-cases/productRegister-use-case"

export function makeGetProductsUseCase() {
    const productsRegisterRepository = new PrismaProductsRepository
    const productRegisterUseCase = new ProductUseCase(productsRegisterRepository)

    return productRegisterUseCase
}