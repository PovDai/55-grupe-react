import { Link } from 'react-router';
import logo from '../assets/react.svg';
export function Header() {


    
    return (
       <header>
                <img src={logo} alt="logo"/>
                <nav className='navbar'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/services">Services</Link>
                </nav>
            </header>
        


    );
}