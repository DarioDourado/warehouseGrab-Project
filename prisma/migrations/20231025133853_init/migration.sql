/*
  Warnings:

  - You are about to drop the column `product_id` on the `productCategory` table. All the data in the column will be lost.
  - You are about to drop the column `suppliers_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `taxes` table. All the data in the column will be lost.
  - Added the required column `tax_id` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taxNumber` to the `suppliers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "productCategory" DROP CONSTRAINT "productCategory_product_id_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_suppliers_id_fkey";

-- DropForeignKey
ALTER TABLE "taxes" DROP CONSTRAINT "taxes_productId_fkey";

-- AlterTable
ALTER TABLE "productCategory" DROP COLUMN "product_id",
ADD COLUMN     "productId" TEXT;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "suppliers_id",
ADD COLUMN     "tax_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "suppliers" ADD COLUMN     "taxNumber" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "taxes" DROP COLUMN "productId";

-- CreateTable
CREATE TABLE "storageLocation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "stockControlIn" TEXT NOT NULL,

    CONSTRAINT "storageLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stockControl" (
    "id" SERIAL NOT NULL,
    "idProduto" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "localIn" TEXT NOT NULL,
    "localOut" TEXT NOT NULL,

    CONSTRAINT "stockControl_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_tax_id_fkey" FOREIGN KEY ("tax_id") REFERENCES "taxes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productCategory" ADD CONSTRAINT "productCategory_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;
