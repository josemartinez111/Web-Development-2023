// FILE: App.tsx
// _______________________________________________

import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { MovieList } from "./components/movies/movie-list";
import { RootState } from "./store/store";
// _______________________________________________

const App = (): ReactElement => {
	const movies = useSelector((state: RootState) => state.movies.movieList);
	// console.log({ movies });
	// _________________ functions _________________
	
	// ________________________________________________
	return (
		//==== <>fragment</> ====
		<div className="movie-container">
			<main>
				{ /*|====== MovieList-Component ======|*/ }
				<MovieList movies={ movies } />
			</main>
		</div>
	);
};
// _______________________________________________
export default App;
