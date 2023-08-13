// FILE: components/about/about.tsx
// _________________________________________

import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './about.scss?inline';
// _________________________________________

// _________________________________________

export const About = component$(() => {
  useStylesScoped$(styles)
  // ________________ [functions] __________________
  
  // _______________________________________________
  return (
    <>
			<h1 style={ { fontSize: '4.3em' } }>
			About Component 🚀🫡💣
			</h1>
		</>
  );
});
// _______________________________________________