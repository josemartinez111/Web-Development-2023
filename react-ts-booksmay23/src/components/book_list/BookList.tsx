// FILE: BookList.tsx
import BookShow from "@/components/book_show/BookShow.tsx";
import { BookType } from "@/types/BookType.ts";
import { ReactElement } from 'react';
// _______________________________________________

interface BookListProps {
	books: BookType[];
	onDelete: (id: string) => void;
	onEdit: (id: string, title: string) => void;
}
// _______________________________________________

const BookList = ({ books, onDelete, onEdit }: BookListProps): ReactElement => {
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
			{ renderedBooks }
		</div>
	);
};
// _______________________________________________

export default BookList;