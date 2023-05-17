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
	const isImageFlipped = useSignal(false);
	
	const IMG_URL = isImageFlipped.value
		? `${ BASE_URL }/back/${ id }.png`
		: `${ BASE_URL }/${ id }.png`;
	// _________________ [functions] ___________________
	
	const flipImage = $(() => (
		isImageFlipped.value = !isImageFlipped.value
	));
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