import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { ProductsUpdateRepository } from "../product-update-repository";



export class PrismaProductsUpdateRepository implements ProductsUpdateRepository {

  async getProductsUpdateById(id: string) {
    const productUpdate = await prisma.product.findFirst({
      where: {
        id,
      },
    });

    return productUpdate;
  }

  async updateProduct(data: Prisma.ProductCreateInput) {
    const productUpdate = await prisma.product.update({ data });
    return productUpdate;
  }

}
