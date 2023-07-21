// FILE: (common)/home.tsx
// _________________________________________

import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
// _________________________________________

// _______________________________________________

export default component$(() => {
  
  // ________________ [functions] __________________
  
  // _______________________________________________
  return (
    <>
      <h1>
        Qwik Home page
      </h1>
    </>
  );
});
// _________________________________________

export const head: DocumentHead = {
  title: "Home Page",
  meta: [
    {
      name: "description",
      content: "Qwik site fetching pokemon data"
    }
  ]
};
// _________________________________________