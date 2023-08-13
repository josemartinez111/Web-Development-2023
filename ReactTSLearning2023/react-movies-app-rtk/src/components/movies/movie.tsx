// FILE: components/movies/movie.tsx
import { ReactElement } from 'react';
import placeholderImage from '../../assets/placeholder.png';
import './movies.css'
// _______________________________________________

export const Movie = ({ title }: { title: string }): ReactElement => {
	
	// _______________________________________________
	return (
		<div className="movie-card">
				<img
					src={ placeholderImage }
					alt={ title }
					className="movie-image"
				/>
				<p className="movie-title">{ title }</p>
			</div>
	);
};
// _______________________________________________


