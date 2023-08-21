// FILE: components/movies/movie.tsx
import { ReactElement, useState } from 'react';
import { useDispatch } from "react-redux";
import {
	deleteMovie,
	MovieType,
	updateMovie,
} from "../../store/slices/movies-slice";
import './movies.css';
// _______________________________________________

type MovieProps = {
	title: string;
	movieImage: string
	movie: MovieType;
};
// _______________________________________________

export const Movie = ({ title, movie, movieImage }: MovieProps): ReactElement => {
	const dispatch = useDispatch();
	const [isEditing, setIsEditing] = useState(false);
	const [updatedTitle, setUpdatedTitle] = useState(title);
	
	const handleUpdateMovie = () => {
		// Toggle edit mode
		setIsEditing(true);
	};
	
	const handleSaveUpdate = () => {
		// Update movie in Redux store
		dispatch(updateMovie({ ...movie, title: updatedTitle }));
		setIsEditing(false);
	};
	
	const handleDeleteMovie = () => {
		dispatch(deleteMovie(movie.id));
	};
	// _______________________________________________
	return (
		<div className="movie-card">
			<img
				src={ movieImage }
				alt={ title }
				className="movie-image"
			/>
			{ isEditing ? (
				<input
					type="text"
					value={ updatedTitle }
					onChange={ (e) => setUpdatedTitle(e.target.value) }
					className="movie-title-input"
				/>
			) : (
				<p className="movie-title">{ title }</p>
			) }
			{ isEditing ? (
				<button className="update" onClick={ handleSaveUpdate }>
					Save
				</button>
			) : (
				<button className="update" onClick={ handleUpdateMovie }>
					Update movie
				</button>
			) }
			<button className="delete" onClick={ handleDeleteMovie }>
				Delete movie
			</button>
		</div>
	);
};
// _______________________________________________