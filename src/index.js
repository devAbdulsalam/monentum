import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthcontextProvider from "./components/AuthContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthcontextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ AuthcontextProvider>
);
