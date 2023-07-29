// FILE: components/play-filter/play-filter.tsx
// _________________________________________

import { $, component$, useContext } from '@builder.io/qwik';
import { PlayerListWaveContext } from '~/context/player-list-wave.context';
// _________________________________________

type PlayFilterProps = {
  label: string;
  values: Array<{ label: string, value: string }>
}
// _________________________________________

export const PlayFilter = component$<PlayFilterProps>(({ label, values }) => {
  const playListWaveState = useContext(PlayerListWaveContext);
  // ________________ [functions] __________________
  
  const handleFilter = $(() => {
    playListWaveState.openFilter = !playListWaveState.openFilter;
    playListWaveState.options = values;
  });
  // _______________________________________________
  return (
    <div
      onClick$={ handleFilter }
      class='flex gap-1 text-gray-400 hover:text-gray-600 select-none'
    >
      <span class='uppercase font-medium text-sm  cursor-pointer'>
        { label }
      </span>
      <span>
        <i class='uil uil-angle-down' />
      </span>
    </div>
  );
});
// _______________________________________________