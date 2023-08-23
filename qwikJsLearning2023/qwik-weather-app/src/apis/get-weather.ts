// FILE: apis/get-weather.ts
// _______________________________________________

import { WeatherDataType } from "~/apis/weather-data.types";
// _______________________________________________


export const getWeather = async (cityName: string): Promise<WeatherDataType> => {
	const url = new URL("https://api.openweathermap.org/data/2.5/weather");
	
	const searchParams = new URLSearchParams({
		q: cityName,
		appid: import.meta.env.PUBLIC_VITE_WEATHER_APP_KEY,
		units: 'metric',
	}).toString();
	
	url.search = searchParams;
	try {
		const response = await fetch(url.toString());
		const result = await response.json() as WeatherDataType;
		
		console.log({ result });
		return result;
	} catch (error: unknown) {
		if (error instanceof Error) console.error(error.message);
		throw error;
	}
};

// _______________________________________________
