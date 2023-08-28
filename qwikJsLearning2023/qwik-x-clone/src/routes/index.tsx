// FILE: components/routes/index.tsx
// _________________________________________

import { component$ } from '@builder.io/qwik';
import { RequestEventLoader, routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead } from '@builder.io/qwik-city';
import { createServerClient } from "supabase-auth-helpers-qwik";
import { AuthButton } from "~/components/auth-button/auth-button";
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from "~/utils/constants";
// _________________________________________

export const useSupabase = routeLoader$(async (requestEv: RequestEventLoader) => {
	const supabaseClient = createServerClient(
		requestEv.env.get(PUBLIC_SUPABASE_URL)!,
		requestEv.env.get(PUBLIC_SUPABASE_ANON_KEY)!,
		requestEv,
	);
	
	try {
		const { data: posts, error: supabaseError } = await supabaseClient
			.from('posts')
			.select('*');
		
		// check if the table exists & if not displays the supabase error
		if (!posts) console.error({ supabaseError }); else {
			console.table(posts);
		}
		
		return { posts };
	} catch (error: unknown) {
		if (error instanceof Error) console.error(error.message);
		throw error;
	}
});
// _______________________________________________

export default component$(() => {
	const postTableData = useSupabase();
	// ________________ [functions] __________________
	
	
	// _______________________________________________
	return (
		<main class="home-container">
			<AuthButton />
			<pre>
				{ JSON.stringify(postTableData.value, null, 2) }
			</pre>
    </main>
	);
});
// _________________________________________

export const head: DocumentHead = {
	title: 'Moon-lamp',
	meta: [
		{
			name: 'description',
			content: 'E-commerce site for moon lamps',
		},
	],
};
// _________________________________________