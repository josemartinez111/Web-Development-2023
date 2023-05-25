// FILE: routes/dashboard/index.tsx
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
        Qwik Dashboard page
      </h1>
    </>
	);
});
// _________________________________________

export const head: DocumentHead = {
	title: 'Dashboard Page',
	meta: [
		{
			name: 'description',
			content: 'Qwik site fetching pokemon data',
		},
	],
};
// _________________________________________