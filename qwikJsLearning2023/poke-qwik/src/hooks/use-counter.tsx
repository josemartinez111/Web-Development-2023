// FILE: hooks/use-counter.tsx
// _______________________________________________

import { $, useComputed$, useSignal } from "@builder.io/qwik";
// _______________________________________________

export const useCounter = (initialValue: number) => {
	const counter = useSignal(initialValue);
	
	// ________________ [functions] __________________
	
	const increment = $(() => {
		counter.value++;
	});
	
	const decrement = $(() => {
		if (counter.value <= 0) return;
		counter.value--;
	});
	// _______________________________________________
	return {
		counter: useComputed$(() => counter.value), // makes this read-only
		incrementCounter: increment,
		decrementCounter: decrement,
	};
};
// _______________________________________________