// file: components/modal/modal.tsx
// _______________________________________________

import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import ModalStyles from "./modal.css?inline"
// _______________________________________________


export default component$(() => {
	useStylesScoped$(ModalStyles)
	
	return (
		<div class="modal">
			<div class="modal-content">
				<div class="close">Close</div>
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