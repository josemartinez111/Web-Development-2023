// FILE: routes/index.tsx
// ______
// _________________________________________

import { $, component$, useContext } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/pokemon-image/pokemon-image';
import { HomeButtons } from '~/components/shared/home-buttons/home-buttons';
import { PokemonGameContext } from "~/context";
// _______________________________________________

export default component$(() => {
	const pokemonContext = useContext(PokemonGameContext);
	// The useNavigate() function allows to programmatically
	// navigate to the next page without involving a user
	// click or causing a full-page reload.
	const navigateTo = useNavigate();
	
	// _________________ functions ___________________
	
	const changePokemonByID = $((value: number) => {
		if (pokemonContext.pokemonID + value <= 0) return;
		pokemonContext.pokemonID += value;
	});
	
	const flipImage = $(() => (
		pokemonContext.isImageFlipped = !pokemonContext.isImageFlipped
	));
	
	const goToPokemon = $((id: number) => {
		navigateTo(`/pokemon/${ id }/`).then(() => {
			console.log(`viewing pokemon with ID of: ${ id }`);
		});
	});
	// _______________________________________________
	return (
		<>
			<span class="text-5xl text-white mt-14">Search Pokemon</span>

			<span class="text-7xl text-white mb-5">{ pokemonContext.pokemonID }</span>
			
			{/* pokemon-image-component ========================== */ }
			<div class="cursor-pointer"
			     onClick$={ () => goToPokemon(pokemonContext.pokemonID) }>
				<PokemonImage
					id={ pokemonContext.pokemonID }
					size={ 300 }
					isPokemonVisible={ pokemonContext.isPokemonVisible }
					isFlipped={ pokemonContext.isImageFlipped }
				/>
			</div>
			{/* (home-buttons component) ======================== */ }
			<HomeButtons
				previousOnClick$={ changePokemonByID }
				nextOnClick$={ changePokemonByID }
				flipOnPokemon$={ flipImage }
				showPokemon$={ () => (
					pokemonContext.isPokemonVisible = !pokemonContext.isPokemonVisible
				) }
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
