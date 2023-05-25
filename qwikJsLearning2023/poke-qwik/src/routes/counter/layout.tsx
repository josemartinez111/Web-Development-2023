// FILE: routes/counter/layout.tsx
// _________________________________________
// _________________________________________

import { component$, Slot } from '@builder.io/qwik';
import { Link } from "@builder.io/qwik-city";
// _______________________________________________

export default component$(() => {
	return (
		<div class="shared-layout-container">
			<Slot />
			{/* button to go back home */ }
			<Link href="/">
				<button class="btn btn-primary mt-10">
					Home
				</button>
			</Link>
		</div>
	);
});
// _________________________________________
