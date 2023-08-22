// FILE: apis/get-weather.ts
// _______________________________________________

export const getWeather = async (cityName: string) => {
	const url = new URL("https://api.openweathermap.org/data/2.5/weather");
	
	const params = new URLSearchParams({
		q: cityName,
		appid: import.meta.env.VITE_WEATHER_APP,
		units: 'metric',
	});
	
	url.search = params.toString();
	const response = await fetch(url);
	const json = await response.json();
	
	return json;
};
// _______________________________________________
