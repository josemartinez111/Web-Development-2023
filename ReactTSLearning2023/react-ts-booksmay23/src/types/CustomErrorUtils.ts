// FILE: CustomErrorUtils.ts
// _______________________________________________

import { AxiosError } from 'axios';
// _______________________________________________

export const handleAxiosError = (error: AxiosError) => {
	console.error("Error message:", error.message);
	console.error("Response data:", error.response?.data);
	console.error("Response status:", error.response?.status);
};
// _______________________________________________