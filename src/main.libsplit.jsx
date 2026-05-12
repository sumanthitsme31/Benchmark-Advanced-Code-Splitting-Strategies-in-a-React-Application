import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppLibSplit from './AppLibSplit'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppLibSplit />
  </StrictMode>,
)
