import { PrismaProductCategoryRepository } from "@/repositories/prisma/prisma-productCategory.repository"
import { ProductCategoryRegisterUseCase } from "../productCategory-use-case"


export function makeGetProductsCategorieUseCase() {
    const productsCategoryWithSameName =  new PrismaProductCategoryRepository ()
    const productCategoryRegister = new ProductCategoryRegisterUseCase(productsCategoryWithSameName)
  
    return productCategoryRegister
  }
  