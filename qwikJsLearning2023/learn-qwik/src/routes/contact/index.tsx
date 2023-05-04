// file: routes/contact/index.tsx
// _______________________________________________
import {
	$,
	component$,
	useSignal, useStore,
	useStylesScoped$,
} from "@builder.io/qwik"
import ContactStyles from "./contact.module.css?inline"
// _______________________________________________

export default component$(() => {
	useStylesScoped$(ContactStyles)
	
	const isFormVisible = useSignal<boolean>(false);
	const formState = useStore({ name: '', message: '' })
	
	const showForm = $(() => {
		return isFormVisible.value = true;
	})
	
	const trackName = $((e: Event) => {
		return formState.name = (e.target as HTMLInputElement).value;
	})
	
	const trackMessage = $((e: Event) => {
		return formState.message = (e.target as HTMLInputElement).value;
	})
	
	const submitForm = $(() => {
		console.log(`Name: ${formState.name}\nMessage: ${formState.message}`)
		// reset the state when the form is submitted
		formState.name = '';
		formState.message = '';
	})
	
	return (
		<article>
			<h2>Contact</h2>
			{/* DUMMY TEXT */ }
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto
				assumenda debitis dicta dolore eum exercitationem explicabo facere, harum,
				iusto magni nostrum perferendis quae quas recusandae repellendus sunt tenetur
				voluptatibus
			</p>
			{/* show form button */ }
			<button onClick$={ showForm }>
				Contact Me
			</button>
			
			{/* FORM */ }
			{ isFormVisible.value && (
				<form
					preventdefault:submit
					onSubmit$={submitForm}
				>
				{/* name */ }
					<label>
					<span>Your name:</span>
					<input
						type="text"
						value={formState.name} // two-way biding
						onInput$={ trackName }
					/>
				</label>
					{/* message */ }
					<label>
					<span>Your message:</span>
					<textarea
						value={formState.message} // two-way biding
						onInput$={ trackMessage }
					/>
				</label>
					{/* send button */ }
					<button>Send</button>
					
					{/* output of tracked form-state */}
					<p>Form name: { formState.name }</p>
					<p>Form message: { formState.message }</p>
				</form>
			) }
		</article>
	)
})
// _______________________________________________
