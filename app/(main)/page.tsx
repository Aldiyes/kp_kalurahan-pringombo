import { DataCard } from '@/components/card/data-card';

const JabatanDiKalurahan = [
	{
		id: 1,
		nama: 'nama1',
		jabatan: 'jabatan1',
	},
	{
		id: 2,
		nama: 'nama2',
		jabatan: 'jabatan2',
	},
	{
		id: 3,
		nama: 'nama3',
		jabatan: 'jabatan3',
	},
	{
		id: 4,
		nama: 'nama4',
		jabatan: 'jabatan4',
	},
	{
		id: 5,
		nama: 'nama5',
		jabatan: 'jabatan5',
	},
	{
		id: 6,
		nama: 'nama6',
		jabatan: 'jabatan6',
	},
	{
		id: 7,
		nama: 'nama7',
		jabatan: 'jabatan7',
	},
	{
		id: 8,
		nama: 'nama8',
		jabatan: 'jabatan8',
	},
	{
		id: 9,
		nama: 'nama9',
		jabatan: 'jabatan9',
	},
	{
		id: 10,
		nama: 'nama10',
		jabatan: 'jabatan10',
	},
];

export default async function Dashboard() {
	return (
		<section className="p-6 grid gird-cols-1 md:grid-cols-2 h-full">
			<div className="flex flex-col gap-6 p-4">
				<div className="flex flex-col items-center justify-center gap-2">
					<h1 className="font-semibold text-4xl">VISI</h1>
					<p className="text-center">
						Mewujudkan desa Pringombo yang sehat, cerdas, maju mandiri,
						bermartabat dan berbudaya.
					</p>
				</div>
				<div className="flex flex-col items-center justify-center gap-2">
					<h1 className="font-semibold text-4xl">MISI</h1>
					<ul className="flex flex-col items-center space-y-4">
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
			<div className="flex flex-col gap-6 p-4 md:overflow-auto">
				<h1 className="font-semibold text-4xl text-center">Perangkat Desa</h1>
				<div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">
					{JabatanDiKalurahan.map((data) => (
						<DataCard
							key={data.id}
							image="./assets/logo.svg"
							nama={data.nama}
							jabatan={data.jabatan}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
