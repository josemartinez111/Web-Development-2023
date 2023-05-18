// FILE: list-ssr/index.tsx
// _________________________________________
// _________________________________________

import { component$, useComputed$ } from '@builder.io/qwik';
import { Link, routeLoader$, useLocation } from "@builder.io/qwik-city";
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonImage } from "~/components/pokemons/pokemon-image/pokemon-image";
import { getSpecificPokemons } from "~/helpers";
import { SpecificPokemon } from "~/interfaces";
// _______________________________________________
/**
 * https://qwik.builder.io/docs/route-loader/
 * Route Loaders load data in the server, so it becomes available
 * to use inside Qwik Components. They behave like RPC server-side
 * functions that can be invoked by Qwik Components during rendering
 * */
export const useRouteLoaderPokemonList =
	routeLoader$<Array<SpecificPokemon>>(async ({ query, redirect, pathname }) => {
		// the same as `query: URLSearchParams`
		const offset = Number(query.get("offset") || '0');
		console.log({ pathname });
		
		if (isNaN(offset)) redirect(301, pathname);
		if (offset < 0) redirect(301, pathname);
		
		return await getSpecificPokemons(offset);
	});
// _______________________________________________

export default component$(() => {
	const pokemons = useRouteLoaderPokemonList();
	const pokemonLocation = useLocation();
	
	/**
	 * https://qwik.builder.io/docs/components/state/#usecomputed
	 * Use useComputed$ allows to memoize a value derived synchronously
	 * from other state. It is similar to memo in other frameworks, since
	 * it will only recompute the value when one of the input signals changes
	 * */
	const currentOffset = useComputed$<number>(() => {
		// const offsetString = pokemonLocation.url.searchParams.get("offset")
		/**
		 * https://developer.mozilla.org/en-US/docs/web/api/url/search
		 * The search property of the URL interface is a search string,
		 * also called a query string, that is a USVString containing
		 * a '?' followed by the parameters of the URL.
		 * */
		const offsetString = new URLSearchParams(pokemonLocation.url.search);
		return Number(offsetString.get("offset") || 0);
	});
	// ________________ [functions] __________________
	
	// _______________________________________________
	return (
		<>
      <div class="flex flex-col">
	     <span class="my-5 text-5xl">
		    Status
	     </span>
	      <span>Current offset: { currentOffset }</span>
	      <span>Page loaded: { pokemonLocation.isNavigating ? "No" : "Yes" }</span>
      </div>
			
				<div class="mt-10">
					<Link href={ `/pokemons/list-ssr/?offset=${ currentOffset.value - 10 }` }>
						<button class="btn btn-primary mr-2">
							Previous
						</button>
					</Link>
					<Link href={ `/pokemons/list-ssr/?offset=${ currentOffset.value + 10 }` }>
						<button class="btn btn-primary">
							Next
						</button>
					</Link>
				</div>
			{/* mapping through the list of pokemons */ }
			<div class="grid grid-cols-6 mt-5">
				{
					pokemons.value.map(({ name, id }: SpecificPokemon) => (
						<div key={ id }
						     class="list-of-pokemons">
							{/* pokemon-image */ }
							<PokemonImage
								id={ id }
								
							/>
							{/* pokemon-name */ }
							<span class="capitalize font-medium">
								{ name }
							</span>
						</div>
					))
				}
			</div>
    </>
	);
});
// _________________________________________

export const head: DocumentHead = {
	title: 'List-SSR page',
	meta: [
		{
			name: 'description',
			content: 'Qwik site fetching pokemon data',
		},
	],
};
// _________________________________________