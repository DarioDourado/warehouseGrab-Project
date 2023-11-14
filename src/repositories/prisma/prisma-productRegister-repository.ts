import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { ProductsRepository } from "../productRegister-repository";

export class PrismaProductsRepository implements ProductsRepository {
  async findByUPC(upc: string) {
    const product = await prisma.product.findUnique({
      where: {
        upc,
      },
    });

    return product;
  }

  async findBySKU(sku: string) {
    const product = await prisma.product.findUnique({
      where: {
        sku,
      },
    });

    return product;
  }

  async findTax(tax: string) {
    const existingTax = await prisma.tax.findUnique({
      where: {
        taxValue: tax,
      },
    });

    return existingTax;
  }

  async findByCategory(productCategory: string) {
    const existingProductCategory = await prisma.productCategory.findUnique({
      where: {
        productCategory,
      },
    });

    return existingProductCategory;
  }

  async createProduct(data: Prisma.ProductCreateInput) {
    const product = await prisma.product.create({ data });
    return product;
  }
}
