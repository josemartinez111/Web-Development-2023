// FILE: index.tsx
// _________________________________________

import { component$ } from '@builder.io/qwik';
import {
	Form,
	JSONObject,
	RequestEventAction,
	routeAction$,
} from "@builder.io/qwik-city";
import type { DocumentHead } from '@builder.io/qwik-city';
// _________________________________________
const url = new URL("https://api.openai.com/v1/chat/completions");

export const usePromptAction = routeAction$(
	async (formData: JSONObject, requestEvAction: RequestEventAction) => {
		const prompt = formData.prompt;
		const token = requestEvAction.env.get("PUBLIC_OPENAI_API_KEY");
		
		const requestBody = {
			model: "gpt-3.5-turbo",
			messages: [{ role: "user", content: prompt }],
		};
		
		const requestHeaders = {
			"Content-Type": "application/json",
			Authorization: `Bearer ${ token }`,
		};
		
		const options = {
			method: "POST",
			headers: requestHeaders,
			body: JSON.stringify(requestBody),
		};
		
		try {
			const response = await fetch(url, options);
			const data = await response.json();
			const result = data.choices[ 0 ].message.content;
			// console.log("content:", result);
			
			return result;
		} catch (error: unknown) {
			if (error instanceof Error) console.error(error.message);
			throw error;
		}
	});
// _______________________________________________

export default component$(() => {
	const action = usePromptAction();
	
	// ________________ [functions] __________________
	
	// _______________________________________________
	return (
		<main class="max-w-4xl mx-auto p-4">
      <h1 class="text-5xl underline">
        Qwik Home Page
      </h1>
			{ /*|====== form ======|*/ }
			<Form class="grid gap-4" action={ action }>
				<div>
					<label for="prompt">Prompt</label>
					<textarea name="prompt" id="prompt"></textarea>
				</div>
				{ /*|====== submit-button ======|*/ }
				<div>
					<button
						type="submit"
						aria-disabled={ action.isRunning }
					>
						{ action.isRunning ? 'Submitting...' : 'Submit' }
					</button>
				</div>
			</Form>
			
			{ action.value && (
				<article class="mt-4 border-2 rounded-lg p-4 bg-[canvas]">
					{ action.value }
				</article>
			) }
    </main>
	);
});
// _________________________________________

export const head: DocumentHead = {
	title: 'Home Page',
	meta: [
		{
			name: 'description',
			content: 'Qwik site fetching pokemon data',
		},
	],
};
// _________________________________________