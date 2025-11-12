import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import '@tailwindplus/elements';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserRegisterDataProvider from './Context/UserRegisterData.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserRegisterDataProvider>

       <BrowserRouter>
         <App />
    </BrowserRouter>

    </UserRegisterDataProvider>
   
  </StrictMode>,
)
