// Arquivo: seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedLocalStorage() {
  try {
   // Seed StorageLocation
   const storageLocationsData = [
    { name: 'Central', description: 'Armazém Central' },
    { name: 'Posto 1', description: 'Posto Móvel 1 - 23-RT-54' },
    { name: 'Posto 2', description: 'Posto Móvel 2 - 90-TU-32' },
    { name: 'Posto 3', description: 'Posto Móvel 3 - 11-QT-67' },
  ];

  const storageLocationSeeds = await prisma.storageLocation.createMany({
    data: storageLocationsData,
  });

  console.log('StorageLocation seed complete:', storageLocationSeeds);

  
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {

    await prisma.$disconnect();
  }
}