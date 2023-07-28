// FILE: context/providers/player-list-wave.context.ts
// _______________________________________________

import { createContextId, NoSerialize } from '@builder.io/qwik';
import WaveSurfer from 'wavesurfer.js';
// _______________________________________________

export type PlayListWaveState = {
  wave?: NoSerialize<WaveSurfer>;
  play?: boolean,
  openFilter?: boolean;
  options?: Array<{ label: string; value: string }>;
  src: string,
  preview: string,
  name: string,
  artist: string,
  cover: string,
  tags: Array<string>,
  id: number
}
// _______________________________________________

export const PlayerListWaveContext = createContextId<PlayListWaveState>('player-list-wave.context');
// _______________________________________________