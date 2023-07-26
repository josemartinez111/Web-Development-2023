// FILE: routes/auth/layout.tsx
// _______________________________________________

import { component$, Slot } from '@builder.io/qwik';
// _______________________________________________

export default component$(() => {
  // _______________________________________________
  return (
    <div>
      <div>This is only visible in the <b>auth route</b></div>
      <Slot />
    </div>
  );
});
// _______________________________________________