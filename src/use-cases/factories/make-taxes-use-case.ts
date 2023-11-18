import { PrismaTaxesRepository } from "@/repositories/prisma/prisma-tax-repository"
import { TaxRegisterUseCase } from "../add-tax-use-case"


export function makeGetTaxesUseCase() {
    const taxesRepository = new PrismaTaxesRepository()

    const taxRegister = new TaxRegisterUseCase(taxesRepository)
    return taxRegister
  }