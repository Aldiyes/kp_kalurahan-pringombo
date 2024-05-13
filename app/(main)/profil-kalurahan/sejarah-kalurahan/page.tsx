import Image from 'next/image';

export default function SejarahDesaPage() {
	return (
		<section className="p-6 h-full">
			<h1 className="text-sky-700 font-bold text-xl md:text-2xl">
				Sejarah Desa
			</h1>
			<div className="w-full over flex justify-center my-4">
				<Image
					src="https://desapringombo.gunungkidulkab.go.id/assets/files/artikel/sedang_1581971552Kantor%20Balai%20Desa.jpg"
					width={800}
					height={300}
					// fill
					className="w-auto h-auto object-contain"
					alt="sejarah desa"
				/>
			</div>
			<div className="flex flex-col justify-center gap-2 pt-2 pb-16 md:px-8">
				<p className="text-justify">
					Desa Pringombo adalah salah satu desa yang ada di Kecamatan Rongkop,
					Kabupaten Gunungkidul Daerah Istimewa Yogyakarta. Belum dikenal
					pemerintahan, pada saat itu baru berupa Kademangan yang dipimpin oleh
					Demang. Demang membawahi Bekel, dari Kademangan ke Bekel Sepuh Berada
					di Pakel, bernama Kademangan Pakel.
				</p>
				<p className="text-justify">
					<strong>Disekitar tahun 1911</strong> Pemerintahan Kasultanan
					Yogyakarta Hadiningrat membentuk pemerintahan kelurahan termasuk
					Kalurahan Pringombo ini.
				</p>
				<p className="text-justify">
					<strong>Pada Tahun 1911</strong> dipimpin Lurah pertama bernama
					KROMOHARJO, karena Lurahnya menempat diwilayah Pringombo maka nama
					Kalurahan diberinama KALURAHAN PRINGOMBO. dan struktur pemerintahannya
					sebagai berikut : CARIK, KAMITUWO, JOGO BOYO dan BAYAN. Itupun
					personilnya masih minim ada yang sudah menjadi CARIK juga merangkap
					menjadi KAMITUWO, seperti sesepuh dari Pakel SUWARTO SENTONO menjadi
					CARIK juga merangkap jadi KAMITUWO, kala itu belum mempunyai Kantor
					Kalurahan yang permanen, untuk mengadakan rembukan atau koordinasi
					semua pamong desa hanya cukup dirumah yang menjadi Pamong Desa, itupun
					tempatnya berpindah-pindah. Kepemimpinan KROMOHARJO membawahi 7
					Wilayah yang dipimpin BAYAN, 7 wilayah tersebut antara lain : (1).
					Pakel, (2). Sempu, (3). Ngembringan, (4). Plalar, (5). Pringombo, (6).
					Tirisan, (7). Kayangan.
				</p>
				<p className="text-justify">
					<strong>Pada Tahun 1945</strong> Lurah SUWARTO SENTONO dan Pamong
					lainya barulah bisa mendirikan sebuah Kantor Kalurahan Pringombo yang
					lokasinya wilayah Pakel sebagai Pusat Pemerintahan Kalurahan
					Pringombo.(sampai saat ini).
				</p>
			</div>
		</section>
	);
}
