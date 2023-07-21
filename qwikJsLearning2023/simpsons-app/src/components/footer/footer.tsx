// FILE: components/footer.tsx
// _________________________________________

import { component$ } from "@builder.io/qwik";
import styles from "~/components/footer/footer.module.css"
// _________________________________________

// _________________________________________

export const Footer = component$(() => {
  
  // ________________ [functions] __________________
  
  // _______________________________________________
  return (
    <footer class={`bg-brand ${styles.footer}`}>
      <div class="text-sm">
        <strong>All Rights Reserved</strong> Oh Lord Matt Groening - 1989-2023
      </div>
      <small>
        This app was done by{" "}
        <a title="Github" href="https://github.com/josemartinez111">
          <strong>josemartinez111</strong>
        </a>
      </small>
    </footer>
  );
});
// _______________________________________________












