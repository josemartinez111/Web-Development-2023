// FILE: app/layout.tsx
// _______________________________________________

import './globals.css';
import Nav from "@/app/components/nav/Nav";
import { WithChildren } from "@/app/types/with-children";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
// _______________________________________________


export const metadata = {
	title: 'Next E-Commerce',
	description: 'Generated by create next app',
};
// _______________________________________________

export default async function RootLayout({ children }: WithChildren) {
	// fetch the server user session
	const fetchUserSession = await getServerSession(authOptions);
	console.log({ fetchUserSession });
	// _________________ [functions] ___________________
	
	// _________________________________________________
	return (
		<html lang="en">
			<body className="mx-0">
			<Nav
				user={ fetchUserSession?.user }
				expires={ fetchUserSession?.expires as string }
			/>
			{ children }
			</body>
		</html>
	);
}
// _______________________________________________