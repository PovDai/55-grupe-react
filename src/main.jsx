import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client'
import './index.css'
import './bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from './Pages/Home.jsx';
import { About } from './Pages/About.jsx';
import { Login } from './Pages/Login.jsx';
import { Register } from './Pages/Register.jsx';
import { Error404 } from './Pages/Error404.jsx';
import { Services } from './Pages/Services.jsx';
import { ServiceInner } from './Pages/ServiceInner.jsx';
import { PublicTemplate } from './templates/PublicTemplates.jsx';
import { Movies } from './Pages/Movies.jsx';
import { Categories } from './Pages/Categories.jsx';
import { AdminPage } from './Pages/AdminPage.jsx';
import { Dashboard } from './Pages/admin/Dashboard.jsx';
import { NotAdminPage } from './components/NotAdminPage.jsx';
import { ProtectedRoute } from './components/ProtectedRoute.jsx';

createRoot(document.getElementById('root')).render(
 
  <StrictMode>
    <BrowserRouter>
      <Routes>
            <Route element={<PublicTemplate />}>
          
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/services/:service' element={<ServiceInner />} />
                <Route path='/services' element={<Services />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/categories' element={<Categories />} />
                <Route path='/admin' element={<AdminPage />} />
                <Route path='/notAdmin' element={<NotAdminPage />} />
                <Route path='/*' element={<Error404 />} />
                </Route>
        
                <Route element={<ProtectedRoute />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                </Route>

                  <Route path='/*' element={<Error404 />} />
       </Routes>
    </BrowserRouter>
  </StrictMode>,
);
