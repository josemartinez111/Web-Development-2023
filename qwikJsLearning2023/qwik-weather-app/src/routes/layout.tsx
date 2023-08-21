// FILE: FILE_ROUTE
// _______________________________________________

import { component$, Slot } from '@builder.io/qwik';
import { Footer } from "~/components/footer/footer";
import { Header } from "~/components/header/header";
// _______________________________________________

export default component$(() => {
	// _______________________________________________
	return (
		<>
			<Header />
      <main>
        <section>
          <Slot />
        </section>
      </main>
			<Footer />
    </>
	);
});
// _______________________________________________