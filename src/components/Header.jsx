import { NavLink } from 'react-router';
import logo from '../assets/react.svg';
export function Header() {


    
    return (
      <div className="container">
    <header
        className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0"> <a href="/" className="d-inline-flex NavLink-body-emphasis text-decoration-none">
                <img src={logo} alt="logo"/>Simple Header</a> </div>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><NavLink to="/" className="nav-NavLink px-2 NavLink-secondary">Home</NavLink></li>
                    
                    <li><NavLink to="/about" className="nav-NavLink px-2">About</NavLink></li>
                    
                    <li><NavLink to="/login" className="nav-NavLink px-2">Login</NavLink></li>
                    
                    <li><NavLink to="/register" className="nav-NavLink px-2">Register</NavLink></li>
                    
                    <li><NavLink to="/services" className="nav-NavLink px-2">Service</NavLink></li>
                    
        </ul>
       
    </header>
</div>


    );
}