import { PrismaProductsRepository } from "@/repositories/prisma/prisma-productRegister-repository"
import { ProductUseCase } from "../productRegister-use-case"

export function makeGetProductsUseCase() {
    const productsRegisterRepository = new PrismaProductsRepository
    const productRegisterUseCase = new ProductUseCase(productsRegisterRepository)

    return productRegisterUseCase
}