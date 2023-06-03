// FILE: components/social-links/social-links.tsx
// _________________________________________
// _________________________________________

import type { JSXChildren } from '@builder.io/qwik';
import { component$, useStore } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import {
	IoLogoGithub,
	IoLogoLinkedin,
	IoMailOutline,
	IoPersonAddOutline,
} from '@qwikest/icons/ionicons';
import styles from './social-links.module.css';
// _________________________________________

type LinkType = {
	id: number;
	child: JSXChildren;
	url: string;
	style?: string;
	download?: boolean;
};
// _________________________________________

export const SocialLinks = component$(() => {
	const links: Array<LinkType> = useStore([
		{
			id: 1,
			child: (
				<>
					LinkedIn <IoLogoLinkedin class="text-3xl" />
				</>
			),
			url: 'https://linkedin.com/in/jose-martinez-b91753a6/',
			style: 'rounded-tr-md',
		},
		{
			id: 2,
			child: (
				<>
					Github <IoLogoGithub class="text-3xl" />
				</>
			),
			url: 'https://github.com/josemartinez111',
		},
		{
			id: 3,
			child: (
				<>
					Mail <IoMailOutline class="text-3xl" />
				</>
			),
			url: 'mailto:dummy_email@gmail.com',
		},
		{
			id: 4,
			child: (
				<>
					Resume <IoPersonAddOutline class="text-3xl" />
				</>
			),
			url: '/resume.pdf',
			style: 'rounded-br-md',
			download: true,
		},
	]);
	
	// ________________ [functions] __________________
	
	// _______________________________________________
	return (
		<div class={ styles.container }>
			<ul>
				{ links.map(({ id, child, url, style, download }) => (
					<li key={ id } class={ `${ styles.linkedin } ${ style }` }>
						{/* no need for the `Link` tag, since we are opening another browser window */}
						<a
							href={ url }
							class={ styles.linkedin }
							download={ download }
							target="_blank"
							rel="noopener noreferrer"
						>
							{ child }
						</a>
					</li>
				)) }
			</ul>
		</div>
	);
});
// _______________________________________________
