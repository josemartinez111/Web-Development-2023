// FILE: store.ts
// _______________________________________________

import userReducer from "@/store/userSlice.ts";
import { configureStore } from "@reduxjs/toolkit";
// _______________________________________________

// use the configureStore function to create
// the store referencing the reducer from the userSlice
export const userStore = configureStore({
	reducer: { user: userReducer },
});
// _______________________________________________

// ReturnType is a standard TypeScript utility type that returns
// the return type of the function type passed into it. The
// getState function in the Redux store returns the full state object.
// So, we use ReturnType to infer the type of the full state object
// rather than explicitly defining it.
export type RootState = ReturnType<typeof userStore.getState>
// _______________________________________________