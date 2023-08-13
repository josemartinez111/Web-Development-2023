// FILE: App.tsx
// _______________________________________________

import { nanoid } from "@reduxjs/toolkit";
import { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEventType } from "./types/custom-types";
import { MovieList } from "./components/movies/movie-list";
import { MovieType, addMovie } from "./store/slices/movies-slice";
import { RootState } from "./store/store";
// _______________________________________________

const App = (): ReactElement => {
	const movies = useSelector((state: RootState) => state.movies.movieList);
	// console.log({ movies });
	
	const dispatch = useDispatch();
	const [movieTitle, setMovieTitle] = useState('');
	
	
	// _________________ functions _________________
	const handleAddMovie = () => {
		if (movieTitle.trim() === '') {
			// Exit early if the title is empty
			// or only contains whitespace
			return;
		}
		
		const newMovie: MovieType = {
			id: nanoid(),
			title: movieTitle,
		};
		
		dispatch(addMovie(newMovie));
		setMovieTitle(""); // Clear the input after adding
	};
	
	const handleOnChange = () => (event: ChangeEventType) => (
		setMovieTitle(event.target.value)
	);
	// ________________________________________________
	return (
		//==== <>fragment</> ====
		<div className="movie-container">
			<main>
				{ /*|====== MovieList-Component ======|*/ }
				<MovieList movies={ movies } />
				<hr />
				{ /*|====== add movie input ======|*/ }
				<label htmlFor="movie" className="label-input">
					Input movie
				</label>
				<input
					className="input-field"
					id="movie"
					type="text"
					value={ movieTitle }
					onChange={ handleOnChange() }
					placeholder="Enter movie title"
				/>
				{ /*|====== add-movie button ======|*/ }
				<button
					className="add"
					onClick={ handleAddMovie }
				>Add movie
				</button>
			</main>
		</div>
	);
};
// _______________________________________________
export default App;
