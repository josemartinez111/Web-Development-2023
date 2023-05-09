// FILE: BookShow.tsx
import { BookType } from "@/types/BookType.ts";
import { ReactElement } from 'react';
// _______________________________________________

interface BookShowProps {
	book: BookType;
	onDelete: (id: string) => void;
}
// _______________________________________________

const BookShow = ({ book, onDelete }: BookShowProps): ReactElement => {
	const handleClick = () => {
		onDelete(book.id);
	};
	
	return (
		<div className="book-show">
			<h3>
				Book title:&nbsp;&nbsp;
				<span style={ { fontWeight: "bold" } }>{ book.title }</span>
			</h3>
			
			<div className="actions">
				<button
					className="delete"
					onClick={ handleClick }
				>
					Delete
				</button>
			</div>
		</div>
	);
};
// _______________________________________________

export default BookShow;