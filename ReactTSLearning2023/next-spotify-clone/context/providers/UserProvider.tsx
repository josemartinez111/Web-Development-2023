'use client';
// FILE: providers/UserProvider.tsx
// _______________________________________________

import MyUserProvider from "@/context/providers/MyUserProvider";
import { WithChildren } from "@/types/types.shared";
// _______________________________________________

const UserProvider = ({ children }: WithChildren) => {
	
	// _________________ [functions] ___________________
	
	
	// _________________________________________________
	return (
		<MyUserProvider>
			{ children }
		</MyUserProvider>
	);
};
// _______________________________________________

export default UserProvider;
// _______________________________________________