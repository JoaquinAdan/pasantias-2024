import React, { useEffect } from "react";
import { useAuth } from "../hooks/AuthProvider";
import { IoAccessibility } from "react-icons/io5";
import "../componentes/LoginForm.css";

const Dashboard = () => {
  const auth = useAuth();
  return (
    <div className="background">
      <div className="container">
        <div>
          <h1 className="Logo">Hola! {auth.user?.username}</h1>
          <IoAccessibility/>
          <button onClick={() => auth.logOut()} className="btn-submit">
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
