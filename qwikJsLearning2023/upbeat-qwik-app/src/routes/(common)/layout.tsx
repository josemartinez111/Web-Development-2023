// FILE: routes/(common)/layout.tsx
// _______________________________________________

import { component$, Slot } from '@builder.io/qwik';
import { Header } from '~/components/header/header';
import { SideBar } from '~/components/sidebar/sidebar';
// _______________________________________________

export default component$(() => {
  // _______________________________________________
  
  return (
    <div class='h-[100vh] flex'>
    <div class='w-[256px] fixed '>
      <div class='bg-gray-50 h-[100vh]'>
        <div class='p-6 border-gray-200 border-b'>
          {/* <Logo /> */}
        </div>
        <div class={ '' }>
          <SideBar />
        </div>
      </div>
    </div>
    <div class='pl-[256px] w-full'>
      <Header />
      <Slot />
    </div>
      {/* <FooterPlayer /> */}
  </div>
  );
});
// _______________________________________________