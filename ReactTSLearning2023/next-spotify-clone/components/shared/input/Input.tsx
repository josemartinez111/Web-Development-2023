'use client';
// FILE: components/shared/Input.tsx
// _______________________________________________
// _______________________________________________

import { forwardRef, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type InputType = InputHTMLAttributes<HTMLInputElement> & {};
// _______________________________________________

const Input = forwardRef<HTMLInputElement, InputType>(({
	className,
	type,
	disabled,
	...props
}, ref) => {
	return (
		<input
			type={ type }
			className={ twMerge(`
			flex
			w-full
			rounded-md
			bg-neutral-700
			border
			border-transparent
			px-3
			py-3
			text-sm
			file:border-0
			file:bg-transparent
			file:font-medium-0
			placeholder:text-neutral-400
			disabled:cursor-not-allowed
			disabled:opacity-50
			focus:outline-none
			`, className,
			) }
			disabled={ disabled }
			ref={ ref }
			{ ...props }
		/>
	);
});
// _______________________________________________

Input.displayName = "Input";
export default Input;
// _______________________________________________