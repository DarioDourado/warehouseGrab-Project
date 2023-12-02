import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

// Alteração na interface ProductsUpdateRepository
export interface ProductsUpdateRepository {
  updateProduct(id: string, data: Prisma.ProductUpdateInput): Promise<any>;
}

// Ajuste na classe PrismaProductsUpdateRepository
export class PrismaProductsUpdateRepository implements ProductsUpdateRepository {
  async updateProduct(id: string, data: Prisma.ProductUpdateInput): Promise<any> {
    const productUpdate = await prisma.product.update({
      where: {
        id,
      },
      data,
    });

    return productUpdate;
  }
}
