// FILE: hooks/useAuthModalStore.ts
// _______________________________________________

import { create } from "zustand";
// _______________________________________________

type AuthModalStoreType = {
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
}
// _______________________________________________

export const useAuthModalStore = create<AuthModalStoreType>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));
// _______________________________________________