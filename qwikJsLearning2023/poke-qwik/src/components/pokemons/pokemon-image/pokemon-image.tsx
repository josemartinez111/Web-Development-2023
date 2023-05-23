// FILE: components/shared/pokemon-image.tsx
// _________________________________________
// _________________________________________

import { $, component$, useComputed$, useSignal, useTask$ } from '@builder.io/qwik';
// _________________________________________

interface PokemonImageProps {
	id: number | string;
	size?: number;
	isPokemonVisible?: boolean;
	isFlipped?: boolean;
}

const BASE_URL = new URL(
	'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon',
);
// _________________________________________

export const PokemonImage = component$(
	({
		id,
		size = 200,
		isPokemonVisible = false,
		isFlipped = false,
	}: PokemonImageProps) => {
		const isImageLoaded = useSignal(false);
		
		const customImgInlineStyles = [
			{
				hidden: !isImageLoaded.value,
				'brightness-0': isPokemonVisible,
			},
			'transition-all',
		];
		// _________________ [functions] ___________________
		
		// Reruns the taskFn when the observed inputs change
		useTask$(({ track }) => {
			track(() => id);
			isImageLoaded.value = false;
		});
		
		/**
		 * https://qwik.builder.io/docs/components/state/#usecomputed
		 * Use useComputed$ allows to memoize a value derived synchronously
		 * from other state. It is similar to memo in other frameworks, since
		 * it will only recompute the value when one of the input signals changes.
		 * =======================================================================
		 * `memoize`: Memoization in this context is used to optimize performance
		 * by storing the results of expensive function calls and reusing those
		 * results when the same inputs occur again. This means useComputed$ will
		 * only recompute its returned value when its input signals change,
		 * avoiding unnecessary computations.
		 */
		const computedImageURL = useComputed$(() => {
			// Return null if there's no id
			if (!id) return null;
			
			return (isFlipped)
				? `${ BASE_URL }/back/${ id }.png`
				: `${ BASE_URL }/${ id }.png`;
		});
		
		const simulateAPIFetch = $(() => {
			// simulate it loading
			setTimeout(() => {
				return (isImageLoaded.value = true);
			}, 700);
		});
		
		// _______________________________________________
		return (
			<>
				<div
					class="fllex items-center justify-center"
					style={ { width: `${ size }px`, height: `${ size }px` } }
				>
					{/* conditionally-render the image component if loading is complete  */ }
					{ computedImageURL.value && !isImageLoaded.value && (
						<span class="text-white font-mono text-1xl">Loading...</span>
					) }
					{/* Pokémon images */ }
					{ computedImageURL.value && (
						<img
							alt="Pokemon Sprite"
							class={ customImgInlineStyles }
							style={ { width: `${ size }px` } }
							src={ computedImageURL.value }
							onLoad$={ () => simulateAPIFetch() }
						/>
					) }
				</div>
			</>
		);
	},
);
// _______________________________________________
