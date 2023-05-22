// FILE: routes/layout.tsx
// _________________________________________
// _________________________________________

import { component$, Slot, useContextProvider, useStore } from '@builder.io/qwik';
import { NavBar } from "~/components/shared/navbar/navbar";
import { PokemonGameContext, PokemonGameState } from "~/context";
// _______________________________________________

export default component$(() => {
	const pokemonGame = useStore<PokemonGameState>({
		pokemonID: 4,
		isPokemonVisible: false,
		isImageFlipped: false,
	});
	
	/**
	 * https://qwik.builder.io/docs/components/context/#usecontextprovider
	 * This method is used to create a Context for a specific component
	 * and its descendants, using the ContextId as the key identifier
	 * of the context.
	 * -------------------------------------------------------------
	 * [Parameters]
	 * (ContextId): A previously created Context must be supplied
	 * which will serve as an identifier for the data being provided
	 * (second parameter).
	 * (data): you can provide any data type like Qwik's useSignal,
	 * useStore, Array, Objects.
	 * -------------------------------------------------------------
	 * [Caveats]
	 * The provided value will not be globally available across the
	 * whole render tree, but only to descendant components in the tree.
	 * */
	useContextProvider(PokemonGameContext, pokemonGame);
	
	// ________________ [functions] __________________
	
	// _______________________________________________
	return (
		<>
			<NavBar />
			<main class="layout-main">
				<Slot />
			</main>
    </>
	);
});
// _________________________________________
