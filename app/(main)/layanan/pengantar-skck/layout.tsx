import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

import LoadingPage from '@/components/loading';
import { PengantarSkckForm } from '@/components/surat/form/pengantar-skck-form';

type Props = {
	children: React.ReactNode;
};

async function PengantarSkckLayout({ children }: Props) {
	const session = await auth();
	if (!session) {
		return redirect('/denied');
	}

	return (
		<div className="px-1 md:px-6">
			<div className="w-full p-2">
				<PengantarSkckForm />
			</div>
			<div className="py-2 md:py-6 h-screen">
				<Suspense fallback={<LoadingPage />}>{children}</Suspense>
			</div>
		</div>
	);
}

export default PengantarSkckLayout;
