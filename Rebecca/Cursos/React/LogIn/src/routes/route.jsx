import React from "react";
import { Navigate, Outlet } from "react-router-dom"; //marcador de salida para los componentes anidados dentro de rutas anidadas.
import { useAuth } from "../hooks/AuthProvider";

const PrivateRoute = () => {
  const user = useAuth();
  if (!user.token) return <Navigate to="/login" />; //Se verifica si user.token existe o no.
  // redirige automáticamente al usuario a la página de inicio de sesión
  return <Outlet />;
};

export default PrivateRoute;
