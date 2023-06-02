// FILE: components/shared/home-buttons.tsx
// _________________________________________
// _________________________________________

import type { PropFunction } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
// _________________________________________

interface ButtonsProps {
	previousOnClick$: PropFunction<(value: number) => void>;
	nextOnClick$: PropFunction<(value: number) => void>;
	flipOnPokemon$: PropFunction<() => boolean>;
	showPokemon$: PropFunction<() => boolean>;
	isPokemonShowing: boolean;
}
// _________________________________________

export const HomeButtons = component$(
	({
		previousOnClick$,
		nextOnClick$,
		flipOnPokemon$,
		showPokemon$,
		isPokemonShowing,
	}: ButtonsProps) => {
		// ________________ [functions] __________________
		
		// _______________________________________________
		return (
			<>
				<div class="mt-2">
					{/* previous button */ }
					<button
						onClick$={ () => previousOnClick$(-1) }
						class="btn btn-primary mr-2">
						Previous
					</button>
					{/* next-button */ }
					<button onClick$={ () => nextOnClick$(+1) } class="btn btn-primary mr-2">
						Next
					</button>
					{/* flip-image button */ }
					<button onClick$={ flipOnPokemon$ } class="btn btn-primary mr-2">
						Flip
					</button>
					{/* flip-image button */ }
					<button onClick$={ showPokemon$ } class="btn btn-primary">
						{ !isPokemonShowing ? 'Hide' : 'Reveal' }
					</button>
				</div>
			</>
		);
	},
);
// _______________________________________________
