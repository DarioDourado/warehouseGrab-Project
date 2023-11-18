import { Prisma, Product, ProductCategory, Tax } from "@prisma/client";

export interface ProductsRepository {
    findByUPC(upc: string): Promise<Product | null>
    getProductsById(id: string): Promise<Product | null>
    findBySKU(sku: string): Promise<Product | null>
    findTax(tax: string): Promise<Tax | null>
    findByCategory(productCategory: string | undefined): Promise<ProductCategory | null>
    createProduct (data: Prisma.ProductCreateInput): Promise<Product>
}