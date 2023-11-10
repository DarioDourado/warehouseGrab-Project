/*
  Warnings:

  - The primary key for the `productCategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `taxes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `category_id` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_category_id_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_tax_id_fkey";

-- AlterTable
ALTER TABLE "productCategory" DROP CONSTRAINT "productCategory_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "productCategory_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "productCategory_id_seq";

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "tax_id" SET DATA TYPE TEXT,
ALTER COLUMN "category_id" SET NOT NULL,
ALTER COLUMN "category_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "taxes" DROP CONSTRAINT "taxes_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "taxValue" DROP DEFAULT,
ALTER COLUMN "taxValue" SET DATA TYPE TEXT,
ADD CONSTRAINT "taxes_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "taxes_id_seq";

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_tax_id_fkey" FOREIGN KEY ("tax_id") REFERENCES "taxes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "productCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
