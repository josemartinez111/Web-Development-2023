// FILE: components/custom-router.tsx
// _________________________________________

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
// _________________________________________

type CustomRouterTypeProp = {
  customHRef: string;
  routeTitle: string;
  customClass?: string;
};
// _________________________________________

export const CustomRouter = component$<CustomRouterTypeProp>(
  ({ customHRef, routeTitle, customClass }) => {
    return (
      <li>
        <Link class={ customClass } href={ customHRef }>
          { routeTitle }
        </Link>
      </li>
    );
  }
);
// _______________________________________________
