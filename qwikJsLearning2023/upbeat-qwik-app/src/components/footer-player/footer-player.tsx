// FILE: components/footer-player/footer-player.tsx
// _________________________________________

import { component$ } from '@builder.io/qwik';
import { PlayerButton } from '~/components/shared/player-button/player-button';
// _________________________________________

// _________________________________________

export const FooterPlayer = component$(() => {
  
  // ________________ [functions] __________________
  
  // _______________________________________________
  return (
    <div class='fixed justify-between flex bottom-0 left-0 w-full h-[64px] bg-white border-solid border-t  z-10'>
      <div class='w-1/6 flex items-center content-center justify-center '>
        <PlayerButton handlePlayClick$={ () => {} } isPlaying={ true } />
      </div>
      <div class='w-full flex items-center content-center  justify-center '>
        <div class='w-full ' id='global-player' />
      </div>
    </div>
  );
});
// _______________________________________________