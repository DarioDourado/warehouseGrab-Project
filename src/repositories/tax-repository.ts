import { Prisma, Tax } from "@prisma/client";

export interface TaxesRepository {
    findTaxByValue(taxValue: number): Promise<Tax | null>
    createTax (data: Prisma.TaxCreateInput): Promise<Tax>
}