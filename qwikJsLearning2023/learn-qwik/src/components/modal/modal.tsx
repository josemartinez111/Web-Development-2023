// file: components/modal/modal.tsx
// _______________________________________________

import {
	component$,
	PropFunction,
	Slot,
	useStylesScoped$,
} from "@builder.io/qwik";
import ModalStyles from "./modal.css?inline"
// _______________________________________________

interface ModalProps {
	size: 'sm' | 'lg'
	isFrosted?: boolean
	closeModal: PropFunction<() => boolean>
	//closeModal: QRL<() => boolean>
}
// _______________________________________________


export const Modal = component$<ModalProps>(({
	size,
	isFrosted,
	closeModal,
}) => {
	useStylesScoped$(ModalStyles)
	
	return (
		<div class={ `modal ${ size } ${ isFrosted && 'frosted' }` }>
			<div class="modal-content">
				<div
					class="close"
					onClick$={ closeModal }
				>Close
				</div>
				{/* main-content */ }
				<main class="main-content">
					<Slot name="content" />
				</main>
				{/* footer */ }
				<footer>
					<Slot name="footer" />
				</footer>
			</div>
		</div>
	)
})
// _______________________________________________