import { Prisma, Product } from "@prisma/client";

export interface ProductsRepository {
    findByUPC(upc: string): Promise<Product | null>
    findBySKU(sku: string): Promise<Product | null>
    createProduct (data: Prisma.ProductCreateInput): Promise<Product>
}