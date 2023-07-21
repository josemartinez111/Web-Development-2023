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
      <Link class="btn-white hover-text-shadow" href="/home">
        Enter App
      </Link>
      {/*|====== simpsons-images ======|*/ }
      <div class="flex gap-12">
        <ImgBart class="hidden md:block object-contain" alt="Bart Simpson" />
        <ImgHomer class="hidden md:block object-contain mt-12" alt="Homer Simpson" />
        <ImgMoe class="object-contain mt-20 md:mt-0" alt="Moe" />
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
