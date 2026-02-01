import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'

import Animation from '../hello.jsx'

import Home from './home.jsx'

import  App from"./App.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
{/* 
       <Animation />

     <Home /> */}

     <App />
 <Home /> 
  </StrictMode>,
)
