// FILE: context/pokemon/pokemon-provider.tsx
// _________________________________________
// _________________________________________

import {
	component$,
	Slot,
	useContextProvider,
	useStore,
	useVisibleTask$,
} from '@builder.io/qwik';
import type {
	PokemonGameState,
	PokemonListState, PokemonModalState} from '~/context';
import {
	PokemonGameContext,
	PokemonListContext, PokemonModalContext
} from '~/context';
// _________________________________________

export const PokemonProvider = component$(() => {
	const pokemonGameState = useStore<PokemonGameState>({
		pokemonID: 4,
		isPokemonVisible: false,
		isImageFlipped: false,
	});
	
	const pokemonListState = useStore<PokemonListState>({
		currentPage: 0,
		isLoading: false,
		pokemons: [],
	});
	
	const pokemonModalState = useStore<PokemonModalState>({
		isModalVisible: false,
		id: '',
		name: '',
	});
	
	useContextProvider(PokemonGameContext, pokemonGameState);
	useContextProvider(PokemonListContext, pokemonListState);
	useContextProvider(PokemonModalContext, pokemonModalState);
	// ________________ [functions] __________________
	
	/**
	 * https://qwik.builder.io/docs/components/tasks/#usevisibletask
	 * useVisibleTask$() has these properties:
	 * -------------------------------------------------------
	 * runs on the client only.
	 * eagerly executes code on the client when the component becomes visible.
	 * runs after initial rendering.
	 * does not block rendering.
	 * */
	useVisibleTask$(() => {
		// TODO: read from localstorage
		if (localStorage.getItem('pokemon-game')) {
			// converting the data back to an object
			const {
				pokemonID = 10,
				isPokemonVisible = true,
				isImageFlipped = false,
			} = JSON.parse(
				localStorage.getItem('pokemon-game') ?? '',
			) as PokemonGameState;
			
			pokemonGameState.pokemonID = pokemonID;
			pokemonGameState.isPokemonVisible = isPokemonVisible;
			pokemonGameState.isImageFlipped = isImageFlipped;
		}
	});
	
	useVisibleTask$(({ track }) => {
		track(() => [
			pokemonGameState.pokemonID,
			pokemonGameState.isPokemonVisible,
			pokemonGameState.isImageFlipped,
		]);
		
		// save to localstorage
		localStorage.setItem('pokemon-game', JSON.stringify(pokemonGameState));
	});
	
	// _______________________________________________
	/**
	 * https://qwik.builder.io/docs/components/slots/#slots
	 * Slots allow a component to treat the JSX children of the
	 * component as a form of input and project these children
	 * into the component's DOM tree. This concept has different
	 * names in different frameworks:
	 * ---------------------------------------------------------
	 * In Angular is called (Content Projection)
	 * In React, it's the (children) of the props
	 * In Web components it's <slot> as well
	 * */
	return <Slot />;
});
// _______________________________________________
