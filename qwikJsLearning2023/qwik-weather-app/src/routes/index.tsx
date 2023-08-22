// FILE: routes/index.tsx
// _________________________________________

import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { AppWrapper, CityInfo, Navbar, WeatherInfo } from "~/components";
// _________________________________________

// _______________________________________________

export default component$(() => {
	const city = useSignal("Granada");
	
	// ________________ [functions] __________________
	
	// _______________________________________________
	return (
		<AppWrapper>
			{ /*|====== Navbar-Component ======|*/ }
			<Navbar />
			{ /*|====== header ======|*/ }
			<h1>
        The weather in <span>{ city.value }</span>
      </h1>
			{ /*|====== WeatherInfo-Component ======|*/ }
			<WeatherInfo city={ city } />
			{ /*|====== CityInfo-Component ======|*/ }
			<CityInfo city={ city } />
    </AppWrapper>
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