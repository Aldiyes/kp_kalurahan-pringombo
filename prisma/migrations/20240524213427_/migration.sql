/*
  Warnings:

  - You are about to drop the column `doc_url` on the `PengantarSKCK` table. All the data in the column will be lost.
  - You are about to drop the column `doc_url` on the `SuketUsaha` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PengantarSKCK" DROP COLUMN "doc_url",
ADD COLUMN     "doc_id" TEXT;

-- AlterTable
ALTER TABLE "SuketUsaha" DROP COLUMN "doc_url",
ADD COLUMN     "doc_id" TEXT;
