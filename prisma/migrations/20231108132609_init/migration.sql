/*
  Warnings:

  - A unique constraint covering the columns `[taxValue]` on the table `taxes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "taxes_taxValue_key" ON "taxes"("taxValue");
