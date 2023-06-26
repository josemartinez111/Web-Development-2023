'use client';
// FILE: providers/MyUserProvider.tsx
// _______________________________________________

import { UserContext } from "@/context/UserContext";
import { SubscriptionType, UserDetailsType } from "@/types/types.supabase";
import {
	useSessionContext,
	useUser as useSupaUser,
} from "@supabase/auth-helpers-react";
import { useContext, useEffect, useRef, useState } from "react";
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
		
		const fetchDataRef = useRef<() => Promise<void>>();
		const latestUserDetails = useRef<UserDetailsType | null>(null);
		const latestSubscription = useRef<SubscriptionType | null>(null);
		// _________________ [functions] __________________
		const fetchUserDetails = () => (
			supabase
				.from('users')
				.select('*')
				.single()
		);
		
		const fetchSubscription = () => (
			supabase
				.from('subscriptions')
				.select('*, prices(*, products(*))')
				.in('status', ['trialing', 'active'])
				.maybeSingle());
		
		if (!fetchDataRef.current) {
			fetchDataRef.current = async () => {
				try {
					if (user && !isLoadingData && !userDetails && !subscription) {
						setIsLoadingData(true);
						
						Promise.allSettled([fetchUserDetails(), fetchSubscription()])
							.then((results) => {
									const userDetailsPromise = results[ 0 ];
									const subscriptionPromise = results[ 1 ];
									console.log("User details promise result:", userDetailsPromise);
									console.log("Subscription promise result:", subscriptionPromise);
								
								if (userDetailsPromise.status === 'fulfilled') {
									latestUserDetails.current = userDetailsPromise.value.data as UserDetailsType;
									setUserDetails(userDetailsPromise.value.data as UserDetailsType);
								}
								
								if (subscriptionPromise.status === 'fulfilled') {
									latestSubscription.current = subscriptionPromise.value.data as SubscriptionType;
									setSubscription(subscriptionPromise.value.data as SubscriptionType);
								}
									
									setIsLoadingData(false);
								},
							);
					} else if (!user && !isLoadingUser && !isLoadingData) {
						setUserDetails(null);
						setSubscription(null);
					}
				} catch (error: unknown) {
					// Ensure error is an instance of Error before accessing error.message
					if (error instanceof Error) console.error(error.message);
					// re-throw the error so it can be caught
					// by the function calling authenticate
					throw error;
				} finally {
					setIsLoadingData(false);
				}
			};
		}
		
		useEffect(() => {
			fetchDataRef.current?.().then();
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
	}
;
// _______________________________________________

export const useUser = () => {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error(`useUser must be used within a MyUserContextProvider.`);
	}
	return context;
};
// _______________________________________________