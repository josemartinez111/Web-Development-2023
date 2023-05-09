import App from "@/App.tsx";
import React from 'react'
import { createRoot, Root } from 'react-dom/client'
import '@/index.css'

const app: Root = createRoot(
	document
		.getElementById('root') as HTMLElement,
)

app.render(
	<React.StrictMode>
    <App />
  </React.StrictMode>,
)
