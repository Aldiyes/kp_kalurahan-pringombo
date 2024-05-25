-- CreateTable
CREATE TABLE "SuketKematian" (
    "no_surat" TEXT NOT NULL,
    "pendudukId" TEXT NOT NULL,
    "lokasi_meninggal" TEXT,
    "tanggal_kematian" TIMESTAMP(3),
    "anak_ke" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SuketKematian_pkey" PRIMARY KEY ("no_surat")
);

-- CreateIndex
CREATE UNIQUE INDEX "SuketKematian_pendudukId_key" ON "SuketKematian"("pendudukId");

-- AddForeignKey
ALTER TABLE "SuketKematian" ADD CONSTRAINT "SuketKematian_pendudukId_fkey" FOREIGN KEY ("pendudukId") REFERENCES "Penduduk"("nik") ON DELETE RESTRICT ON UPDATE CASCADE;
