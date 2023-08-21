// FILE: components/movies/movie-list.tsx
// _______________________________________________

import { ReactElement } from 'react';
import { MovieEditor } from "../../components/movies/movie-editor";
import { Movie } from "../../components/movies/movie";
import { MovieType } from "../../store/slices/movies-slice";
import placeholderImage from '../../assets/placeholder.png';
// _______________________________________________

type MovieListProps = {
	movies: Array<MovieType>;
};
// _______________________________________________

export const MovieList = ({ movies }: MovieListProps): ReactElement => {
	
	// _______________________________________________
	return (
		<div className="movie-list-container">
			<MovieEditor /> {/* For adding new movies */ }
			{ movies.map((movie: MovieType) => (
				<Movie
					key={ movie.id }
					title={ movie.title }
					movieImage={ placeholderImage }
					movie={ movie }
				/>
			)) }
		</div>
	);
};
// _______________________________________________