// FILE: components/player-wave/player-control.tsx
// _________________________________________

import { component$, useContext } from '@builder.io/qwik';
import { PlayerListWaveContext } from '~/context/player-list-wave.context';
import styles from '~/components/player-wave/player-wave.module.css';
// _________________________________________

export const PlayerControl = component$(() => {
  const playerControlState = useContext(PlayerListWaveContext);
  // _______________________________________________
  return (
    <>
      { /*|====== play & pause buttons ======|*/ }
      { playerControlState.play ? (
          <button
            class={ styles.btn1 }
            onClick$={ () => playerControlState.wave?.play() }
          >
          <i class='uil uil-play' />
        </button>
        ) :
        (
          <button
            class={ styles.btn2 }
            onClick$={ () => playerControlState.wave?.pause() }
          >
            <i class='uil uil-pause' />
          </button>
        )
      }
		</>
  );
});
// _______________________________________________