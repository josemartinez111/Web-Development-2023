// FILE: app/layout.tsx
// _______________________________________________

import './globals.css';
import Sidebar from "@/components/side-bar/Sidebar";
import ModalProvider from "@/providers/ModalProvider";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
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
			<SupabaseProvider>
				<UserProvider>
					<ModalProvider />
					<Sidebar>
						{ children }
					</Sidebar>
				</UserProvider>
			</SupabaseProvider>
			</body>
		</html>
	);
}
// _______________________________________________