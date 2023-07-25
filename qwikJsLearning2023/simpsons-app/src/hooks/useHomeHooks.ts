// FILE: hooks/useHomeHooks.ts
// _______________________________________________
// _______________________________________________

import { $, useSignal } from "@builder.io/qwik";
import { CharacterListResponse, CharacterType } from '~/types/type';

export const useHomeHooks = () => {
	const selectedCharacter = useSignal({} as CharacterType);
	
	const uniqueFilteredCharacters = (
		characters: CharacterListResponse,
	): Array<CharacterType> => {
		const uniqueCharactersSet = new Set();

		return characters.filter((character: CharacterType) => {
			if (
				character.characterDirection === 'Right' &&
				!uniqueCharactersSet.has(character.character)
			) {
				// const setResult = uniqueCharactersSet.add(character.character);
				// console.log({ setResult });
				uniqueCharactersSet.add(character.character);
				return true;
			}
		});
	};

	const characterSelected = (user: CharacterType) =>
		$(() => {
			return (selectedCharacter.value = user);
		});

	const handleModalClick = () =>
		$(() => {
			return (selectedCharacter.value = {} as CharacterType);
		});

	return {
		uniqueFilteredCharacters,
		characterSelected,
		handleModalClick,
		selectedCharacter
	};
};
// _______________________________________________
