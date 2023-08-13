// FILE: store/movies-slice.ts
// _______________________________________________

import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
// _______________________________________________

export type MovieType = {
	id: string;
	title: string;
};

export type MovieState = {
	movieList: Array<MovieType>;
};
// _______________________________________________

// also serves as the `single-source-of-truth`
// of the default state for the movie list
export const initialState: MovieState = {
	movieList: [
		{ id: nanoid(), title: 'Pulp Fiction' },
		{ id: nanoid(), title: 'Rambo' },
	],
};

const moviesSliceReducers = {
	addMovie: (state: MovieState, action: PayloadAction<MovieType>): void => {
		const newMovie = action.payload;
		state.movieList.push(newMovie);
	},
};
// _______________________________________________

export const moviesSlice = createSlice({
	name: 'movies',
	initialState: initialState,
	reducers: moviesSliceReducers,
});
// _______________________________________________

export const { addMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;

// _______________________________________________