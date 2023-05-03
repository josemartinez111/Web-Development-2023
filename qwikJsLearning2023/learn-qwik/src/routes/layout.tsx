import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import Header from '~/components/starter/header/header';
import Footer from '~/components/starter/footer/footer';


export const useServerTimeLoader = routeLoader$(() => {
	return {
		date: new Date().toISOString(),
	};
});

export default component$(() => {
	//useStyles$(styles);
	return (
		<>
      <Header />
      <main>
        <section class="container">
	        <Slot />
        </section>
      </main>
      <footer>
      	<p>©copyright alias111 2023</p>
			</footer>
    </>
	);
});
