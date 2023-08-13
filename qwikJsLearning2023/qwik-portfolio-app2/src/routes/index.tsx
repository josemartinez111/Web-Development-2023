// FILE: routes/index.tsx
// _________________________________________

import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { About, Jumbotron } from '~/components';
// _________________________________________

// _______________________________________________

export default component$(() => {
  
  // ________________ [functions] __________________
  
  // _______________________________________________
  return (
    <>
      { /*|====== jumbotron-component ======|*/ }
      <Jumbotron />
      { /*|====== about-com ======|*/ }
      <About />
    </>
  );
});
// _________________________________________

export const head: DocumentHead = {
  title: 'Index Page',
  meta: [
    {
      name: 'description',
      content: 'Qwik site fetching pokemon data',
    },
  ],
};
// _________________________________________