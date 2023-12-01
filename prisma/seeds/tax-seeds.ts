// Arquivo: seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedTax() {
  try {
    // Seed Tax
    const taxesData = [
      { taxValue: '0', description: 'Taxa de 0%' },
      { taxValue: '6', description: 'Taxa de 6%' },
      { taxValue: '12', description: 'Taxa de 12%' },
      { taxValue: '23', description: 'Taxa de 23%' },

    ];

    const taxSeeds = await prisma.tax.createMany({
      data: taxesData,
    });
    
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {

    await prisma.$disconnect();
  }
}