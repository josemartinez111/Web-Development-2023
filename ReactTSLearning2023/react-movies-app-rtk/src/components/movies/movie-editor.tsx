// FILE: movie-editor.tsx
import { nanoid } from "@reduxjs/toolkit";
import { ReactElement, useState } from 'react';
import { useDispatch } from "react-redux";
import { ChangeEventType } from "../../types/custom-types";
import { addMovie } from "../../store/slices/movies-slice";
import './movies.css';
// _______________________________________________

export const MovieEditor = (): ReactElement => {
	const dispatch = useDispatch();
	const [movieTitle, setMovieTitle] = useState("");
	
	const handleAddMovie = () => {
		if (movieTitle.trim() === "") return;
		
		// Add new movie
		dispatch(addMovie({ id: nanoid(), title: movieTitle }));
		setMovieTitle("");
	};
	
	const handleOnChange = () => (event: ChangeEventType) => (
		setMovieTitle(event.target.value)
	);
	// _______________________________________________
	return (
		<div className="movie-editor">
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
			<button className="add" onClick={ handleAddMovie }>
				Add movie
			</button>
		</div>
	);
};
// _______________________________________________