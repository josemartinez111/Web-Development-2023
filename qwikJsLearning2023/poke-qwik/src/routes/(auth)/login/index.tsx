// FILE: routes/login/index.tsx
// _________________________________________
// _________________________________________

import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import LoginStyles from './login.css?inline';
// _______________________________________________

export default component$(() => {
	useStylesScoped$(LoginStyles);

	// ________________ [functions] __________________

	// _______________________________________________
	return (
		<form class="login-form">
			{/** email-input ------------------------- */}
			<div class="relative">
				<input name="email" type="text" placeholder="Email address" />
				<label for="email">Email Address</label>
			</div>
			{/** password-input ------------------------- */}
			<div class="relative">
				<input
					id="password"
					name="password"
					type="password"
					placeholder="Password"
				/>
				<label for="password">Password</label>
			</div>
			{/** register-button ------------------------- */}
			<div class="relative">
				<button>Register</button>
			</div>

			{/* <code>
			 { JSON.stringify( formState, undefined , 2 ) }
			 </code> */}
		</form>
	);
});
// _________________________________________

export const head: DocumentHead = {
	title: 'Login Page',
	meta: [
		{
			name: 'description',
			content: 'Qwik site fetching pokemon data',
		},
	],
};
// _________________________________________
