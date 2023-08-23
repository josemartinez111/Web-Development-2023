// FILE: components/city-info
// _________________________________________

import { component$, Resource, Signal, useResource$ } from '@builder.io/qwik';
import { CityImageDataType, getCityImage } from "~/apis";
// _________________________________________

type CityInfoProps = {
	city: Signal<string>
}
// _________________________________________

export const CityInfo = component$<CityInfoProps>(({ city }) => {
	const cityImageData = useResource$<CityImageDataType>(({ track, cleanup }) => {
		const controller = new AbortController();
		
		cleanup(() => controller.abort());
		track(() => city.value);
		
		return getCityImage(city.value);
	});
	
	// ________________ [functions] __________________
	
	// _______________________________________________
	return (
		<Resource
			value={ cityImageData } // useResource$ `PROP` <--here
			onPending={ () => <>Loading...</> }
			onRejected={ (error: Error) => <>Error: { error.message }</> }
			onResolved={ (cityImageData: CityImageDataType) => {
				return (
					<figure>
						<picture>
							<img
								class="weather--city"
								src={ cityImageData.urls.raw }
								alt={ cityImageData.alt_description }
								width="5184"
								height="3888"
							/>
						</picture>
						<figcaption>
							Copyright from{ " " }
							<a
								target="_blank"
								rel="nofollow noopener"
								href={ cityImageData.user.social.portfolio_url }
							>
							{ cityImageData.user.username }
							</a>
						</figcaption>
					</figure>
				);
			} }
		/>
	);
});
// _______________________________________________