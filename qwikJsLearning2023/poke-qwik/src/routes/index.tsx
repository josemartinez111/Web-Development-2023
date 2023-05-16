// FILE: routes/index.tsx
// ______
// _________________________________________

import { $, component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
// _______________________________________________

export default component$(() => {
	const pokemonID = useSignal<number>(1);
	
	// _________________ functions ___________________
	const increase = $(() => (
		pokemonID.value++
	));
	
	const decrease = $(() => {
		return pokemonID.value === 0
			? 0 
			: pokemonID.value--;
	});
	// _______________________________________________
	return (
		<>
      <span class="text-5xl text-white mt-14">
        Search Pokemon
      </span>
			
			<span class="text-9xl text-white">
				{ pokemonID }
			</span>
			
			{/* create Pokémon image */ }
			<div class="mt-2">
				<button
					onClick$={ decrease }
					class="btn btn-primary mr-2"
				>Previous
				</button>
				
				<button
					onClick$={ increase }
					class="btn btn-primary"
				>Next
				</button>
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
