// FILE: components/app-wrapper/app-wrapper.tsx
// _________________________________________

import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik';
import styles from './app-wrapper.css?inline';
// _________________________________________

// _________________________________________

export const AppWrapper = component$(() => {
	useStylesScoped$(styles);
	
	// ________________ [functions] __________________
	
	// _______________________________________________
	return (
		<div class="container">
			<Slot />
		</div>
	);
});
// _______________________________________________