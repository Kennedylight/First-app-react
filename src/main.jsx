
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Homes from "./Pages/Homes"
import Detail from "./Pages/detail"
// import Create from './Pages/create'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
