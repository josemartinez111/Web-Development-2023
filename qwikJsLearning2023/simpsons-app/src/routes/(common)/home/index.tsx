// FILE: (common)/home.tsx
// _________________________________________

import { $, component$, useSignal } from "@builder.io/qwik";
import { Link, routeLoader$, useNavigate } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import { fetchSimpsons } from "~/api/fetchSimpsons";
import { Container } from "~/components/container/container";
import { Quote } from "~/components/icons/quote";
import { CharacterListResponse, CharacterType } from "~/types/type";
// _________________________________________

/** https://qwik.builder.io/docs/route-loader/
 * !Route Loaders load data in the `server`, so it becomes available to use
 * !inside Qwik Components. They trigger when SPA/MPA navigation happens,
 * !so they can be invoked by Qwik Components during rendering. Route Loaders
 * !can only be declared inside the src/routes folder, in a layout.tsx or
 * !index.tsx file, and they MUST be exported. */
export const useCharacters = routeLoader$<CharacterListResponse>(async () => {
  try {
    return fetchSimpsons(12);
  } catch (error: unknown) {
    if (error instanceof Error) console.error(error.message);
    throw error;
  }
});
// _______________________________________________

export default component$(() => {
  const selectedCharacter = useSignal({} as CharacterType);
  const refresh = useNavigate();
  const characters = useCharacters();
  const filteredCharacters = uniqueFilteredCharacters(characters.value);
  
  // ________________ [functions] __________________
  
  function uniqueFilteredCharacters(
    characters: CharacterListResponse
  ): Array<CharacterType> {
    const uniqueCharactersSet = new Set();
    
    return characters.filter((character: CharacterType) => {
      if (
        character.characterDirection === "Right" &&
        !uniqueCharactersSet.has(character.character)
      ) {
        // const setResult = uniqueCharactersSet.add(character.character);
        // console.log({ setResult });
        uniqueCharactersSet.add(character.character);
        
        return true;
      }
    });
  }
  
  const characterSelected = (user: CharacterType) => $(() => (
    selectedCharacter.value = user
  ));
  
  // _______________________________________________
  return (
    <Container customClass="home-container">
      <div class="text-center">
        {/*|====== header-text ======|*/ }
        <h1 class="font-bold text-xl lg:text-5xl">The Simpsons Quote App</h1>
        {/*|====== paragraph-text ======|*/ }
        <p>Click on the quote of your favorite character</p>
      </div>
      
      {/*|====== list-of-images ======|*/ }
      <ul class="grid-container">
        { filteredCharacters.map((user: CharacterType) => (
          <li key={ user.character }>
            <figure class="overflow-hidden relative">
              <picture class="max-w-[150px] max-h-[150px] home-picture-tag">
                <img
                  class="home-image"
                  src={ user.image }
                  alt={ user.character }
                  width="300"
                  height="488"
                />
              </picture>
              {/*|====== icon-button component ======|*/ }
              <button
                onClick$={ characterSelected(user) }
                class="home-icon"
              >
                <Quote customClass="max-w-[40px] max-h-[40px]" />
              </button>
              <figcaption class="text-sm">{ user.character }</figcaption>
            </figure>
            
            { /*|====== conditionally-select the user when clicked ======|*/ }
            { selectedCharacter.value == user ? (
              <p>test</p>
            ) : null }
          </li>
        )) }
      </ul>
      {/*|====== new-quotes button ======|*/ }
      <Link class="yellow-btn" onClick$={ () => refresh() }>
        New quotes
      </Link>
    </Container>
  );
});
// _________________________________________

export const head: DocumentHead = {
  title: "Home Page",
  meta: [
    {
      name: "description",
      content: "Qwik site fetching pokemon data"
    }
  ]
};
// _________________________________________
