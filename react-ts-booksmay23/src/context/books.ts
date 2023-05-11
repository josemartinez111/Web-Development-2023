// FILE: context/books.ts
// _______________________________________________

import { createContext } from "react";
// _______________________________________________

export interface BooksContextType {
	count: number;
	incrementCount?: () => void;
}
// _______________________________________________

export const BooksContext = createContext<BooksContextType>({
	count: 0,
	incrementCount: () => {
		console.warn("(incrementCount) function called from BooksContext before being initialized.");
	},
});
// _______________________________________________

/**
 * This function checks if a given React context value is undefined.
 * If the context value is undefined, it throws an error.
 * Otherwise, it simply returns the context value.
 *
 * This is useful when using React's useContext hook, as it forces
 * you to handle the case where the context provider is not found
 * in the component tree.
 *
 * @param {T | undefined} contextValue - The value obtained from React's useContext hook.
 * @returns {T} - The same context value if it's not undefined.
 * @throws Will throw an error if the context value is undefined.
 */
export const checkContext = <T>(contextValue: T | undefined): T => {
	if (contextValue === undefined) throw new Error('Context value is undefined');
	return contextValue;
};

// _______________________________________________


