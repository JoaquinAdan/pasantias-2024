import React from "react";
import { useState, useEffect } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "./LoginForm.css";
import { useAuth } from "../hooks/AuthProvider";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const auth = useAuth();
  const navigate = useNavigate();


  const [inputType, setInputType] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });


  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmitEvent = (e) => {
    e.preventDefault(); 
    const { usuario, password } = formData;
    if (usuario !== "" && password !== "") {
      auth.loginAction(formData);
    } else {
      alert("invalid input"); 
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmitEvent(e);
    }
  };


  return (
    <form
      onSubmit={handleSubmitEvent}
      method="post"
      className=""
      id="formulario"
    >
      <div className="form-grid">
        <div className="input-field">
          <label htmlFor="string">Usuario</label>
          <input
            type="text"
            name="Usuario"
            id="Usuario"
            onChange={handleInput}
            placeholder="Usuario"
            required={true}
            autoComplete="Usuario"
          />
        </div>
        <div className="input-field">
          <label htmlFor="Password1">Contraseña</label>
          <div className="password-container">
            <input
              type={inputType ? "text" : "password"}
              className="input-toggle"
              name="password"
              id="Password1"
              placeholder="Contraseña"
              onChange={handleInput}
              required={true}
              autoComplete="current-password"
              onKeyDown={handleKeyDown}
            />
            <button type="button" onClick={() => setInputType(!inputType)}>
              {!inputType ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary btn-style">
        Ingresar
      </button>
    </form>
  );
}
}

export default LoginForm;