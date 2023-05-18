// FILE: components/shared/pokemon-image.tsx
// _________________________________________
// _________________________________________

import { component$, useSignal, useTask$ } from '@builder.io/qwik';
// _________________________________________

interface PokemonImageProps {
	id: number;
	size?: number;
	changePokemon$: (value: number) => void;
	isPokemonVisible: boolean;
	isFlipped: boolean;
}

const BASE_URL = new URL("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon");
// _________________________________________

export const PokemonImage = component$(({
	id,
	size = 200,
	isPokemonVisible = false,
	isFlipped = false,
}: PokemonImageProps) => {
	const isImageLoaded = useSignal(false);
	
	const customImgInlineStyles = [{
		"hidden": !isImageLoaded.value,
		"brightness-0": !isPokemonVisible,
	}, "transition-all"];
	
	const IMG_URL = isFlipped
		? `${ BASE_URL }/back/${ id }.png`
		: `${ BASE_URL }/${ id }.png`;
	// _________________ [functions] ___________________
	// Reruns the taskFn when the observed inputs change
	useTask$(({ track }) => {
		track(() => id);
		isImageLoaded.value = false;
	});
	// _______________________________________________
	return (
		<>
			<div class="fllex items-center justify-center"
			     style={ { width: `${ size }px`, height: `${ size }px` } }>
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
					class={ customImgInlineStyles }
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
		</>
	);
});
// _______________________________________________