// FILE: routes/index.tsx
// ______
// _________________________________________

import { $, component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/pokemon-image/pokemon-image';
import { HomeButtons } from "~/components/shared";
import { usePokemonGame } from "~/hooks/use-pokemon-game";
// _______________________________________________

export default component$(() => {
	const {
		pokemonID,
		isPokemonVisible,
		isImageFlipped,
		previousPokemon,
		nextPokemon,
		spinPokemon,
		toggleVisibility,
		isShowing,
	} = usePokemonGame();
	const navigateTo = useNavigate();
	
	// _________________ functions ___________________
	
	const goToPokemon = $((id: number) => {
		navigateTo(`/pokemon/${ id }/`).then(() => {
			console.log(`viewing pokemon with ID of: ${ id }`);
		});
	});
	// _______________________________________________
	return (
		<>
			<span class="text-5xl mt-14">Search Pokemon</span>

			<span class="text-7xl mb-5">{ pokemonID.value }</span>
			
			{/* pokemon-image-component ========================== */ }
			<div class="cursor-pointer"
			     onClick$={ () => goToPokemon(pokemonID.value) }>
				<PokemonImage
					id={ pokemonID.value }
					size={ 300 }
					isPokemonVisible={ isPokemonVisible.value }
					isFlipped={ isImageFlipped.value }
				/>
			</div>
			{/* (home-buttons component) ======================== */ }
			<HomeButtons
				previousOnClick$={ previousPokemon }
				nextOnClick$={ nextPokemon }
				flipOnPokemon$={ spinPokemon }
				showPokemon$={ toggleVisibility }
				isPokemonShowing={ isShowing.value }
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
