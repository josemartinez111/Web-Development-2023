// FILE: api/fetch-chatgpt-response.ts
// _______________________________________________
import { Configuration, OpenAIApi } from "openai";
// _______________________________________________

const configuration = new Configuration({
	apiKey: import.meta.env.PUBLIC_OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);
// _______________________________________________

export const fetchFunFactAboutPokemons = async (pokemonName: string): Promise<string> => {
	// remove the `User-Agent` error in the browser
	delete configuration.baseOptions.headers[ 'User-Agent' ];
	
	const response = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: `Tell me interesting information about the pokemon (${ pokemonName })`,
		temperature: 1,
		max_tokens: 60,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
	});
	
	// console.log("ChatGPT's response:", response);
	const result = response.data.choices[ 0 ].text ||
		`No information about pokemon (${ pokemonName })`;
	
	return result;
};
// _______________________________________________

