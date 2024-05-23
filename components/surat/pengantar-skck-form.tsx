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

import { createPengantarSkck } from '@/actions/surat/pengantar-skck';
import Link from 'next/link';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { IoMdArrowRoundBack } from 'react-icons/io';
import * as z from 'zod';

const formSchema = z.object({
	nik: z.string().min(1),
	no_surat: z.string().min(1),
	keperluan: z.string().min(1),
});

export const PengantarSkckForm = () => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const pathname = usePathname();

	const isSuratPage = pathname.split('/').length > 3;
	const isSuratIdPage = pathname.split('/').length === 5;
	const nik = isSuratIdPage && pathname.split('/').at(-2);
	const back = pathname.split('/').slice(0, -1).join('/');

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			nik: nik ? atob(nik) : '',
			no_surat: '',
			keperluan: '',
		},
	});

	const { isSubmitting, isValid } = form.formState;

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			values.nik = btoa(values.nik);
			values.no_surat = btoa(values.no_surat);
			values.keperluan = values.keperluan.toUpperCase();
			startTransition(() => {
				createPengantarSkck(values.nik, values.no_surat, values.keperluan).then(
					(response) => {
						if (response.data === null) {
							toast.error(response.message);
						} else {
							toast.success(response.message);
							router.refresh();
						}
					}
				);
			});
		} catch (err: any) {
			toast.error(err.response.data);
		}
	};
	return (
		<nav className="w-full flex justify-between items-center">
			<>
				<Link href={isSuratIdPage ? '/print/pengantar-skck' : `${back}`}>
					<Button variant="ghost">
						<IoMdArrowRoundBack className="h-4 w-4 mr-2" />
						Kembali
					</Button>
				</Link>
				{!isSuratPage && (
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
											Buat Pengantar SKCK
										</AlertDialogTitle>
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
										<FormLabel className="text-start">NIK</FormLabel>
										<FormField
											control={form.control}
											name="nik"
											render={({ field }) => (
												<FormItem>
													<FormControl>
														<Input
															className="mb-5"
															disabled={isSubmitting}
															placeholder="34**************"
															{...field}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormLabel className="text-start">Keperluan</FormLabel>
										<FormField
											control={form.control}
											name="keperluan"
											render={({ field }) => (
												<FormItem>
													<FormControl>
														<Input
															className="mb-5"
															disabled={isSubmitting}
															placeholder="Tambahkan Keperluan"
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
				)}
			</>
		</nav>
	);
};
