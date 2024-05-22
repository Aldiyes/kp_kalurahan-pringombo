import { DataCard } from '@/components/card/data-card';
import Image from 'next/image';
import Link from 'next/link';

const JabatanDiKalurahan = {
	id: '1',
	nama: 'nama1',
	jabatan: 'jabatan1',
};

export default function DetailPegawaiPage() {
	return (
		<section className="p-6 h-full">
			<h1 className="text-sky-700 font-bold text-xl md:text-2xl mb-4">
				{JabatanDiKalurahan.nama}
			</h1>
			<div className="grid md:grid-cols-3 gap-4">
				<div className="col-span-1 flex justify-center items-center">
					<div className="flex items-center justify-center bg-gray-200 w-72 h-96 rounded-lg shadow-md">
						<Image src="/assets/logo.svg" alt="foto" width={200} height={300} />
					</div>
				</div>
				<div className="col-span-2 flex flex-col p-4 md:justify-center md:space-y-4">
					<div className=" w-full border rounded-md p-2">
						<div className="grid grid-cols-3 space-x-2 border-b">
							<h3 className="col-span-1">
								<strong>Nama</strong>
							</h3>
							<p className="col-span-2">: {JabatanDiKalurahan.nama}</p>
						</div>
						<div className="grid grid-cols-3 space-x-2 border-b">
							<h3 className="col-span-1">
								<strong>Jabatan</strong>
							</h3>
							<p className="col-span-2">: {JabatanDiKalurahan.jabatan}</p>
						</div>
						<div className="grid grid-cols-3 space-x-2 border-b">
							<h3 className="col-span-1">
								<strong>status</strong>
							</h3>
							<p className="col-span-2">: Aktif</p>
						</div>
						<div className="grid grid-cols-3 space-x-2">
							<h3 className="col-span-1">
								<strong>Periode</strong>
							</h3>
							<p className="col-span-2">: 2021-2026</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
