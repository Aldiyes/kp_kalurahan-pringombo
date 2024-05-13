'use client';

import { Home } from 'lucide-react';

import { SidebarItem } from '@/components/navigation/sidebar-item';

const routes = [
	{
		icon: Home,
		label: 'Beranda',
		href: '/',
	},
];

export const SidebarRoutes = () => {
	return (
		<div className="flex flex-col w-full">
			{routes.map((route) => (
				<SidebarItem
					key={route.href}
					icon={route.icon}
					label={route.label}
					href={route.href}
				/>
			))}
		</div>
	);
};
