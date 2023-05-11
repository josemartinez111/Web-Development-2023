import { component$ } from '@builder.io/qwik';
import { Link } from "@builder.io/qwik-city";
import styles from '~/components/header/header.module.css';

export default component$(() => {
	return (
		<header class={ styles.header }>
      <nav>
        
        {/* logo-image */ }
	      <img src="/mario_mushroom.png" alt="LOGO" />
	      {/* site title in navbar */ }
	      <h1>Mario World</h1>
	      {/* list of links */ }
	      <ul>
        	<li>
            <Link href="/">Home</Link>
          </li>
        	<li>
            <Link href="/about">About</Link>
          </li>
        	<li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
	);
});
