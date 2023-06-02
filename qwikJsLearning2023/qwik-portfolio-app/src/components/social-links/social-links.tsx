// FILE: components/social-links/social-links.tsx
// _________________________________________
// _________________________________________

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

export const SocialLinks = component$(() => {
	const links = useStore([
		{
			id: 1,
			child: (
				<>
					LinkedIn <IoLogoLinkedin class="text-3xl" />
				</>
			),
			href: 'https://www.linkedin.com/in/jose-martinez-b91753a6/',
			style: 'rounded-tr-md',
		},
		{
			id: 2,
			child: (
				<>
					Github <IoLogoGithub class="text-3xl" />
				</>
			),
			href: 'https://github.com/josemartinez111',
		},
		{
			id: 3,
			child: (
				<>
					Mail <IoMailOutline class="text-3xl" />
				</>
			),
			href: 'mailto:dummy_email@gmail.com',
		},
		{
			id: 4,
			child: (
				<>
					Resume <IoPersonAddOutline class="text-3xl" />
				</>
			),
			href: '/resume.pdf',
			style: 'rounded-br-md',
			download: true,
		},
	]);

	// ________________ [functions] __________________

	// _______________________________________________
	return (
		<div class={styles.container}>
			<ul>
				{links.map(({ id, child, href, style, download }) => (
					<li key={id} class={`${styles.linkedin} ${style}`}>
						<Link
							href={href}
							class={styles.linkedin}
							download={download}
							target="_blank"
							rel='noreferrer'
						>
							{child}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
});
// _______________________________________________
