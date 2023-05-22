// FILE: context/pokemon/pokemon-game.context.ts
// _______________________________________________

// _______________________________________________

import { createContextId } from "@builder.io/qwik";

export interface PokemonGameState {
	pokemonID: number;
	isPokemonVisible: boolean;
	isImageFlipped: boolean;
}
// _______________________________________________

export const PokemonGameContext = createContextId<PokemonGameState>('pokemon.game-context');
// _______________________________________________


// _______________________________________________