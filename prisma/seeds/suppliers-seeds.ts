// Arquivo: seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedSupplier() {
  try {
   
      // Seed Supplier
      const suppliersData = [
        { name: 'Supplier 1', 
          taxNumber: '123456789', 
          street: 'Rua Supplier 1', 
          addressLocalCode: '8150', 
          addressLocalZone: "156",  
          addressLocal: "Faro",
          country: "Portugal",
          phone1: "937372716",
          phone2: "937372718",
          email: "supplier1@fakemail.com",
          paymentCondTerm: 12
      },
        { name: 'Supplier 2', 
          taxNumber: '987654321', 
          street: 'Rua Supplier 2', 
          addressLocalCode: '8000', 
          addressLocalZone: "312",  
          addressLocal: "Faro",
          country: "Portugal",
          phone1: "931231233",
          phone2: "931231233",
          email: "supplier2@fakemail.com",
          paymentCondTerm: 30
      },
      { name: 'Supplier 3', 
      taxNumber: '123123123', 
      street: 'Rua Supplier 3', 
      addressLocalCode: '8150', 
      addressLocalZone: "156",  
      addressLocal: "Faro",
      country: "Portugal",
      phone1: "937372716",
      phone2: "937372718",
      email: "supplier3@fakemail.com",
      paymentCondTerm: 60
    },
    { name: 'Supplier 4', 
      taxNumber: '321321321', 
      street: 'Rua Supplier 4', 
      addressLocalCode: '8150', 
      addressLocalZone: "156",  
      addressLocal: "Faro",
      country: "Portugal",
      phone1: "937372716",
      phone2: "937372718",
      email: "supplier4@fakemail.com",
      paymentCondTerm: 15
    },
    ];
  
  const supplierSeeds = await prisma.supplier.createMany({
    data: suppliersData,
  });

  console.log('Supplier seed complete:', supplierSeeds);
    
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {

    await prisma.$disconnect();
  }
}
