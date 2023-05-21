// FILE: list-client/index.tsx
// _________________________________________
// _________________________________________

import {
	$,
	component$,
	useOnDocument,
	useStore,
	useStylesScoped$,
	useTask$,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonImage } from "~/components/pokemons/pokemon-image/pokemon-image";
import { fetchSpecificPokemon } from "~/helpers";
import { SpecificPokemon } from "~/interfaces";
import ClientStyles from "./list-client.css?inline";
// _______________________________________________

type PokemonState = {
	currentPage: number
	isLoading: boolean
	pokemons: Array<SpecificPokemon>
}
// _______________________________________________

export default component$(() => {
	useStylesScoped$(ClientStyles);
	
	const pokemonState = useStore<PokemonState>({
		currentPage: 0,
		isLoading: false,
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
	// 	const pokemons = await fetchSpecificPokemon(pokemonState.currentPage * 10);
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
	useTask$(async ({ track }): Promise<void> => {
		// If we're already loading, don't start a new fetch.
		const pokemonOffset = pokemonState.currentPage * 30;
		pokemonState.isLoading = true;
		
		// tell `qwik` to `rerun` this task everytime
		// the `state` of our `currentPage` changes
		track(() => pokemonState.currentPage);
		
		const pokemons = await fetchSpecificPokemon(pokemonOffset, 30);
		// Merges existing 'pokemons' array with new 'pokemons'.
		// New 'pokemons' are appended to the end of the existing array.
		pokemonState.pokemons = [...pokemonState.pokemons, ...pokemons];
		pokemonState.isLoading = false;
	});
	
	/**
	 * https://qwik.builder.io/docs/components/events/#useonwindowdocument-hook
	 * useOn(): listen to events on the current component's root element.
	 * useOnWindow(): listen to events on the window object.
	 * useOnDocument(): listen to events on the document object.
	 * useOn[|window|document]() hook will add a DOM-based event listener at
	 * the component level programmatically. This is often useful when you want
	 * to create your own use hooks or if you don't know the event name at the
	 * time of compilation.
	 * */
	useOnDocument('scroll', $(() => {
		// The Element.scrollHeight read-only property is a measurement
		// of the height of an element's content, including content not
		// visible on the screen due to overflow.
		const maxPageScroll = document.body.scrollHeight;
		const currentScrollPosition = window.scrollY + window.innerHeight;
		
		if ((currentScrollPosition + 200) >= maxPageScroll && !pokemonState.isLoading) {
			pokemonState.isLoading = true;
			pokemonState.currentPage++;
		}
	}));
	// _______________________________________________
	return (
		<>
			<div class="flex flex-col">
				<span class="my-5 text-5xl">Status</span>
				<span>Actual Page: { pokemonState.currentPage }</span>
				<span>Page loaded: </span>
			</div>

			<div class="mt-10">
				{/* <button */ }
				{/* 	onClick$={ () => pokemonState.currentPage-- } */ }
				{/* 	class="btn btn-primary mr-2"> */ }
				{/* 	Previous */ }
				{/* </button> */ }
				<button
					onClick$={ () => pokemonState.currentPage++ }
					class="btn btn-primary">
					Next
				</button>
			</div>
			{/* mapping through the list of pokemons */ }
			<div class="responsive-list">
			{ pokemonState.pokemons.map(({ name, id }: SpecificPokemon) => (
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
