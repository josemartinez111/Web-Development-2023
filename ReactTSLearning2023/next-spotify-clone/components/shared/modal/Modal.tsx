'use client';
// FILE: components/shared/Modal.tsx
// _______________________________________________

import { WithChildren } from "@/types/types.shared";
// import styles from './modal.module.css'
import * as Dialog from '@radix-ui/react-dialog';
import { IoMdClose } from "react-icons/io";
// _______________________________________________

type ModalProps = WithChildren & {
	isOpen: boolean
	onChange: (open: boolean) => void
	title: string
	description: string
};
// _______________________________________________

const Modal = ({ isOpen, onChange, title, description, children }: ModalProps) => {
	
	// _________________ [functions] ___________________
	
	
	// _________________________________________________
	return (
		<Dialog.Root>
		
		</Dialog.Root>
	);
};
// _______________________________________________

export default Modal;
// _______________________________________________