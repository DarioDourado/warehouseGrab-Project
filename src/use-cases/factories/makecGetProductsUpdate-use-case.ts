
import { PrismaProductsUpdateRepository } from "@/repositories/prisma/prisma-productUpdate-repository"
import { ProductUpdateUseCase } from "../productUpdate-use-case"

export function makeGetProductsUpdateUseCase() {
    const productsUpdateRepository = new PrismaProductsUpdateRepository
    const productUpdateUseCase = new ProductUpdateUseCase(productsUpdateRepository)

    return productUpdateUseCase
}