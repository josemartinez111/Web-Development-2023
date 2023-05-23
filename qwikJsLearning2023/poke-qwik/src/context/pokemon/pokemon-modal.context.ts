// FILE: context/pokemon/pokemon-modal.context.ts
// _______________________________________________

import { createContextId } from "@builder.io/qwik";
// _______________________________________________

export interface PokemonModalState {
	isModalVisible: boolean;
	id: string;
	name: string;
}
// _______________________________________________

export const PokemonModalContext = createContextId<PokemonModalState>(
	'pokemon.modal-context',
);
// _______________________________________________