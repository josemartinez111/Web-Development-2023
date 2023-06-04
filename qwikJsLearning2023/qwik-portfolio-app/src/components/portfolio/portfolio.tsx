// FILE: components/portfolio/portfolio.tsx
// _________________________________________
// _________________________________________

import { component$, useStore } from '@builder.io/qwik';
import styles from './portfolio.module.css';
// _________________________________________

export const Portfolio = component$(() => {
	const portfolios = useStore([
		{
			id: 1,
			src: 'agile-developer.jpeg',
		},
		{
			id: 2,
			src: 'broadway.jpg',
		},
		{
			id: 3,
			src: 'enjoy-the-ride.jpg',
		},
		{
			id: 4,
			src: 'ironman.jpg',
		},
		{
			id: 5,
			src: 'night-concert.png',
		},
		{
			id: 6,
			src: 'night-dinner.png',
		},
	]);
	
	// ________________ [functions] __________________
	
	// _______________________________________________
	return (
		<div id="portfolio" class={ styles.container }>
			<div class={ styles.subContainer }>
				<div class="pb-8">
					<p class={ styles.portfolio }>Portfolio</p>
					<p class="py-6">Check out some of my work below</p>
				</div>
				{/* images ================================ */ }
				
				<div class={ styles.imgContainer }>
					{ portfolios.map(({ id, src }) => (
						<div key={ id } class={ styles.imgWrapper }>
						<img
							class={ styles.img }
							src={ src }
							alt=""
							width="264"
							height="377"
						/>
						<div class={ styles.btnsContainer }>
							<button class={ styles.btn }>Demo</button>
							<button class={ styles.btn }>Code</button>
						</div>
					</div>
					)) }
				</div>
			</div>
		</div>
	);
});
// _______________________________________________