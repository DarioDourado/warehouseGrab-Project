import { Prisma, Product, StockControl } from "@prisma/client";

export interface StockControlRepository {
    findByUPC(upc: string): Promise<Product | null>
    findByStockSKU(sku: string): Promise<Product | null>
    createStock (data: Prisma.StockControlCreateInput): Promise<StockControl>
}