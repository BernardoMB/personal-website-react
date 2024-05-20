// This file is the main entry point of the application

import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrapping a component around the StrictMode will execute every component twice. That can help catching errors
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
