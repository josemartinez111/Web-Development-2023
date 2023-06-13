'use client';
// FILE: components/shared/Button.tsx
// _______________________________________________

import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import styles from './button.module.css';
// _______________________________________________

// Here we define the type for our Button component,
// merging it with the standard ButtonHTMLAttributes.
type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {};
// _______________________________________________

// Here we use forwardRef to create our Button component.
// forwardRef is a utility from React that allows us to
// "forward" a ref through a component to one of its child
// components. In this case, we're forwarding a ref to the <button> element.
const Button = forwardRef<HTMLButtonElement, ButtonType>(({
	className,
	children,
	disabled,
	type = 'button',
	...props
}, ref) => {
	// The forwarded ref is attached to the button element here.
	// Now, when this Button component is used elsewhere, a ref
	// can be passed in, and it will be attached directly to this
	// <button> element.
	return (
		<button
			className={ twMerge(styles.btn, className) }
			type={ type }
			disabled={ disabled }
			ref={ ref }
			{ ...props }
		>{ children }
		</button>
	);
});

// _______________________________________________
// Setting a custom display name for our component.
// This is useful for debugging, as the display
// name is used in debug messages.
Button.displayName = "Button";
export default Button;
// _______________________________________________
