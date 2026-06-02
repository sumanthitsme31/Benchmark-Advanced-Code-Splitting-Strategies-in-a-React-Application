import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppNoSplit from './AppNoSplit'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppNoSplit />
  </StrictMode>,
)
