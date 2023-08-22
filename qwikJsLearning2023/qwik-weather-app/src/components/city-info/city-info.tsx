// FILE: components/city-info
// _________________________________________

import { component$, Signal } from '@builder.io/qwik';
// _________________________________________

type CityInfoProps = {
	city: Signal<string>
}
// _________________________________________

export const CityInfo = component$<CityInfoProps>(({ city }) => {
	
	// ________________ [functions] __________________
	
	// _______________________________________________
	return (
		<>
			<h1 style={ { fontSize: "2.3em", padding: "0.9em" } }>
			{ city.value }
			</h1>
		</>
	);
});
// _______________________________________________