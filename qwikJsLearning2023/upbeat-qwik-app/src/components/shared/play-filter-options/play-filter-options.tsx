// FILE: components/shared/play-filter-options/play-filter-options.tsx
// _________________________________________

import { component$, useContext } from '@builder.io/qwik';
import { PlayerListWaveContext } from '~/context/player-list-wave.context';
import styles
  from '~/components/shared/play-filter-options/play-filter-options.module.css';
// _________________________________________

// _________________________________________

export const PlayFilterOptions = component$(() => {
  const playListWaveState = useContext(PlayerListWaveContext);
  
  // ________________ [functions] __________________
  
  // _______________________________________________
  return (
    <div class={ 'flex gap-2' }>
      { playListWaveState.options?.map((option, index) => (
        <span
          key={ index }
          class={ styles.containerWrapper }>
          { option.label }
        </span>
      )) }
    </div>
  );
});
// _______________________________________________