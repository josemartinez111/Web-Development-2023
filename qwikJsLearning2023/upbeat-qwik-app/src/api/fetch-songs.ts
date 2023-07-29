// FILE: api/fetch-songs.ts
// _______________________________________________

import { Song, SongsListResponse } from '~/types/type';
import { print } from '~/utils/utils';
// _______________________________________________

const SONG_URL = new URL('https://eocrx1nlkkqxmi2.m.pipedream.net/');
// _______________________________________________

export const fetchSongs = async (): Promise<SongsListResponse> => {
  try {
    const response = await fetch(SONG_URL);
    
    if (!response.ok) {
      console.error(`Error: ${ response.statusText }`);
      const fallbackSong: Song = {
        id: -1,
        src: 'NOT FOUND',
        preview: 'NOT FOUND',
        name: 'NOT FOUND',
        artist: 'NOT FOUND',
        cover: 'NOT FOUND',
        tags: ['NOT FOUND'],
      };
      
      return Array.of(fallbackSong); // return default-empty value immediately
    }
    
    const songData = (await response.json()) as SongsListResponse;
    print({ data: songData });
    
    return songData;
  } catch (error: unknown) {
    if (error instanceof Error) console.error(error.message);
    throw error;
  }
};
// _______________________________________________