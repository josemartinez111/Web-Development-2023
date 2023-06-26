'use client';
// FILE: components/shared/Box.tsx
// _______________________________________________

import { WithChildren } from "@/types/types.shared";
import { twMerge } from "tailwind-merge";
// _______________________________________________

const Box = ({ children, className }: WithChildren) => {
	const mergedStyles = `
	bg-neutral-900
	rounded-lg
	h-fit
	w-full
	`;
	
	// _________________ [functions] ___________________
	
	
	// _________________________________________________
	return (
		<div className={ twMerge(mergedStyles, className) }>
			{ children }
		</div>
	);
};
// _______________________________________________

export default Box;
// _______________________________________________