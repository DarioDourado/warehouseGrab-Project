/*
  Warnings:

  - You are about to drop the column `supplier` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "supplier";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "role";
