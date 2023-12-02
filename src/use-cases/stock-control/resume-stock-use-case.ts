import { ProductsRepository } from '@/repositories/product-repository';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface StockControlResumeRequest {
  product: {
    name: string;
    description: string;
    stockRecQt?: number;
    alert1?: number;
    alert2?: number;
  };
  storageLocations: string[];
  totalQuantity: number;
  productStatus: string;
  status: string;
}

export class ResumeStock {

  constructor(private stockControlResume: ProductsRepository) {}
  
}
