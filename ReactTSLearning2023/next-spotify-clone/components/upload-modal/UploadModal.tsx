'use client';
// FILE: components/UploadModal.tsx
// _______________________________________________

import Modal from "@/components/shared/modal/Modal";
import { useUploadModal } from "@/hooks/useUploadModal";
// _______________________________________________


// type UploadModalProps = {
// 	mockProp?: string;
// };
// _______________________________________________

const UploadModal = () => {
	const uploadModal = useUploadModal();
	
	// _________________ [functions] ___________________
	
	const openModal = (open: boolean) => {
		if (!open) {
			// TODO: Reset the form
			
			uploadModal.onClose();
		}
	};
	// _________________________________________________
	return (
		<Modal
			title="Upload modal title"
			description="Upload modal description"
			isOpen={ uploadModal.isOpen }
			onChange={ openModal }
		>Upload Content
		</Modal>
	);
};
// _______________________________________________

export default UploadModal;
// _______________________________________________