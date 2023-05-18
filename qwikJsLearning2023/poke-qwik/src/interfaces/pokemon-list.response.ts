// FILE: interfaces/pokemon-list.response.ts
// _______________________________________________

export interface PokemonListResponse {
	count: number;
	next: string;
	previous: string;
	results: Array<BasicPokemonInfo>;
}

export interface BasicPokemonInfo {
	name: string;
	url: string;
}
// _______________________________________________