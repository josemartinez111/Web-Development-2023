// FILE: hooks/UseBookContext.ts
// _______________________________________________

import { BooksContext } from "@/context/books.ts";
import { useContext } from "react";
// _______________________________________________


export const useBookContext = () => (
	useContext(BooksContext)
)
// _______________________________________________