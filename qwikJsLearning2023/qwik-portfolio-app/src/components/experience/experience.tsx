// FILE: components/experience/experience.tsx
// _________________________________________
// _________________________________________

import { component$, useStore } from '@builder.io/qwik';
import styles from './experience.module.css';
// _________________________________________

type TechType = {
	id: number
	src: string
	title: string
	style: string
}
// _________________________________________

export const Experience = component$(() => {
	const technologies: Array<TechType> = useStore([
		{
			id: 1,
			src: 'angular.png',
			title: 'Angular',
			style: 'shadow-orange-500',
		},
		{
			id: 2,
			src: 'github.png',
			title: 'Github',
			style: 'shadow-gray-400',
		},
		{
			id: 3,
			src: 'js.png',
			title: 'Javascript',
			style: 'shadow-yellow-500',
		},
		{
			id: 4,
			src: 'qwik3.png',
			title: 'Qwik',
			style: 'shadow-purple-400',
		},
		{
			id: 5,
			src: 'react.png',
			title: 'React',
			style: 'shadow-blue-600',
		},
		{
			id: 6,
			src: 'ts.png',
			title: 'Typescript',
			style: 'shadow-blue-400',
		},
		{
			id: 7,
			src: 'vue.png',
			title: 'VueJs',
			style: 'shadow-green-600',
		},
		{
			id: 8,
			src: 'tailwind.png',
			title: 'TailwindCSS',
			style: 'shadow-sky-400',
		},
	{
			id: 9,
			src: 'spring-boot.png',
			title: 'Spring Boot',
			style: 'shadow-green-600',
		},
	]);
	// ________________ [functions] __________________
	
	// _______________________________________________
	return (
		<div id="experience" class={ styles.container }>
			<div class={ styles.subContainer }>
				<div>
					<p class={ styles.exp }>Experience</p>
					<p class="py-6">These are some of the technologies I've worked with</p>
				</div>
				{/* grid of images ================================ */ }
				<div class={ styles.imgContainer }>
					{ technologies.map(({ id, src, title, style }) => (
						<div
							key={ id }
							class={ `${ styles.imgWrapper } ${ style }` }
						>
						<img
							class="w-20 mx-auto"
							src={ src }
							alt=""
							width="1024"
							height="768"
						/>
						<p class="mt-4">{ title }</p>
					</div>
					)) }
					
				</div>
			</div>
		</div>
	);
});
// _______________________________________________