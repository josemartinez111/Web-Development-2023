// FILE: Header.tsx
import { authenticate } from "@/api/authenticate.ts";
import { authorize } from "@/api/authorize.ts";
import { RootState } from "@/store/store.ts";
import {
	authenticateAction,
	authenticatedAction,
	authorizeAction, authorizedAction,
} from "@/store/userSlice.ts";
import { ReactElement } from 'react';
import { useDispatch, useSelector } from "react-redux";
// _______________________________________________

const Header = (): ReactElement => {
	// A hook to access the redux store's state. This
	// hook takes a selector function as an argument.
	// The selector is called with the store state.
	const user = useSelector((state: RootState) => (
		state.user.currentUser
	));
	const isLoading = useSelector((state: RootState) => (
		state.user.isLoading
	));
	// Use dispatch to send actions to the Redux store
	const dispatch = useDispatch();
	
	// _______________________________________________
	
	async function handleSignIn() {
		try {
			// Dispatch authentication start action
			dispatch(authenticateAction());
			// Attempt to authenticate the user
			const authenticatedUser = await authenticate();
			
			// Dispatch authentication success action
			dispatch(authenticatedAction(authenticatedUser));
			
			if (authenticatedUser !== undefined) {
				// Dispatch authorization start action
				dispatch(authorizeAction());
				// Attempt to authorize the user
				const authPermission = await authorize(authenticatedUser.id);
				// Dispatch authorization success action
				dispatch(authorizedAction(authPermission));
			}
		} catch ( error: unknown ) {
			// Ensure error is an instance of Error before accessing error.message
			if (error instanceof Error) console.error(error.message);
			// re-throw the error so it can be caught
			// by the function calling authenticate
			throw error;
		}
	}
	
	// _______________________________________________
	return (
		<header
			className="flex justify-between items-center border-b-2 border-gray-100 py-6">
      {
	      user
		      ? (<span className="ml-auto font-bold">{ user.name } has signed in</span>)
		      : (
			      <button
				      onClick={ handleSignIn }
				      className="whitespace-nowrap inline-flex items-center justify-center ml-auto px-4 py-2 w-36 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
				      disabled={ isLoading }
			      >
				      { isLoading ? 'Loading...' : 'Sign in' }
						</button>
		      ) }
		</header>
	);
};
// _______________________________________________

export default Header;