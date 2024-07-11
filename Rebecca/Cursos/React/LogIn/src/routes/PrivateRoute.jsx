import React from "react";
import { Navigate, Outlet } from "react-router-dom"; //marcador de salida para los componentes anidados dentro de rutas anidadas.
import { useAuth } from "../hooks/AuthProvider";

//Protege la navegación al dashboard

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  return auth.user ? children : <Navigate to="/" />;
}


export default PrivateRoute;
