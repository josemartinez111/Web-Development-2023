// FILE: routes/index.tsx
// _________________________________________

import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { WiSwitcher } from "~/components/icons/wi-switcher";
// _________________________________________

// _______________________________________________

export default component$(() => {
	const city = useSignal("Granada");
	
	// ________________ [functions] __________________
	
	// _______________________________________________
	return (
		<>
      <h1>
        The weather in <span>{ city.value }</span>
      </h1>
			{ /*|====== icon ======|*/ }
			<WiSwitcher code="01d" />
			<WiSwitcher code="04n" />
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