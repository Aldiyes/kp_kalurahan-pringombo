import { DataCard } from '@/components/card/data-card';
import Link from 'next/link';

const JabatanDiKalurahan = [
	{
		id: '1',
		nama: 'Ermina Kristina Susanti',
		jabatan: 'Lurah',
	},
	{
		id: '2',
		nama: 'Sidik Cahyono Lipuro',
		jabatan: 'Carik',
	},
	{
		id: '3',
		nama: 'Sutrisna',
		jabatan: 'Jagabaya',
	},
	{
		id: '4',
		nama: 'Narno',
		jabatan: 'Ulu Ulu',
	},
	{
		id: '5',
		nama: 'Suprabono',
		jabatan: 'Kamitua',
	},
	{
		id: '6',
		nama: 'Harwanto',
		jabatan: 'Kaur Tata Laksana',
	},
	{
		id: '7',
		nama: 'Sukarno',
		jabatan: 'Kaur Danarta',
	},
	{
		id: '8',
		nama: 'Surawan',
		jabatan: 'Kaur Pangripto',
	},
	{
		id: '9',
		nama: 'Sumarno',
		jabatan: 'Dukuh Tirisan A',
	},
	{
		id: '10',
		nama: 'Sukino',
		jabatan: 'Dukuh Tirisan B',
	},
	{
		id: '11',
		nama: 'Wiwik Pujianti',
		jabatan: 'Dukuh Pringombo A',
	},
	{
		id: '12',
		nama: 'Supat',
		jabatan: 'Dukuh Pringombo B',
	},
	{
		id: '13',
		nama: 'Warsiyanta',
		jabatan: 'Dukuh Pringombo C',
	},
	{
		id: '14',
		nama: 'Bayu Qomarrudin',
		jabatan: 'Dukuh Kayangan',
	},
	{
		id: '15',
		nama: 'Suryana Adi Saputra',
		jabatan: 'Dukuh Pakel',
	},
	{
		id: '16',
		nama: 'Supina',
		jabatan: 'Dukuh Plalar',
	},
	{
		id: '17',
		nama: 'Eko Nuriyanto',
		jabatan: 'Dukuh Sempu',
	},
	{
		id: '18',
		nama: 'Subarna',
		jabatan: 'Dukuh Ngembringan',
	},
	{
		id: '19',
		nama: 'Wardiyanta',
		jabatan: 'Staf Perangkat Desa',
	},
	{
		id: '20',
		nama: 'Sutini Triatmaja',
		jabatan: 'Staf Perangkat Desa',
	},
	{
		id: '21',
		nama: 'Sujarna',
		jabatan: 'Staf Perangkat Desa',
	},
];

export default function PerangkatKalurahanPage() {
	return (
		<section className="p-6 h-full">
			<h1 className="text-sky-700 font-bold text-xl md:text-2xl">
				Perangkat Kalurahan
			</h1>
			<div className="grid mt-4 pb-16 md:px-8 gap-4 grid-cols-[repeat(auto-fill,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(230px,1fr))]">
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
