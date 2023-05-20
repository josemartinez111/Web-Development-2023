// FILE: routes/index.tsx
// ______
// _________________________________________

import { $, component$, useSignal } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/pokemon-image/pokemon-image';
import { HomeButtons } from '~/components/shared/home-buttons/home-buttons';
// _______________________________________________

export default component$(() => {
	const pokemonID = useSignal<number>(1);
	let isPokemonVisible = useSignal(true);
	const isImageFlipped = useSignal(false);
	// The useNavigate() function allows to programmatically
	// navigate to the next page without involving a user
	// click or causing a full-page reload.
	const navigateTo = useNavigate();
	
	// _________________ functions ___________________
	
	// the `value` argument is passed on from the component
	// so when passing this to the `HomeButtons` component,
	// it can be called like so `changePokemonByID` since
	// inside the component the prop functions are passed like
	// this:
	// { () => previousOnClick$(-1) }
	// { () => nextOnClick$(+1) }
	const changePokemonByID = $((value: number) => {
		if (pokemonID.value + value <= 0) return;
		pokemonID.value += value;
	});
	
	const flipImage = $(() => (isImageFlipped.value = !isImageFlipped.value));
	
	const goToPokemon = $((id: number) => {
		navigateTo(`/pokemon/${ id }/`).then(() => {
			console.log(`viewing pokemon with ID of: ${ id }`);
		});
	});
	// _______________________________________________
	return (
		<>
			<span class="text-5xl text-white mt-14">Search Pokemon</span>

			<span class="text-7xl text-white mb-5">{ pokemonID }</span>
			
			{/* pokemon-image-component ========================== */ }
			<div class="cursor-pointer" onClick$={ () => goToPokemon(pokemonID.value) }>
				<PokemonImage
					id={ pokemonID.value }
					size={ 300 }
					isPokemonVisible={ isPokemonVisible.value }
					isFlipped={ isImageFlipped.value }
				/>
			</div>
			{/* (home-buttons component) ======================== */ }
			<HomeButtons
				previousOnClick$={ changePokemonByID }
				nextOnClick$={ changePokemonByID }
				flipOnPokemon$={ flipImage }
				showPokemon$={ () => (isPokemonVisible.value = !isPokemonVisible.value) }
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
