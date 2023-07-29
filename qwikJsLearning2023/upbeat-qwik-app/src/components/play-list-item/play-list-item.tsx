// FILE: components/play-list-item/play-list-item.tsx
// _________________________________________

import { component$, NoSerialize } from '@builder.io/qwik';
import WaveSurfer from 'wavesurfer.js';
import { PlayerWave } from '~/components';
import styles from '~/components/play-list-item/play-list-item.module.css';
// _________________________________________

type PlayListItemProps = {
  wave?: NoSerialize<WaveSurfer>;
  play?: boolean
  src: string;
  preview: string;
  name: string;
  artist: string;
  cover: string;
  tags: Array<string>;
  id: number;
}
// _________________________________________

export const PlayListItem = component$<PlayListItemProps>(({ artist, cover, id, name, preview, src, tags }) => {
  // const id = `wave_${ id }`;
  // ________________ [functions] __________________
  
  // _______________________________________________
  return (
    <div class='group'>
      <div class={ styles.container }>
        <div class='flex gap-6 w-1/5'>
          { /*|====== song-cover ======|*/ }
          <div>
            <img
              class='rounded-full h-[60px] w-[60px] object-cover'
              src={ cover }
              alt=''
            />
          </div>
          { /*|====== artist ======|*/ }
          <div class='text-sm flex flex-col justify-center'>
            <div class='font-semibold'>{ name }</div>
            <div>{ artist }</div>
            <div class={ styles.artist }>
              More Like this
            </div>
          </div>
        </div>
        { /*|====== tags-list ======|*/ }
        <div class=' flex content-center items-center gap-2 w-1/4'>
          { tags.map(() => {
            return (
              <>
                <span class={ styles.chill }>
                  Chill
                </span>
              </>
            );
          }) }
        </div>
        <div class=' flex gap-6 w-1/2'>
          <div class='flex justify-center items-center w-full'>
            <PlayerWave
              src={ src }
              preview={ preview }
              id={ `wave_${ id }` }
            />
          </div>
        </div>
      </div>
    </div>
  );
});
// _______________________________________________