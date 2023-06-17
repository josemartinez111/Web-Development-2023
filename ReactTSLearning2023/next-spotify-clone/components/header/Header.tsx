'use client';
// FILE: components/Header.tsx
// _______________________________________________

import Button from "@/components/shared/button/Button";
import { WithChildren } from "@/types/types.shared";
import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import styles from './header.module.css';
// _______________________________________________

const Header = ({ children, className }: WithChildren) => {
	const router = useRouter();
	
	// _________________ [functions] ___________________
	
	const handleLogout = () => {
	
	};
	
	const handleBack = () => () => (
		router.back()
	);
	
	const handleForward = () => (
		router.forward()
	);
	// _________________________________________________
	return (
		<div className={ twMerge(styles.container, className) }>
			<div className={ styles.wrapper }>
				{/* back & forward buttons that only show on mobile view ======= */ }
				<div className={ styles.btnWrapper }>
					{ /*|====== caret-left-icon ======|*/ }
					<button
						onClick={ handleBack }
						className={ styles.leftBtn }>
						<RxCaretLeft className="text-white" size={ 35 } />
					</button>
					{ /*|====== caret-right-icon ======|*/ }
					<button
						onClick={ handleForward }
						className={ styles.rightBtn }>
						<RxCaretRight className="text-white" size={ 35 } />
					</button>
				</div>
				{/* home icon & search only shows in view passed medium size ========== */ }
				<div className="flex md:hidden gap-x-2 items-center">
					{ /*|====== home-icon ======|*/ }
					<button className={ styles.homeIcon }>
						<HiHome className="text-black" size={ 20 } />
					</button>
					{ /*|====== search-icon ======|*/ }
					<button className={ styles.searchIcon }>
						<BiSearch className="text-black" size={ 20 } />
					</button>
				</div>
				{/* custom-button (signup) component, with updated styling =========== */ }
				<div className="flex justify-center items-center gap-x-4">
					<div>
						<Button
							onClick={ () => {
							} }
							className={ styles.signup }
						>Sign up
						</Button>
					</div>
					{/* custom-button (login) component, with updated styling =========== */ }
					<div>
						<Button
							onClick={ () => {
							} }
							className={ styles.login }
						>Log in
						</Button>
					</div>
				</div>
			</div>
			{ /*|====== children of the header component ======|*/ }
			{ children }
		</div>
	);
};
// _______________________________________________

export default Header;
// _______________________________________________











