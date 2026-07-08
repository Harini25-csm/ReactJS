import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import C from './Class.jsx'
import Parent from './Parent.jsx'
import App from './ParentCode.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <C />
    <Parent />
    <App />
  </StrictMode>,
)
