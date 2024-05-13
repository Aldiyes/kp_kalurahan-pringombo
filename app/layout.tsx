import { ToastProvider } from '@/providers/toaster-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Kalurahan Pringombo',
	description: 'Sanata Dharma University',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ToastProvider />
				{children}
			</body>
		</html>
	);
}
