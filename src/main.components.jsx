import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppComponents from './AppComponents'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppComponents />
  </StrictMode>,
)
