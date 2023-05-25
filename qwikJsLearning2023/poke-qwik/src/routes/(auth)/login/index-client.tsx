// FILE: routes/login/index.tsx
// _________________________________________
// _________________________________________

import {
	component$,
	$,
	useStore,
	useStylesScoped$, useComputed$,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import LoginStyles from './login.css?inline';
// _______________________________________________

type LoginType = {
	email: string;
	password: string;
	isFormPosted: boolean;
}
// _______________________________________________

export default component$(() => {
	useStylesScoped$(LoginStyles);
	
	const formState = useStore<LoginType>({
		email: '',
		password: '',
		isFormPosted: false,
	});
	
	const emailErrorComputed = useComputed$(() => {
		if (formState.email.includes('@')) return '';
		return 'not-valid';
	});
	
	const passwordErrorComputed = useComputed$(() => {
		if (formState.password.length >= 6) return '';
		return 'not-valid';
	});
	
	const isFormValidComputed = useComputed$(() => {
		return !(
			emailErrorComputed.value === 'not-valid' ||
			passwordErrorComputed.value === 'not-valid'
		);
	});
	// ________________ [functions] __________________
	
	const onSubmitForm = $(() => {
		formState.isFormPosted = true;
		const { email, password } = formState;
		
		console.log({ isFormValid: isFormValidComputed.value });
		console.log({ email, password });
	});
	// _______________________________________________
	return (
		<form
			preventdefault:submit
			onSubmit$={ onSubmitForm }
			class='login-form'>
			{/** email-input ------------------------- */ }
			<div class='relative'>
				<input
					class={ formState.isFormPosted ? emailErrorComputed.value : '' }
					value={ formState.email }
					onInput$={ (event) =>
						(formState.email = (
							event.target as HTMLInputElement
						).value)
					}
					name='email'
					type='text'
					placeholder='Email address'
				/>
				<label for='email'>Email Address</label>
			</div>
			{/** password-input ------------------------- */ }
			<div class='relative'>
				<input
					class={ formState.isFormPosted ? passwordErrorComputed.value : '' }
					value={ formState.password }
					onInput$={ (event) =>
						(formState.password = (
							event.target as HTMLInputElement
						).value)
					}
					id='password'
					name='password'
					type='password'
					placeholder='Password'
				/>
				<label for='password'>Password</label>
			</div>
			{/** register-button ------------------------- */ }
			<div class='relative'>
				<button type='submit'>Register</button>
			</div>

			<code>{ JSON.stringify(formState, undefined, 2) }</code>
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
