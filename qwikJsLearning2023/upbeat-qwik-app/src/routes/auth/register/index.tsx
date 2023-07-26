// FILE: routes/auth/register/index.tsx
// _________________________________________

import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
// _________________________________________

// _______________________________________________

export default component$(() => {
  
  // ________________ [functions] __________________
  
  // _______________________________________________
  return (
    <>
      <h1 style={ { fontSize: '4.3em' } }>
        Qwik Register page
      </h1>
    </>
  );
});
// _________________________________________

export const head: DocumentHead = {
  title: 'Register Page',
  meta: [
    {
      name: 'description',
      content: 'Qwik site fetching pokemon data',
    },
  ],
};
// _________________________________________