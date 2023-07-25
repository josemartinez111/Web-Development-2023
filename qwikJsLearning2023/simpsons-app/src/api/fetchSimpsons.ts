// FILE: api/fetchSimpsons.ts
// https://thesimpsonsquoteapi.glitch.me/quote?count=50
// _______________________________________________

import { CharacterListResponse, CharacterType } from "~/types/type";
import { useFormattedOutput, useJsonPrettyPrint } from "~/utils/utilities";
// _______________________________________________

const BASE_URL = new URL('https://thesimpsonsquoteapi.glitch.me');
// _______________________________________________

export const fetchSimpsons = async (
	count: number,
): Promise<CharacterListResponse> => {
	const url = `${BASE_URL}/quotes?count=${count}`;
	const response = await fetch(url);

	if (!response.ok) throw new Error(response.statusText);

	const results = (await response.json()) as CharacterListResponse;
	
	// Loop through results and print each one for testing
	results.forEach((result: CharacterType, index: number) => {
		useFormattedOutput({
			strArg: `fetchSimpsons:\n#${index + 1}: ${useJsonPrettyPrint({ data: result.character })}`,
		});
	});

	return results;
};
// _______________________________________________
