// FILE: context/pokemon/pokemon-list.context.ts
// _______________________________________________

import { createContextId } from "@builder.io/qwik";
import { SpecificPokemon } from "~/interfaces";
// _______________________________________________

export interface PokemonListState {
	currentPage: number;
	isLoading: boolean;
	pokemons: Array<SpecificPokemon>;
}
// _______________________________________________

export const PokemonListContext = createContextId<PokemonListState>(
	'pokemon.list-context',
);
// _______________________________________________