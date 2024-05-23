/*
  Warnings:

  - You are about to drop the column `di_kapenawon` on the `SuketUsaha` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SuketUsaha" DROP COLUMN "di_kapenawon",
ADD COLUMN     "di_kapanewon" TEXT;
