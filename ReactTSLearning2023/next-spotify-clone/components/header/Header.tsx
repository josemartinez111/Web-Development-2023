'use client';
// FILE: components/Header.tsx
// _______________________________________________

import Button from "@/components/shared/button/Button";
import { useUser } from "@/context/providers/MyUserProvider";
import { useAuthModalStore } from "@/hooks/useAuthModalStore";
import { WithChildren } from "@/types/types.shared";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import styles from './header.module.css';
// _______________________________________________

const Header = ({ children, className }: WithChildren) => {
	const authModal = useAuthModalStore();
	const router = useRouter();
	
	const supabaseClient = useSupabaseClient();
	const { user, isLoading } = useUser();
	// _________________ [functions] ___________________
	
	const handleLogout = async () => {
		const { error } = await supabaseClient.auth.signOut();
		// reset any playing songs
		router.refresh();
		
		error
			? toast.error(error.message)
			: toast.success('Logged out!');
	};
	
	const handleBack = () => () => (
		router.back()
	);
	
	const handleForward = () => (
		router.forward()
	);
	
	if (isLoading) {
		// Placeholder or loading state while user is loading
		return <div>Loading...</div>;
	}
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
				<div className="flex justify-between items-center gap-x-4">
          { user ? (
	          <div className="flex gap-x-4 items-center">
              <Button
	              onClick={ handleLogout }
	              className="bg-white px-6 py-2"
              >
                Logout
              </Button>
              <Button
	              onClick={ () => router.push('/account') }
	              className="bg-white"
              >
                <FaUserAlt />
              </Button>
            </div>
          ) : (
	          <>
		          <div>
			          <Button onClick={ authModal.onOpen }
			                  className="bg-transparent text-neutral-300 font-medium">
				          Sign up
								</Button>
							</div>
		          <div>
			          <Button onClick={ authModal.onOpen }
			                  className="bg-white px-6 py-2">
				          Log in
								</Button>
							</div>
	          </>
          ) }
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











