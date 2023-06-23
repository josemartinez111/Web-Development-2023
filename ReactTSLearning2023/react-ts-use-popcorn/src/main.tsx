// FILE: main.tsx
// _______________________________________________

import App from "./App";
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// _______________________________________________

const app = createRoot(document.getElementById('root') as HTMLElement);
// _______________________________________________

app.render(
	<React.StrictMode>
    <App />
  </React.StrictMode>,
);
// _______________________________________________