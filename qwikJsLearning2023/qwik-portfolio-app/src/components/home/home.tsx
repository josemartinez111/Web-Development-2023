// FILE: components/home/home.tsx
// _________________________________________
// _________________________________________

import { $, component$, useOnDocument } from '@builder.io/qwik';
import { InNavArrowRight } from '@qwikest/icons/iconoir';
import styles from './home.module.css';
// _________________________________________

export const Home = component$(() => {
	// ________________ [functions] __________________
	
	const handleNavToPortfolio = $((event: Event) => {
		if (
			event.target &&
			(event.target as HTMLElement).id === 'portfolio-button'
		) {
			// The 'Portfolio' section would need to have an id of 'portfolio'
			const portfolioElement =
				document.getElementById('portfolio');
			if (portfolioElement) {
				portfolioElement.scrollIntoView({
					behavior: 'smooth',
				});
			}
		}
	});
	
	useOnDocument(
		'click',
		handleNavToPortfolio,
	);
	// _______________________________________________
	return (
		<div
			id="home"
			class={ styles.container }
		>
			<div class={ styles.centerContent }>
				<div class="flex flex-col justify-center h-full">
					<h2 class={ styles.headerTxt }>
						I am a Full Stack Developer
					</h2>
					<p class="text-gray-500 py-4 max-w-md">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Accusantium alias amet blanditiis consequatur
						cumque, dignissimos error exercitationem fuga fugit
						iste maiores molestias nostrum repellat, sapiente
						totam ullam unde voluptas? Velit?
					</p>
					
					{/*|====== button ======|*/ }
					<div>
						<button
							id="portfolio-button"
							class={ `group ${ styles.btn }` }
						>Portfolio
							<span class="group-hover:rotate-90 duration-300">
								<InNavArrowRight class="font-bold text-2xl ml-1" />
							</span>
						</button>
					</div>
				</div>
				{/*|====== image ======|*/ }
				<div>
					<img
						class="rounded-2xl mx-auto w-2/3 md:w-full"
						src="/hero-image.png"
						alt="HERO"
						width={ 572 }
						height={ 572 }
					/>
				</div>
			</div>
		</div>
	);
});
// _______________________________________________
