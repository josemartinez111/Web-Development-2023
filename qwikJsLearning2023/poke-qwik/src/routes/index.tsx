// FILE: routes/index.tsx
// ______
// _________________________________________

import { $, component$, useSignal } from '@builder.io/qwik';
import { useNavigate } from "@builder.io/qwik-city";
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonImage } from "~/components/pokemons/pokemon-image";
import { HomeButtons } from "~/components/shared/home-buttons/home-buttons";
// _______________________________________________

export default component$(() => {
	const pokemonID = useSignal<number>(1);
	let isPokemonVisible = useSignal(false);
	const navigateTo = useNavigate();
	const isImageFlipped = useSignal(false);
	
	// _________________ functions ___________________
	const changePokemonByID = $((value: number) => {
		if ((pokemonID.value + value) <= 0) return;
		pokemonID.value += value;
	});
	
	const flipImage = $(() => (
		isImageFlipped.value = !isImageFlipped.value
	));
	
	const goToPokemon = $((id: number) => {
		navigateTo(`/pokemon/${ id }/`).then(() => {
			console.log(`viewing pokemon with ID of: ${ id }`);
		});
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
			
			{/* pokemon-image-component ========================== */ }
			<div class="cursor-pointer"
				onClick$={ () => goToPokemon(pokemonID.value) }>
				<PokemonImage
					id={ pokemonID.value }
					changePokemon$={ changePokemonByID }
					size={ 300 }
					isPokemonVisible={ isPokemonVisible.value }
					isFlipped={ isImageFlipped.value }
				/>
			</div>
			{/* (home-buttons component) ======================== */ }
			<HomeButtons
				previousOnClick$={ () => changePokemonByID(-1) }
				nextOnClick$={ () => changePokemonByID(+1) }
				flipOnPokemon$={ flipImage }
				showPokemon$={ () => isPokemonVisible.value = !isPokemonVisible.value }
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