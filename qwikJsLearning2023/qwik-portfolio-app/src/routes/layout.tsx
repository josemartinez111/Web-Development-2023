// FILE: routes/layout.tsx
// _______________________________________________

import { component$, Slot } from '@builder.io/qwik';
import { Navbar } from '~/components/shared';
// _______________________________________________

export default component$(() => {
	// ________________ [functions] __________________

	// _______________________________________________
	return (
		<>
			<Navbar />
			<main>
				<Slot />
			</main>
		</>
	);
});
// _______________________________________________
