// Arquivo: seed.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedStockControl() {
  try {

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
        productUPC: "005",
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
      },
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
        storageLocation: "Posto 2",
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
        storageLocation: "Posto 3",
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
        productUPC: "005",
        quantity: 54,
        isOut: false,
        storageLocation: "Central",
      },
      {
        productUPC: "005",
        quantity: 14,
        isOut: true,
        storageLocation: "Central",
      },
      {
        productUPC: "001",
        quantity: 21,
        isOut: false,
        storageLocation: "Posto 1",
      },
      {
        productUPC: "005",
        quantity: 1,
        isOut: false,
        storageLocation: "Posto 2",
      },
      {
        productUPC: "002",
        quantity: 4,
        isOut: true,
        storageLocation: "Posto 3",
      },
    ]
    
    const stockControlSeeds = await prisma.stockControl.createMany({
      data: await Promise.all(
        stockControlsData.map(async (stockControl) => {
          const { storageLocation, ...sControl } = stockControl;
          const storageLocationRecord = await prisma.storageLocation.findFirst({
            where: { name: storageLocation },
          });



          if (!storageLocationRecord) {
            throw new Error(`Storage location not found: ${storageLocation}`);
          }
          return {
            ...sControl,
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