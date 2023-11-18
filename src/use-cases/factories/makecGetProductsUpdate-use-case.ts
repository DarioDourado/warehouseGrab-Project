import { PrismaProductsUpdateRepository } from "@/repositories/prisma/products/prisma-productUpdate-repository"
import { ProductUpdateUseCase } from "../products-use-cases/productUpdate-use-case"

export function makeGetProductsUpdateUseCase() {
    const productsUpdateRepository = new PrismaProductsUpdateRepository
    const productUpdateUseCase = new ProductUpdateUseCase(productsUpdateRepository)

    return productUpdateUseCase
}