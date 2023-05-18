// FILE: helpers/get-specific-pokemons.ts
// _______________________________________________
import {
	BasicPokemonInfo,
	PokemonListResponse,
	SpecificPokemon,
} from "~/interfaces";
// _______________________________________________

const BASE_URL = new URL("https://pokeapi.co/api/v2/pokemon");
// _______________________________________________

export const getSpecificPokemons = async (offset: number = 0, limit: number = 10)
	: Promise<Array<SpecificPokemon>> => {
	
	const queryURL = `${ BASE_URL }?limit=${ limit }&offset=${ offset }`;
	const response = await fetch(queryURL);
	
	const data = await response.json() as PokemonListResponse;
	console.log("data:", data);
	return data.results.map(({ url, name }: BasicPokemonInfo) => {
		const segments = url.split('/');
		const id = segments.slice(-2)[0] ?? ''; // get the second to last element
		
		return {
			id,
			name,
		};
	});
};
// _______________________________________________