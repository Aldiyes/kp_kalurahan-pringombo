-- CreateTable
CREATE TABLE "PengantarSKCK" (
    "no_surat" TEXT NOT NULL,
    "pendudukId" TEXT NOT NULL,
    "keperluan" TEXT,
    "no_polisi" TEXT,
    "no_reg_pok" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PengantarSKCK_pkey" PRIMARY KEY ("no_surat")
);

-- CreateIndex
CREATE UNIQUE INDEX "PengantarSKCK_pendudukId_key" ON "PengantarSKCK"("pendudukId");

-- AddForeignKey
ALTER TABLE "PengantarSKCK" ADD CONSTRAINT "PengantarSKCK_pendudukId_fkey" FOREIGN KEY ("pendudukId") REFERENCES "Penduduk"("nik") ON DELETE RESTRICT ON UPDATE CASCADE;
