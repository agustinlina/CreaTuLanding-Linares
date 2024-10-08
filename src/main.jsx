import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Favicon from 'react-favicon'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Favicon url="https://res.cloudinary.com/devemnrvh/image/upload/v1724308014/fav-icon_ple66x.svg"/>
  </React.StrictMode>
)
