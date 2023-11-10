import { Prisma, Tax } from "@prisma/client";

export interface TaxesRepository {
    findTaxByValue(taxValue: string): Promise<Tax | null>
    createTax (data: Prisma.TaxCreateInput): Promise<Tax>
}