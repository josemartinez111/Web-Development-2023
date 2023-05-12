// FILE: Provider.tsx
import { BooksContext } from "@/context/BooksContext.ts";
import { BookType } from "@/types/BookType.ts";
import { handleAxiosError } from "@/types/CustomErrorUtils.ts";
import { WithChildren } from "@/types/WithChildren.ts";
import axios from "axios";
import { ReactElement, useCallback, useState } from 'react';
// _______________________________________________
const BASE_URL: string = import.meta.env.VITE_APP_BASE_URL as string;
// _______________________________________________
const Provider = ({ children }: WithChildren): ReactElement => {
	const [books, setBooks] = useState<Array<BookType>>([]);
	// _______________________________________________
	// CREATE ################################
	const createBook = async (title: string): Promise<void> => {
		const postRequestBody = {
			title: title,
		};
		
		try {
			const response = await axios.post<BookType>(
				BASE_URL,
				postRequestBody,
			);
			
			console.log("post request response:", response);
			
			// Assuming response.data contains the newly created book
			// Update your local state with the newly created book
			const updatedBooks: Array<BookType> = [...books, response.data];
			setBooks(updatedBooks);
		} catch ( error: unknown ) {
			if (axios.isAxiosError(error)) handleAxiosError(error);
			// handles any other error that isn't api related
			console.error("An unexpected error occurred:", error);
		}
	};
	
	// READ ################################
	// useCallback returns a memoized version of fetchAllBooks
	// that only changes if one of its dependencies changes.
	// Since the dependency array is empty, the returned function
	// never changes, regardless of re-renders.
	const fetchAllBooks = useCallback(async (): Promise<void> => {
		
		try {
			const response = await axios.get<Array<BookType>>(BASE_URL);
			setBooks(response.data);
		} catch ( error: unknown ) {
			if (axios.isAxiosError(error)) handleAxiosError(error);
			console.error("An unexpected error occurred:", error);
		}
		// even though
	}, []);
	
	// UPDATE ################################
	const editBookByID = async (id: string, newTitle: string): Promise<void> => {
		const putURL = `${ BASE_URL }${ id }`;
		
		const putRequestBody = {
			title: newTitle,
		};
		
		try {
			const response = await axios.put(putURL, putRequestBody);
			// setBooks(response.data);
			console.log("response data:", response);
			
			const updatedBookList = books.map((book: BookType) => {
				// Here we're creating a new object that combines the properties of
				// the existing `book` with the properties from the updated `book`.
				// The order is important here: because we put `...book` first,
				// it spreads all the existing book properties into this new object.
				// Then, `...response.data` spreads the properties of the updated book
				// into the new object. If there are any properties in the updated book
				// that have the same name as properties in the existing book, the updated
				// book's properties will overwrite the existing ones. This is how we make
				// sure the updated properties from the server are reflected in the local state.
				// The beauty of this approach is that it doesn't matter if we later decide to
				// add more properties to our books (like a `pages` property, for example). As
				// long as the server response includes those new properties when we update a
				// book, this code will automatically include them in the local state.
				if (book.id === id) return { ...book, ...response.data };
				return book;
			});
			
			setBooks(updatedBookList);
		} catch ( error: unknown ) {
			if (axios.isAxiosError(error)) handleAxiosError(error);
			console.error("An unexpected error occurred:", error);
		}
	};
	
	// DELETE ################################
	const deleteBookByID = async (id: string): Promise<void> => {
		const deleteURL = `${ BASE_URL }${ id }`;
		await axios.delete(deleteURL);
		
		// filter through the list of books
		const updatedBookList: BookType[] = books.filter((book: BookType) => (
			book.id !== id
		));
		
		setBooks(updatedBookList);
		
		/**
		 * isLoading, isError, and error are destructured directly from the object
		 * that useQuery returns. This object includes:
		 * data: The data fetched by your query function (fetchAllBooksService in this case).
		 * isLoading: A boolean that is true if the query is in a "loading"
		 * state (i.e., the query is in progress).
		 * isError: A boolean that is true if the query encountered an error.
		 * error: The actual Error object if the query encountered an error.
		 * So isLoading is provided by react-query, not something that is explicitly
		 *  returned from useFetchAllBooks. But since useFetchAllBooks returns the result
		 *  of useQuery, you have access to isLoading and the other properties in your component.
		 * */
	};
	
	const valuesToShare = {
		books,
		fetchAllBooks,
		createBook,
		editBookByID,
		deleteBookByID,
	};
	// _______________________________________________
	
	return (
		<BooksContext.Provider value={ valuesToShare }>
			{ children }
		</BooksContext.Provider>
	);
};
// _______________________________________________

export default Provider;