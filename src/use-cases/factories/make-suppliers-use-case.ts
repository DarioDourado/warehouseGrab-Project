import { PrismaSuppliersRepository } from "@/repositories/prisma/prisma-supliers-repository"
import { SupplierRegisterUseCase } from "../supplierRegister-use-case"

export function makeGetSuppliersUseCase() {
    const supplierRpository = new PrismaSuppliersRepository()
    const supplierRegisterUseCase = new SupplierRegisterUseCase(supplierRpository)
  
    return supplierRegisterUseCase
  }
  