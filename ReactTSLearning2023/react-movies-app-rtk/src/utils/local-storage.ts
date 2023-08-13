// FILE: utils/utils/local-storage.ts
// _______________________________________________

import { initialState } from "../store/slices/movies-slice";
import { RootState } from "../store/store";
// _______________________________________________

// Save state to local storage
export const saveToLocalStorage = (state: RootState): void => {
	try {
		const serializedState = JSON.stringify(state, null, 2);
		console.log('SAVED MOVIE TO=>LocalStorage:\n', serializedState);
		
		localStorage.setItem('state', serializedState);
	} catch (error: unknown) {
		// Ensure error is an instance of Error before accessing error.message
		if (error instanceof Error) {
			console.warn('Could not save the state', error);
			console.error(error.message);
		}
		throw error;
	}
};

// Load state from local storage
export const loadFromLocalStorage = () => {
	try {
		const serializedState = localStorage.getItem('state');
		// single source of truth of the default state of the movie list
		if (serializedState === null) return { movies: initialState };
		
		return JSON.parse(serializedState);
	} catch (error: unknown) {
		// Ensure error is an instance of Error before accessing error.message
		if (error instanceof Error) {
			console.warn('Could not load the state', error);
			console.error(error.message);
		}
		throw error;
	}
};
// _______________________________________________