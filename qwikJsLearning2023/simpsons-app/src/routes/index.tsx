import ImgMoe from "~/media/img/moe.png?jsx";
import ImgHomer from "~/media/img/homer.png?jsx";
import ImgBart from "~/media/img/bart.png?jsx"; // FILE: routes/page-wrapper.tsx
// _________________________________________

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Logo } from "~/components/icons/logo";
// _________________________________________

// _______________________________________________

export default component$(() => {
  // ________________ [functions] __________________
  
  // _______________________________________________
  return (
    <div class="landingPage">
      {/*|====== logo-component ======|*/ }
      <Logo customClass="w-64 sm:w-[35rem]" />
      {/*|====== header-text ======|*/ }
      <h1 class="text-xl my-1 font-medium">
        Discover some of the most amazing Quotes from The Simpsons
      </h1>
      {/*|====== disclaimer-text ======|*/ }
      <div>
        <strong>DISCLAIMER:</strong> This is an unofficial app (even though it
        looks so cool!)
      </div>
      {/*|====== enter-app button ======|*/ }
      <Link
        class="btn-white hover-text-shadow active:opacity-10 transition-opacity duration-200"
        href="/home"
      >Enter App
      </Link>
      {/*|====== simpsons-images ======|*/ }
      <div class="flex gap-12">
        <img
          class="hidden md:block object-contain"
          src="/img/bart.png"
          alt="Bart Simpson"
          width="195"
          height="291"
        />
        <img
          class="hidden md:block object-contain mt-12"
          src="/img/homer.png"
          alt="Homer Simpson"
          width="175"
          height="287"
        />
        <img
          class="object-contain mt-20 md:mt-0"
          src="/img/moe.png"
          alt="Moe"
          width="224"
          height="330"
        />
      </div>
    </div>
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
