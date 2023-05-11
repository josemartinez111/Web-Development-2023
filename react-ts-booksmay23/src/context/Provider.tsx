// FILE: Provider.tsx
import { BooksContext, BooksContextType } from "@/context/books.ts";
import { WithChildren } from "@/types/WithChildren.ts";
import { ReactElement, useState } from 'react';
// _______________________________________________

const Provider = ({ children }: WithChildren): ReactElement => {
	const [count, setCount] = useState(5);
	
	const valueToShare: BooksContextType = {
		count,
		incrementCount: () => setCount(count + 1),
	};
	
	
	// _______________________________________________
	return (
		<BooksContext.Provider value={ valueToShare }>
			{ children }
		</BooksContext.Provider>
	);
};
// _______________________________________________

export default Provider;