// FILE: (common)/home.tsx
// _________________________________________

import { component$ } from '@builder.io/qwik';
import { Link, routeLoader$, useNavigate } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';
import { fetchSimpsons } from '~/api/fetchSimpsons';
import { Container } from '~/components/container/container';
import { HomeImage } from '~/components/home-image/home-image';
import { QuoteModal } from '~/components/quote-modal/quote-modal';
import { useHomeHooks } from '~/hooks/useHomeHooks';
import { CharacterListResponse, CharacterType } from '~/types/type';
import { useFormattedOutput } from '~/utils/utilities';
// _________________________________________

/** https://qwik.builder.io/docs/route-loader/
 * !Route Loaders load data in the `server`, so it becomes available to use
 * !inside Qwik Components. They trigger when SPA/MPA navigation happens,
 * !so they can be invoked by Qwik Components during rendering. Route Loaders
 * !can only be declared inside the src/routes folder, in a layout.tsx or
 * !index.tsx file, and they MUST be exported. */
export const useCharacters = routeLoader$<CharacterListResponse>(async () => {
	// Record the time before fetching data
	const start = Date.now();

	try {
		const result = await fetchSimpsons(12);
		// Record the time after fetching data
		const end = Date.now();

		// Time taken in milliseconds
		const duration = end - start;
		// Convert to seconds and round to two decimal places
		const seconds = (duration / 1000).toFixed(2);
		useFormattedOutput({
			strArg: `Data fetch took ${seconds} seconds.`,
		});

		return result;
	} catch (error: unknown) {
		if (error instanceof Error) console.error(error.message);
		throw error;
	}
});

export const useServerTime = routeLoader$(() => {
	// This will re-execute in the server when the page refreshes.
	const unixTimestamp = Date.now();
	const time = new Date(unixTimestamp);

	// Convert to string in the format: Monday, 03:21:33 PM
	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: true,
	};
	const dateTimeString = time.toLocaleTimeString('en-US', options);

	return dateTimeString;
});
// _______________________________________________

export default component$(() => {
	const {
		handleModalClick,
		uniqueFilteredCharacters,
		characterSelected,
		selectedCharacter,
	} = useHomeHooks();

	const refresh = useNavigate();

	const characters = useCharacters();
	const filteredCharacters = uniqueFilteredCharacters(characters.value);
	// console.log({ filteredCharacters });
	const serverTime = useServerTime();
	// _______________________________________________
	return (
		<Container customClass="home-container">
			<div class="text-center">
				{/*|====== header-text ======|*/}
				<h1 class="font-bold text-xl lg:text-5xl">The Simpsons Quote App</h1>
				{/*|====== paragraph-text ======|*/}
				<p>Click on the quote of your favorite character</p>
			</div>

			{/*|====== list-of-images ======|*/}
			<ul class="grid-container">
				{filteredCharacters.map((user: CharacterType) => (
					<HomeImage
						key={user.character}
						user={user}
						selectCharacter$={characterSelected(user)}
						selectedCharacter={selectedCharacter}
					>
						<QuoteModal closeModal$={handleModalClick()} user={user} />
					</HomeImage>
				))}
			</ul>
			{/*|====== new-quotes button ======|*/}
			<Link class="yellow-btn" onClick$={() => refresh()}>
				New quotes
			</Link>
			{/*|====== for-testing ======|*/}
			<p>Server time: {serverTime.value}</p>
		</Container>
	);
});
// _________________________________________

export const head: DocumentHead = {
	title: 'Home Page',
	meta: [
		{
			name: 'description',
			content: 'Qwik site fetching pokemon data',
		},
	],
};
// _________________________________________
