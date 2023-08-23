// FILE: components/weather-info
// _________________________________________

import {
	$,
	component$,
	Resource,
	Signal,
	useResource$,
	useSignal,
} from '@builder.io/qwik';
import { getWeather, WeatherDataType } from "~/apis";
import { WiSwitcher } from "~/components";
// _________________________________________

type WeatherInfoProps = {
	city: Signal<string>
}
// _________________________________________

export const WeatherInfo = component$<WeatherInfoProps>(({ city }) => {
	const newCity = useSignal("");
	
	const weatherData = useResource$<WeatherDataType>(({ track, cleanup }) => {
		const controller = new AbortController();
		
		cleanup(() => controller.abort());
		track(() => city.value);
		
		return getWeather(city.value);
	});
	// ________________ [functions] __________________
	
	// check weather output on the client
	// weatherData.value.then((item: WeatherDataType) => {
	// 	console.log({ item });
	// });
	
	const handleSearchInput = $((event: Event) => (
		newCity.value = (event.target as HTMLInputElement).value
	));
	
	const handleSearchButtonClick = $(() => {
		city.value = newCity.value;
	});
	// _______________________________________________
	return (
		<Resource
			value={ weatherData }
			onPending={ () => <>Loading...</> }
			onRejected={ (error: Error) => <>Error: { error.message }</> }
			onResolved={ (weatherData: WeatherDataType) => {
				return (
					<div class="weather">
						<div class="weather__current">
							{ /*|====== temperature ======|*/ }
							<div class="weather__current__temperature">
								{ Math.round(weatherData.main.temp) }˚C
							</div>
							{ /*|====== icons ======|*/ }
							<WiSwitcher code={ weatherData.weather[ 0 ].icon } />
							{ /*|====== weather-description ======|*/ }
						</div>
						{ /*|====== search-bar ======|*/ }
						<div class="weather__search">
							<input
								type="text"
								name="city"
								id="city"
								placeholder={ city.value }
								value={ newCity.value }
								onInput$={ handleSearchInput }
							/>
							{ /*|====== search-button ======|*/ }
							<button onClick$={ handleSearchButtonClick } class="btn">
								Search
							</button>
						</div>
						<div class="weather__extra">
							<div class="weather__extra__detail">
								<div class="weather__extra__detail__label">
									Feels like
								</div>
								<div class="weather__extra__detail__value">
									{ Math.round(weatherData.main.feels_like) }˚C
								</div>
							</div>
							<div class="weather__extra__detail">
								<div class="weather__extra__detail__label">
									Humidity
								</div>
								<div class="weather__extra__detail__value">
									{ Math.round(weatherData.main.humidity) }˚C
								</div>
							</div>
							<div class="weather__extra__detail">
								<div class="weather__extra__detail__label">
									Wind
								</div>
								<div class="weather__extra__detail__value">
									{ Math.round(weatherData.wind.speed) } km/h
								</div>
							</div>
						</div>
					</div>
				);
			} }
		/>
	);
});
// _______________________________________________












