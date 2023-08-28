// FILE: routes/layout.tsx
// _______________________________________________

import { component$, Slot } from '@builder.io/qwik';
import { Footer } from "~/components/UI/footer/footer";
import { Header } from "~/components/UI/header/header";
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