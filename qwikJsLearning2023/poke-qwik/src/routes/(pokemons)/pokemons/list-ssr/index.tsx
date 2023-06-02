// FILE: list-ssr/index.tsx
// _________________________________________
// _________________________________________

import {
	component$,
	useStylesScoped$,
	useVisibleTask$,
} from '@builder.io/qwik';
import { Link, routeLoader$ } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';
import {
	fetchFunFactAboutPokemons,
	fetchSpecificPokemon,
} from '~/api';
import { PokemonImage } from '~/components/pokemons/pokemon-image/pokemon-image';
import { Modal } from '~/components/shared';
import { Loading } from '~/components/shared/loading/loading';
import { useListSSR } from '~/hooks';
import type { SpecificPokemon } from '~/interfaces';
import ListSSRStyles from './list-ssr.css?inline';
// _______________________________________________
/**
 * https://qwik.builder.io/docs/route-loader/
 * Route Loaders load data in the server, so it becomes available
 * to use inside Qwik Components. They behave like RPC server-side
 * functions that can be invoked by Qwik Components during rendering
 * */
export const useRouteLoaderPokemonList = routeLoader$<
	Array<SpecificPokemon>
>(async ({ query, redirect, pathname }) => {
	// the same as `query: URLSearchParams`
	const offset = Number(query.get('offset') || '0');
	console.log({ pathname });

	if (isNaN(offset)) redirect(301, pathname);
	if (offset < 0) redirect(301, pathname);

	return await fetchSpecificPokemon(offset);
});
// _______________________________________________

export default component$(() => {
	useStylesScoped$(ListSSRStyles);

	const {
		pokemonModalState,
		chatGPTPokemonFact,
		pokemons,
		pokemonLocation,
		currentOffset,
		openModalOnClick,
		closeModalOnClick,
	} = useListSSR();
	// ________________ [functions] __________________

	// runs on the client only
	useVisibleTask$(({ track }) => {
		// track the state of the name
		// everytime it changes & then rerun
		track(() => pokemonModalState.name);

		chatGPTPokemonFact.value = '';

		if (pokemonModalState.name.length > 0) {
			fetchFunFactAboutPokemons(pokemonModalState.name).then(
				(res) => (chatGPTPokemonFact.value = res),
			);
		}
	});
	// _______________________________________________
	return (
		<>
			<div class="flex flex-col">
				<span class="my-5 text-5xl">Status</span>
				<span>Current offset: {currentOffset}</span>
				<span>
					Page loaded:{' '}
					{pokemonLocation.isNavigating ? 'No' : 'Yes'}
				</span>
			</div>

			<div class="mt-10">
				<Link
					href={`/pokemons/list-ssr/?offset=${
						currentOffset.value - 10
					}`}
				>
					<button class="btn btn-primary mr-2">Previous</button>
				</Link>
				<Link
					href={`/pokemons/list-ssr/?offset=${
						currentOffset.value + 10
					}`}
				>
					<button class="btn btn-primary">Next</button>
				</Link>
			</div>
			{/** mapping through the list of pokemons ========================= */}
			<div class="grid grid-cols-6 mt-5">
				{pokemons.value.map(({ name, id }: SpecificPokemon) => (
					<div
						key={id}
						onClick$={() => openModalOnClick(id, name)}
						class="list-of-pokemons"
					>
						{/** pokemon-image component ------------------ */}
						<PokemonImage id={id} />
						{/** pokemon-name */}
						<span class="capitalize font-medium">{name}</span>
					</div>
				))}
			</div>
			{/** showing the modal component ==================== */}
			<Modal
				size="lg"
				showModal={pokemonModalState.isModalVisible}
				closeModal$={closeModalOnClick}
			>
				<div q:slot="title">{pokemonModalState.name}</div>
				<div class="style-image" q:slot="content">
					<PokemonImage
						id={pokemonModalState.id}
						loadingText={''}
					/>

					<span>
						{chatGPTPokemonFact.value === '' ? (
							<Loading
								textSize={'text-sm'}
								loadingText={'Asking ChatGPT'}
								textColor={'blue-500'}
							/>
						) : (
							chatGPTPokemonFact.value
						)}
					</span>
				</div>
			</Modal>
		</>
	);
});
// _________________________________________

export const head: DocumentHead = {
	title: 'List-SSR page',
	meta: [
		{
			name: 'description',
			content: 'Qwik page using server-side components',
		},
	],
};
// _________________________________________
