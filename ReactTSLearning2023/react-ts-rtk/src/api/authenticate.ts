// FILE: authenticate.ts
// _______________________________________________

import { UserType } from "@/types/user.ts";
// _______________________________________________

export const authenticate = async (): Promise<UserType> => {
	try {
		const newUser: UserType = {
			id: '1',
			name: 'Bob',
		};
		
		return await new Promise((resolve, reject) => {
			// Simulate a random network error
			const networkReliability = Math.random();
			
			setTimeout(() => {
				if (networkReliability > 0.5) {
					resolve(newUser);
					return;
				}
				
				// anything else = an error
				reject(new Error("Network error"))
			}, 1000); // wait 1 second
		});
	} catch ( error: unknown ) {
		// Ensure error is an instance of Error before accessing error.message
		if (error instanceof Error) console.error(error.message);
		// re-throw the error so it can be caught
		// by the function calling authenticate
		throw error;
	}
};
// _______________________________________________