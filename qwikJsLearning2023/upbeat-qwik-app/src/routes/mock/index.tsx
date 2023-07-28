// FILE: routes/mock/index.tsx
// _________________________________________

import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ExampleComponent } from '~/components/mock-for-docs/use-on-window';
// _________________________________________

// _______________________________________________

export default component$(() => {
  
  // ________________ [functions] __________________
  
  // _______________________________________________
  return (
    <>
     <ExampleComponent />
    </>
  );
});
// _________________________________________

export const head: DocumentHead = {
  title: 'Mock Page',
  meta: [
    {
      name: 'description',
      content: 'Qwik site fetching pokemon data',
    },
  ],
};
// _________________________________________