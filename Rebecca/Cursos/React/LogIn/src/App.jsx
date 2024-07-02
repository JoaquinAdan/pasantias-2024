import React from "react";
import Logo from "./componentes/Logo";
import LoginForm from "./componentes/LoginForm";
import SocialLogin from "./componentes/SocialLogin";
import Footer from "./componentes/Footer";
import "./App.css";

function App() {
  return (
    <div className="background">
      <div className="wrapper">
        <div className="loginblock signinform">
          <Logo />
          <div className="row map-content-9">
            <div className="info-grids">
              <LoginForm />
            </div>
            <SocialLogin />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
