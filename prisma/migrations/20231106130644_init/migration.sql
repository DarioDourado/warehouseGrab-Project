/*
  Warnings:

  - You are about to drop the column `userInfo_Id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `usersInfo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `addressLocal` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressLocalCode` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressLocalZone` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `colabStatus` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_userInfo_Id_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "userInfo_Id",
ADD COLUMN     "addressLocal" TEXT NOT NULL,
ADD COLUMN     "addressLocalCode" TEXT NOT NULL,
ADD COLUMN     "addressLocalZone" TEXT NOT NULL,
ADD COLUMN     "colabStatus" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "street" TEXT NOT NULL;

-- DropTable
DROP TABLE "usersInfo";
