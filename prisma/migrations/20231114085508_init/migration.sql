/*
  Warnings:

  - You are about to drop the column `stockControl_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `productCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_category_id_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_stockControl_id_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "stockControl_id";

-- DropTable
DROP TABLE "productCategory";

-- CreateTable
CREATE TABLE "product_categories" (
    "id" TEXT NOT NULL,
    "productCategory" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "product_categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_categories_productCategory_key" ON "product_categories"("productCategory");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "product_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
