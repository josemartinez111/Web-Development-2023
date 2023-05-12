// FILE: BookList.tsx
// _______________________________________________

import BookShow from "@/components/book_show/BookShow.tsx";
import { useBookContext } from "@/hooks/UseBookContext.ts";
import { BookType } from "@/types/BookType.ts";
import { ReactElement } from 'react';
// _______________________________________________

const BookList = (): ReactElement => {
	const { books } = useBookContext();
	
	const renderedBooks = books.map((book: BookType) => (
		<BookShow key={ book.id } book={ book } />
	));
	
	return (
		<div className="book-list">
			{/* rendering book-list */ }
			{ renderedBooks }
		</div>
	);
};
// _______________________________________________

export default BookList;