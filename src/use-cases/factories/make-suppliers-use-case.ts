import { PrismaSuppliersRepository } from "@/repositories/prisma/suppliers/prisma-supliers-repository"
import { SupplierRegisterUseCase } from "../suppliers-use-cases/supplierRegister-use-case"

export function makeGetSuppliersUseCase() {
    const supplierRpository = new PrismaSuppliersRepository()
    const supplierRegisterUseCase = new SupplierRegisterUseCase(supplierRpository)
  
    return supplierRegisterUseCase
  }
  