import { useParams } from "react-router";
import { useNavigate } from "react-router";

export function NotAdminPage() {

  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2>Item detales: {id}</h2>
      <button onClick={() => navigate('/dashboard')}>I dashboard puslapi</button>
    </div>
  );
}
export function ItemsList() {
  return (
    <ul>
      <li><Link to="/items/1">Item 1</Link></li>
      <li><Link to="/items/2">Item 2</Link></li>
    </ul>
  );
}