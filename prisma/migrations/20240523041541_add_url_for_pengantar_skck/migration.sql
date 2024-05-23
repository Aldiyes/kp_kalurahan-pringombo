/*
  Warnings:

  - You are about to drop the column `no_polisi` on the `PengantarSKCK` table. All the data in the column will be lost.
  - You are about to drop the column `no_reg_pok` on the `PengantarSKCK` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PengantarSKCK" DROP COLUMN "no_polisi",
DROP COLUMN "no_reg_pok",
ADD COLUMN     "doc_url" TEXT;
