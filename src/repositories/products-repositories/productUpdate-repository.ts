import { Prisma, Product } from "@prisma/client";

export interface ProductsUpdateRepository {

    createProductUpdate(data: Prisma.ProductCreateInput): Promise<Product>
}