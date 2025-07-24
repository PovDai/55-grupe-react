import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from './Pages/Home.jsx';
import { About } from './Pages/About.jsx';
import { Login } from './Pages/Login.jsx';
import { Register } from './Pages/Register.jsx';
import { Error404 } from './Pages/Error404.jsx';
import { Services } from './Pages/Services.jsx';
import { ServiceInner } from './Pages/ServiceInner.jsx';

createRoot(document.getElementById('root')).render(
 
  <StrictMode>
    <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/services/:service' element={<ServiceInner />} />
              <Route path='/services' element={<Services />} />
        
        
              <Route path ='/*' element ={<Error404/>} />
              
          </Routes>
      </BrowserRouter>
  </StrictMode>,
);
