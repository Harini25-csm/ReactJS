import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Ex from './Example.jsx'
import Welcome from './Welcome.jsx'
import Class from './Class.jsx'
// import Name from './Arrow.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Ex/>
    <Welcome/>
    <Class/>
    {/* <Name/> */}
  </StrictMode>,
)
