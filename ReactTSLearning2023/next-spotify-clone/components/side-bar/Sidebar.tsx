'use client';
// FILE: components/Navbar.tsx
// _______________________________________________

import Box from "@/components/box/Box";
import Library from "@/components/library/Library";
import SidebarItem from "@/components/side-bar-item/SidebarItem";
import { WithChildren } from "@/types/types.shared";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import styles from './side-bar.module.css';
// _______________________________________________

const Navbar = ({ children }: WithChildren) => {
	const pathnameNav = usePathname();
	
	const routesMemo = useMemo(() => [
		{
			icon: HiHome,
			label: 'Home',
			active: pathnameNav !== '/search',
			href: '/',
		},
		{
			icon: BiSearch,
			label: 'Search',
			active: pathnameNav === '/search',
			href: '/search',
		},
	], [pathnameNav]);
	// _________________ [functions] ___________________
	

	// _________________________________________________
	return (
		<div className="flex h-full">
			<div className={ styles.wrapper }>
				{ /*|====== side-bar-item component ======|*/ }
				<Box className={ styles.nav }>
					{ routesMemo.map((item) => (
						<SidebarItem
							key={ item.label }
							{ ...item }
						/>
					)) }
				</Box>
				{ /*|====== library component ======|*/ }
				<Box className="overflow-auto h-full">
					<Library />
				</Box>
			</div>
			{/* main to render children ================================ */ }
			<main className="h-full flex-1 overflow-y-auto py-2">
				{ children }
			</main>
		</div>
	);
};
// _______________________________________________

export default Navbar;
// _______________________________________________