import Image from 'next/image';

import { getPendudukByJabatan } from '@/actions/penduduk/penduduk-actions';

import {
	FormatCamelCase,
	FormatStripString,
} from '@/lib/formats/format-string';
import { timeZoneFormatString } from '@/lib/formats/time-zone';

type Props = {
	params: {
		jabatan_di_kalurahan: string;
	};
};

export default async function DetailPegawaiPage({ params }: Props) {
	const dataPegawai = await getPendudukByJabatan(params.jabatan_di_kalurahan);

	if (!dataPegawai) return null;

	return (
		<section className="h-full">
			<div className="grid md:grid-cols-3 gap-4">
				<div className="col-span-1 flex flex-col justify-center items-center">
					<h1 className="text-sky-700 text-center font-bold text-xl md:text-2xl mb-4">
						{dataPegawai.nama}
					</h1>
					<div className="flex items-center justify-center bg-gray-200 w-72 h-96 rounded-lg shadow-md">
						<Image src="/assets/logo.svg" alt="foto" width={200} height={300} />
					</div>
				</div>
				<div className="md:col-span-2 md:pt-12 w-full p-2">
					<div className="grid grid-cols-4 border md:p-3 md:px-4 rounded-t-md px-2">
						<div className="flex justify-between">
							<h3>
								<strong>Nama</strong>
							</h3>
							<p>:</p>
						</div>
						<p className="col-span-3 pl-1">{dataPegawai?.nama}</p>
					</div>
					<div className="grid grid-cols-4 border md:p-3 md:px-4 px-2">
						<div className="flex justify-between">
							<h3>
								<strong>TTL</strong>
							</h3>
							<p>:</p>
						</div>
						<p className="col-span-3 pl-1">
							{dataPegawai.tempat_lahir &&
								FormatCamelCase(dataPegawai.tempat_lahir)}
							,{' '}
							{dataPegawai.tanggal_lahir &&
								timeZoneFormatString(dataPegawai?.tanggal_lahir)}
						</p>
					</div>
					<div className="grid grid-cols-4 border md:p-3 md:px-4 px-2">
						<div className="flex justify-between">
							<h3>
								<strong>Alamat</strong>
							</h3>
							<p>:</p>
						</div>
						<p className="col-span-3 pl-1">
							{dataPegawai.padukuhan && FormatCamelCase(dataPegawai.padukuhan)},
							RT {dataPegawai.rt}, RW {dataPegawai.rw}
						</p>
					</div>
					<div className="grid grid-cols-4 border md:p-3 md:px-4 px-2">
						<div className="flex justify-between">
							<h3>
								<strong>Jabatan</strong>
							</h3>
							<p>:</p>
						</div>
						<p className="col-span-3 pl-1">
							{FormatStripString(dataPegawai.jabatan_di_kalurahan)}
						</p>
					</div>
					<div className="grid grid-cols-4 border md:p-3 md:px-4 rounded-b-md px-2">
						<div className="flex justify-between">
							<h3>
								<strong>No. Hp</strong>
							</h3>
							<p>:</p>
						</div>
						<p className="col-span-3 pl-1">-</p>
					</div>
				</div>
			</div>
		</section>
	);
}
