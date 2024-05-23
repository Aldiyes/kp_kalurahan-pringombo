import { getAllPengantarSkck } from '@/actions/surat/pengantar-skck';

import ListNoSurat from '@/components/surat/list-no-surat';

async function PengantarSkckPage() {
	const surat = await getAllPengantarSkck();
	const dataSurat = surat.data;
	return (
		<div className="flex flex-wrap gap-2">
			{dataSurat.length === 0 && (
				<h1 className="w-full text-xl font-[500] text-center">
					Tidak ada surat
				</h1>
			)}
			{dataSurat?.map((surat: any) => (
				<ListNoSurat
					key={surat.no_surat}
					nik={surat.pendudukId}
					no_surat={surat.no_surat}
				/>
			))}
		</div>
	);
}

export default PengantarSkckPage;
