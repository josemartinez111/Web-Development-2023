// FILE: routes/login/index.tsx
// _________________________________________
// _________________________________________

import { component$, useStylesScoped$ } from '@builder.io/qwik';
import {
	Form,
	JSONObject,
	RequestEventAction,
	routeAction$, zod$, z,
} from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';
import LoginStyles from './login.css?inline';
// _______________________________________________

const zodValidation = zod$({
	email: z.string().email('Format for email not valid'),
	password: z.string().min(6, 'Minimum of 6 characters for valid password'),
});
/**
 * https://qwik.builder.io/docs/action/
 * routeAction$: Actions allows to handle form submissions,
 * allowing to perform side effects such as writing to a
 * database, or sending an email.Actions can also return data
 * back to the client/browser, allowing to update the UI accordingly,
 * i.e. showing a success message after a form submission.
 * ------------------------------------------------------------------
 * Using actions with <Form/>:
 * The best way to call an action is using the <Form/> component
 * exported in @builder.io/qwik-city. Under the hood, the <Form/>
 * component uses a native HTML <form> element, so it will work
 * without JavaScript. When JS is enabled, the <Form/> component
 * will intercept the form submission and trigger the action in SPA
 * mode, allowing to have a full SPA experience.
 * ------------------------------------------------------------------
 * Using actions programmatically:
 * Actions can also be triggered programmatically using the action.submit()
 * method, i.e. you don't need a <Form/> component, but you can trigger the
 * action from a button click or any other event, just like you would do with
 * a function.
 * */
export const useLoginUserAction = routeAction$(
	(data: JSONObject, { cookie, redirect }: RequestEventAction) => {
		const { email, password } = data;
		
		if (email === 'jose_qwik@fake.com' && password === '123456') {
			// creating a json-web-token
			// in the browser go to `application/Cookies` to see the success case
			const cookieOptions = { secure: true, path: '/' };
			cookie.set('jwt', 'this is my jwt', cookieOptions);
			
			/**
			 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302
			 * `302 Found`
			 * if successful, redirect to the `home` page.
			 * */
			redirect(302, '/');
			
			return {
				success: true,
				jwt: 'this is my jwt',
			};
		}
		
		return {
			success: false,
		};
	}, zodValidation);
// _______________________________________________

export default component$(() => {
	useStylesScoped$(LoginStyles);
	
	const userAction = useLoginUserAction();
	
	// ________________ [functions] __________________
	
	
	// _______________________________________________
	return (
		<Form action={ userAction } class='login-form mt-5'>
			{/** email-input ------------------------- */ }
			<div class='relative mb-5 mt-5'>
				<input
					name='email' type='text' placeholder='Email address' />
				<label for='email'>Email Address</label>
			</div>
			{/** password-input ------------------------- */ }
			<div class='relative mb-5'>
				<input id='password' name='password' type='password'
				       placeholder='Password' />
				<label for='password'>Password</label>
			</div>
			{/** register-button ------------------------- */ }
			<div class='relative mt-5'>
				<button type='submit'>Register</button>
			</div>
			
			<p>
				{ userAction.value?.success && (
					<code>
						Authenticated with Token: { userAction.value.jwt }
					</code>
				) }
			</p>
			
			<code>{ JSON.stringify(userAction.value, undefined, 2) }</code>
		</Form>
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
