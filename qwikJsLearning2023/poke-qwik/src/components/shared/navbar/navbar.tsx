// FILE: navbar.tsx
// _________________________________________
// _________________________________________

import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import styles from '~/components/shared/navbar/navbar.module.css';
// _________________________________________

export const NavBar = component$(() => {
	// _________________ functions ___________________

	// _______________________________________________
	return (
		<header class={styles.header}>
			<nav>
				{/* logo-image also `Home` link */}
				<Link href="/">
					<img src="/bulbasaur_transparent.png" alt="LOGO" />
				</Link>
				{/* site title in navbar */}
				<h1>Poke-Qwik</h1>
				{/* list of links ========================== */}
				<ul class="font-medium">
					{/* Home */}
					<li>
						<Link href="/counter">Counter-Hooks</Link>
					</li>
					{/* SSR-List */}
					<li>
						<Link href="/pokemons/list-ssr">SSR-List</Link>
					</li>
					{/* Client-List */}
					<li>
						<Link href="/pokemons/list-client">Client-List</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
});
// _______________________________________________
