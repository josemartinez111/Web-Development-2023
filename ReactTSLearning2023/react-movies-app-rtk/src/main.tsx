// FILE: main.tsx
// _______________________________________________
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from './App.tsx';
import './index.css';
// _______________________________________________

const app = createRoot(document.getElementById('root')!);
// _______________________________________________

app.render(
	<Provider store={ store }>
		<StrictMode>
			<App />
		</StrictMode>
	</Provider>,
);
// _______________________________________________