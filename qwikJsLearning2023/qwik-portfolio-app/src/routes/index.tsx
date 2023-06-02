// FILE: routes/index.tsx
// _________________________________________
// _________________________________________

import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Home } from "~/components/home/home";
import { SocialLinks } from "~/components/social-links/social-links";
// _______________________________________________

export default component$(() => {
	// ________________ [functions] __________________
	
	// _______________________________________________
	return (
		<>
			<Home />
			<SocialLinks />
		</>
	);
});
// _________________________________________

export const head: DocumentHead = {
	title: 'Home Page',
	meta: [
		{
			name: 'description',
			content: 'Qwik site fetching pokemon data',
		},
	],
};
// _________________________________________
