/*
  Warnings:

  - A unique constraint covering the columns `[storageLocationIn_id]` on the table `stockControl` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[storageLocationOut_id]` on the table `stockControl` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `storageLocation` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "stockControl" ADD COLUMN     "storageLocationOut_id" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "stockControl_storageLocationIn_id_key" ON "stockControl"("storageLocationIn_id");

-- CreateIndex
CREATE UNIQUE INDEX "stockControl_storageLocationOut_id_key" ON "stockControl"("storageLocationOut_id");

-- CreateIndex
CREATE UNIQUE INDEX "storageLocation_name_key" ON "storageLocation"("name");

-- AddForeignKey
ALTER TABLE "stockControl" ADD CONSTRAINT "stockControl_storageLocationOut_id_fkey" FOREIGN KEY ("storageLocationOut_id") REFERENCES "storageLocation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
