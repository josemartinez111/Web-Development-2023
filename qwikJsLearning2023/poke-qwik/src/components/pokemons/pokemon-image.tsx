// FILE: pokemon-image.tsx
// _________________________________________
// _________________________________________

import { $, component$, useSignal, useTask$ } from '@builder.io/qwik';
// _________________________________________

interface PokemonImageProps {
	id: number;
	size?: number;
	changePokemon$: (value: number) => void;
}

const BASE_URL = new URL("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon");
// _________________________________________

export const PokemonImage = component$(({
	id,
	changePokemon$,
	size = 200,
}: PokemonImageProps) => {
	const isImageFlipped = useSignal(false);
	let isImageLoaded = useSignal(false);
	let isPokemonVisible = useSignal(false);
	
	const IMG_URL = isImageFlipped.value
		? `${ BASE_URL }/back/${ id }.png`
		: `${ BASE_URL }/${ id }.png`;
	// _________________ [functions] ___________________
	
	const flipImage = $(() => (
		isImageFlipped.value = !isImageFlipped.value
	));
	
	// Reruns the taskFn when the observed inputs change
	useTask$(({ track }) => {
		track(() => id);
		isImageLoaded.value = false;
	});
	// _______________________________________________
	return (
		<>
			<div
				class="fllex items-center justify-center"
				style={ { width: `${ size }px`, height: `${ size }px` } }
			>
				{/* conditionally-render the image component if loading is complete  */ }
				{
					!isImageLoaded.value &&
          <span class="text-white font-bold text-1xl"
          >Loading...
					</span>
				}
				{/* Pokémon images */ }
				<img
					alt="Pokemon Sprite"
					class={ [{
						"hidden": !isImageLoaded.value,
						"brightness-0": !isPokemonVisible.value,
					}, "transition-all"] }
					style={ { width: `${ size }px` } }
					src={ IMG_URL }
					onLoad$={ () => {
						// simulate it loading
						setTimeout(() => {
							return isImageLoaded.value = true;
						}, 2000);
					} }
				/>
			</div>
			
			{/* (buttons) ======================== */ }
			<div class="mt-2">
				{/* previous button */ }
				<button
					onClick$={ () => changePokemon$(-1) }
					class="btn btn-primary mr-2"
				>Previous
				</button>
				{/* next-button */ }
				<button
					onClick$={ () => changePokemon$(+1) }
					class="btn btn-primary mr-2"
				>Next
				</button>
				{/* flip-image button */ }
				<button
					onClick$={ flipImage }
					class="btn btn-primary mr-2"
				>Flip
				</button>
				{/* flip-image button */ }
				<button
					onClick$={ () => isPokemonVisible.value = !isPokemonVisible.value }
					class="btn btn-primary"
				>Reveal
				</button>
			</div>
		</>
	);
});
// _______________________________________________