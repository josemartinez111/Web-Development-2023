'use client';
// FILE: providers/UserProvider.tsx
// _______________________________________________

import { MyUserContextProvider } from "@/hooks/useUser";
import { WithChildren } from "@/types/types.shared";
// _______________________________________________

const UserProvider = ({ children }: WithChildren) => {
	
	// _________________ [functions] ___________________
	
	
	// _________________________________________________
	return (
		<MyUserContextProvider>
			{ children }
		</MyUserContextProvider>
	);
};
// _______________________________________________

export default UserProvider;
// _______________________________________________