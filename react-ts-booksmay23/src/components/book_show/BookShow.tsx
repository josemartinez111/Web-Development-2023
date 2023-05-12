// FILE: BookShow.tsx
import BookEdit from "@/components/book_edit/BookEdit.tsx";
import { useBookContext } from "@/hooks/UseBookContext.ts";
import { BookType } from "@/types/BookType.ts";
import { ReactElement, useState } from 'react';
// _______________________________________________

interface BookShowProps {
	book: BookType;
}
// _______________________________________________

const BookShow = ({ book }: BookShowProps): ReactElement => {
	const [showEdit, setShowEdit] = useState<boolean>(false);
	const { deleteBookByID } = useBookContext();
	// _______________________________________________
	const handleDeleteClick = () => {
		// async function
		deleteBookByID(book.id).then();
	};
	
	const handleEditClick = () => {
		setShowEdit(!showEdit);
	};
	// needs to know when to display the `BookShow` component
	const handleSubmit = () => {
		setShowEdit(false);
	};
	
	// logic to conditionally render markup
	let content = <h3>
				Book title:&nbsp;&nbsp;
		<span style={ { fontWeight: "bold" } }>{ book.title }</span>
	</h3>;
	
	if (showEdit) {
		content = <BookEdit
			onSubmit={ handleSubmit }
			book={ book }
		/>;
	}
	// _______________________________________________
	return (
		<div className="book-show">
			{/* image */ }
			<img
				alt="books"
				src={ `https://picsum.photos/seed/${ book.title }/300/200` }
			/>
			
			<div>{ content }</div>
			
			<div className="actions">
				{/* delete-button */ }
				<button
					onClick={ handleEditClick }
					className="edit"
				>Edit
				</button>
				{/* delete-button */ }
				<button
					className="delete"
					onClick={ handleDeleteClick }
				>Delete
				</button>
			</div>
		</div>
	);
};
// _______________________________________________

export default BookShow;