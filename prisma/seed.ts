import { PrismaClient } from '@prisma/client';
import { seedProductCategory } from './seeds/productCategory-seeds';
import { seedLocalStorage } from './seeds/storage-local-seeds';
import { seedSupplier } from './seeds/suppliers-seeds';
import { seedTax } from './seeds/tax-seeds';
import { seedUsers } from './seeds/users-seeds';


const prisma = new PrismaClient();

seedProductCategory()
seedTax()
seedSupplier()
seedUsers()
seedLocalStorage()
// seedProducts()
// seedStockControl()