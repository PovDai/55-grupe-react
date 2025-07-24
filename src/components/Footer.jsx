import { commonHeaderMenuData } from "../data/footerData";
import { NavLink } from "react-router";

export function Footer() {

    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-body-secondary">&copy; 2025 Company, Inc</p>
                <ul className="nav col-md-8 justify-content-end">
                 {commonHeaderMenuData.map((link, index) => (
                        <li key={index}>
                            <NavLink to={link.href} className="nav-link px-2">
                                {link.text}
                            </NavLink>
                        </li>
                    ))};
                </ul>
            </footer>
        </div>
    )
}