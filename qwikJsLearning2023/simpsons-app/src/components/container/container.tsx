// FILE: container/container.tsx
// _________________________________________

import { component$, Slot } from "@builder.io/qwik";
import styles from "~/components/container/container.module.css";
// _________________________________________


export const Container = component$(({ customClass }: { customClass?: string }) => {
  // _______________________________________________
  return (
    <main class={ `${ styles.wrapper } ${ customClass }` }>
      { /*|====== <Slot /> = children like react ======|*/ }
      <Slot />
		</main>
  );
});
// _______________________________________________