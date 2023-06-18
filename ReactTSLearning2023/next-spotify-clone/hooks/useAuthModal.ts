// FILE: hooks/useAuthModal.ts
// _______________________________________________

import { create } from "zustand";
// _______________________________________________

type AuthModalStoreType = {
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
}
// _______________________________________________

export const useAuthModal = create<AuthModalStoreType>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));
// _______________________________________________