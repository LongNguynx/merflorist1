import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Import Core Design System & Tokens
import '../css/variables.css';
import '../css/reset.css';
import '../css/typography.css';
import '../css/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
