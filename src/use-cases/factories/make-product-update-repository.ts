import { PrismaProductsUpdateRepository } from "@/repositories/prisma/prisma-product-update-repository"
import { ProductUpdateUseCase } from "../update-product-use-case"


export function makeGetProductsUpdateUseCase() {
    const productsUpdateRepository = new PrismaProductsUpdateRepository
    const productUpdateUseCase = new ProductUpdateUseCase(productsUpdateRepository)

    return productUpdateUseCase
}