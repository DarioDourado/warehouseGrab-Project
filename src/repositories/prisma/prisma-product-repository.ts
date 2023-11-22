import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { ProductsRepository } from "../product-repository";



export class PrismaProductsRepository implements ProductsRepository {
  async findByUPC(upc: string) {
    const product = await prisma.product.findFirst({
      where: {
        upc,
      },
    });

    return product;
  }

  async getProductsById(id: string) {
    const product = await prisma.product.findFirst({
      where: {
        id,
      },
    });

    return product;
  }


  async findBySKU(sku: string) {
    const product = await prisma.product.findFirst({
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

  async getAllProducts() {
    const users = await prisma.product.findMany();
    return users;
}
}
