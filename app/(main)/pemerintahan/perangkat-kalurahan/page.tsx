import { DataCard } from '@/components/card/data-card';
import Link from 'next/link';

const JabatanDiKalurahan = [
	{
		id: '1',
		nama: 'nama1',
		jabatan: 'jabatan1',
	},
	{
		id: '2',
		nama: 'nama2',
		jabatan: 'jabatan2',
	},
	{
		id: '3',
		nama: 'nama3',
		jabatan: 'jabatan3',
	},
	{
		id: '4',
		nama: 'nama4',
		jabatan: 'jabatan4',
	},
	{
		id: '5',
		nama: 'nama5',
		jabatan: 'jabatan5',
	},
	{
		id: '6',
		nama: 'nama6',
		jabatan: 'jabatan6',
	},
	{
		id: '7',
		nama: 'nama7',
		jabatan: 'jabatan7',
	},
	{
		id: '8',
		nama: 'nama8',
		jabatan: 'jabatan8',
	},
	{
		id: '9',
		nama: 'nama9',
		jabatan: 'jabatan9',
	},
	{
		id: '10',
		nama: 'nama10',
		jabatan: 'jabatan10',
	},
];

export default function PerangkatKalurahanPage() {
	return (
		<section className="p-6 h-full">
			<h1 className="text-sky-700 font-bold text-xl md:text-2xl">
				Perangkat Kalurahan
			</h1>
			<div className="grid mt-4 pb-16 md:px-8 gap-4 grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">
				{JabatanDiKalurahan.map((data) => (
					<Link href={`/pemerintahan/perangkat-kalurahan/${data.id}`}>
						<DataCard
							key={data.id}
							image="/assets/logo.svg"
							nama={data.nama}
							jabatan={data.jabatan}
						/>
					</Link>
				))}
			</div>
		</section>
	);
}
