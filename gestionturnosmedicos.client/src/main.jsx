import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const rootElement = document.getElementById('root');

// Asegura que el div raíz ocupe toda la pantalla
rootElement.style.minHeight = '100vh';
rootElement.style.display = 'flex';
rootElement.style.flexDirection = 'column';

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
