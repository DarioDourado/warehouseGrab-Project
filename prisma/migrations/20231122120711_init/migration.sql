/*
  Warnings:

  - You are about to drop the `UserTeste` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productName` to the `stockControl` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productSKU` to the `stockControl` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productUPC` to the `stockControl` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "stockControl" ADD COLUMN     "productId" TEXT,
ADD COLUMN     "productName" TEXT NOT NULL,
ADD COLUMN     "productSKU" TEXT NOT NULL,
ADD COLUMN     "productUPC" TEXT NOT NULL;

-- DropTable
DROP TABLE "UserTeste";

-- AddForeignKey
ALTER TABLE "stockControl" ADD CONSTRAINT "stockControl_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;
