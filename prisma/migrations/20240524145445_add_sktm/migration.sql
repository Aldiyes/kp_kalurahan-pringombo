-- CreateTable
CREATE TABLE "SKTM" (
    "no_surat" TEXT NOT NULL,
    "nik_ortu" TEXT NOT NULL,
    "nik_anak" TEXT NOT NULL,
    "nama_instansi" TEXT,
    "fakultas_prodi" TEXT,
    "kelas_semester" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SKTM_pkey" PRIMARY KEY ("no_surat")
);

-- AddForeignKey
ALTER TABLE "SKTM" ADD CONSTRAINT "SKTM_nik_ortu_fkey" FOREIGN KEY ("nik_ortu") REFERENCES "Penduduk"("nik") ON DELETE RESTRICT ON UPDATE CASCADE;
