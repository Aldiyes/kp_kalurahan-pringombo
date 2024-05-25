-- CreateTable
CREATE TABLE "IzinKeramaian" (
    "no_surat" TEXT NOT NULL,
    "pendudukId" TEXT NOT NULL,
    "jenis_keramaian" TEXT,
    "keperluan_keramaian" TEXT,
    "tempat_keramaian" TEXT,
    "tanggal_keramaian" TIMESTAMP(3),
    "waktu_keramaian" TEXT,
    "lama_keramaian" TEXT,
    "doc_id" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IzinKeramaian_pkey" PRIMARY KEY ("no_surat")
);

-- CreateIndex
CREATE UNIQUE INDEX "IzinKeramaian_pendudukId_key" ON "IzinKeramaian"("pendudukId");

-- AddForeignKey
ALTER TABLE "IzinKeramaian" ADD CONSTRAINT "IzinKeramaian_pendudukId_fkey" FOREIGN KEY ("pendudukId") REFERENCES "Penduduk"("nik") ON DELETE RESTRICT ON UPDATE CASCADE;
