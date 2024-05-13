-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Penduduk" (
    "nik" TEXT NOT NULL,
    "nokk" TEXT,
    "nama" TEXT NOT NULL,
    "alias" TEXT,
    "agama" TEXT,
    "jenis_kelamin" TEXT,
    "kewarganegaraan" TEXT NOT NULL DEFAULT 'Indonesia',
    "padukuhan" TEXT,
    "rt" INTEGER,
    "rw" INTEGER,
    "pendidikan_kk" TEXT,
    "pendidikan_sdt" TEXT,
    "pekerjaan" TEXT,
    "tanggal_lahir" TIMESTAMP(3),
    "tempat_lahir" TEXT,
    "umur" INTEGER,
    "status_kawin" TEXT,
    "shdk" TEXT,
    "gol_darah" TEXT,
    "nama_ayah" TEXT,
    "nama_ibu" TEXT,
    "jabatan_di_kalurahan" TEXT NOT NULL DEFAULT 'penduduk',
    "status_duk" TEXT,

    CONSTRAINT "Penduduk_pkey" PRIMARY KEY ("nik")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
