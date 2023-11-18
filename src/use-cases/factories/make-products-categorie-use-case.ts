import { PrismaProductCategoryRepository } from "@/repositories/prisma/prisma-product-category-repository"
import { ProductCategoryRegisterUseCase } from "../product-category-use-case"


export function makeGetProductsCategorieUseCase() {
    const productsCategoryWithSameName =  new PrismaProductCategoryRepository ()
    const productCategoryRegister = new ProductCategoryRegisterUseCase(productsCategoryWithSameName)
  
    return productCategoryRegister
  }
  