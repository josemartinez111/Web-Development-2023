// file: components/form/form_component.tsx
// _______________________________________________

import {
	component$,
	PropFunction,
	useStylesScoped$,
} from "@builder.io/qwik";
import FormStyles from "./form.css?inline"
// _______________________________________________

interface FormComponentProps {
	submitForm: PropFunction<() => void>
	formState: { name: string; message: string }
	trackName: PropFunction<(e: Event) => string>
	trackMessage: PropFunction<(e: Event) => string>
	// submitForm: QRL<() => void>
	// trackName: QRL<(e: Event) => string>
	// trackMessage: QRL<(e: Event) => string>
	
}
// _______________________________________________

export const FormComponent = component$<FormComponentProps>(({
	submitForm,
	formState,
	trackName,
	trackMessage,
}) => {
	useStylesScoped$(FormStyles)
	
	return (
		<form
			preventdefault:submit
			onSubmit$={ submitForm }
		>
				{/* name */ }
			<label>
					<span>Your name:</span>
					<input
						type="text"
						value={ formState.name } // two-way biding
						onInput$={ trackName }
					/>
				</label>
			{/* message */ }
			<label>
					<span>Your message:</span>
					<textarea
						value={ formState.message } // two-way biding
						onInput$={ trackMessage }
					/>
				</label>
			{/* send button */ }
			<button>Send</button>
			
			{/* output of tracked form-state */ }
			<p>Form name: { formState.name }</p>
					<p>Form message: { formState.message }</p>
				</form>
	)
})
// _______________________________________________