// FILE: context/UserContext.ts
// _______________________________________________

import { SubscriptionType, UserDetailsType } from "@/types/types.supabase";
import { User } from "@supabase/gotrue-js";
import { createContext } from "react";
// _______________________________________________

type UserContextType = {
	accessToken: string | null
	user: User | null
	userDetails: UserDetailsType | null
	isLoading: boolean
	subscription: SubscriptionType | null
}
// _______________________________________________

export const UserContext = createContext<UserContextType | undefined>(
	undefined,
);
// _______________________________________________