// FILE: routes/layout.tsx
// _______________________________________________

import { component$, Slot } from '@builder.io/qwik';
import { Header } from '~/components/header/header';
// _______________________________________________

export default component$(() => {
  // _______________________________________________
  return (
    <>
      { /*|====== header-component ======|*/ }
      <Header />
      <main>
        <section>
          <Slot />
        </section>
      </main>
    </>
  );
});
// _______________________________________________