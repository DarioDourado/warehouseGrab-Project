import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface ProductData {
  upc: string;
  sku: string;
  name: string;
  description: string;
  price: number;
  tax: string;
  productCategory: string;
  photo: string;
  isPack: boolean;
  packUnQt: number;
  expirationDate: string;
  stockRecQt: number;
  alert1: number;
  alert2: number;
}

export async function seedProducts() {
  try {
    // Seed Product
    const productsData: ProductData[] = [
      {
        upc: "001",
        sku: "A001",
        name: "Saia Preta",
        description: "Saia Preta M",
        price: 29.90,
        tax: "23",
        productCategory: "Saias",
        photo: "https://example.com/product-image.jpg",
        isPack: true,
        packUnQt: 6,
        expirationDate: "2023-11-30",
        stockRecQt: 100,
        alert1: 50,
        alert2: 25,
      },
      {
        upc: "002",
        sku: "A002",
        name: "Calças de Ganga",
        description: "Calças de Ganga nº 44",
        price: 19.99,
        tax: "23",
        productCategory: "Calças",
        photo: "https://example.com/product-image.jpg",
        isPack: true,
        packUnQt: 6,
        expirationDate: "2023-11-30",
        stockRecQt: 100,
        alert1: 50,
        alert2: 25,
      },
      {
        upc: "003",
        sku: "A003",
        name: "Sapatos Senhora",
        description: "Sapatos de Senhora nº 44",
        price: 49.90,
        tax: "23",
        productCategory: "Calçado",
        photo: "https://example.com/product-image.jpg",
        isPack: true,
        packUnQt: 6,
        expirationDate: "2023-11-30",
        stockRecQt: 100,
        alert1: 50,
        alert2: 25,
      },
      {
        upc: "004",
        sku: "A004",
        name: "Sapatilha NIKE",
        description: "Sapatilha NIKE nº 40",
        price: 69.90,
        tax: "23",
        productCategory: "Calçado",
        photo: "https://example.com/product-image.jpg",
        isPack: true,
        packUnQt: 6,
        expirationDate: "2023-11-30",
        stockRecQt: 100,
        alert1: 50,
        alert2: 25,
      },
      {
        upc: "005",
        sku: "A005",
        name: "Sapatilha PUMA",
        description: "Sapatilha NIKE nº 44",
        price: 79.90,
        tax: "23",
        productCategory: "Calças",
        photo: "https://example.com/product-image.jpg",
        isPack: true,
        packUnQt: 6,
        expirationDate: "2023-11-30",
        stockRecQt: 100,
        alert1: 50,
        alert2: 25,
      },
      {
        upc: "006",
        sku: "A006",
        name: "Mala em Cortiça M23",
        description: "Mala de Senhora em Cortiça com opção Tiracolo M23",
        price: 99.90,
        tax: "23",
        productCategory: "Acessórios",
        photo: "https://example.com/product-image.jpg",
        isPack: true,
        packUnQt: 6,
        expirationDate: "2023-11-30",
        stockRecQt: 100,
        alert1: 50,
        alert2: 25,
      },
    ];

    // Perform lookup for tax and product category IDs
    const productsWithIds = await Promise.all(
      productsData.map(async (product) => {
        const tax = await prisma.tax.findFirst({
          where: { taxValue: product.tax },
        });
        const productCategory = await prisma.productCategory.findFirst({
          where: { productCategory: product.productCategory },
        });

        if (!tax) {
          throw new Error(`Tax not found for value: ${product.tax}`);
        }

        if (!productCategory) {
          throw new Error(`Product category not found: ${product.productCategory}`);
        }

        return {
          ...product,
          taxId: tax.id,
          productCategoryId: productCategory.id,
        };
      })
    );

    const productSeeds = await prisma.product.createMany({
      data: productsWithIds.map((product) => ({
        sku: product.sku,
        upc: product.upc,
        name: product.name,
        description: product.description,
        packUnQt: product.packUnQt,
        photo: product.photo,
        price: product.price,
        productCategoryId: product.productCategoryId,
        taxId: product.taxId,
        alert1: product.alert1,
        alert2: product.alert2,
        expirationDate: product.expirationDate,
        isPack: product.isPack,
        stockRecQt: product.stockRecQt,
      })),
    });

    console.log("Product seed complete:", productSeeds);
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}
