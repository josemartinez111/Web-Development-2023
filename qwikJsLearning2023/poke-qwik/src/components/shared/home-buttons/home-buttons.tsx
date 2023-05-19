// FILE: components/shared/home-buttons.tsx
// _________________________________________
// _________________________________________

import { component$ } from '@builder.io/qwik';
// _________________________________________

interface ButtonsProps {
	previousOnClick$: () => void;
	nextOnClick$: () => void;
	flipOnPokemon$: () => boolean;
	showPokemon$: () => boolean;
}
// _________________________________________

export const HomeButtons = component$(
	({
		previousOnClick$,
		nextOnClick$,
		flipOnPokemon$,
		showPokemon$,
	}: ButtonsProps) => {
		// ________________ [functions] __________________

		// _______________________________________________
		return (
			<>
				<div class="mt-2">
					{/* previous button */}
					<button onClick$={previousOnClick$} class="btn btn-primary mr-2">
						Previous
					</button>
					{/* next-button */}
					<button onClick$={nextOnClick$} class="btn btn-primary mr-2">
						Next
					</button>
					{/* flip-image button */}
					<button onClick$={flipOnPokemon$} class="btn btn-primary mr-2">
						Flip
					</button>
					{/* flip-image button */}
					<button onClick$={showPokemon$} class="btn btn-primary">
						Reveal
					</button>
				</div>
			</>
		);
	},
);
// _______________________________________________
