import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Favicon from 'react-favicon'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Favicon url="./vite.svg" />
  </React.StrictMode>,
)
