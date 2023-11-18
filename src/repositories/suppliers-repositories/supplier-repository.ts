import { Prisma, Supplier } from "@prisma/client";


export interface SuppliersRepository {
    findSupplierByEmail(email: string): Promise<Supplier | null>
    createSupplier (data: Prisma.SupplierCreateInput): Promise<Supplier>
}