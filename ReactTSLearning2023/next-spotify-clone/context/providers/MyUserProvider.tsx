'use client';
// FILE: providers/MyUserProvider.tsx
// _______________________________________________

import { UserContext } from "@/context/UserContext";
import { SubscriptionType, UserDetailsType } from "@/types/types.supabase";
import {
	useSessionContext,
	useUser as useSupaUser,
} from "@supabase/auth-helpers-react";
import { useContext, useEffect, useState } from "react";
// _______________________________________________


export type PropsType = {
	[ propName: string ]: any;
}
// _______________________________________________

export const MyUserProvider = (props: PropsType) => {
	const {
		session,
		isLoading: isLoadingUser,
		supabaseClient: supabase,
	} = useSessionContext();
	
	const user = useSupaUser();
	const accessToken = session?.access_token ?? null;
	const [isLoadingData, setIsLoadingData] = useState(false);
	
	const [userDetails, setUserDetails] = useState<UserDetailsType | null>(null);
	const [subscription, setSubscription] = useState<SubscriptionType | null>(null);
	
	
	const fetchUserDetails = () => (
		supabase.from('users').select('*').single()
	);
	
	const fetchSubscription = () => (
		supabase
			.from('subscriptions')
			.select('*, prices(*, products(*))')
			.in('status', ['trailing', 'active'])
			.single()
	);
	
	const fetchData = async () => {
		// Check if user data is ready and not loading, and
		// user details and subscription are not yet fetched
		if (user && !isLoadingData && !userDetails && !subscription) {
			// Indicate that data is being loaded
			setIsLoadingData(true);
			
			try {
				// Concurrently fetch user details and subscription using
				// Promise.allSettled Promise.allSettled returns a promise
				// that resolves after all the given promises have either
				// resolved or rejected.
				const [userDetailsResult, subscriptionResult] = await Promise.allSettled([
					fetchUserDetails()
					, fetchSubscription(),
				]);
				
				// If the userDetailsResult promise was fulfilled (resolved successfully),
				// then set the userDetails state with the fetched data, casting it to the
				// appropriate type.
				if (userDetailsResult.status === 'fulfilled') {
					setUserDetails(userDetailsResult.value.data as UserDetailsType);
				}
				
				// If the subscriptionResult promise was fulfilled (resolved successfully),
				// then set the subscription state with the fetched data, casting it to the
				// appropriate type.
				if (subscriptionResult.status === 'fulfilled') {
					setSubscription(subscriptionResult.value.data as SubscriptionType);
				}
			} catch ( error: unknown ) {
				// If there's an error while fetching data
				// or updating states, log the error message
				if (error instanceof Error) console.error(error.message);
			} finally {
				// Indicate that data loading has finished,
				// regardless of whether it was successful or not
				setIsLoadingData(false);
			}
		}
		// _________________ [functions] ___________________
		
	};
	
	useEffect(() => {
		// If the user is logged in, and we're not currently loading,
		// and the userDetails and subscription haven't been fetched,
		// then fetch the data
		if (value.user && !isLoadingData && !userDetails && !subscription) {
			// Execute the fetchData function
			fetchData().then();
			// If the user is not logged in, and we're not currently loading
			// the user or other data, clear the userDetails and subscription
		} else if (!value.user && !value && !isLoadingData) {
			setUserDetails(null);
			setSubscription(null);
		}
	}, [user, isLoadingUser]);
	
	const value = {
		accessToken,
		user,
		userDetails,
		isLoading: isLoadingUser || isLoadingData,
		subscription,
	};
	// _________________________________________________
	return (
		<UserContext.Provider value={ value } { ...props } />
	);
};
// _______________________________________________

export const useUser = () => {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error(`useUser must be used within a MyUserContextProvider.`);
	}
	return context;
};
// _______________________________________________