'use client';
// FILE: components/SidebarItem.tsx
// _______________________________________________

import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import styles from './side-bar-item.module.css';
// _______________________________________________

type SidebarItemProps = {
	icon: IconType;
	label: string;
	active?: boolean;
	href: string;
};
// _______________________________________________

const SidebarItem = ({ icon: Icon, label, active, href }: SidebarItemProps) => {
	
	// _________________ [functions] ___________________
	
	
	// _________________________________________________
	return (
		<Link
			className={ twMerge(styles.link, active && 'text-white') }
			href={ href }
		>
			{ /*|====== icon ======|*/ }
			<Icon size={ 26 } />
			{ /*|====== label ======|*/ }
			<p className="truncate w-full">{ label }</p>
		</Link>
	);
};
// _______________________________________________

export default SidebarItem;
// _______________________________________________