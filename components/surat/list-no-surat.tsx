import Link from 'next/link';
import { BsFileEarmarkPdf } from 'react-icons/bs';

import { FormatTitleString } from '@/lib/formats/format-title-string';

import { getPendudukById } from '@/actions/penduduk/penduduk-actions';
import { getSuratByNoSurat } from '@/actions/surat/surat';

import { Card } from '@/components/ui/card';

type Props = {
	nik: string;
	no_surat: string;
	nama_surat: string;
};
async function ListNoSurat({ nik, no_surat, nama_surat }: Props) {
	const penduduk = await getPendudukById(nik);
	const dataPenduduk = penduduk.data;
	const suratByNoSurat = await getSuratByNoSurat(no_surat, nama_surat);
	const surat = suratByNoSurat.data;

	return (
		<Link href={`${surat.doc_url}`} target="_blank">
			<Card className="w-fit p-2 cursor-pointer hover:bg-sky-200/20">
				<div className="w-32 inline-block flex-col items-center justify-center break-words">
					<div className="w-full flex items-center justify-center">
						<BsFileEarmarkPdf className="text-red-600 h-20 w-20" />
					</div>
					<div>
						<h1 className="font-[500] mt-2 text-center truncate">
							{atob(no_surat)}
						</h1>
						<p className="line-clamp-1 text-xs text-center">
							{dataPenduduk?.nama ? FormatTitleString(dataPenduduk.nama) : '-'}
						</p>
					</div>
				</div>
			</Card>
		</Link>
	);
}

export default ListNoSurat;
