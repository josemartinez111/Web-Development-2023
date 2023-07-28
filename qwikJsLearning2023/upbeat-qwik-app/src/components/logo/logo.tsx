// FILE: components/logo/logo.tsx
// _________________________________________

import { component$ } from '@builder.io/qwik';
import logo from '/assets/images/logo.svg';
// _________________________________________

// _________________________________________

export const Logo = component$(() => {
  
  // ________________ [functions] __________________
  
  // _______________________________________________
  return (
    <span>
      <img
        src={ logo }
        alt='Logo Image'
        width='150'
        height='150'
      />
    </span>
  );
});
// _______________________________________________