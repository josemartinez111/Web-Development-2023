// file: routes/contact/composables.ts
import { $, useSignal, useStore } from "@builder.io/qwik";
// _______________________________________________

export const useContact = () => {
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
	
	return {
		showForm,
		trackName,
		trackMessage,
		submitForm,
		formState,
		isFormVisible,
	}
}
// _______________________________________________