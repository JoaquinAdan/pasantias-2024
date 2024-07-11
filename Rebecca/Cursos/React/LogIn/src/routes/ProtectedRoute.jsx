import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";

//protege la navegación al Login una vez loggeado el usuario

const ProtectedRoutes = () => {
  const { user } = useAuth();
  return user ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default ProtectedRoutes;
