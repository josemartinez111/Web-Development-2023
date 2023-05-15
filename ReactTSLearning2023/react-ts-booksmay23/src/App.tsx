// FILE: App.tsx
import BookCreate from "@/components/book_create/BookCreate.tsx";
import BookList from "@/components/book_list/BookList.tsx";
import { useBookContext } from "@/hooks/UseBookContext.ts";
import { ReactElement, useEffect } from 'react';
// import { v4 as uuidv4 } from "uuid";
// _______________________________________________

const App = (): ReactElement => {
	const { fetchAllBooks } = useBookContext();
	
	// _______________________________________________
	
	// componentDidMount: useEffect hook is using an empty
	// array [] as its dependency list, which means the effect
	// (in this case, the fetchAllBooks function) will only run
	// once when the component first mounts. Since we are in
	// development mode & using <React.StrictMode> the useEffect
	// will actually run twice
	useEffect(() => {
		fetchAllBooks().then();
		// pass the function even though it doesn't change to quiet down es-lint
	}, [fetchAllBooks]);
	// _______________________________________________
	return (
		<div className="app">
			{/* title of app */ }
			<h1>Reading List</h1>
			{/* book-list */ }
			<BookList />
			<BookCreate />
		</div>
	);
};
// _______________________________________________

export default App;
