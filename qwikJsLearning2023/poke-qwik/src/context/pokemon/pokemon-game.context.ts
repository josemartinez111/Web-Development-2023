// FILE: context/pokemon/pokemon-game.context.ts
// _______________________________________________

import { createContextId } from "@builder.io/qwik";
// _______________________________________________

export interface PokemonGameState {
	pokemonID: number;
	isPokemonVisible: boolean;
	isImageFlipped: boolean;
}
// _______________________________________________

export const PokemonGameContext = createContextId<PokemonGameState>(
	'pokemon.game-context',
);
// _______________________________________________