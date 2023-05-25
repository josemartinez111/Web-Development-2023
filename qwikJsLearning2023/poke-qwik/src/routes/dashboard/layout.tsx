// FILE: routes/counter/layout.tsx
// _________________________________________
// _________________________________________

import { component$, Slot } from '@builder.io/qwik';
import { Link } from "@builder.io/qwik-city";
import { NavBar } from "~/components/shared";
// _______________________________________________

export default component$(() => {
	return (
		<>
			{/* navigation-bar */}
			<NavBar />
			{/* main layout for dashboard ======================== */}
			<div class="shared-layout-container">
			<span class="text-5xl">Dashboard Layout</span>
			<Slot />
				{/* button to go back home */ }
				<Link href="/">
				<button class="btn btn-primary mt-10">
					Home
				</button>
			</Link>
		</div>
		</>
	);
});
// _________________________________________
