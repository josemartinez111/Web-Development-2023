// FILE: components/auth-button.tsx
// _________________________________________

import {
	$,
	component$,
	noSerialize,
	useStylesScoped$,
	useVisibleTask$,
} from '@builder.io/qwik';
import { createBrowserClient } from "supabase-auth-helpers-qwik";
import { GithubIcon } from "~/components";
import styles from './auth-button.css?inline';
// _________________________________________

export const AuthButton = component$(() => {
	useStylesScoped$(styles);
	
	const supabase = noSerialize(createBrowserClient(
		import.meta.env.PUBLIC_SUPABASE_URL,
		import.meta.env.PUBLIC_SUPABASE_CLIENT_SECRET_KEY,
	));
	
	// ________________ [functions] __________________
	
	
	const handleLogin = $(async () => {
		console.log("login clicked...");
		try {
			await supabase?.auth.signInWithOAuth({
				provider: 'github',
				options: {
					redirectTo: 'https://tfvwaeebvmplilnzwvsj.supabase.co/auth/v1/callback',
				},
			});
		} catch (error: unknown) {
			if (error instanceof Error) console.error(error.message);
			throw error;
		}
	});
	
	const handleSignout = $(async () => {
		console.log("signout clicked...");
		await supabase?.auth.signOut();
	});
	// _______________________________________________
	return (
		<div class="flex items-center">
			{ /*|====== flowbite-github login-button ======|*/ }
			<button
				onClick$={ handleLogin }
				type="button"
				class="github-btn"
			>
				<GithubIcon customClass="flex-shrink-0" />
				Sign in with Github
			</button>
			{ /*|====== flowbite-github logout-button ======|*/ }
			<button
				onClick$={ handleSignout }
				type="button"
				class="github-btn"
			>
				<GithubIcon customClass="flex-shrink-0" />
				Logout
			</button>
    </div>
	);
});
// _______________________________________________