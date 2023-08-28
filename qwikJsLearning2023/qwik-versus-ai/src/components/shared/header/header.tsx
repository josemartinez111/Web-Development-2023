// FILE: components/header/header.tsx
// _________________________________________

import { component$ } from '@builder.io/qwik';
// _________________________________________

// _________________________________________

export const Header = component$(() => {
	
	// ________________ [functions] __________________
	
	// _______________________________________________
	return (
		<>
			<h1 style={ { fontSize: "2.3em", padding: "0.9em" } }>
        Header Component
			</h1>
		</>
	);
});
// _______________________________________________