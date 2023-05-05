// file: routes/contact/index.tsx
// _______________________________________________
import {
	component$,
	useStylesScoped$,
} from "@builder.io/qwik"
import { FormComponent } from "~/components/form/form";
import { useContactComposables } from "~/routes/contact/composables";
import ContactStyles from "./contact.css?inline"
// _______________________________________________

export default component$(() => {
	useStylesScoped$(ContactStyles)
	
	const {
		showForm,
		trackName,
		trackMessage,
		submitForm,
		formState,
		isFormVisible,
	} = useContactComposables()
	
	
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
				<FormComponent
					submitForm={ submitForm }
					formState={ formState }
					trackName={ trackName }
					trackMessage={ trackMessage }
				/>
			) }
		</article>
	)
})
// _______________________________________________
