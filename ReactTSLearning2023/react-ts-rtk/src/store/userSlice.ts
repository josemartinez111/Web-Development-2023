// FILE: userSlice.ts
// _______________________________________________

import { UserType } from "@/types/user.ts";
import {
	PermissionPayloadAction,
	UserPayloadAction,
} from "@/types/user_payload_action.ts";
import { createSlice } from "@reduxjs/toolkit";
// _______________________________________________

type UserState = {
	currentUser?: UserType
	permissions?: Array<string>
	isLoading: boolean
}

const initialUserState: UserState = {
	// can omit user & permission, since they are optional
	isLoading: false,
};
// _______________________________________________

const userSlice = createSlice({
	name: 'user',
	initialState: initialUserState,
	reducers: {
		authenticateAction: (state: UserState) => {
			state.isLoading = true;
		},
		authenticatedAction: (state: UserState, action: UserPayloadAction) => {
			state.currentUser = action.payload;
			state.isLoading = false;
		},
		authorizeAction: (state: UserState) => {
			state.isLoading = true;
		},
		authorizedAction: (state: UserState, action: PermissionPayloadAction) => {
			state.permissions = action.payload;
			state.isLoading = false;
		},
	},
});
// _______________________________________________

// export the action handlers &
// the reducer function from the slice
export const {
	authenticateAction,
	authenticatedAction,
	authorizeAction,
	authorizedAction,
} = userSlice.actions;

export default userSlice.reducer;
// _______________________________________________