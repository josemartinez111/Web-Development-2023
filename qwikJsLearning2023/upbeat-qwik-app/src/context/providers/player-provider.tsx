// FILE: context/providers/player-provider.tsx
// _________________________________________

import { component$, Slot, useContextProvider, useStore } from '@builder.io/qwik';
import {
  PlayerListWaveContext,
  PlayListWaveState,
} from '~/context/player-list-wave.context';
import { PlayerWaveContext, PlayerWaveState } from '~/context/player-wave.context';
// _________________________________________

// _________________________________________

export const PlayerProvider = component$(() => {
  const playerWaveState = useStore<PlayerWaveState>({
    src: '',
    play: false,
  })
  
  const playListWaveState = useStore<PlayListWaveState>({
    src: '',
    preview: '',
    name: '',
    artist: '',
    cover: '',
    tags: [],
    id: 0
  })
  // ________________ [ContextProvider] __________________
  
  useContextProvider(PlayerWaveContext, playerWaveState)
  useContextProvider(PlayerListWaveContext, playListWaveState)
  // _______________________________________________
  return (
    <>
			<Slot />
		</>
  );
});
// _______________________________________________