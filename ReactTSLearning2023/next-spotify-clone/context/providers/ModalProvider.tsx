'use client';
// FILE: providers/ModalProvider.tsx
// _______________________________________________

import Modal from "@/components/shared/modal/Modal";
import { WithChildren } from "@/types/types.shared";
import { useEffect, useState } from "react";
// _______________________________________________


// type ModalProviderProps = {
// 	mockProp?: string;
// };
// _______________________________________________

const ModalProvider = ({ children }: WithChildren) => {
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
			<Modal
				title="Test Modal"
				description="Test description"
				isOpen
				onChange={ () => {
				} }
			>Test children
			</Modal>
		</>
	);
};
// _______________________________________________

export default ModalProvider;
// _______________________________________________