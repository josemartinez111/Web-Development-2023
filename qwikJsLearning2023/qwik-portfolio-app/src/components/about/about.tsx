// FILE: components/about/about.tsx
// _________________________________________
// _________________________________________

import { component$ } from '@builder.io/qwik';
import styles from './about.module.css'
// _________________________________________

export const About = component$(() => {
	
	// ________________ [functions] __________________
	
	// _______________________________________________
	return (
		<div id='about' class={styles.container}>
			<div class={styles.subContainer}>
				<div class='p-8'>
					<p class={styles.about}>About</p>
				</div>
				<p class="text-xl mt-5">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Aliquam, consequuntur eaque est harum ipsam natus suscipit vero.
					Eaque ipsam iure laborum vel. Animi architecto aspernatur earum
					sunt vitae? Distinctio dolor dolorum enim est hic id laborum molestias,
					mollitia nihil obcaecati officia perferendis porro provident quas ratione
					reprehenderit sed sit veniam.
				</p>
				<br/>
				<p class="text-xl">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Aliquam, consequuntur eaque est harum ipsam natus suscipit vero.
					Eaque ipsam iure laborum vel. Animi architecto aspernatur earum
					sunt vitae? Distinctio dolor dolorum enim est hic id laborum molestias,
					mollitia nihil obcaecati officia perferendis porro provident quas ratione
					reprehenderit sed sit veniam.
				</p>
			</div>
		</div>
	);
});
// _______________________________________________