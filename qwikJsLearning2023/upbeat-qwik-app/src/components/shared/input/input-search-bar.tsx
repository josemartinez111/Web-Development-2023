// FILE: components/shared/input/input.tsx
// _________________________________________

import {
  $,
  component$,
  useOnWindow,
  useSignal,
} from '@builder.io/qwik';
import { InputList } from '~/components/shared/input/input-list';

// _________________________________________

/**
 * const { windowState, searchInput } = useWindowDropdown();
 * ref={ (item) => searchInput.value = item as HTMLElement }
 * onClick$={ () => (windowState.value = true) }*/
function useWindowDropdown() {
  const windowState = useSignal(false);
  const searchInput = useSignal<HTMLElement | null>(null);
  
  const handleWindowClick = $((event: Event): void => {
    if (searchInput.value && !searchInput.value.contains(event.target as Node)) {
      windowState.value = false;
    }
  });
  
  useOnWindow('click', handleWindowClick);
  
  return {
    windowState,
    searchInput,
  };
}

// _________________________________________

export const InputSearchBar = component$(() => {
  const { windowState, searchInput } = useWindowDropdown();
  // ________________ [functions] __________________
  
  const setSearchInputRef = (item: Element): void => {
    searchInput.value = item as HTMLElement;
  };
  // _______________________________________________
  return (
    <div
      class={ { 'drop-shadow-lg': windowState.value } }
      onClick$={ () => windowState }>
			<div class={ { 'qwik-input-src': true } }>
        { /*|====== search-input ======|*/ }
        <input
          type='text'
          class='bg-transparent w-full cursor-pointer'
          id='input-src-qwik'
          placeholder='Search tracks, artists, styles or sound effects'
          ref={ setSearchInputRef }
          onClick$={ () => (windowState.value = true) }
        />
        { /*|====== search-button ======|*/ }
        <div class='flex justify-center content-center items-center '>
          <button class='bg-slate-800 rounded-lg w-6 h-6'>
            <i class='text-white uil uil-search'></i>
          </button>
        </div>
      </div>
      { windowState.value ? <InputList /> : null }
		</div>
  );
});
// _______________________________________________