'use client';
// FILE: components/nav/Nav.tsx
// _______________________________________________

import { Session } from 'next-auth';
import { signIn } from 'next-auth/react';
import Image from "next/image";
import styles from './Nav.module.css';
import { Great_Vibes } from 'next/font/google';
// _______________________________________________
// Define the Great Vibes font
const greatVibes = Great_Vibes({
	weight: '400',
	display: 'swap',
	subsets: ['latin'],
});
// _______________________________________________

const Nav = ({ user }: Session) => {
	
	// _________________ [functions] ___________________
	
	
	// _________________________________________________
	return (
		<nav className={ styles.container }>
			<h1 className="mx-4">Styled</h1>
			
			<ul className="flex items-center gap-8">
				{/* ===== if the user is signed-in display this ===== */ }
				{ user ? (
					<>
						<li className="flex items-center gap-1">
							<span
								className={ `${ greatVibes.className } text-gray-800 text-2xl mr-4` }
							>
								{ user.name }
							</span>
							<Image
								className="rounded-full mr-10"
								src={ user.image as string }
								alt={ user.name as string }
								width={ 48 }
								height={ 48 }
							/>
						</li>
					</>
				) : (
					<li className={ styles.btn }>
						<button onClick={ () => signIn() }>Sign In</button>
					</li>
				) }
			</ul>
		</nav>
	);
};
// _______________________________________________

export default Nav;
// _______________________________________________