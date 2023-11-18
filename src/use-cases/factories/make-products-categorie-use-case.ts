import { PrismaProductCategoryRepository } from "@/repositories/prisma/productCategory/prisma-productCategory.repository"
import { ProductCategoryRegisterUseCase } from "../products-categories-use-cases/productCategory-use-case"



export function makeGetProductsCategorieUseCase() {
    const productsCategoryWithSameName =  new PrismaProductCategoryRepository ()
    const productCategoryRegister = new ProductCategoryRegisterUseCase(productsCategoryWithSameName)
  
    return productCategoryRegister
  }
  