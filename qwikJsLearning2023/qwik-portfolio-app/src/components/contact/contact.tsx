// FILE: components/contact/contact.tsx
// _________________________________________
// _________________________________________

import { component$ } from '@builder.io/qwik';
import styles from './contact.module.css';
// _________________________________________

export const Contact = component$(() => {
	
	// ________________ [functions] __________________
	
	// _______________________________________________
	return (
		<div
			id="contact"
			class={ styles.container }
		>
			<div class={ styles.subContainer }>
				<div class="pb-8">
					<p class={ styles.contact }>Contact</p>
					<p class="py-6">
						Submit your information to contact me
					</p>
				</div>
				
				<div class="flex justify-center items-center">
					<form
						class={ styles.form }
						action="https://getform.io/f/226e43dc-4344-4e7b-a18b-c7df046b384f"
						method="POST"
					>
						{ /*|====== name-field ======|*/ }
						<input
							class={ styles.inputs }
							type="text"
							name="name"
							placeholder="enter your name"
						/>
						{ /*|====== name-field ======|*/ }
						<input
							class={ `my-4 ${ styles.inputs }` }
							type="email"
							name="name"
							placeholder="enter your email"
						/>
						{ /*|====== textarea ======|*/ }
						<textarea
							class={ styles.tArea }
							name="message"
							rows={ 10 } />
						{ /*|====== submit-button ======|*/ }
						<button class={ styles.btn }>
							Let's Talk
						</button>
					</form>
				</div>
			</div>
			
		</div>
	);
});
// _______________________________________________