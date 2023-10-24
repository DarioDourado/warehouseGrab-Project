/*
  Warnings:

  - Added the required column `address` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressLocalCode` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressLocalLocal` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressLocalZones` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `colabStatus` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "PackOrUnit" AS ENUM ('PACK', 'UNIT');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "addressLocalCode" TEXT NOT NULL,
ADD COLUMN     "addressLocalLocal" TEXT NOT NULL,
ADD COLUMN     "addressLocalZones" TEXT NOT NULL,
ADD COLUMN     "colabStatus" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "companyInfo" (
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "addressLocalCode" TEXT NOT NULL,
    "addressLocalZones" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "upc" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "photo" TEXT NOT NULL,
    "tax" INTEGER NOT NULL,
    "packOrUn" "PackOrUnit" NOT NULL,
    "packUnQt" INTEGER NOT NULL,
    "supplier" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "stockRecQt" INTEGER NOT NULL,
    "alert1" INTEGER NOT NULL,
    "alert2" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "companyInfo_email_key" ON "companyInfo"("email");
