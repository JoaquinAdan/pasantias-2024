import React from "react";
import Logo from "../componentes/Logo.jsx";
import LoginForm from "../componentes/LoginForm.jsx";
import SocialLogin from "../componentes/SocialLogin.jsx";
import Footer from "../componentes/Footer.jsx";

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

export default Login;
