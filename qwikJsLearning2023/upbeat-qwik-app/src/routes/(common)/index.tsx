// FILE: routes/(common)/index.tsx
// _________________________________________

import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PlayList } from '~/components/play-list/play-list';
import { HeadInfo } from '~/components/shared/head-info/head-info';
// _________________________________________

// _______________________________________________

export default component$(() => {
  
  // ________________ [functions] __________________
  
  // _______________________________________________
  return (
    <div>
    <HeadInfo title="Keep creating, keep inspiring 👌" />
    <PlayList />
  </div>
  );
});
// _________________________________________

export const head: DocumentHead = {
  title: 'Home Page',
  meta: [
    {
      name: 'description',
      content: 'Qwik site fetching pokemon data',
    },
  ],
};
// _________________________________________