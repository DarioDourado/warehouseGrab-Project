/*
  Warnings:

  - You are about to drop the column `addressLocal` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `addressLocalCode` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `addressLocalZone` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `colabStatus` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `street` on the `users` table. All the data in the column will be lost.
  - Added the required column `userInfo_Id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "addressLocal",
DROP COLUMN "addressLocalCode",
DROP COLUMN "addressLocalZone",
DROP COLUMN "colabStatus",
DROP COLUMN "phone",
DROP COLUMN "street",
ADD COLUMN     "userInfo_Id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "usersInfo" (
    "id" TEXT NOT NULL,
    "colabStatus" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "addressLocalCode" TEXT NOT NULL,
    "addressLocalZone" TEXT NOT NULL,
    "addressLocal" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "usersInfo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_userInfo_Id_fkey" FOREIGN KEY ("userInfo_Id") REFERENCES "usersInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
