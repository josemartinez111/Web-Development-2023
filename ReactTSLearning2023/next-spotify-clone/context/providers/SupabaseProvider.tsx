'use client';
// FILE: providers/SupabaseProvider.tsx
// _______________________________________________

import { WithChildren } from "@/types/types.shared";
import { Database } from "@/types/types_db";
import {
	createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
// _______________________________________________

const SupabaseProvider = ({ children }: WithChildren) => {
	const [superBaseClient] = useState(() => (
		createClientComponentClient<Database>()
	));
	// _________________ [functions] ___________________
	
	
	// _________________________________________________
	return (
		<SessionContextProvider supabaseClient={ superBaseClient }>
			{ children }
		</SessionContextProvider>
	);
};
// _______________________________________________

export default SupabaseProvider;
// _______________________________________________