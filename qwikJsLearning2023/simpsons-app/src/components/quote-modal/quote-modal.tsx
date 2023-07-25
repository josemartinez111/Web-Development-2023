// FILE: components/quote-modal/quote-modal.tsx
// _________________________________________

import { component$ } from '@builder.io/qwik';
import { CharacterType } from '~/types/type';
import styles from '~/components/quote-modal/quote-modal.module.css';
// _________________________________________

type QuoteModalProps = {
	closeModal$: () => CharacterType;
	user: CharacterType;
};
// _________________________________________

export const QuoteModal = component$<QuoteModalProps>(
	({ closeModal$, user }) => {
		// ________________ [functions] __________________

		// _______________________________________________
		return (
			<div class={styles.container}>
				{/*|====== overlay ======|*/}
				<div class={styles.wrapper}>
					{/*|====== close-button ======|*/}
					<button
						onClick$={closeModal$}
						class="btn btn-contrast absolute top-1 right-3"
						aria-label="Close Quote Character"
					>
						&#10006;
					</button>
					{/*|====== quote & character ======|*/}
					<blockquote class="flex flex-col gap-2">
						"{user.quote}" <i class="font-semibold">{user.character}</i>
					</blockquote>
				</div>
			</div>
		);
	},
);
// _______________________________________________
