import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import './index.css'
import './Componants/Navigation.jsx'
import Navigation from './Componants/Navigation.jsx'
import HeroSection from './Componants/Hero.jsx'
// import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation/>
    <HeroSection/>
  </React.StrictMode>,
)
