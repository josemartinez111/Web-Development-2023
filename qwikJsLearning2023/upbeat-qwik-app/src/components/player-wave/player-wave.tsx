// FILE: components/player-wave/player-wave.tsx
// _________________________________________

import { component$, useContext, useVisibleTask$ } from '@builder.io/qwik';
import WaveSurfer from 'wavesurfer.js';
import { PlayerWaveContext } from '~/context/player-wave.context';
// _________________________________________

interface PlayerWaveProps {
  id: string;
  src: string;
  preview: string;
}
// _________________________________________

export const PlayerWave = component$<PlayerWaveProps>(({ id, src, preview }) => {
  const playerWaveState = useContext(PlayerWaveContext);
  // ________________ [functions] __________________
  
  useVisibleTask$(() => {
    const waveIn = WaveSurfer.create({
      container: `#${ id }`,
      waveColor: '#BBBBBB',
      progressColor: 'rgb(219 39 119)',
      height: 70,
      cursorWidth: 1,
      cursorColor: 'transparent',
      barWidth: 2,
      normalize: true,
      fillParent: true,
    });
    
    return waveIn.load(preview);
  });
  // _______________________________________________
  return (
    <div class='w-full h-[70px]' onClick$={ () => playerWaveState.src = src }>
      <div id={ id } />
    </div>
  );
});
// _______________________________________________