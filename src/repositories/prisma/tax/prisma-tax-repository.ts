import { prisma } from "@/lib/prisma";
import { TaxesRepository } from "@/repositories/taxes-repositories/tax-repository";
import { Prisma } from "@prisma/client";



export class PrismaTaxesRepository implements TaxesRepository{

    async findTaxByValue(taxValue: string) {
        const taxValueNumber = await prisma.tax.findUnique({
            where:{
                taxValue
            }
        })
        console.log(' PrismaTaxesRepository, a seguir ao taxValueNumber')
        return taxValueNumber
    }

    async createTax (data: Prisma.TaxCreateInput) {
        const tax = await prisma.tax.create( {data} )
        return tax
    }

    async getAllTaxes() {
        const taxes = await prisma.tax.findMany();
        return taxes;
    }
}