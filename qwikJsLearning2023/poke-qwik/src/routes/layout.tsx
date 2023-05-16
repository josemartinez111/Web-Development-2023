import { component$, Slot } from '@builder.io/qwik';
import { NavBar } from "~/components/shared/navbar/navbar";

export default component$(() => {
	return (
		<>
			<NavBar />
			<main class="flex flex-col items-center justify-center">
				<Slot />
			</main>
    </>
	);
});
