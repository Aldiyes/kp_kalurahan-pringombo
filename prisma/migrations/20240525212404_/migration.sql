/*
  Warnings:

  - You are about to drop the column `tanggal_keramaian` on the `IzinKeramaian` table. All the data in the column will be lost.
  - The `waktu_keramaian` column on the `IzinKeramaian` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropIndex
DROP INDEX "IzinKeramaian_pendudukId_key";

-- AlterTable
ALTER TABLE "IzinKeramaian" DROP COLUMN "tanggal_keramaian",
DROP COLUMN "waktu_keramaian",
ADD COLUMN     "waktu_keramaian" TIMESTAMP(3);
