// FILE: BookCreate.tsx
import { useBookContext } from "@/hooks/UseBookContext.ts";
// _______________________________________________
import {
	FormEventType,
	InputEventType,
} from "@/types/CustomEventTypes.ts";
import { ReactElement, useState } from 'react';
// _______________________________________________

const BookCreate = (): ReactElement => {
	const [title, setTitle] = useState<string>('');
	const { createBook } = useBookContext();
	
	// _______________________________________________
	const handleSubmit = (event: FormEventType) => {
		// prevents the page from reloading when submitting the form
		console.log("New title added:", title);
		event.preventDefault();
		// async function
		createBook(title).then();
		// after the form is submitted empty out the state
		setTitle("");
	};
	
	const handleChange = (event: InputEventType) => {
		setTitle(event.target.value);
	};
	
	return (
		<div className="book-create">
			<h3>Add a Book</h3>
			
			<form onSubmit={ handleSubmit }>
				<label>Title</label>
				<input
					className="input"
					type="text"
					value={ title }
					onChange={ handleChange }
				/>
				
				<button className="button">Create</button>
			</form>
		</div>
	);
};
// _______________________________________________

export default BookCreate;