import {
	component$,
	useSignal,
	useStore,
	useStylesScoped$,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
// _______________________________________________

interface IPerson {
	name: string;
	age: number;
}

interface IBlog {
	id: number;
	title: string;
}
// _______________________________________________

export default component$(() => {
	useStylesScoped$(`
		.spacer {
	    margin-top: 80px;
		}
	`)
	
	const peach: IPerson = {
		name: "peach",
		age: 30,
	}
	
	const blogs: Array<IBlog> = [
		{ id: 1, title: "first blog" },
		{ id: 2, title: "second blog" },
		{ id: 3, title: "third blog" },
	]
	
	// use this for primitives
	const name = useSignal<string>("mario");
	// use this for objects, if you use `useSignal` with an object,
	// when you try to update the state with an event, you will
	// lose the reactivity and the state will not change
	const person = useStore<IPerson>(peach);
	const blogList = useStore<Array<IBlog>>(blogs)
	
	return (
		<div>
      <h2>Health check...</h2>
			
			<p>Hola, ({ name.value })</p>
			<p>Hola, ({ person.name }) how old are you? ({ person.age }) years old</p>
			<hr />
			
			{/* example of click-events */ }
			<button onClick$={ () => name.value = "luigi" }>Click me</button>
			<button
				onClick$={ () => person.name = "bowser" }>
				Click me too
			</button>
			<hr />
			
			{/* braces are needed for dynamic code */ }
			<div class="spacer">
				<h1>List of Blog post</h1>
				{ blogList.map((blog: IBlog) => (
					<ul key={ blog.id }>
					<li>ID: { blog.id } || Title: { blog.title }</li>
				</ul>
				)) }
			</div>
			<hr />
			
    </div>
	);
});
// _______________________________________________

//noinspection JSUnusedGlobalSymbols
export const head: DocumentHead = {
	title: 'Mario World',
	meta: [
		{
			name: 'description',
			content: 'a blog about everything mario',
		},
	],
	links: [
		{
			rel: "stylesheets",
			href: "somestylesheet.com/styles.css",
		},
	],
};
