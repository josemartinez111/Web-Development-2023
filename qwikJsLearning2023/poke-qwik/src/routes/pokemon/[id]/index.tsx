// FILE: pokemon/[id]/index.tsx
// _________________________________________
// _________________________________________

import { component$, useContext } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/pokemon-image/pokemon-image';
import { PokemonGameContext } from "~/context";
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
	const pokemonContext = useContext(PokemonGameContext);
	const pokemonID = useRouteLoaderPokemonID();
	// ________________ [functions] __________________
	
	// _______________________________________________
	return (
		<>
			<span class="text-5xl">Pokemon: { pokemonID.value }</span>
			{/* pokemon-image component =========================== */ }
			<PokemonImage
				id={ pokemonID.value }
				size={ 450 }
				isPokemonVisible={ pokemonContext.isPokemonVisible }
				isFlipped={ pokemonContext.isImageFlipped }
			/>
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
