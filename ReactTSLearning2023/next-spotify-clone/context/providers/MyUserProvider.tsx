'use client';
// FILE: providers/MyUserProvider.tsx
// _______________________________________________

import { UserContext } from "@/context/UserContext";
import { useUser } from "@/hooks/useUser";
import { useEffect } from "react";
// _______________________________________________


export type PropsType = {
	[ propName: string ]: any;
}
// _______________________________________________

const MyUserProvider = (props: PropsType) => {
	const {
		fetchData,
		value,
		isLoadingData,
		userDetails,
		setUserDetails,
		subscription,
		setSubscription,
	} = useUser();
	// _________________ [functions] ___________________
	
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
	}, [fetchData, value.user, value.isLoading]);
	// _________________________________________________
	return (
		<UserContext.Provider value={ value } { ...props } />
	);
};
// _______________________________________________

export default MyUserProvider;
// _______________________________________________