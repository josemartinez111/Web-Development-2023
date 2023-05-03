// file: routes/about/index.tsx
// _______________________________________________
import { component$, useStylesScoped$ } from "@builder.io/qwik"
import AboutStyles from "./about.module.css?inline" // remember to add the `?inline`
// _______________________________________________

export default component$(() => {
	useStylesScoped$(AboutStyles)
	
	return (
		<article>
			<h2>About</h2>
			
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto
				assumenda debitis dicta dolore eum exercitationem explicabo facere, harum,
				iusto magni nostrum perferendis quae quas recusandae repellendus sunt tenetur
				voluptatibus
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto
				assumenda debitis dicta dolore eum exercitationem explicabo facere, harum,
				iusto magni nostrum perferendis quae quas recusandae repellendus sunt tenetur
				voluptatibus
			</p>
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
