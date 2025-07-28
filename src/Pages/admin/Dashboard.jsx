import { Link } from "react-router"
export function Dashboard() {
    
    return (
        <div class="container pagrindas">
            <div class="row">
                
                <h1>Sveiki atvyke i dashboard puslapi</h1>
                <div className="dash-btn">
                <Link to="/" className="dashboard"> <button className="mygtukas-dash">Spausti cia grizti</button></Link>
                </div>
            
            </div>
        
        </div>

    )
}