	// FILE: BookCreate.tsx
	import {
	FormEventType,
		InputEventType,
} from "@/types/CustomEventTypes.ts";
import { ReactElement, useState } from 'react';
// _______________________________________________

interface BookCreateProps {
	onCreate: (title: string) => void;
}
// _______________________________________________

const BookCreate = ({ onCreate }: BookCreateProps): ReactElement => {
	const [title, setTitle] = useState<string>('');
	
	// event handler
	const handleSubmit = (event: FormEventType) => {
		// prevents the page from reloading when submitting the form
		console.log("New title added:", title)
		event.preventDefault();
		onCreate(title);
		// after the form is submitted empty out the state
		setTitle("")
	}
	
	const handleChange = (event: InputEventType) => {
		setTitle(event.target.value);
	}
	
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