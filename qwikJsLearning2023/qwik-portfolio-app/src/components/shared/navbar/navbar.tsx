// FILE: navbar/navbar.tsx
// _________________________________________
// _________________________________________

import { $, component$, useSignal, useStore } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { InCancel, InMenu } from '@qwikest/icons/iconoir';
import styles from './navbar.module.css';
// _________________________________________

export const Navbar = component$(() => {
	const isNavShowing = useSignal(false);
	
	const links = useStore([
		{ id: 1, link: 'home' },
		{ id: 2, link: 'about' },
		{ id: 3, link: 'portfolio' },
		{ id: 4, link: 'experience' },
		{ id: 5, link: 'contact' },
	]);
	// ________________ [functions] __________________
	
	const toggleNavMenu = $(() => {
		isNavShowing.value = !isNavShowing.value;
	});
	// _______________________________________________
	return (
		<nav class={ styles.container }>
			<div>
				<h1 class="font-signature text-5xl ml-2">Jose</h1>
			</div>
			{/* navigation links ================================ */ }
			<ul class="hidden md:flex">
				{/* mapping through our row of links & adding them dynamically */ }
				{ links.map(({ id, link }) => (
					<li key={ id } class={ styles.homeLinks }>
						<Link href="/">{ link }</Link>
					</li>
				)) }
			</ul>
			{/*|====== navbar-menu icon ======|*/ }
			<div
				onClick$={ toggleNavMenu }
				class={ styles.menu }>
				{ isNavShowing.value ? <InCancel /> : <InMenu /> }
			</div>
			{ /*|====== render-dropdown conditionally ======|*/ }
			{ isNavShowing.value && (
				<ul class={styles.dropDownNav}>
				{ links.map(({ id, link }) => (
					<li key={ id } class={ styles.dropDownHomeLinks }>
						<Link href="/">{ link }</Link>
					</li>
				)) }
			</ul>
			) }
		</nav>
	);
});
// _______________________________________________
