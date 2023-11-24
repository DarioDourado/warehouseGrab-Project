import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { ProductsRepository } from "../product-repository";



export class PrismaStockControlRepository implements ProductsRepository {
    getProductsById(id: string): Promise<{ id: string; upc: string; sku: string; name: string; description: string; price: Prisma.Decimal; taxId: string; photo: string; isPack: boolean; packUnQt: number; expirationDate: string | null; productCategoryId: string; stockRecQt: number | null; alert1: number | null; alert2: number | null; createdAt: Date; updatedAt: Date; } | null> {
        throw new Error("Method not implemented.");
    }
    findBySKU(sku: string): Promise<{ id: string; upc: string; sku: string; name: string; description: string; price: Prisma.Decimal; taxId: string; photo: string; isPack: boolean; packUnQt: number; expirationDate: string | null; productCategoryId: string; stockRecQt: number | null; alert1: number | null; alert2: number | null; createdAt: Date; updatedAt: Date; } | null> {
        throw new Error("Method not implemented.");
    }
    findTax(tax: string): Promise<{ id: string; taxValue: string; description: string; createdAt: Date; updatedAt: Date; } | null> {
        throw new Error("Method not implemented.");
    }
    findByCategory(productCategory: string | undefined): Promise<{ id: string; productCategory: string | null; createdAt: Date; updatedAt: Date; } | null> {
        throw new Error("Method not implemented.");
    }
    createProduct(data: Prisma.ProductCreateInput): Promise<{ id: string; upc: string; sku: string; name: string; description: string; price: Prisma.Decimal; taxId: string; photo: string; isPack: boolean; packUnQt: number; expirationDate: string | null; productCategoryId: string; stockRecQt: number | null; alert1: number | null; alert2: number | null; createdAt: Date; updatedAt: Date; }> {
        throw new Error("Method not implemented.");
    }
    findByUPC(upc: string): Promise<{ id: string; upc: string; sku: string; name: string; description: string; price: Decimal; taxId: string; photo: string; isPack: boolean; packUnQt: number; expirationDate: string | null; productCategoryId: string; stockRecQt: number | null; alert1: number | null; alert2: number | null; createdAt: Date; updatedAt: Date; } | null> {
        throw new Error("Method not implemented.");
    }
    createStock(data: Prisma.StockControlCreateInput): Promise<{ id: string; productUPC: string; quantity: number; isOut: boolean; storageLocationId: string; }> {
        throw new Error("Method not implemented.");
    }

    async findByStockSKU(sku: string) {
        const product = await prisma.product.findFirst({
          where: {
            sku,
          },
        })
    }

    async getAllStock() {
        const allStock = await prisma.stockControl.findMany()
        return allStock
        
    }

    
}
