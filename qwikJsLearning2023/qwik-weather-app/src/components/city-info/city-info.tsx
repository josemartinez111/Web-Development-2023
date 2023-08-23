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
		<div>
			City info about { city.value }
		</div>
	);
});
// _______________________________________________