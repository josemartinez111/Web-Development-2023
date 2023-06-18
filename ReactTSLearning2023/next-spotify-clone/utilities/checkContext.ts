// FILE: utilities/checkContext.ts
// _______________________________________________

export const checkContext = <T>(contextValue: T): T => {
	if (contextValue === undefined) throw new Error('Context value is undefined');
	return contextValue;
};
// _______________________________________________