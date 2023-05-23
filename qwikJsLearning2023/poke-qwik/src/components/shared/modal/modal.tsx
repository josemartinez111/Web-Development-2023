// FILE: components/shared/modal/modal.tsx
// _________________________________________
// _________________________________________

import { $, component$, Slot, useStylesScoped$ } from '@builder.io/qwik';
import { ButtonClickEvent } from "~/types";
import ModalStyles from './modal.css?inline';
// _________________________________________

interface ModalProps {
	showModal: boolean;
	closeModal$: () => void;
	size?: 'sm' | 'md' | 'lg';
}
// _________________________________________

export const Modal = component$<ModalProps>(({
	showModal,
	closeModal$,
	size = 'md',
}) => {
	useStylesScoped$(ModalStyles);
	// ________________ [functions] __________________
	
	// This function will prevent clicks within
	// the modal from bubbling up to the overlay
	const stopPropagation = $((event: ButtonClickEvent) => {
		event.stopPropagation();
	});
	
	const closeModalOnClick = $((event: ButtonClickEvent) => {
		event.stopPropagation(); // Stop propagation so that clicking the button won't also trigger the modal background's click event
		return closeModal$();
	});
	// _______________________________________________
	return (
		// hidden https://www.section.io/engineering-education/creating-a-modal-dialog-with-tailwind-css/
		<div
			onClick$={ () => closeModal$() }
			class={ showModal ? 'modal-background cursor-pointer' : 'hidden' }>
			<div
				onClick$={ stopPropagation }
				class={ ["modal-content", `modal-${ size }`] }>
				<div class="mt-3 text-center">
					{/** title<-Slot =============================  */ }
					<h3 class="modal-title">
						<Slot name="title" />
					</h3>

					<div class="mt-2 px-7 py-3">
						{/** content<-Slot =============================  */ }
						<div class="modal-content-text">
							<Slot name="content" />
						</div>
					</div>
					
					{/** Button ============================= */ }
					<div class="items-center px-4 py-3 cursor-pointer">
						<button
							onClick$={ closeModalOnClick }
							id="ok-btn"
							class="modal-button">
								Close
								</button>
					</div>
				</div>
			</div>
		</div>
	);
});
// _______________________________________________
