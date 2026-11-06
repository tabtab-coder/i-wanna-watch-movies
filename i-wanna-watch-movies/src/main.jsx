import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import { ShowtimesProvider } from './context/ShowtimesContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ShowtimesProvider>
        <App/>
      </ShowtimesProvider>
    </BrowserRouter>
  </StrictMode>,
)
