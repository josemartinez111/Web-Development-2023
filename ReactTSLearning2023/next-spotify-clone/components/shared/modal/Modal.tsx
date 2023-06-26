'use client';
// FILE: components/shared/Modal.tsx
// _______________________________________________

import { WithChildren } from "@/types/types.shared";
import styles from './modal.module.css';
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
		<Dialog.Root
			open={ isOpen }
			defaultOpen={ isOpen }
			onOpenChange={ onChange }
		>
			<Dialog.Portal>
				{ /*|====== overlay-component ======|*/ }
				<Dialog.Overlay className={ styles.overlay } />
				{ /*|====== content-component ======|*/ }
				<Dialog.Content className={ styles.content }>
					{ /*|====== title ======|*/ }
					<Dialog.Title className="text-xl text-center font-bold mb-4">
						{ title }
					</Dialog.Title>
					{ /*|====== description ======|*/ }
					<Dialog.Description className="mb-5 text-sm leading-normal text-center">
						{ description }
					</Dialog.Description>
					{ /*|====== display-children ======|*/ }
					<div>{ children }</div>
					{ /*|====== close-dialog component ======|*/ }
					<Dialog.Close asChild>
						<button className={ styles.closeDialog }>
							<IoMdClose />
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};
// _______________________________________________

export default Modal;
// _______________________________________________











