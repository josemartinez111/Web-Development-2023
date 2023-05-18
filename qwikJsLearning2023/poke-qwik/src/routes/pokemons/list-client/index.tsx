// FILE: list-client/index.tsx
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
      <h1 style={ { fontSize: "4.3em" } }>
        Qwik List-Client page
      </h1>
    </>
	);
});
// _________________________________________

export const head: DocumentHead = {
	title: 'List-Client page',
	meta: [
		{
			name: 'description',
			content: 'Qwik site fetching pokemon data',
		},
	],
};
// _________________________________________