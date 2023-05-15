// FILE: todo_placeholder.ts
// _______________________________________________

// The never type represents the type of values that never occur.
// This is useful in a situation like this, where you want a function
// to act as a placeholder that should not actually be invoked
export const todo = (msg: string = 'Function not implemented'): never => {
	throw new Error(msg);
};
// _______________________________________________







