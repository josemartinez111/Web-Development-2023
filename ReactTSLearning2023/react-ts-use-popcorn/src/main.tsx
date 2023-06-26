// FILE: main.tsx
// _______________________________________________

import StarRating from './StarRating.tsx';
import React from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App';
// _______________________________________________

const app = createRoot(document.getElementById('root') as HTMLElement);
// _______________________________________________

app.render(
	<React.StrictMode>
		{/* <App /> */}
		<StarRating />
	</React.StrictMode>,
);
// _______________________________________________
