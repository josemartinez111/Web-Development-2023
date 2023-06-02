// FILE: list-client/index.tsx
// _________________________________________
// _________________________________________

import {
	$,
	component$, useContext,
	useOnDocument, useStyles$,
	useTask$,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { fetchSpecificPokemon } from "~/api";
import { PokemonImage } from "~/components/pokemons/pokemon-image/pokemon-image";
import { PokemonListContext } from "~/context";
import type { SpecificPokemon } from "~/interfaces";
import ClientStyles from "./list-client.css?inline";
// _______________________________________________

export default component$(() => {
	useStyles$(ClientStyles);
	
	const pokemonListState = useContext(PokemonListContext);
	
	useTask$(async ({ track }) => {
		// tell `qwik` to `rerun` this task everytime
		// the `state` of our `currentPage` changes
		track(() => pokemonListState.currentPage);
		
		const pokemons = await fetchSpecificPokemon(
			pokemonListState.currentPage * 10,
			30,
		);
		// Merges existing 'pokemons' array with new 'pokemons'.
		// New 'pokemons' are appended to the end of the existing array.
		pokemonListState.pokemons = [...pokemonListState.pokemons, ...pokemons];
		pokemonListState.isLoading = false;
	});
	
	useOnDocument('scroll', $(() => {
		// The Element.scrollHeight read-only property is a measurement
		// of the height of an element's content, including content not
		// visible on the screen due to overflow.
		const maxPageScroll = document.body.scrollHeight;
		const currentScrollPosition = window.scrollY + window.innerHeight;
		
		if ((currentScrollPosition + 200) >= maxPageScroll && !pokemonListState.isLoading) {
			pokemonListState.isLoading = true;
			pokemonListState.currentPage++;
		}
	}));
	// _______________________________________________
	return (
		<>
			<div class="flex flex-col">
				<span class="my-5 text-5xl">Status</span>
				<span>Actual Page: { pokemonListState.currentPage }</span>
				<span>Page loaded: </span>
			</div>

			<div class="mt-10">
				{/* <button */ }
				{/* 	onClick$={ () => pokemonState.currentPage-- } */ }
				{/* 	class="btn btn-primary mr-2"> */ }
				{/* 	Previous */ }
				{/* </button> */ }
				<button
					onClick$={ () => pokemonListState.currentPage++ }
					class="btn btn-primary">
					Next
				</button>
			</div>
			{/* mapping through the list of pokemons */ }
			<div class="responsive-list">
			{ pokemonListState.pokemons.map(({ name, id }: SpecificPokemon) => (
				<div key={ id } class="list-of-pokemons">
					{/* pokemon-image */ }
					<PokemonImage
						id={ id }
					/>
					{/* pokemon-name */ }
					<span class="capitalize font-medium">{ name }</span>
			</div>
			)) }
			</div>
		</>
	);
});
// _________________________________________

export const head: DocumentHead = {
	title: 'List-Client page',
	meta: [
		{
			name: 'description',
			content: 'Qwik site fetching pokemon data',
		},
	],
};
// _________________________________________
