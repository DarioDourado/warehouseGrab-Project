import { PrismaTaxesRepository } from "@/repositories/prisma/tax/prisma-tax-repository"
import { TaxRegisterUseCase } from "../taxes-use-cases/taxRegister-use-case"


export function makeGetTaxesUseCase() {
    const taxesRepository = new PrismaTaxesRepository()

    const taxRegister = new TaxRegisterUseCase(taxesRepository)
    return taxRegister
  }