// FILE: components/shared/input/input-list.tsx
// _________________________________________

import { component$ } from '@builder.io/qwik';
import styles from '~/components/shared/input/input.module.css';
// _________________________________________

// _________________________________________

export const InputList = component$(() => {
  const MUSIC_URL = 'https://uppbeat.imgix.net/images/UppBeat_Playlists_Beats_Lofi-Beats.jpg?auto=compress&w=80&h=80';
  // _______________________________________________
  return (
    <div class={ styles.inputListContainer }>
      <ul class={ styles.inputListWrapper }>
        <li class='uppercase text-sm text-gray-500'>TRENDING</li>
        <li class={ styles.inputListStyles }>
          { /*|====== image ======|*/ }
          <div>
            <img
              class='w-[40px] h-[40px] rounded-full object-contain'
              src={ MUSIC_URL }
              alt=''
            />
          </div>
          { /*|====== text in search drop down ======|*/ }
          <div class='flex content-center items-center '>
            <span class='font-medium text-xs'>Lofi Beats</span>
          </div>
        </li>
      </ul>
    </div>
  );
});
// _______________________________________________