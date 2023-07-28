// FILE: components/shared/player-button/player-button.tsx
// _________________________________________

import { component$ } from '@builder.io/qwik';
import styles from '~/components/shared/player-button/player-button.module.css';
// _________________________________________

type PlayerButtonProps = {
  handlePlayClick$: () => void;
  isPlaying: boolean;
}
// _________________________________________

export const PlayerButton = component$<PlayerButtonProps>(({
  handlePlayClick$,
  isPlaying,
}) => {
  // _______________________________________________
  return (
    <button
      class={ styles.btn }
      onClick$={ handlePlayClick$ }
    >
      { isPlaying
        ? (<i class='uil uil-pause'></i>)
        : (<i class='uil uil-play'></i>)
      }
    </button>
  );
});
// _______________________________________________