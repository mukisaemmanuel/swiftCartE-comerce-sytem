import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource-variable/plus-jakarta-sans';
import 'material-symbols/rounded.css';
import App from './App';
import './styles/tokens.css';

// Make icon text invisible until icon font has loaded (font-display: block + .fonts-loaded)
if (typeof document !== 'undefined') {
  const fontDoc = document as unknown as { fonts?: { ready?: Promise<void> } };
  if (fontDoc.fonts?.ready) {
    fontDoc.fonts.ready
      .then(() => {
        document.documentElement.classList.add('fonts-loaded');
      })
      .catch(() => {
        document.documentElement.classList.add('fonts-loaded');
      });
  } else {
    document.documentElement.classList.add('fonts-loaded');
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find root element');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
