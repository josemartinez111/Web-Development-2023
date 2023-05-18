// FILE: pokemon/[id]/index.tsx
// _________________________________________
// _________________________________________

import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
// _______________________________________________

export default component$(() => {
	
	// ________________ [functions] __________________
	
	// _______________________________________________
	return (
		<>
      <span class="text-5xl">
        Pokemon:
      </span>
    </>
	);
});
// _________________________________________

export const head: DocumentHead = {
	title: 'Pokemon by ID',
	meta: [
		{
			name: 'description',
			content: 'Qwik site fetching pokemon data',
		},
	],
};
// _________________________________________