// FILE: hooks/useUploadModal.ts
// _______________________________________________

import { create } from "zustand";
// _______________________________________________

type UploadModalStoreType = {
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
}
// _______________________________________________

export const useUploadModal = create<UploadModalStoreType>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));
// _______________________________________________