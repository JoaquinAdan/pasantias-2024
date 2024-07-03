import React from "react";
import React, { useEffect } from "react";
import { useAuth } from "../hooks/AuthProvider";
import { IoAccessibility } from "react-icons/io5";

const Dashboard = () => {
  const auth = useAuth();
  return (
    <div className="background">
      <div className="container">
        <div>
          <h1>Hola! {auth.user?.username}</h1>
          <IoAccessibility/>
          <button onClick={() => auth.logOut()} className="btn-submit">
            logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
