// file: routes/about/index.tsx
// _______________________________________________
import {
	$,
	component$,
	useSignal, useStyles$,
} from "@builder.io/qwik"
import { ModalComponent } from "~/components/modal/modal";
import AboutStyles from "./about.css?inline" // remember to add the `?inline`
// _______________________________________________

export default component$(() => {
	useStyles$(AboutStyles)
	
	const isModalVisible = useSignal<boolean>(false);
	
	const openModal = $(() => {
		return isModalVisible.value = true;
	})
	
	const closeModal = $(() => {
		return isModalVisible.value = false;
	})
	
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
			
			{/* open modal button */ }
			<button onClick$={ openModal }>
				Open Modal
			</button>
			
			{/* conditionally render modal */ }
			{ isModalVisible.value && (
				<ModalComponent
					size="sm"
					isFrosted={ true }
					closeModal={ closeModal }
				>
					<div q:slot="content">
						<h2>great News!!</h2>
						<p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
						   consectetur adipisicing elit. Amet culpa delectus, eos
						   hic ipsum officiis soluta voluptatibus. Aliquam asperiores
						   corporis earum, enim error, expedita laborum neque quae quo
						   soluta vero.
						</p>
					</div>
					
					<div q:slot="footer">
						<button>Sign Up Now</button>
					</div>
				</ModalComponent>
			) }
		</article>
	)
})
// _______________________________________________
