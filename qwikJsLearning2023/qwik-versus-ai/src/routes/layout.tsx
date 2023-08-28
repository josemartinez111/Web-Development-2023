// FILE: routes/layout.tsx
// _______________________________________________

import { component$, Slot } from '@builder.io/qwik';
// import { Footer, Header } from "~/components";
// _______________________________________________

export default component$(() => {
	// _______________________________________________
	return (
		<>
      {/* <Header /> */}
      <main>
        <section>
          <Slot />
        </section>
      </main>
      {/* <Footer /> */}
    </>
	);
});
// _______________________________________________