import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { ProductsUpdateRepository } from "../productUpdate-repository";

export class PrismaProductsUpdateRepository implements ProductsUpdateRepository {
  
  async createProductUpdate(data: Prisma.ProductCreateInput) {
    const product = await prisma.product.create({ data });
    return product;

  }

}
