/*
  Warnings:

  - You are about to drop the column `productId` on the `stockControl` table. All the data in the column will be lost.
  - You are about to drop the column `productName` on the `stockControl` table. All the data in the column will be lost.
  - You are about to drop the column `productSKU` on the `stockControl` table. All the data in the column will be lost.
  - You are about to drop the column `storageLocationIn_id` on the `stockControl` table. All the data in the column will be lost.
  - You are about to drop the column `storageLocationOut_id` on the `stockControl` table. All the data in the column will be lost.
  - Added the required column `storageLocationId` to the `stockControl` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "stockControl" DROP CONSTRAINT "stockControl_productId_fkey";

-- DropForeignKey
ALTER TABLE "stockControl" DROP CONSTRAINT "stockControl_storageLocationIn_id_fkey";

-- DropForeignKey
ALTER TABLE "stockControl" DROP CONSTRAINT "stockControl_storageLocationOut_id_fkey";

-- DropIndex
DROP INDEX "stockControl_storageLocationIn_id_key";

-- DropIndex
DROP INDEX "stockControl_storageLocationOut_id_key";

-- AlterTable
ALTER TABLE "stockControl" DROP COLUMN "productId",
DROP COLUMN "productName",
DROP COLUMN "productSKU",
DROP COLUMN "storageLocationIn_id",
DROP COLUMN "storageLocationOut_id",
ADD COLUMN     "isOut" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "storageLocationId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "stockControl" ADD CONSTRAINT "stockControl_storageLocationId_fkey" FOREIGN KEY ("storageLocationId") REFERENCES "storageLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
