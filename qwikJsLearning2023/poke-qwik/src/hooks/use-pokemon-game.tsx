// FILE: hooks/use-pokemon-game.tsx
// _______________________________________________

import { $, useComputed$, useContext, useSignal } from "@builder.io/qwik";
import { PokemonGameContext } from "~/context";
// _______________________________________________

export const usePokemonGame = () => {
	const pokemonContext = useContext(PokemonGameContext);
	const isShowing = useSignal(false);
	// ________________ [functions] __________________
	
	const changePokemonByID = $((value: number) => {
		if (pokemonContext.pokemonID + value <= 0) return;
		pokemonContext.pokemonID += value;
	});
	
	const flipImage = $(() => (
		pokemonContext.isImageFlipped = !pokemonContext.isImageFlipped
	));
	
	const toggleVisible = $(() => {
		isShowing.value = !isShowing.value;
		return pokemonContext.isPokemonVisible = !pokemonContext.isPokemonVisible;
	});
	// _______________________________________________
	return {
		pokemonID: useComputed$(() => pokemonContext.pokemonID),
		isPokemonVisible: useComputed$(() => pokemonContext.isPokemonVisible),
		isImageFlipped: useComputed$(() => pokemonContext.isImageFlipped),
		previousPokemon: changePokemonByID,
		nextPokemon: changePokemonByID,
		spinPokemon: flipImage,
		toggleVisibility: toggleVisible,
		isShowing,
	};
};
// _______________________________________________