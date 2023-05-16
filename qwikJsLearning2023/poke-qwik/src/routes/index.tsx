// FILE: routes/index.tsx
// ______
// _________________________________________

import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
// _______________________________________________

export default component$(() => {
	const pokemonID = useSignal<number>(1);
	
	// _________________ functions ___________________
	
	// _______________________________________________
	return (
		<>
      <span class="text-5xl text-white mt-14">
        Poke Qwik
      </span>
			
			{/* create Pokémon image */ }
			<div class="mt-2">
				<button class="btn btn-primary mr-2">Previous</button>
				<button class="btn btn-primary">Next</button>
			</div>
    </>
	);
});

export const head: DocumentHead = {
	title: 'Poke-Qwik',
	meta: [
		{
			name: 'description',
			content: 'Qwik site fetching pokemon data',
		},
	],
};
