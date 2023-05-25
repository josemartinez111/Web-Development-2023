// FILE: components/loading/loading.tsx
// _________________________________________
// _________________________________________

import { component$, useStylesScoped$ } from '@builder.io/qwik';
import LoadingStyles from './loading.css?inline';
// _________________________________________

interface LoadingProps {
	loadingText?: string;
	textSize?: string;
	textColor?: string;
}
// _________________________________________

export const Loading = component$(
	({
		loadingText = 'Loading',
		textSize = 'text-2xl',
		textColor='text-white'
	}: LoadingProps) => {
		useStylesScoped$(LoadingStyles);
		// _______________________________________________
		return (
			<div class="loader">
				<span class={`loader-text ${textSize} text-${textColor}`}>
					{loadingText}
				</span>
				<span class="load"></span>
			</div>
		);
	},
);
// _______________________________________________
