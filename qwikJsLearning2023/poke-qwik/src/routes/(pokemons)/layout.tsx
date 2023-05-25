// FILE: routes/(pokemons)/layout.tsx
// _________________________________________
// _________________________________________

import { component$, Slot } from '@builder.io/qwik';
import { NavBar } from "~/components/shared";
import { PokemonProvider } from "~/context";
// _______________________________________________

export default component$(() => {
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
