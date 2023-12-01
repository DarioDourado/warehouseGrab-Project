import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const productCategorieData = [
  "Camisa",
  "Saias",
  "Desporto",
  "Calçado",
  "Acessórios",
  "Calças",
]

/**
 * For each coffee name, create a Coffee record in the DB
 */
export async function seedProductCategory() {
  Promise.all(productCategorieData.map(n => prisma.productCategory.create({ data: { productCategory: n } })))
    .then(() => console.info('[SEED] Succussfully create coffee records'))
    .catch(e => console.error('[SEED] Failed to create coffee records', e))
}