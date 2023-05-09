// FILE: BookShow.tsx
import { BookType } from "@/types/BookType.ts";
import { ReactElement } from 'react';
// _______________________________________________

interface BookProps {
	book: BookType;
}
// _______________________________________________

const BookShow = ({ book }: BookProps): ReactElement => {
	return (
		<div className="book-show">
			<h3>
				Book title:&nbsp;&nbsp;
				<span style={ { fontWeight: "bold" } }>{ book.title }</span>
			</h3>
		</div>
	);
};
// _______________________________________________

export default BookShow;