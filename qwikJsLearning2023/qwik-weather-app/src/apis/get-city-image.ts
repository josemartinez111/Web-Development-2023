// FILE: apis/get-city-image.ts
// _______________________________________________

import { CityImageDataType } from "~/apis/types/city-image-data.types";
// _______________________________________________


export const getCityImage = async (cityName: string): Promise<CityImageDataType> => {
	const url = new URL("https://api.unsplash.com/photos/random");
	
	const searchParams = new URLSearchParams({
		query: cityName,
		orientation: "landscape",
		client_id: import.meta.env.PUBLIC_VITE_UNSPLASH_KEY,
	}).toString();
	
	url.search = searchParams;
	try {
		const response = await fetch(url.toString());
		const result = await (response.json()) as CityImageDataType;
		
		console.log({ result });
		return result;
	} catch (error: unknown) {
		if (error instanceof Error) console.error(error.message);
		throw error;
	}
};
// _______________________________________________






















