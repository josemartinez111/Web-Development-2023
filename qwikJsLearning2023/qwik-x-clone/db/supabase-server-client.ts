// // FILE: db/supabase-server-client.ts
// // _______________________________________________
//
// import { RequestEventLoader, routeLoader$ } from "@builder.io/qwik-city";
// import { createServerClient } from "supabase-auth-helpers-qwik";
// // _______________________________________________
//
// export const useSupabase = routeLoader$(async (requestEv: RequestEventLoader) => {
// 	const PUBLIC_SUPABASE_URL = "PUBLIC_SUPABASE_URL";
// 	const PUBLIC_SUPABASE_ANON_KEY = "PUBLIC_SUPABASE_ANON_KEY"
//
// 	const supabaseClient = createServerClient(
// 		requestEv.env.get(PUBLIC_SUPABASE_URL)!,
// 		requestEv.env.get(PUBLIC_SUPABASE_ANON_KEY)!,
// 		requestEv,
// 	);
//
// 	try {
// 		const { data } = await supabaseClient.from('post').select('*');
// 		return data;
// 	} catch (error: unknown) {
// 		if (error instanceof Error) console.error(error.message);
// 		throw error;
// 	}
// });
// // _______________________________________________