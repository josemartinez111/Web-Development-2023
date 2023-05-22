// FILE: routes/layout.tsx
// _________________________________________
// _________________________________________

import { component$, Slot } from '@builder.io/qwik';
import { NavBar } from "~/components/shared/navbar/navbar";
import { PokemonProvider } from "~/context";
// _______________________________________________

export default component$(() => {
	
	// ________________ [functions] __________________
	
	// _______________________________________________
	return (
		<PokemonProvider>
			<NavBar />
			<main class="layout-main">
				<Slot />
			</main>
    </PokemonProvider>
	);
});
// _________________________________________
