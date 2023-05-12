// FILE: hooks/UseBookContext.ts
// _______________________________________________

import { BooksContext } from "@/context/BooksContext.ts";
import { useContext } from "react";
// _______________________________________________


export const useBookContext = () => (
	useContext(BooksContext)
)
// _______________________________________________