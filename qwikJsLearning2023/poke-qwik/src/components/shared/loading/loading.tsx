// FILE: components/loading/loading.tsx
// _________________________________________
// _________________________________________

import { component$, useStylesScoped$ } from '@builder.io/qwik';
import LoadingStyles from './loading.css?inline';
// _________________________________________

export const Loading = component$(() => {
	useStylesScoped$(LoadingStyles);
	// ________________ [functions] __________________

	// _______________________________________________
	return (
		<div class="w-20 h-12 relative">
			<span class="loading-text">Loading</span>
			<span class="loading-indicator"></span>
		</div>
	);
});
// _______________________________________________
