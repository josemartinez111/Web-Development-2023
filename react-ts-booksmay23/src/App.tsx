// FILE: App.tsx
import BookCreate from "@/components/book_create/BookCreate.tsx";
import BookList from "@/components/book_list/BookList.tsx";
import { BookType } from "@/types/BookType.ts";
import { handleAxiosError } from "@/types/CustomErrorUtils.ts";
import { ReactElement, useEffect, useState } from 'react';
import axios from 'axios';
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;
//import { v4 as uuidv4 } from "uuid";
// _______________________________________________

const App = (): ReactElement => {
	const [books, setBooks] = useState<Array<BookType>>([]);
	
	// _______________________________________________
	// CREATE ################################
	const createBook = async (title: string): Promise<void> => {
		const postURL: URL = new URL("http://localhost:3001/books");
		const postRequestBody = {
			title: title,
		};
		
		try {
			const response = await axios.post<BookType>(
				postURL.toString(),
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
	const fetchAllBooks = async (): Promise<void> => {
		const getURL: URL = new URL("http://localhost:3001/books");
		
		try {
			const response = await axios.get<Array<BookType>>(getURL.toString());
			setBooks(response.data);
		} catch ( error: unknown ) {
			if (axios.isAxiosError(error)) handleAxiosError(error);
			console.error("An unexpected error occurred:", error);
		}
	};
	
	// componentDidMount: useEffect hook is using an empty
	// array [] as its dependency list, which means the effect
	// (in this case, the fetchAllBooks function) will only run
	// once when the component first mounts. Since we are in
	// development mode & using <React.StrictMode> the useEffect
	// will actually run twice
	useEffect(() => {
		fetchAllBooks()
			.catch((error: unknown) => {
			console.error(error);
		})
	}, [])
	
	// UPDATE ################################
	const editBookByID = (id: string, newTitle: string): void => {
		const updatedBookList = books.map((book: BookType) => {
			if (book.id === id) return { ...book, title: newTitle };
			return book;
		});
		
		setBooks(updatedBookList);
	};
	
	// DELETE ################################
	const deleteBookByID = (id: string): void => {
		// filter through the list of books
		const updatedBooks: BookType[] = books.filter((book: BookType) => {
			return book.id !== id;
		});
		
		setBooks(updatedBooks);
	};
	// _______________________________________________
	return (
		<div className="app">
			{/* title of app */ }
			<h1>Reading List</h1>
			{/* book-list */ }
			<BookList
				books={ books }
				onDelete={ deleteBookByID }
				onEdit={ editBookByID }
			/>
			<BookCreate onCreate={ createBook } />
		</div>
	);
};
// _______________________________________________

export default App;
