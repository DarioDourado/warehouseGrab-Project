import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { ProductsCategoryRepository } from "../productCategory-repository";



export class PrismaProductCategoryRepository implements ProductsCategoryRepository{

    async findProductCategoryByName(productCategory: string) {
        const productCategoryName = await prisma.productCategory.findUnique({
            where:{
                productCategory
            }
        })
        console.log(' PrismaTaxesRepository, a seguir ao taxValueNumber')
        return productCategoryName
    }

    async createProductCategory (data: Prisma.ProductCategoryCreateInput) {
        const productCategory = await prisma.productCategory.create( {data} )

        return productCategory

    }

    async getAllProductsCategories() {
        const getAllProductsCategorie = await prisma.productCategory.findMany();
        return getAllProductsCategorie;
    }
    
}