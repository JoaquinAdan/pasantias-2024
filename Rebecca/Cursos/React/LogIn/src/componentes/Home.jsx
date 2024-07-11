import { IoAccessibility } from "react-icons/io5";
import "../componentes/Home.css";
import React, { useEffect } from "react";
import { useAuth } from "../hooks/AuthProvider";

function Home() {
  const auth = useAuth();
  return (
    <div className="background">
      <div className="container">
        <div>
          <h1 className="Logo">Bienvenido {auth.user?.username}! </h1>
          <div />
          <div>
            <IoAccessibility className="react-icons"/>
          </div>
        </div>
        <div>
          <button onClick={() => auth.logOut()} className="btn-submit">
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
