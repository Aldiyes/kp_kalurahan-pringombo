-- CreateTable
CREATE TABLE "SuketUsaha" (
    "no_surat" TEXT NOT NULL,
    "usaha_sampingan" TEXT,
    "di_kalurahan" TEXT,
    "di_kapenawon" TEXT,
    "di_kabupaten" TEXT,
    "doc_url" TEXT,
    "pendudukId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SuketUsaha_pkey" PRIMARY KEY ("no_surat")
);

-- CreateIndex
CREATE UNIQUE INDEX "SuketUsaha_pendudukId_key" ON "SuketUsaha"("pendudukId");

-- AddForeignKey
ALTER TABLE "SuketUsaha" ADD CONSTRAINT "SuketUsaha_pendudukId_fkey" FOREIGN KEY ("pendudukId") REFERENCES "Penduduk"("nik") ON DELETE RESTRICT ON UPDATE CASCADE;
