import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Preloader from './components/Preloader.jsx'
import { initGA } from './analytics'

initGA()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Preloader />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>
  </StrictMode>,
)
