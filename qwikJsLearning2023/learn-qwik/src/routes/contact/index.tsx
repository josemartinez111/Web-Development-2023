// file: routes/contact/index.tsx
// _______________________________________________
import { component$, useStylesScoped$ } from "@builder.io/qwik"
import ContactStyles from "./contact.module.css?inline"
// _______________________________________________

export default component$(() => {
	useStylesScoped$(ContactStyles)
	
	return (
		<article>
			<h2>Contact</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto
				assumenda debitis dicta dolore eum exercitationem explicabo facere, harum,
				iusto magni nostrum perferendis quae quas recusandae repellendus sunt tenetur
				voluptatibus
			</p>
		</article>
	)
})
// _______________________________________________
