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
	updateMovie: (state: MovieState, action: PayloadAction<MovieType>): void => {
		const updatedMovie = action.payload;
		
		const movieIndex = state.movieList.findIndex((movie: MovieType) => (
			movie.id === updatedMovie.id
		));
		
		if (movieIndex !== -1) state.movieList[ movieIndex ] = updatedMovie;
	},
	deleteMovie: (state: MovieState, action: PayloadAction<string>): void => {
		const id = action.payload;
		
		state.movieList = state.movieList.filter((movie: MovieType) => (
			movie.id !== id
		));
	},
};
// _______________________________________________

export const moviesSlice = createSlice({
	name: 'movies',
	initialState: initialState,
	reducers: moviesSliceReducers,
});
// _______________________________________________

export const { addMovie, updateMovie, deleteMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;

// _______________________________________________