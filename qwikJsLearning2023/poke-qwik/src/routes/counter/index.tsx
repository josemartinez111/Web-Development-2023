// FILE: routes/counter/index.tsx
// _________________________________________
// _________________________________________

import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useCounter } from "~/hooks/use-counter";
// _______________________________________________

export default component$(() => {
	const { counter, incrementCounter, decrementCounter } = useCounter(0);
	// _______________________________________________
	return (
		<>
      <span class="text-5xl mt-5 mb-12">Counter</span>
      <span class="text-7xl">{ counter.value }</span>
			
			<div class="mt-10">
				<button
					onClick$={ decrementCounter }
					class="cursor-pointer btn btn-primary mr-2"
				>Decrease (-1)
				</button>
				<button
					onClick$={ incrementCounter }
					class="cursor-pointer btn btn-primary"
				>Increase (+1)
				</button>
			</div>
    </>
	);
});
// _________________________________________

export const head: DocumentHead = {
	title: 'Counter Page',
	meta: [
		{
			name: 'description',
			content: 'Qwik site fetching pokemon data',
		},
	],
};
// _________________________________________