// FILE: pokemon-image.tsx
// _________________________________________
// _________________________________________

import { $, component$, useSignal } from '@builder.io/qwik';
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
	const previousImage = useSignal(false)
	
	let IMG_URL = `${ BASE_URL }/${ id }.png`;
	if (previousImage.value) IMG_URL = `${ BASE_URL }/back/${ id }.png`;
	// _________________ [functions] ___________________
	
	const flipImage = $(() => (
		previousImage.value = !previousImage.value
	))
	// _______________________________________________
	return (
		<>
			{/* create Pokémon image */ }
			<img
				src={ IMG_URL }
				alt="Pokemon Sprite"
				style={ { width: `${ size }px` } }
			/>
			
			{/* buttons */ }
			<div class="mt-2">
				<button
					onClick$={ () => changePokemon$(-1) }
					class="btn btn-primary mr-2"
				>Previous
				</button>
				
				<button
					onClick$={ flipImage }
					class="btn btn-primary mr-2"
				>Flip
				</button>
				
				<button
					onClick$={ () => changePokemon$(+1) }
					class="btn btn-primary"
				>Next
				</button>
			</div>
		</>
	);
});
// _______________________________________________