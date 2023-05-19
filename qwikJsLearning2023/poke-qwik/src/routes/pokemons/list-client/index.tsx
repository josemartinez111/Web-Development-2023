// FILE: list-client/index.tsx
// _________________________________________
// _________________________________________

import { component$, useStore, useTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonImage } from "~/components/pokemons/pokemon-image/pokemon-image";
import { getSpecificPokemons } from "~/helpers";
import { SpecificPokemon } from "~/interfaces";
// _______________________________________________

type PokemonState = {
	currentPage: number
	pokemons: Array<SpecificPokemon>
}
// _______________________________________________

export default component$(() => {
	const pokemonState = useStore<PokemonState>({
		currentPage: 0,
		pokemons: [],
	});
	
	// ________________ [functions] __________________
	/**
	 * https://qwik.builder.io/docs/guides/qwik-nutshell/#usevisibletask----
	 * useVisibleTask$ is used to create a task that happens right AFTER
	 * the component is first mounted in the DOM. It's similar to useTask$
	 * except that it only runs on the client, and it's executed after the
	 * first render. Because it's executed after the render, it's ok to
	 * inspect the DOM, or use browser APIS.
	 * */
	// useVisibleTask$(async ({ track }) => {
	// 	// tell `qwik` to `rerun` this task everytime
	// 	// the `state` of our `currentPage` changes
	// 	track(() => pokemonState.currentPage);
	//
	// 	const pokemons = await getSpecificPokemons(pokemonState.currentPage * 10);
	// 	pokemonState.pokemons = pokemons;
	// });
	
	/**
	 * https://qwik.builder.io/docs/components/tasks/#usetask
	 * useTask$() registers a hook to be executed upon component creation,
	 * it will run at least once either in the server or in the browser,
	 * depending on where the component is initially rendered.Additionally,
	 * this task can be reactive and will re-execute when tracked state changes.
	 * Notice that any subsequent re-execution of the task will always happen in
	 * the browser, because reactivity is a browser-only thing.
	 * */
	useTask$(async ({ track }) => {
		// tell `qwik` to `rerun` this task everytime
		// the `state` of our `currentPage` changes
		track(() => pokemonState.currentPage);
		
		const pokemons = await getSpecificPokemons(pokemonState.currentPage * 10);
		// Merges existing 'pokemons' array with new 'pokemons'.
		// New 'pokemons' are appended to the end of the existing array.
		pokemonState.pokemons = [...pokemonState.pokemons ,...pokemons];
	});
	
	
	// _______________________________________________
	return (
		<>
			<div class="flex flex-col">
				<span class="my-5 text-5xl">Status</span>
				<span>Actual Page: { pokemonState.currentPage }</span>
				<span>Page loaded: </span>
			</div>

			<div class="mt-10">
				{/* <button */}
				{/* 	onClick$={ () => pokemonState.currentPage-- } */}
				{/* 	class="btn btn-primary mr-2"> */}
				{/* 	Previous */}
				{/* </button> */}
				<button
					onClick$={ () => pokemonState.currentPage++ }
					class="btn btn-primary">
					Next
				</button>
			</div>
			{/* mapping through the list of pokemons */ }
			<div class="grid grid-cols-6 mt-5">
			{ pokemonState.pokemons.map(({ name, id }: SpecificPokemon) => (
				<div key={ id } class="list-of-pokemons">
			{/* pokemon-image */ }
					<PokemonImage id={ id } />
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
