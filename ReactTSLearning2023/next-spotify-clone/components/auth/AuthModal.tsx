'use client';
// FILE: component/auth/AuthModal.tsx
// _______________________________________________

import Modal from "@/components/shared/modal/Modal";
import { useAuthModalStore } from "@/hooks/useAuthModalStore";
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
// _______________________________________________


// type AuthModalProps = {
// 	mockProp?: string;
// };
// _______________________________________________

const AuthModal = () => {
	const supabaseClient = useSupabaseClient();
	const router = useRouter();
	const { session } = useSessionContext();
	
	const { isOpen, onClose } = useAuthModalStore();
	
	const themeAppearance = {
		theme: ThemeSupa,
		variables: {
			default: {
				colors: {
					brand: '#404040',
					brandAccent: '#22c55e',
				},
			},
		},
	};
	// _________________ [functions] ___________________
	
	const onChange = (open: boolean) => {
		if (!open) onClose();
	};
	
	// useEffect to close the modal once we successfully log in
	useEffect(() => {
		if (session) {
			router.refresh();
			onClose();
		}
	}, [session, router, onClose]);
	
	// _________________________________________________
	
	return (
		<Modal
			title="Welcome Back"
			description="Login to your acccount"
			isOpen={ isOpen }
			onChange={ onChange }
		>
			{ /*|====== auth-form-component ======|*/ }
			<Auth
				theme="dark"
				providers={ ['github', "apple"] }
				supabaseClient={ supabaseClient }
				appearance={ themeAppearance }
				magicLink
			/>
		</Modal>
	);
};
// _______________________________________________

export default AuthModal;
// _______________________________________________