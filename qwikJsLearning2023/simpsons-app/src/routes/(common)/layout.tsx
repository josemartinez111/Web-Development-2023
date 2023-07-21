// FILE: routes/(common)/layout.tsx
// _________________________________________

import { component$, Slot } from "@builder.io/qwik";
import { Footer } from "~/components/footer/footer";
import { Header } from "~/components/header/header";
import { PageWrapper } from "~/components/page-wrapper/page-wrapper";
// _______________________________________________

export default component$(() => {
  // ________________ [functions] __________________

  // _______________________________________________

  return (
    <PageWrapper>
      <Header />
      <Slot />
      <Footer />
    </PageWrapper>
  );
});
// _________________________________________
