import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/AuthProvider'

const ProtectedRoutes = () => {
    const { user } = useAuth();
    return user ? <Navigate to="/dashboard" replace /> : <Outlet />;
  };

export default ProtectedRoutes