
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { TaxesRepository } from "../tax-repository";


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
        console.log(' TaxCreateInput, a seguir ao taxValueNumber')
        console.log(tax)
        return tax

    }
}