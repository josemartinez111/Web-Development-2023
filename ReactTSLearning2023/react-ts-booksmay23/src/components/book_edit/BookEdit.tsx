// FILE: BookEdit.tsx
import { useBookContext } from "@/hooks/UseBookContext.ts";
import { BookType } from "@/types/BookType.ts";
import {
	FormEventType,
	InputEventType,
} from "@/types/CustomEventTypes.ts";
import { ReactElement, useState } from 'react';
// _______________________________________________

interface BookEditProps {
	book: BookType;
	onSubmit: () => void;
}
// _______________________________________________

const BookEdit = ({ book, onSubmit }: BookEditProps): ReactElement => {
	// book.title will add what ever the current title
	// is to the edit component when the user presses edit
	const [title, setTitle] = useState<string>(book.title);
	const { editBookByID } = useBookContext();
	
	const handleSubmit = (event: FormEventType) => {
		event.preventDefault();
		onSubmit();
		
		editBookByID(book.id, title).then();
		console.log("New title is:", title);
	};
	
	const handleChange = (event: InputEventType) => {
		setTitle(event.target.value);
	};
	// _______________________________________________
	return (
		<form onSubmit={ handleSubmit } className="book-edit">
			<label>Title</label>
			<input
				className="input"
				type="text"
				value={ title }
				onChange={ handleChange }
			/>
			<button className="button is-primary">
				Save
			</button>
		</form>
	);
};
// _______________________________________________

export default BookEdit;