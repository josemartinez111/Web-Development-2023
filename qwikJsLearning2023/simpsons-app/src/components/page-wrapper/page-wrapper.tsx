// FILE: page-wrapper/page-wrapper.tsx
// _________________________________________

import { component$, Slot } from "@builder.io/qwik";
// _________________________________________

// _________________________________________

export const PageWrapper = component$(() => {
  // ________________ [functions] __________________

  // _______________________________________________
  return (
    <div class="grid-page">
      <Slot />
    </div>
  );
});
// _______________________________________________
