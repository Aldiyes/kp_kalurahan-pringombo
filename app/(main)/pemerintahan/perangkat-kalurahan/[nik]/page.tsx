import { getPendudukById } from '@/actions/penduduk/penduduk-actions';
import { DataCard } from '@/components/card/data-card';
import { FormatTitleString } from '@/lib/formats/format-title-string';
import {
	timeZoneFormatDate,
	timeZoneFormatString,
} from '@/lib/formats/time-zone';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	params: {
		nik: string;
	};
};

export default async function DetailPegawaiPage({ params }: Props) {
	const pegawai = await getPendudukById(params.nik);
	const dataPegawai = pegawai.data;
	return (
		<section className="p-6 h-full">
			<h1 className="text-sky-700 font-bold text-xl md:text-2xl mb-4">
				{dataPegawai.nama}
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
							<p className="col-span-2">: {dataPegawai.nama}</p>
						</div>
						<div className="grid grid-cols-3 space-x-2 border-b">
							<h3 className="col-span-1">
								<strong>TTL</strong>
							</h3>
							<p className="col-span-2">
								: {FormatTitleString(dataPegawai.tempat_lahir)},{' '}
								{timeZoneFormatString(dataPegawai.tanggal_lahir)}
							</p>
						</div>
						<div className="grid grid-cols-3 space-x-2 border-b">
							<h3 className="col-span-1">
								<strong>Alamat</strong>
							</h3>
							<p className="col-span-2">
								: {FormatTitleString(dataPegawai.padukuhan)}, RT{' '}
								{dataPegawai.rt}, RW {dataPegawai.rw}
							</p>
						</div>
						<div className="grid grid-cols-3 space-x-2 border-b">
							<h3 className="col-span-1">
								<strong>Jabatan</strong>
							</h3>
							<p className="col-span-2">
								: {FormatTitleString(dataPegawai.jabatan_di_kalurahan)}
							</p>
						</div>
						<div className="grid grid-cols-3 space-x-2 border-b">
							<h3 className="col-span-1">
								<strong>No. Hp</strong>
							</h3>
							<p className="col-span-2">: -</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
