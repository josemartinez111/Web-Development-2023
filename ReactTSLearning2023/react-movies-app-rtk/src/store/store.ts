// FILE: store/store.ts
// _______________________________________________

import { configureStore } from "@reduxjs/toolkit";
import { loadFromLocalStorage, saveToLocalStorage } from "../utils/local-storage";
import { moviesReducer } from "../store/slices/movies-slice.ts";
// _______________________________________________

// Define RootState to represent the entire Redux store state
export type RootState = ReturnType<typeof store.getState>;
const persistedMovieListState = loadFromLocalStorage();
// _______________________________________________

export const store = configureStore({
	reducer: {
		movies: moviesReducer,
	},
	preloadedState: persistedMovieListState,
});

/**
 * link to docs: https://redux-toolkit.js.org/rtk-query/api/createApi#basequery-function-arguments
 * @store.getState
 * Reads the state tree managed by the store.
 * */
store.subscribe(() => saveToLocalStorage(store.getState()))
// _______________________________________________
