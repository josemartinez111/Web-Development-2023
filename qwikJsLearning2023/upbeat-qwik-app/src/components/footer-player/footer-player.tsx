// FILE: components/footer-player/footer-player.tsx
// _________________________________________

import {
  $,
  component$, noSerialize,
  useContext,
  useSignal,
  useStore,
  useTask$, useVisibleTask$,
} from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import WaveSurfer from 'wavesurfer.js';
import { PlayerButton } from '~/components';
import { PlayerWaveContext } from '~/context/player-wave.context';
// _________________________________________

// _________________________________________

export const FooterPlayer = component$(() => {
  const location = useLocation();
  const playListWaveState = useContext(PlayerWaveContext);
  
  const isPlaying = useSignal(false);
  
  const playerWave = useStore<{ wave: WaveSurfer | undefined }>({
    wave: undefined,
  });
  // ________________ [functions] __________________
  
  useTask$(({ track }) => {
    track(() => location.url.pathname);
    
    if (playerWave) {
      playerWave.wave?.pause();
    }
    
    console.log('route change...');
  });
  
  useTask$(({ track }) => {
    track(() => playListWaveState.src);
    
    if (playerWave) {
      playerWave.wave?.load(playListWaveState.src);
    }
  });
  
  useVisibleTask$(() => {
    const waveIn = WaveSurfer.create({
      container: `#global-player`,
      waveColor: '#BBBBBB',
      progressColor: 'rgb(219 39 119)',
      height: 50,
      cursorWidth: 1,
      cursorColor: 'transparent',
      barWidth: 2,
      normalize: true,
      fillParent: true,
    });
    
    playerWave.wave = noSerialize(waveIn);
    
    waveIn.on('ready', () => {
      console.log('song loaded...');
    });
    
    waveIn.on('play', () => {
      console.log('song playing...');
    });
    
    waveIn.on('pause', () => {
      console.log('song paused...');
    });
    
    return () => {
    };
  });
  
  const handlePlay = $(() => {
    isPlaying.value = !isPlaying.value;
    if (isPlaying.value) playerWave.wave?.play();
    if (!isPlaying.value) playerWave.wave?.pause();
  });
  // _______________________________________________
  return (
    <div
      class='fixed justify-between flex bottom-0 left-0 w-full h-[64px] bg-white border-solid border-t  z-10'>
      <div class='w-1/6 flex items-center content-center justify-center '>
        <PlayerButton
          handlePlayClick$={ handlePlay }
          isPlaying={ isPlaying.value }
        />
      </div>
      <div class='w-full flex items-center content-center  justify-center '>
        <div class='w-full ' id='global-player' />
      </div>
    </div>
  );
});
// _______________________________________________