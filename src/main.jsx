import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/index.css'
import layout from '../src/layout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < layout/>
  </StrictMode>,
)
