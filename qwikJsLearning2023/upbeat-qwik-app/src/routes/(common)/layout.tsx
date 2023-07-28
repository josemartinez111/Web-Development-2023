// FILE: routes/(common)/layout.tsx
// _______________________________________________

import { component$, Slot } from '@builder.io/qwik';
import { FooterPlayer } from '~/components/footer-player/footer-player';
import { Header } from '~/components/header/header';
import { Logo } from '~/components/logo/logo';
import { SideBar } from '~/components/sidebar/sidebar';
import { PlayerProvider } from '~/context/providers/player-provider';
// _______________________________________________

export default component$(() => {
  // _______________________________________________
  
  return (
    <PlayerProvider>
      <div class='h-[100vh] flex'>
        <div class='w-[256px] fixed '>
          <div class='bg-gray-50 h-[100vh]'>
            { /*|====== logo-component ======|*/ }
            <div class='p-6 border-gray-200 border-b'>
              <Logo />
            </div>
            { /*|====== sidebar-component ======|*/ }
            <div class={ ' ' }>
              <SideBar />
            </div>
          </div>
        </div>
        { /*|====== header/children components ======|*/ }
        <div class='pl-[256px] w-full'>
          <Header />
          <main>
            <Slot />
          </main>
        </div>
        <FooterPlayer />
      </div>
    </PlayerProvider>
  );
});
// _______________________________________________