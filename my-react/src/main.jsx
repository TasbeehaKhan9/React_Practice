import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './app.css'
import "./home.css"
import "./header.css"

import Animation from '../hello.jsx'

import Home from './home.jsx'

import  App from"./App.jsx"

import MareeHero from "./hearder.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>

          <MareeHero />

     {/* <App /> */}
 <Home /> 
  </StrictMode>,
)
