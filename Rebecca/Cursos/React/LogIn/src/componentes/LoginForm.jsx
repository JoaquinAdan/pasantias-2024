import React from "react";
import { useState, useEffect } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "./LoginForm.css";
import { useAuth } from "../hooks/AuthProvider";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const auth = useAuth();
  const navigate = useNavigate();
  // console.log(auth);

  const [inputType, setInputType] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  // console.log(formData);

  const handleInput = (e) => {
    // manejar los cambios en los campos del formulario
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmitEvent = (e) => {
    //se activa cuando el formulario se envía
    e.preventDefault(); //evita que el formulario se envíe de forma automática cuando se presiona el botón de enviar
    const { email, password } = formData; // Desestructurar email y password del estado
    if (email !== "" && password !== "") {
      auth.loginAction(formData);
    } else {
      alert("invalid input"); //alerta de datos invalidos
    }
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleInput}
            placeholder="Email"
            required={true}
            autoComplete="email"
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

export default LoginForm;
