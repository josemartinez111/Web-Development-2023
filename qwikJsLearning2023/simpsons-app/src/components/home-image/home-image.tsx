// FILE: components/home-image/home-image.tsx
// _________________________________________

import { component$, Signal, Slot } from '@builder.io/qwik';
import { Quote } from '~/components/icons/quote';
import { CharacterType } from '~/types/type';
// _________________________________________

type HomeImageProps = {
	user: CharacterType;
	selectCharacter$: () => CharacterType;
	selectedCharacter: Signal<CharacterType>;
};
// _________________________________________

export const HomeImage = component$<HomeImageProps>(
	({ user, selectCharacter$, selectedCharacter }) => {
		// _______________________________________________
		return (
			<li>
				<figure class="overflow-hidden relative">
					<picture class="max-w-[150px] max-h-[150px] home-picture-tag">
						<img
							class="home-image"
							src={user.image}
							alt={user.character}
							width="300"
							height="488"
						/>
					</picture>
					{/*|====== icon-button component ======|*/}
					<button onClick$={selectCharacter$} class="home-icon">
						<Quote customClass="max-w-[40px] max-h-[40px]" />
					</button>
					<figcaption class="text-sm">{user.character}</figcaption>
				</figure>
				{/*|======
				conditionally-select the user when clicked & display modal component
				<Slot /> = children
       ======|*/}
				{selectedCharacter.value == user && <Slot />}
			</li>
		);
	},
);
// _______________________________________________
