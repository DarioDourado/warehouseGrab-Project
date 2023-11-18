import { prisma } from "@/lib/prisma";
import { ProductsUpdateRepository } from "@/repositories/products-repositories/productUpdate-repository";
import { Prisma } from "@prisma/client";


export class PrismaProductsUpdateRepository implements ProductsUpdateRepository {
  
  async createProductUpdate(data: Prisma.ProductCreateInput) {
    const product = await prisma.product.create({ data });
    return product;

  }

}
