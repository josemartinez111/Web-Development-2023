import App from "@/App.tsx";
import Provider from "@/context/Provider.tsx";
import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import '@/index.css';

const app: Root = createRoot(
	document
		.getElementById('root') as HTMLElement,
);

app.render(
	<React.StrictMode>
		{/* added custom provider */}
		<Provider>
			<App />
		</Provider>
  </React.StrictMode>,
);
