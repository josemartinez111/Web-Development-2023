// FILE: App.tsx
import BookCreate from "@/components/book_create/BookCreate.tsx";
import BookList from "@/components/book_list/BookList.tsx";
import { BookType } from "@/types/BookType.ts";
import { ReactElement, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
// _______________________________________________

const App = (): ReactElement => {
	const [books, setBooks] = useState<Array<BookType>>([]);
	
	const deleteBookByID = (id: string): void => {
		// filter through the list of books
		const updatedBooks: BookType[] = books.filter((book: BookType) => {
			return book.id !== id;
		});
		
		setBooks(updatedBooks);
	};
	
	const createBook = (title: string) => {
		const updatedBookList: Array<BookType> = [
			...books,
			{ id: uuidv4(), title } satisfies BookType,
		];
		
		setBooks(updatedBookList);
	};
	
	return (
		<div className="app">
			<BookList
				books={ books }
				onDelete={ deleteBookByID }
			/>
			<BookCreate onCreate={ createBook } />
		</div>
	);
};
// _______________________________________________

export default App;
