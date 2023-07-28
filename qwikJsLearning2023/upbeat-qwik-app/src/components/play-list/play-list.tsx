// FILE: components/play-list/play-list.tsx
// _________________________________________

import { component$ /* Resource */, useContext } from '@builder.io/qwik';
import {
  PlayFilterOptions,
} from '~/components/shared/play-filter-options/play-filter-options';
import { PlayFilter } from '~/components/shared/play-filter/play-filter';
import { PlayerListWaveContext } from '~/context/player-list-wave.context';
// _________________________________________

// _________________________________________

export const PlayList = component$(() => {
  const playListWaveState = useContext(PlayerListWaveContext);
  // ________________ [functions] __________________
  
  // _______________________________________________
  return (
    <div
      class={ 'pl-14  min-h-[calc(100vh_-_206px_-_76px)] flex flex-col gap-2' }
    >
      <div class={ 'flex gap-5' }>
        <PlayFilter
          values={ [
            { label: 'Moderate', value: 'Moderate' },
            { label: 'Calm', value: 'Moderate' },
            { label: 'Energetic', value: 'Moderate' },
            { label: 'Internse', value: 'Moderate' },
            { label: 'Very Calm', value: 'Moderate' },
          ] }
          label='Energy'
        />
        <PlayFilter values={ [] } label='Vocals' />
        <PlayFilter values={ [] } label='Duration' />
      </div>
      { playListWaveState.openFilter ? (
        <div class={ 'flex pb-3' }>
          <PlayFilterOptions />
        </div>
      ) : null }
      <div class={ ' bg-gray-100 rounded-t-2xl ' }>
        <div class={ 'p-6 py-4  border-gray-200' }></div>
        {/* <div class={"p-6 flex flex-col gap-2"}> */ }
        {/*   <Resource value={resourceData} */ }
        {/*             onPending={() => <>Cargando...</>} */ }
        {/*             onRejected={() => <>Error!</>} */ }
        {/*             onResolved={(data) => data.map((i:any) => <PlayListItem {...i} />)} */ }
        {/*   /> */ }
        {/* </div> */ }
      </div>
    </div>
  );
});
// _______________________________________________