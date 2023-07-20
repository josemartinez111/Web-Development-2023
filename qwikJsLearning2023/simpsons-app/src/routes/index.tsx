// FILE: routes/index.tsx
// _________________________________________

import { component$ } from '@builder.io/qwik';
import { Link } from "@builder.io/qwik-city";
import type { DocumentHead } from '@builder.io/qwik-city';
import { Logo } from "~/components/icons/logo";
import styles from "~/components/icons/logo.module.css";
// _________________________________________

// _______________________________________________

export default component$(() => {
	
	// ________________ [functions] __________________
	
	// _______________________________________________
	return (
		<div class={ `min-h-screen bg-brand ${ styles.container }` }>
			{ /*|====== logo-component ======|*/ }
			<Logo customClass="w-64 sm:w-[35rem]" />
			{ /*|====== header-text ======|*/ }
			<h1 class="text-xl my-1 font-medium">
        Discover some of the most amazing Quotes from The Simpsons
      </h1>
			{ /*|====== disclaimer-text ======|*/ }
			<div>
				<strong>DISCLAIMER:</strong>{ " " }
				This is an unofficial app
				(even though it looks so cool!)
			</div>
			
			<Link href="/" class="btn my-4 hover-text-shadow">
				Enter App
			</Link>
			
			<Link href="/" class="hover-text-shadow btn btn-contrast btn-red">
				Enter App
			</Link>
			
    </div>
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