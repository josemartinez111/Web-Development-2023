// FILE: utils/utils/local-storage.ts
// _______________________________________________

import { initialState } from "../store/slices/movies-slice";
import { RootState } from "../store/store";
// _______________________________________________

/**
 * Local storage utilities to handle saving and loading the entire Redux state.
 * Any changes to the slices (e.g., movie's slice) will be automatically reflected
 * in the serialized state that is saved to and loaded from local storage.
 * This includes accommodating CRUD actions such as adding, updating, and deleting.
 */

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
		const movieListLength = JSON.parse(serializedState || '').movies.movieList.length;
		
		// If the state is null or movie list is empty, return the initial state
		return serializedState === null || movieListLength === 0
			? { movies: initialState }
			: JSON.parse(serializedState);

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