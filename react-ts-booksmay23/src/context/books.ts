// FILE: context/books.ts
// _______________________________________________

import { BookType } from "@/types/BookType.ts";
import { createContext } from "react";
// _______________________________________________

export interface BooksContextType {
	books: Array<BookType>;
	fetchAllBooks: () => Promise<void>;
	createBook: (title: string) => Promise<void>;
	editBookByID: (id: string, newTitle: string) => Promise<void>;
	deleteBookByID: (id: string) => Promise<void>;
}
// _______________________________________________

export const BooksContext = createContext<BooksContextType>({
	books: [],
	fetchAllBooks: async () => {
		console.warn("(fetchAllBooks) from BooksContext before being initialized");
	},
	createBook: async (title: string) => {
		console.warn(`(createBook) from BooksContext before being initialized: ${title}`);
	},
	editBookByID: async (id: string, newTitle: string) => {
		console.warn(`(editBookByID) from BooksContext before being initialized: ${id}|${newTitle}`);
	},
	deleteBookByID: async (id: string) => {
		console.warn(`deleteBookByID from BooksContext before being initialized: ${id}`);
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


