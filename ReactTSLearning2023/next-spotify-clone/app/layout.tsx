// FILE: app/layout.tsx
// _______________________________________________

import './globals.css';
import Sidebar from "@/components/side-bar/Sidebar";
import { WithChildren } from "@/types/types.shared";
import { Figtree } from 'next/font/google';
// _______________________________________________

const font = Figtree({ subsets: ['latin'] });

export const metadata = {
	title: 'Spotify Clone',
	description: 'Listen to music!',
};
// _______________________________________________

export default function RootLayout({ children }: WithChildren) {
	
	// _________________ [functions] ___________________
	
	
	// _________________________________________________
	return (
		<html lang="en">
			<body className={ font.className }>
			<Sidebar>
				{ children }
			</Sidebar>
			</body>
		</html>
	);
}
// _______________________________________________