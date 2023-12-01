// Arquivo: seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedUsers() {
  try {
   
    const usersData = [
      { name: "Laura",
        email: "laura@example.com",
        passwordHash: "password123",
        isAdmin: false,
        colabStatus: "Gerente",
        street: "Rua Luis Bivar, 70A",
        addressLocalCode: "8150",
        addressLocalZone: "156",
        addressLocal: "São Bras de ALportel",
        phone: "123-456-7890"
    },
    { name: "Dario",
        email: "dario@example.com",
        passwordHash: "passwordHash",
        isAdmin: false,
        colabStatus: "Gerente",
        street: "Rua Luis Bivar, 70A",
        addressLocalCode: "8150",
        addressLocalZone: "156",
        addressLocal: "São Bras de ALportel",
        phone: "123-456-7890"
    }
    ];

    const userSeeds = await prisma.user.createMany({
      data: usersData,
    });

    console.log('User seed complete:', userSeeds);

    
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {

    await prisma.$disconnect();
  }
}
