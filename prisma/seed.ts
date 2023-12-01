import { PrismaClient } from '@prisma/client';
import { seedProducts } from './seeds/products-seeds';


const prisma = new PrismaClient();

// seedProductCategory()
// seedTax()
// seedSupplier()
// seedUsers()
// seedLocalStorage()
seedProducts()
// seedStockControl()