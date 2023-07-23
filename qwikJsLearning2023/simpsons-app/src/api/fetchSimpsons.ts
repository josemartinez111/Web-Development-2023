// FILE: api/fetchSimpsons.ts
// https://thesimpsonsquoteapi.glitch.me/quote?count=50
// _______________________________________________

import { CharacterListResponse } from "~/types/type";
// _______________________________________________

const BASE_URL = new URL("https://thesimpsonsquoteapi.glitch.me");
// _______________________________________________

export const fetchSimpsons = async (count: number): Promise<CharacterListResponse> => {
  const url = `${ BASE_URL }/quotes?count=${ count }`;
  const response = await fetch(url);
  
  if (!response.ok) throw new Error(response.statusText);
  
  const results = (await response.json()) as CharacterListResponse;
  // console.log({ results });
  return results;
};
// _______________________________________________