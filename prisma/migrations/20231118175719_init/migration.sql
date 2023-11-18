/*
  Warnings:

  - The primary key for the `stockControl` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `storageLocation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `suppliers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `storageLocationIn_id` on table `stockControl` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "stockControl" DROP CONSTRAINT "stockControl_storageLocationIn_id_fkey";

-- DropForeignKey
ALTER TABLE "stockControl" DROP CONSTRAINT "stockControl_storageLocationOut_id_fkey";

-- AlterTable
ALTER TABLE "stockControl" DROP CONSTRAINT "stockControl_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "storageLocationIn_id" SET NOT NULL,
ALTER COLUMN "storageLocationIn_id" SET DATA TYPE TEXT,
ALTER COLUMN "storageLocationOut_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "stockControl_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "stockControl_id_seq";

-- AlterTable
ALTER TABLE "storageLocation" DROP CONSTRAINT "storageLocation_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "storageLocation_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "storageLocation_id_seq";

-- AlterTable
ALTER TABLE "suppliers" DROP CONSTRAINT "suppliers_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "suppliers_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "suppliers_id_seq";

-- AddForeignKey
ALTER TABLE "stockControl" ADD CONSTRAINT "stockControl_storageLocationIn_id_fkey" FOREIGN KEY ("storageLocationIn_id") REFERENCES "storageLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stockControl" ADD CONSTRAINT "stockControl_storageLocationOut_id_fkey" FOREIGN KEY ("storageLocationOut_id") REFERENCES "storageLocation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
