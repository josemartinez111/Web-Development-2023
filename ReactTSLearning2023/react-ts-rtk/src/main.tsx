import App from "@/App.tsx";
import React from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'

const app = createRoot(document.getElementById('root') as HTMLElement)
  app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
