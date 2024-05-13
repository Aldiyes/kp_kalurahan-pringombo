export default function VisiMisiPage() {
	return (
		<section className="p-6 grid h-full">
			<h1 className="text-sky-700 font-bold text-xl md:text-2xl">
				Visi dan Misi Kalurahan Pringomobo
			</h1>
			<div className="flex flex-col gap-6 p-4">
				<div className="flex flex-col items-center justify-center gap-2">
					<h1 className="font-bold text-xl">VISI</h1>
					<p className="text-center">
						Mewujudkan desa Pringombo yang sehat, cerdas, maju mandiri,
						bermartabat dan berbudaya.
					</p>
				</div>
				<div className="flex flex-col items-center justify-center gap-2">
					<h1 className="font-bold text-xl">MISI</h1>
					<ul className="flex flex-col items-start space-y-4">
						<li className="flex relative">
							<div className="h-2 w-2 absolute top-2 bg-black rounded-full" />
							<p className="ml-4 text-justify">
								Mewujudkan tata pemerintahan yang baik, demokratis dan
								bertanggungjawab sejalan dengan peningkatan profesionalisme dan
								kinerja aparatur desa kemudian
							</p>
						</li>
						<li className="flex relative">
							<div className="h-2 w-2 absolute top-2 bg-black rounded-full" />
							<p className="ml-4 text-justify">
								Mewujudkan kualitas sumber daya manusia yang sehat dan cerdas
								serta mampu mendukung eksistensi pembangunan desa
							</p>
						</li>
						<li className="flex relative">
							<div className="h-2 w-2 absolute top-2 bg-black rounded-full" />
							<p className="ml-4 text-justify">
								Mewujudkan perekonomian desa yang berbasis pada ekonomi
								kerakyatan dan potensi unggulan desa
							</p>
						</li>
						<li className="flex relative">
							<div className="h-2 w-2 top-2 absolute bg-black rounded-full" />
							<p className="ml-4 text-justify">
								Mewujudkan kualitas dan kuantitas prasarana dan sarana
								infrasutruktur desa yang menunjang pengembangan wilayah,
								penyediaan pelayanan sosial dasar dan pertumbuhan ekonomi desa,
								serta
							</p>
						</li>
						<li className="flex relative">
							<div className="h-2 w-2 absolute top-2 bg-black rounded-full" />
							<p className="ml-4 text-justify">
								Mewujudkan kehidupan masyarakat yang aman dan damai didukung
								oleh penegakkan supremasi hukum.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
