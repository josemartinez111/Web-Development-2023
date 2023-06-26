import { InputEvent, WithChildren } from '@/types/types.shared.ts';
import { useState } from 'react';

export type MovieDataType = {
	imdbID: string;
	title: string;
	year: string;
	poster: string;
};

const tempMovieData: Array<MovieDataType> = [
	{
		imdbID: 'tt1375666',
		title: 'Inception',
		year: '2010',
		poster:
			'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
	},
	{
		imdbID: 'tt0133093',
		title: 'The Matrix',
		year: '1999',
		poster:
			'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
	},
	{
		imdbID: 'tt6751668',
		title: 'Parasite',
		year: '2019',
		poster:
			'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
	},
];

export type WatchedDataType = {
	imdbID: string;
	Title: string;
	Year: string;
	Poster: string;
	runtime: number;
	imdbRating: number;
	userRating: number;
};

const tempWatchedData: Array<WatchedDataType> = [
	{
		imdbID: 'tt1375666',
		Title: 'Inception',
		Year: '2010',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
		runtime: 148,
		imdbRating: 8.8,
		userRating: 10,
	},
	{
		imdbID: 'tt0088763',
		Title: 'Back to the Future',
		Year: '1985',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
		runtime: 116,
		imdbRating: 8.5,
		userRating: 9,
	},
];

const average = (arr: Array<number>): number =>
	arr.reduce((acc: number, cur: number) => acc + cur, 0) / arr.length;
// _______________________________________________
/** @structural-component */
const App = () => {
	const [movies, setMovies] = useState<Array<MovieDataType>>(tempMovieData);
	const [watched, setWatched] =
		useState<Array<WatchedDataType>>(tempWatchedData);
	
	return (
		<>
			{/*|====== navbar-component ======|*/ }
			<Navbar>
				<Search />
				<NumResults movies={ movies } />
			</Navbar>
			{/*|====== main-component ======|*/ }
			<Main>
				{/* list-box that takes in a list of movie components ====== */ }
				{/*|====== box-right component ======|*/ }
				<Box>
					<MovieList movies={ movies } />
				</Box>
				{/*|====== box-left component ======|*/ }
				<Box>
					<WatchSummary watched={ watched } />
					<WatchedMovieList watched={ watched } />
				</Box>
			</Main>
		</>
	);
};

export default App;
// _______________________________________________
/** @structural-component */
export const Navbar = ({ children }: WithChildren) => {
	return (
		<nav className='nav-bar'>
			<Logo />
			{ children }
		</nav>
	);
};
// _______________________________________________
/** @structural-component */
export const Main = ({ children }: WithChildren) => (
	<main className='main'>{ children }</main>
);
// _______________________________________________
/** @stateless-presentational-component */
export const Logo = () => (
	<div className='logo'>
		<span role='img'>🍿</span>
		<h1>usePopcorn</h1>
	</div>
);
// _______________________________________________
/** @stateless-presentational-component */
export const NumResults = ({ movies }: { movies: Array<MovieDataType> }) => {
	return (
		<p className='num-results'>
			Found <strong>{ movies.length }</strong> results
		</p>
	);
};
// _______________________________________________
/** @stateless-presentational-component */
export const Movie = ({ imdbID, poster, title, year }: MovieDataType) => {
	return (
		<li key={ imdbID }>
			<img src={ poster } alt={ `${ title } poster` } />
			<h3>{ title }</h3>
			<div>
				<p>
					<span>🗓</span>
					<span>{ year }</span>
				</p>
			</div>
		</li>
	);
};
// _______________________________________________
/** @stateless-presentational-component */
export const WatchedMovie = ({
	Poster,
	Title,
	imdbID,
	imdbRating,
	runtime,
	userRating,
}: WatchedDataType) => {
	return (
		<li key={ imdbID }>
			<img src={ Poster } alt={ `${ Title } poster` } />
			<h3>{ Title }</h3>
			<div>
				<p>
					<span>⭐️</span>
					<span>{ imdbRating }</span>
				</p>
				<p>
					<span>🌟</span>
					<span>{ userRating }</span>
				</p>
				<p>
					<span>⏳</span>
					<span>{ runtime } min</span>
				</p>
			</div>
		</li>
	);
};
// _______________________________________________
/** @stateless-presentational-component */
export const WatchedMovieList = ({
	watched,
}: {
	watched: Array<WatchedDataType>;
}) => {
	return (
		<ul className='list'>
			{ watched.map((movie: WatchedDataType) => (
				<WatchedMovie key={ movie.imdbID } { ...movie } />
			)) }
		</ul>
	);
};
// _______________________________________________
/** @stateless-presentational-component */
export const WatchSummary = ({
	watched,
}: {
	watched: Array<WatchedDataType>;
}) => {
	const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
	const avgUserRating = average(watched.map((movie) => movie.userRating));
	const avgRuntime = average(watched.map((movie) => movie.runtime));
	
	return (
		<div className='summary'>
			<h2>Movies you watched</h2>
			<div>
				<p>
					<span>#️⃣</span>
					<span>{ watched.length } movies</span>
				</p>
				<p>
					<span>⭐️</span>
					<span>{ avgImdbRating }</span>
				</p>
				<p>
					<span>🌟</span>
					<span>{ avgUserRating }</span>
				</p>
				<p>
					<span>⏳</span>
					<span>{ avgRuntime } min</span>
				</p>
			</div>
		</div>
	);
};
// _______________________________________________
/** @stateful-component */
export const Search = () => {
	const [query, setQuery] = useState('');
	
	return (
		<input
			className='search'
			type='text'
			placeholder='Search movies...'
			value={ query }
			onChange={ (event: InputEvent) => setQuery(event.target.value) }
		/>
	);
};
// _______________________________________________
/** @stateful-component */
export const Box = ({ children }: WithChildren) => {
	const [isOpen, setIsOpen] = useState(true);
	
	const toggleIsOpen = () => (
		setIsOpen((open) => !open)
	);
	
	return (
		<div className='box'>
			<button className='btn-toggle' onClick={ toggleIsOpen }>
				{ isOpen ? '–' : '+' }
			</button>
			{ isOpen && children }
		</div>
	);
};
// _______________________________________________
/** @stateful-component */
/* export const WatchedBox = () => {
 const [isOpen2, setIsOpen2] = useState(true);
 const [watched, setWatched] =
 useState<Array<WatchedDataType>>(tempWatchedData);
 return (
 <div className="box">
 <button
 className="btn-toggle"
 onClick={ () => setIsOpen2((open) => !open) }
 >
 { isOpen2 ? "–" : "+" }
 </button>
 { isOpen2 && (
 <>
 <WatchSummary watched={ watched } />
 <WatchedMovieList watched={ watched } />
 </>
 ) }
 </div>
 );
 }; */
// _______________________________________________
/** @stateful-component */
export const MovieList = ({ movies }: { movies: Array<MovieDataType> }) => {
	return (
		<ul className='list'>
			{ movies?.map((movie) => (
				<Movie key={ movie.imdbID } { ...movie } />
			)) }
		</ul>
	);
};
// _______________________________________________
