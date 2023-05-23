// FILE: pokemon/[id]/index.tsx
// _________________________________________
// _________________________________________

import { component$ } from '@builder.io/qwik';
import { Link, routeLoader$ } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/pokemon-image/pokemon-image';
import { usePokemonGame } from "~/hooks/use-pokemon-game";
// _______________________________________________
/**
 * https://qwik.builder.io/docs/route-loader/
 * Route Loaders load data in the server, so it becomes available
 * to use inside Qwik Components. They behave like RPC server-side
 * functions that can be invoked by Qwik Components during rendering
 * */
export const useRouteLoaderPokemonID = routeLoader$(({ params, redirect }) => {
	const id = Number(params.id);
	
	if (isNaN(id)) redirect(301, '/');
	if (id <= 0) redirect(301, '/');
	if (id > 1000) redirect(301, '/');
	
	console.log('server-side routerLoader$ params:', params);
	return id;
});
// _______________________________________________

export default component$(() => {
	const pokemonID = useRouteLoaderPokemonID();
	const {
		isPokemonVisible,
		isImageFlipped,
		toggleVisibility,
		spinPokemon,
		isShowing,
	} = usePokemonGame();
	// ________________ [functions] __________________
	
	// _______________________________________________
	return (
		<>
			<span class="text-5xl">Pokemon: { pokemonID.value }</span>
			{/* pokemon-image component =========================== */ }
			<PokemonImage
				id={ pokemonID.value }
				size={ 450 }
				isPokemonVisible={ isPokemonVisible.value }
				isFlipped={ isImageFlipped.value }
			/>
			{/* component-buttons ================================= */ }
			<div class="mt-2">
				<button
					onClick$={ spinPokemon }
					class="btn btn-primary mr-2"
				>Flip
				</button>
				<button
					onClick$={ toggleVisibility }
					class="btn btn-primary mr-2"
				>{ !isShowing.value ? 'Hide' : 'Reveal' }
				</button>
				{/* button to go back home */ }
				<Link href="/">
					<button class="btn btn-primary">Home</button>
				</Link>
			</div>
		</>
	);
});
// _________________________________________

export const head: DocumentHead = {
	title: 'Pokemon by ID',
	meta: [
		{
			name: 'description',
			content: 'Qwik site fetching pokemon data',
		},
	],
};
// _________________________________________
