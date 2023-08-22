// FILE: apis/weather-data.types.ts
// _______________________________________________

export type WeatherType = {
	description: string;
	icon: string;
}

export type WeatherDataType = {
	name: string;
	sys: {
		country: string;
	};
	weather: Array<WeatherType>;
	main: {
		temp: number;
		feels_like: number;
		humidity: number;
	};
	wind: {
		speed: number;
	};
}
// _______________________________________________
