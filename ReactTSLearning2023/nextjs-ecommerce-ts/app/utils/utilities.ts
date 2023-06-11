// FILE: utils/utils/utilities.ts
// _______________________________________________
// _______________________________________________


// The never type represents the type of values that never occur.
// This is useful in a situation like this, where you want a function
// to act as a placeholder that should not actually be invoked.
// if the function has a return type, make sure to `return todo(message);`
export const todo = (msg: string = 'Function not implemented'): never => {
	throw new Error(msg);
};
// _______________________________________________

export const formatPrice = (amount: number) => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(amount / 100);
};
// _______________________________________________