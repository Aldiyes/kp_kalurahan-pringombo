'use server';

import { auth } from '@/auth';
import { db } from '@/lib/db';
import { revalidateTag } from 'next/cache';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export const getAllPenduduk = async () => {
	const cookie = await headers().get('Cookie');
	const headerList = new Headers();

	if (cookie) {
		headerList.append('Cookie', cookie);
	}
	const res = await fetch(`${process.env.NEXT_APP_DOMAIN}/api/penduduk`, {
		cache: 'no-store',
		next: {
			tags: ['penduduk', 'edit-penduduk'],
		},
		headers: headerList,
	});

	if (!res.ok) {
		console.log(
			`Error with status code: ${res.status},  message: ${res.statusText}`
		);
	}
	return res.json();
};

export const getPendudukById = async (nik: string) => {
	const cookie = await headers().get('Cookie');
	const headerList = new Headers();

	if (cookie) {
		headerList.append('Cookie', cookie);
	}
	const res = await fetch(
		`${process.env.NEXT_APP_DOMAIN}/api/penduduk/${nik}`,
		{
			cache: 'no-store',
			next: {
				tags: ['penduduk', 'edit-penduduk'],
			},
			headers: headerList,
		}
	);
	if (!res.ok) {
		console.log(`Error with status code: ${res.status}`);
	}

	return res.json();
};

export const getPendudukByIdAndName = async (nokk: string, name: string) => {
	const session = await auth();
	if (!session) {
		return null;
	}

	const findPerson = await db.penduduk.findFirst({
		where: {
			nokk: nokk,
			nama: name,
		},
	});

	if (!findPerson) return null;

	return findPerson;
};

export const deletePersonByNik = async (nik: string) => {
	const cookie = await headers().get('Cookie');
	const headerList = new Headers();

	if (cookie) {
		headerList.append('Cookie', cookie);
	}

	const res = await fetch(
		`${process.env.NEXT_APP_DOMAIN}/api/penduduk/${nik}`,
		{
			method: 'DELETE',
			headers: headerList,
		}
	);
	if (!res.ok) {
		throw Error(`Error with status code: ${res.status}`);
	}

	return res.json();
};

export const editDataPenduduk = async (nik: string, value: any) => {
	const cookie = await headers().get('Cookie');
	const headerList = new Headers();
	if (cookie) {
		headerList.append('Cookie', cookie);
	}
	const res = await fetch(
		`${process.env.NEXT_APP_DOMAIN}/api/penduduk/${nik}`,
		{
			method: 'PATCH',
			body: JSON.stringify(value),
			headers: headerList,
		}
	);
	if (!res.ok) {
		throw Error(`Error with status code: ${res.status}`);
	}

	revalidateTag('edit-penduduk');
	return res.json();
};

export const getPerangkatkalurahan = async () => {
	const perangkatKalurahan = await db.penduduk.findMany({
		where: {
			jabatan_di_kalurahan: {
				not: 'penduduk',
			},
		},
	});

	// console.log('[ACTION_PERANGKAT_KALURAHAN] - ', perangkatKalurahan);

	if (!perangkatKalurahan) {
		return null;
	}

	return perangkatKalurahan;
};
