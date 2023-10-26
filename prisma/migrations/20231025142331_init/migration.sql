/*
  Warnings:

  - You are about to drop the column `productId` on the `productCategory` table. All the data in the column will be lost.
  - You are about to drop the column `idProduto` on the `stockControl` table. All the data in the column will be lost.
  - You are about to drop the column `localIn` on the `stockControl` table. All the data in the column will be lost.
  - You are about to drop the column `localOut` on the `stockControl` table. All the data in the column will be lost.
  - You are about to drop the column `stockControlIn` on the `storageLocation` table. All the data in the column will be lost.
  - Added the required column `category_id` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "productCategory" DROP CONSTRAINT "productCategory_productId_fkey";

-- AlterTable
ALTER TABLE "productCategory" DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "category_id" INTEGER NOT NULL,
ADD COLUMN     "productCategoryId" INTEGER,
ADD COLUMN     "stockControl_id" INTEGER;

-- AlterTable
ALTER TABLE "stockControl" DROP COLUMN "idProduto",
DROP COLUMN "localIn",
DROP COLUMN "localOut",
ADD COLUMN     "storageLocationIn_id" INTEGER;

-- AlterTable
ALTER TABLE "storageLocation" DROP COLUMN "stockControlIn";

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_productCategoryId_fkey" FOREIGN KEY ("productCategoryId") REFERENCES "productCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_stockControl_id_fkey" FOREIGN KEY ("stockControl_id") REFERENCES "stockControl"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stockControl" ADD CONSTRAINT "stockControl_storageLocationIn_id_fkey" FOREIGN KEY ("storageLocationIn_id") REFERENCES "storageLocation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
