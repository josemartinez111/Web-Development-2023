// FILE: components/header.tsx
// _________________________________________

import { component$, useSignal } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { CustomRouter } from "~/components/custom-router/custom-router";
import { Logo } from "~/components/icons/logo";
import styles from "~/components/header/header.module.css";
// _________________________________________

type LinkType = {
  href: string;
  title: string;
  customClass: string;
}
// _________________________________________

export const Header = component$(() => {
  const location = useLocation();
  const defaultStyles: string =
    "gap-8 flex scale-100 transition-all hover:scale-125 focus:scale-125";
  const scaleStyles = useSignal(defaultStyles);
  // ________________ [functions] __________________
  
  const getClassForPath = (path: string): string => {
    return `${ scaleStyles } ${ location.url.href === path ? "!font-bold" : "" }`;
  };
  
  const links: Array<LinkType> = [
    { href: "/home", title: "Home", customClass: getClassForPath("/home") },
    { href: "/about", title: "About", customClass: getClassForPath("/about") },
    { href: "/", title: "Exit", customClass: "btn btn-contrast" }
  ];
  // _______________________________________________
  
  return (
    <header class="bg-brand w-full border border-black">
      <div class={ `nav ${ styles.container }` }>
        {/*|====== simpson-logo-image link ======|*/ }
        <Link href="/home">
          <Logo customClass="w-48 h-auto" />
        </Link>
        {/*|====== page-link list ======|*/ }
        <ul class="flex gap-8">
          { links.map((link: LinkType) => (
            <CustomRouter
              key={ link.href }
              customClass={ link.customClass }
              customHRef={ link.href }
              routeTitle={ link.title }
            />
          )) }
        </ul>
      </div>
    </header>
  );
});
// _______________________________________________
