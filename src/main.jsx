import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './main.css'
import PhotosProvider from './context/PhotosContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PhotosProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PhotosProvider>
  </React.StrictMode>
);
