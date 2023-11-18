import { Prisma, ProductCategory } from "@prisma/client";

export interface ProductsCategoryRepository {
    findProductCategoryByName(productCategory: string): Promise<ProductCategory | null>
    createProductCategory (data: Prisma.ProductCategoryCreateInput): Promise<ProductCategory>
}