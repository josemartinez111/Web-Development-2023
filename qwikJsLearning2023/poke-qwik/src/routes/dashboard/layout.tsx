// FILE: routes/counter/layout.tsx
// _________________________________________
// _________________________________________

import { component$, Slot } from '@builder.io/qwik';
import {
	Link,
	RequestEventLoader/*, RequestEventAction */,
	routeLoader$,
} from '@builder.io/qwik-city';
import { NavBar } from '~/components/shared';
// _______________________________________________

// won't allow an unauthenticated user to enter this page
export const useAuthCookieCheck = routeLoader$((requestEvent: RequestEventLoader) => {
	const jwtCookie = requestEvent.cookie.get('jwt');
	
	if (jwtCookie) {
		console.log('Cookie value:', jwtCookie);
		return;
	}
	
	throw requestEvent.redirect(302, '/login');
});
// _______________________________________________

export default component$(() => {
	return (
		<>
			{/* navigation-bar */ }
			<NavBar />
			{/* main layout for dashboard ======================== */ }
			<div class='shared-layout-container'>
			<span class='text-5xl'>Dashboard Layout</span>
			<Slot />
				{/* button to go back home */ }
				<Link href='/'>
				<button class='btn btn-primary mt-10'>
					Home
				</button>
			</Link>
		</div>
		</>
	);
});
// _________________________________________
