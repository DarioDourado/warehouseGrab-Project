import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { SuppliersRepository } from "../supplier-repository";


// depois de termos um interface comum, podemos e devemos de "implementar" na nossa class.
// NOTA: os mesmos métodos isados em interface tem de ser usados
export class PrismaSuppliersRepository implements SuppliersRepository{

    async findSupplierByEmail(email: string) {
        const supplier = await prisma.supplier.findUnique({
            where: {
                email,
            },
        })

        return supplier
    }

    async createSupplier (data: Prisma.SupplierCreateInput) {
        const supplier = await prisma.supplier.create(  {data}  )
        return supplier
    }

    async getAllSuppliers() {
        const suppliers = await prisma.supplier.findMany();
        return suppliers;
    }
}