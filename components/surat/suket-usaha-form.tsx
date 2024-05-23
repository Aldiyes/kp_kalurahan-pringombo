'use client';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { usePathname, useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

import { zodResolver } from '@hookform/resolvers/zod';

import { createSuketUsaha } from '@/actions/surat/suekt-usaha';
import Link from 'next/link';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { IoMdArrowRoundBack } from 'react-icons/io';
import * as z from 'zod';

const formSchema = z.object({
	no_surat: z.string().min(1),
	pendudukId: z.string().min(1),
	usaha_sampingan: z.string().min(1),
	di_kalurahan: z.string().min(1),
	di_kapanewon: z.string().min(1),
	di_kabupaten: z.string().min(1),
});

export const SuketUsahaForm = () => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const pathname = usePathname();

	const isSuratIdPage = pathname.split('/').length === 5;
	const pendudukId = isSuratIdPage && pathname.split('/').at(-2);
	const back = pathname.split('/').slice(0, -1).join('/');

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			no_surat: '',
			pendudukId: pendudukId ? atob(pendudukId) : '',
			usaha_sampingan: '',
			di_kalurahan: '',
			di_kapanewon: '',
			di_kabupaten: '',
		},
	});

	const { isSubmitting, isValid } = form.formState;

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			values.pendudukId = btoa(values.pendudukId);
			values.no_surat = btoa(values.no_surat);
			values.usaha_sampingan = values.usaha_sampingan.toUpperCase();
			values.di_kalurahan = values.di_kalurahan.toUpperCase();
			values.di_kapanewon = values.di_kapanewon.toUpperCase();
			values.di_kabupaten = values.di_kabupaten.toUpperCase();
			startTransition(() => {
				createSuketUsaha(values).then((response) => {
					if (response.data === null) {
						toast.error(response.message);
					} else {
						toast.success(response.message);
						router.refresh();
					}
				});
			});
		} catch (err: any) {
			toast.error(err.response.data);
		}
	};
	return (
		<nav className="w-full flex justify-between items-center">
			<>
				<Link href={isSuratIdPage ? '/print/suket-usaha' : `${back}`}>
					<Button variant="ghost">
						<IoMdArrowRoundBack className="h-4 w-4 mr-2" />
						Kembali
					</Button>
				</Link>

				<AlertDialog>
					<AlertDialogTrigger
						className="bg-black text-white p-2 rounded-lg font-[500] px-4"
						onClick={() => router.refresh()}
					>
						Buat Suart
					</AlertDialogTrigger>
					<AlertDialogContent>
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)}>
								<AlertDialogHeader>
									<AlertDialogTitle className="text-center">
										Buat Suket Usaha
									</AlertDialogTitle>
									<FormLabel className="text-start">NIK</FormLabel>
									<FormField
										control={form.control}
										name="pendudukId"
										render={({ field }) => (
											<FormItem>
												<FormControl>
													<Input
														className="mb-5"
														disabled={isSubmitting || pendudukId != false}
														placeholder="34**************"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormLabel className="text-start">Nomor Surat</FormLabel>
									<FormField
										control={form.control}
										name="no_surat"
										render={({ field }) => (
											<FormItem>
												<FormControl>
													<Input
														className="mb-5"
														disabled={isSubmitting}
														placeholder="012/Reg/Test/2023"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormLabel className="text-start">Usaha Sampingan</FormLabel>
									<FormField
										control={form.control}
										name="usaha_sampingan"
										render={({ field }) => (
											<FormItem>
												<FormControl>
													<Input
														className="mb-5"
														disabled={isSubmitting}
														placeholder="Petani"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormLabel className="text-start">Di Kalurahan</FormLabel>
									<FormField
										control={form.control}
										name="di_kalurahan"
										render={({ field }) => (
											<FormItem>
												<FormControl>
													<Input
														className="mb-5"
														disabled={isSubmitting}
														placeholder="Pringombo"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormLabel className="text-start">Di Kapanewon</FormLabel>
									<FormField
										control={form.control}
										name="di_kapanewon"
										render={({ field }) => (
											<FormItem>
												<FormControl>
													<Input
														className="mb-5"
														disabled={isSubmitting}
														placeholder="Rongkop"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormLabel className="text-start">Di Kabupaten</FormLabel>
									<FormField
										control={form.control}
										name="di_kabupaten"
										render={({ field }) => (
											<FormItem>
												<FormControl>
													<Input
														className="mb-5"
														disabled={isSubmitting}
														placeholder="Gunungkidul"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</AlertDialogHeader>
								<AlertDialogFooter>
									<AlertDialogCancel>Batal</AlertDialogCancel>
									<AlertDialogAction
										type="submit"
										disabled={!isValid || isSubmitting || isPending}
									>
										Buat surat
									</AlertDialogAction>
								</AlertDialogFooter>
							</form>
						</Form>
					</AlertDialogContent>
				</AlertDialog>
			</>
		</nav>
	);
};
