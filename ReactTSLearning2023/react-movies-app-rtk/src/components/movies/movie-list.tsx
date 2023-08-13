// FILE: components/movies/movie-list.tsx
// _______________________________________________

import { ReactElement } from 'react';
import { Movie } from "./movie";
import { MovieType } from "../../store/slices/movies-slice";
// _______________________________________________

type MovieListProps = {
	movies: Array<MovieType>;
};
// _______________________________________________

export const MovieList = ({ movies }: MovieListProps): ReactElement => {
	
	// _______________________________________________
	return (
		<div className="movie-list-container">
			{ movies.map((movie: MovieType) => (
				<Movie key={ movie.id } title={ movie.title } />
			)) }
		</div>
	);
};
// _______________________________________________