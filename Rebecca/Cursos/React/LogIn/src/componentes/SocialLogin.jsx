import React from 'react';
import './SocialLogin.css' 

function SocialLogin() {
  return (
    <div className="info-grids social-login-details align-self">
      <p className="text-center mb-3">O ingresar con</p>
      <div className="social-media">
        <a href="#facebook" className="fb">
          <span className="fa fa-facebook" aria-hidden="true"></span>
          Facebook
        </a>
        <a href="#twitter" className="tw">
          <span className="fa fa-twitter" aria-hidden="true"></span>
          Twitter
        </a>
      </div>
      <p className="text-center mt-4">
        No estas registrade?{" "}
        <a href="http://127.0.0.1:5500/Rebecca/LoginPagina/signInPage.html">
          Registrarse
        </a>
      </p>
    </div>
  );
}

export default SocialLogin;
