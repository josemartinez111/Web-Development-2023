// FILE: components/navbar
// _________________________________________

import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './navbar.css?inline'
// _________________________________________

// _________________________________________

export const Navbar = component$(() => {
	useStylesScoped$(styles)
 
	// ________________ [functions] __________________
	
	// _______________________________________________
	return (
		<nav>
			<a href="/">
        QWIK <br /> WEATHER
			</a>
		</nav>
	);
});
// _______________________________________________