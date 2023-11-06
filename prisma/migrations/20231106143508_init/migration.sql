/*
  Warnings:

  - Changed the type of `taxNumber` on the `suppliers` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "suppliers" DROP COLUMN "taxNumber",
ADD COLUMN     "taxNumber" INTEGER NOT NULL;
