import { NextRequest, NextResponse } from 'next/server';

import { auth } from '@/auth';
import { db } from '@/lib/db';
import { countAgeByDate } from '@/lib/formats/count-age';
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
		const surat = await db.suketUsaha.findMany();

		if (!surat) {
			return NextResponse.json(
				{ data: null, message: 'Surat Keterangan Usaha not found' },
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
			nama_panggilan: dataPerson.alias ? dataPerson.alias : '-',
			tempat_lahir: dataPerson.tempat_lahir ? dataPerson.tempat_lahir : '-',
			tanggal_lahir: dataPerson.tanggal_lahir
				? timeZoneFormatString(dataPerson.tanggal_lahir)
				: '-',
			usia: dataPerson.tanggal_lahir
				? countAgeByDate(dataPerson.tanggal_lahir)
				: '-',
			rt: dataPerson.rt,
			rw: dataPerson.rw,
			padukuhan: dataPerson.padukuhan
				? FormatTitleString(dataPerson.padukuhan)
				: '-',
			usaha_pokok: dataPerson.pekerjaan,
			usaha_sampingan: values.usaha_sampingan,
			di_kalurahan: values.di_kalurahan,
			di_kapanewon: values.di_kapanewon,
			di_kabupaten: values.di_kabupaten,
			tanggal_surat: tanggalSurat,
			nama_lurah: 'ALDIYES PASKALIS BIRTA',
		};

		console.log('SUKET USAHA URL', process.env.SUKET_USAHA_URL);
		const postToDrive = await fetch(
			`https://script.google.com/macros/s/AKfycbyVRk2yqeLrtyhyPL7qtpGyxjbMx_AJZWsKmUp2OX2QaNyzJ9yLcwcGRZwjVWL-ZTUMXQ/exec`,
			{
				method: 'POST',
				body: JSON.stringify(data),
			}
		);

		const viewUrl = await postToDrive.text();
		const createSuketUsaha = await db.suketUsaha.create({
			data: {
				// pendudukId: values.nik,
				doc_url: viewUrl,
				...values,
			},
		});

		return NextResponse.json(
			{ data: createSuketUsaha, message: 'Success' },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ data: null, message: 'Internal Server Error' },
			{ status: 500 }
		);
	}
}
