// FILE: components/weather-info
// _________________________________________

import { component$, Signal } from '@builder.io/qwik';
// _________________________________________

type WeatherInfoProps = {
	city: Signal<string>
}
// _________________________________________

export const WeatherInfo = component$<WeatherInfoProps>(({ city }) => {
	
	// ________________ [functions] __________________
	
	// _______________________________________________
	return (
		<div>
			Weather info about { city.value }
		</div>
	);
});
// _______________________________________________












