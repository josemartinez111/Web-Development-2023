// FILE: context/player-wave.context.ts
// _______________________________________________

import { createContextId } from '@builder.io/qwik';
// _______________________________________________

export type PlayerWaveState = {
  src: string;
  play: boolean;
}
// _______________________________________________

export const PlayerWaveContext = createContextId<PlayerWaveState>('player-wave.context');
// _______________________________________________