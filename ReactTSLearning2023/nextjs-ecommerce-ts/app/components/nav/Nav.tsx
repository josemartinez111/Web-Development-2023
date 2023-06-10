'use client';
// FILE: components/nav/Nav.tsx
// _______________________________________________

import { Session } from 'next-auth';
import { signIn } from 'next-auth/react';
import Image from "next/image";
import styles from './Nav.module.css';
// _______________________________________________

// type NavProps = {
// 	mockProp?: string;
// };
// _______________________________________________

const Nav = ({ user, expires }: Session) => {
	
	// _________________ [functions] ___________________
	
	
	// _________________________________________________
	return (
		<nav className={ styles.container }>
			<h1>Styled</h1>
			
			<ul className="flex items-center gap-8">
				{/* ===== if the user is signed-in display this ===== */ }
				{ user ? (
					<>
						<li>
							<Image
								className="rounded-full"
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