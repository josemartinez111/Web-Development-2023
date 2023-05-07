import {
	$,
	component$,
	useSignal,
	useStore,
	useStylesScoped$,
} from '@builder.io/qwik';
import type { DocumentHead, RequestHandler } from '@builder.io/qwik-city';
// _______________________________________________

interface BlogData {
	id: string
	title: string
	content: string
}

export const getBlogPost: RequestHandler<Array<BlogData>> = () => {
	
}
// _______________________________________________

interface Person {
	name: string;
	age: number;
}

interface BlogDummyData {
	id: number;
	title: string;
}
// _______________________________________________

export default component$(() => {
	useStylesScoped$(`
		.spacer {
	    margin-top: 80px;
		}
		
		.left-btn {
			margin-right: 10px;
			margin-left: 20px;
		}
		.btn-bottom {
			margin-left: 20px;
		}
	`)
	
	const peach: Person = {
		name: "peach",
		age: 30,
	}
	
	const blogs: Array<BlogDummyData> = [
		{ id: 1, title: "first blog" },
		{ id: 2, title: "second blog" },
		{ id: 3, title: "third blog" },
	]
	
	// use this for primitives
	const name = useSignal<string>("mario");
	// use this for objects, if you use `useSignal` with an object,
	// when you try to update the state with an event, you will
	// lose the reactivity and the state will not change
	const person = useStore<Person>(peach);
	const blogList = useStore<Array<BlogDummyData>>(blogs)
	
	const changePersonData = $(() => {
		person.name = "Bowser";
		person.age = 43;
	})
	
	return (
		<div>
      <h2>Health check...</h2>
			
			<p>Hola, ({ name.value })</p>
			<p>Hola, ({ person.name }) how old are you? ({ person.age }) years old</p>
			<hr />
			
			{/* example of click-events */ }
			<button
				class="left-btn"
				onClick$={ () => name.value = "luigi" }
			>
				Click me
			</button>
			
			<button onClick$={ changePersonData }>
				Click me too
			</button>
			<hr />
			
			{/* braces are needed for dynamic code */ }
			<div class="spacer">
				<h1>List of Blog post</h1>
				{/* mapping through our list */ }
				{ blogList.map((blog: BlogDummyData) => (
					<ul key={ blog.id }>
					<li>ID: { blog.id } || Title: { blog.title }</li>
				</ul>
				)) }
			</div>
			
			<button
				class="btn-bottom"
				onClick$={ () => blogList.pop() }
			>
				Remove Blog From List
			</button>
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
