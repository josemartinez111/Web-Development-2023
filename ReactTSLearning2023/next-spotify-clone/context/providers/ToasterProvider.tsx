'use client';
// FILE: providers/ToasterProvider.tsx
// _______________________________________________

import { Toaster } from "react-hot-toast";
// _______________________________________________


const ToasterProvider = () => {
	
	// _________________ [functions] ___________________
	
	
	// _________________________________________________
	return (
		<Toaster
			toastOptions={ {
				style: {
					background: '#333',
					color: '#fff'
				}
			} }
		/>
	);
};
// _______________________________________________

export default ToasterProvider;
// _______________________________________________