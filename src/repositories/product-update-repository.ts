import { Prisma, Product } from "@prisma/client";

export interface ProductsUpdateRepository {

    getProductsUpdateById(id: string): Promise<Product | null>

    updateProduct (data: Prisma.ProductCreateInput): Promise<Product>
}