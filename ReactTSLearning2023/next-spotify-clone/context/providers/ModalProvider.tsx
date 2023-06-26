'use client';
// FILE: providers/ModalProvider.tsx
// _______________________________________________

import AuthModal from "@/components/auth/AuthModal";
import UploadModal from "@/components/upload-modal/UploadModal";
import { useEffect, useState } from "react";
// _______________________________________________


// type ModalProviderProps = {
// 	mockProp?: string;
// };
// _______________________________________________

const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false);
	
	// will handle the change of isMounted
	// when loaded, to not cause re-renders
	useEffect(() => {
		setIsMounted(true);
	}, []);
	
	if (!isMounted) return null;
	
	// _________________ [functions] ___________________
	
	
	// _________________________________________________
	return (
		<>
			<AuthModal />
			<UploadModal />
		</>
	);
};
// _______________________________________________

export default ModalProvider;
// _______________________________________________