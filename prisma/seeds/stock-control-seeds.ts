// Arquivo: seed.ts

import { PrismaClient } from "@prisma/client";
import { seedProducts } from "./products-seeds";

const prisma = new PrismaClient();

export async function seedStockControl() {
  try {

      await seedProducts();

      await seedStockControl()
    // Seed StockControl
    const stockControlsData = [
      {
        productUPC: "001",
        quantity: 100,
        isOut: false,
        storageLocation: "Central",
      },
      {
        productUPC: "002",
        quantity: 50,
        isOut: false,
        storageLocation: "Central",
      },
      {
        productUPC: "002",
        quantity: 25,
        isOut: true,
        storageLocation: "Central",
      },
      {
        productUPC: "003",
        quantity: 25,
        isOut: false,
        storageLocation: "Central",
      },
      {
        productUPC: "004",
        quantity: 15,
        isOut: false,
        storageLocation: "Central",
      },
      {
        productUPC: "005",
        quantity: 23,
        isOut: false,
        storageLocation: "Central",
      },
      {
        productUPC: "006",
        quantity: 54,
        isOut: false,
        storageLocation: "Central",
      },
      {
        productUPC: "001",
        quantity: 44,
        isOut: false,
        storageLocation: "Central",
      },
      {
        productUPC: "001",
        quantity: 44,
        isOut: true,
        storageLocation: "Posto 1",
      },
      {
        productUPC: "002",
        quantity: 4,
        isOut: true,
        storageLocation: "Posto 2",
      },
      {
        productUPC: "002",
        quantity: 4,
        isOut: true,
        storageLocation: "Posto 2",
      }
    ]

    const stockControlSeeds = await prisma.stockControl.createMany({
      data: await Promise.all(
        stockControlsData.map(async (stockControl) => {
          const { storageLocation, ...scontrol } = stockControl;
          const storageLocationRecord = await prisma.storageLocation.findFirst({
            where: { name: storageLocation },
          });

          if (!storageLocationRecord) {
            throw new Error(`Storage location not found: ${storageLocation}`);
          }
          return {
            ...scontrol,
            storageLocationId: storageLocationRecord.id,
          };
        })
      ),
    });

    console.log("StockControl seed complete:", stockControlSeeds);
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}
