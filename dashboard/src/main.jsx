import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import './index.css'
import App from './App.jsx'

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "bootstrap-icons/font/bootstrap-icons.css";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </StrictMode>,
)
