import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Contextprovider from './AppContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contextprovider>
    <App />
   </Contextprovider>
  </React.StrictMode>
);
