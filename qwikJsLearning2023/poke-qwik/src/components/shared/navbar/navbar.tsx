// FILE: $FILE_NAME$
// _________________________________________
// _________________________________________

import { component$ } from '@builder.io/qwik';
import { Link } from "@builder.io/qwik-city";
import styles from '~/components/shared/navbar/navbar.module.css';
// _________________________________________

export const NavBar = component$(() => {
	
	// _________________ functions ___________________
	
	// _______________________________________________
	return (
		<header class={ styles.header }>
			<nav class="shadow-lg shadow-gray-700">
        {/* logo-image */ }
	      <img src="/bulbasaur_transparent.png" alt="LOGO" />
	      {/* site title in navbar */ }
	      <h1>Poke-Qwik</h1>
	      {/* list of links */ }
	      <ul>
        	<li>
            <Link href="/">Home</Link>
          </li>
		      {/* <li> */ }
		      {/*   <Link href="/about">About</Link> */ }
		      {/* </li> */ }
		      {/* <li> */ }
		      {/*   <Link href="/contact">Contact</Link> */ }
		      {/* </li> */ }
        </ul>
      </nav>
    </header>
	);
});
// _______________________________________________
