import { NextRequest, NextResponse } from 'next/server';

import { auth } from '@/auth';
import { db } from '@/lib/db';
import { FormatTitleString } from '@/lib/formats/format-title-string';
import { timeZoneFormatString } from '@/lib/formats/time-zone';

export async function GET(req: NextRequest) {
	const session = await auth();
	if (!session) {
		return NextResponse.json(
			{ data: null, message: 'Unautorized' },
			{ status: 409 }
		);
	}

	try {
		const surat = await db.pengantarSKCK.findMany();

		if (!surat) {
			return NextResponse.json(
				{ data: null, message: 'Pengantar SKCK not found' },
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{
				data: surat,
				message: 'Success',
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ data: null, message: 'Internal server error' },
			{ status: 500 }
		);
	}
}

export async function POST(req: NextRequest) {
	const session = await auth();
	if (!session) {
		return NextResponse.json(
			{ data: null, message: 'Unautorized' },
			{ status: 409 }
		);
	}

	try {
		const values = await req.json();

		const dataPerson = await db.penduduk.findUnique({
			where: {
				nik: values.pendudukId,
			},
		});

		if (!dataPerson)
			return NextResponse.json(
				{ data: null, message: 'Penduduk not found' },
				{ status: 404 }
			);

		const tanggalSurat = timeZoneFormatString(new Date());

		const data = {
			no_surat: atob(values.no_surat),
			nama_lengkap: dataPerson.nama,
			nik: atob(dataPerson.nik),
			no_kk: dataPerson.nokk ? atob(dataPerson.nokk) : '-',
			tempat_lahir: dataPerson.tempat_lahir ? dataPerson.tempat_lahir : '-',
			tanggal_lahir: dataPerson.tanggal_lahir
				? timeZoneFormatString(dataPerson.tanggal_lahir)
				: '-',
			jenis_kelamin: dataPerson.jenis_kelamin ? dataPerson.jenis_kelamin : '-',
			kewarganegaraan: dataPerson.kewarganegaraan,
			agama: dataPerson.agama ? dataPerson.agama : '-',
			pekerjaan: dataPerson.pekerjaan ? dataPerson.pekerjaan : '-',
			pendidikan: dataPerson.pendidikan_kk ? dataPerson.pendidikan_kk : '-',
			keperluan: values.keperluan,
			rt: dataPerson.rt,
			rw: dataPerson.rw,
			padukuhan: dataPerson.padukuhan
				? FormatTitleString(dataPerson.padukuhan)
				: '-',
			tanggal_surat: tanggalSurat,
			nama_lurah: 'ALDIYES PASKALIS BIRTA',
		};

		const postToDrive = await fetch(`${process.env.PENGANTAR_SKCK_URL}`, {
			method: 'POST',
			body: JSON.stringify(data),
		});

		const viewUrl = await postToDrive.text();

		const createPengantarSkck = await db.pengantarSKCK.create({
			data: {
				no_surat: values.no_surat,
				pendudukId: values.pendudukId,
				keperluan: values.keperluan,
				doc_url: viewUrl,
			},
		});

		return NextResponse.json(
			{ data: createPengantarSkck, message: 'Success' },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ data: null, message: 'Internal Server Error' },
			{ status: 500 }
		);
	}
}
