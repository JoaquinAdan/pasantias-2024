import React from "react";
import Logo from "./componentes/Logo";
import LoginForm from "./componentes/LoginForm";
import SocialLogin from "./componentes/SocialLogin";
import Footer from "./componentes/Footer";

const Login = () => {
  return (
    <div className="background">
      <Logo />
      <div className="row map-content-9">
        <div className="info-grids">
          <LoginForm />
        </div>
        <SocialLogin />
      </div>
      <Footer />
    </div>
  );
};
