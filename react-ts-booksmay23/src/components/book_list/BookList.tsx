// FILE: BookList.tsx
import BookShow from "@/components/book_show/BookShow.tsx";
import { BookType } from "@/types/BookType.ts";
import { ReactElement } from 'react';
// _______________________________________________

interface BookListProps {
	books: BookType[];
}
// _______________________________________________

const BookList = ({ books }: BookListProps): ReactElement => {
	const renderedBooks = books?.map((book: BookType) => (
		<BookShow
			key={ book.id }
			book={ book }
		/>
	))
	
	return (
		<div className="book-list">
			{ renderedBooks }
		</div>
	);
};
// _______________________________________________

export default BookList;