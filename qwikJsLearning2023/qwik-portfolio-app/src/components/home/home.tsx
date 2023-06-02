// FILE: components/home/home.tsx
// _________________________________________
// _________________________________________

import { $, component$, useOnDocument } from '@builder.io/qwik';
import { InNavArrowRight } from '@qwikest/icons/iconoir';
import styles from './/home.module.css';
// _________________________________________

export const Home = component$(() => {
	// ________________ [functions] __________________

	useOnDocument(
		'click',
		$((event: Event) => {
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
		}),
	);
	// _______________________________________________
	return (
		<div class={styles.container}>
			<div class={styles.centerContent}>
				<div class="flex flex-col justify-center h-full">
					<h2 class={styles.headerTxt}>
						I am a Full-Stack Developer
					</h2>
					<p class="text-gray-500 py-4 max-w-md">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Accusantium alias amet blanditiis consequatur
						cumque, dignissimos error exercitationem fuga fugit
						iste maiores molestias nostrum repellat, sapiente
						totam ullam unde voluptas? Velit?
					</p>

					{/*|====== button ======|*/}
					<div>
						<button class={styles.btn}>
							Portfolio
							<span>
								<InNavArrowRight />
							</span>
						</button>
					</div>
				</div>
				{/*|====== image ======|*/}
				<div>
					<img
						class="rounded-2xl mx-auto w-2/3 md:w-full"
						src="/hero-image.png"
						alt="HERO"
						width={2000}
						height={2000}
					/>
				</div>
			</div>
		</div>
	);
});
// _______________________________________________
