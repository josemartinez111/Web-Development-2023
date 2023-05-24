// FILE: hooks/use-list-ssr.tsx
// _______________________________________________

import { $, useComputed$, useContext, useSignal } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { PokemonModalContext } from "~/context";
import { useRouteLoaderPokemonList } from "~/routes/pokemons/list-ssr";
// _______________________________________________

export const useListSSR = () => {
	const pokemonModalState = useContext(PokemonModalContext);
	const chatGPTPokemonFact = useSignal('');
	const pokemons = useRouteLoaderPokemonList();
	const pokemonLocation = useLocation();
	
	const currentOffset = useComputed$<number>(() => {
		const offsetString = new URLSearchParams(pokemonLocation.url.search);
		return Number(offsetString.get('offset') || 0);
	});
	
	// ________________ [functions] __________________
	
	const openModalOnClick = $((id: string, name: string) => {
		if (!id.trim() || !name.trim()) {
			console.error("Empty ID or Name provided");
			return;
		}
		pokemonModalState.id = id;
		pokemonModalState.name = name;
		pokemonModalState.isModalVisible = true;
	});
	
	const closeModalOnClick = $(() => {
		pokemonModalState.id = '';
		pokemonModalState.name = '';
		pokemonModalState.isModalVisible = false;
	});
	// _______________________________________________
	return {
		pokemonModalState,
		chatGPTPokemonFact,
		pokemons,
		pokemonLocation,
		currentOffset,
		openModalOnClick,
		closeModalOnClick,
	};
};
// _______________________________________________