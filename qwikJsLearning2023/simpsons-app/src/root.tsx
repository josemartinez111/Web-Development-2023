// FILE: root.tsx
// _______________________________________________

import { component$ } from "@builder.io/qwik";
import { RouterHead } from "./components/router-head/router-head";
import "./global.css";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister
} from "@builder.io/qwik-city";
// _______________________________________________

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */
  
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
// _______________________________________________