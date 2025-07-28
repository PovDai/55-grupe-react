import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../lib/IsloggedIn";

 export function ProtectedRoute() {
  const loggedIn = isLoggedIn();

  // Jei neprisijungęs – nukreipiam į /login
  return loggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}