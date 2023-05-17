// FILE: routes/index.tsx
// ______
// _________________________________________

import { $, component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonImage } from "~/components/pokemons/pokemon-image";
// _______________________________________________

export default component$(() => {
	const pokemonID = useSignal<number>(1);
	
	// _________________ functions ___________________
	const changePokemonByID = $((value: number) => {
		if ((pokemonID.value + value) <= 0) return;
		pokemonID.value += value;
	});
	// _______________________________________________
	return (
		<>
      <span class="text-5xl text-white mt-14">
        Search Pokemon
      </span>
			
			<span class="text-7xl text-white mb-5">
				{ pokemonID }
			</span>
			
			{/* pokemon-image-component */ }
			<PokemonImage
				id={ pokemonID.value }
				changePokemon$={ changePokemonByID }
				size={ 300 }
			/>
    </>
	);
});
// _______________________________________________
export const head: DocumentHead = {
	title: 'Poke-Qwik',
	meta: [
		{
			name: 'description',
			content: 'Qwik site fetching pokemon data',
		},
	],
};
// _______________________________________________