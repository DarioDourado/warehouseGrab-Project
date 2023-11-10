import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { ProductsRepository } from "../productRegister-repository";


// depois de termos um interface comum, podemos e devemos de "implementar" na nossa class.
// NOTA: os mesmos métodos isados em interface tem de ser usados
export class PrismaProductsRepository implements ProductsRepository{
    
    async findByUPC(upc: string) {
        const product = await prisma.product.findUnique({
            where: {
                upc,
            },
        })

        return product
    }

    async findBySKU(sku: string) {
        const product = await prisma.product.findUnique({
            where: {
                sku,
            },
        })

        return product
    }

    async createProduct (data: Prisma.ProductCreateInput) {
        //console.log(data)
        const product = await prisma.product.create(  {data}  )
        return product

    }
}