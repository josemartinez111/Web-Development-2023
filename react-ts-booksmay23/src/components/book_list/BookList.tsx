// FILE: BookList.tsx
import BookShow from "@/components/book_show/BookShow.tsx";
import { BooksContext } from "@/context/books.ts";
import { BookType } from "@/types/BookType.ts";
import { ReactElement, useContext } from 'react';
// _______________________________________________

interface BookListProps {
	books: BookType[];
	onDelete: (id: string) => void;
	onEdit: (id: string, title: string) => void;
}
// _______________________________________________

const BookList = ({ books, onDelete, onEdit }: BookListProps): ReactElement => {
	const { count, incrementCount } = useContext(BooksContext);
	
	const renderedBooks = books.map((book: BookType) => (
		<BookShow
			onDelete={ onDelete }
			key={ book.id }
			book={ book }
			onEdit={ onEdit }
		/>
	));
	
	return (
		<div className="book-list">
			<h1>Displaying count { count }</h1>
			{/* increment count button */ }
			<button onClick={ incrementCount }>
				Increment Count
			</button>
			{/* rendering book-list */ }
			{ renderedBooks }
		</div>
	);
};
// _______________________________________________

export default BookList;